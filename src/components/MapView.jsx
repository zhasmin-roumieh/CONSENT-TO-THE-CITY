import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { CITIES } from '../data/cities';
import { TYPE_COLORS } from '../lib/utils';

const DARK_STYLE  = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
const LIGHT_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

const PANEL_RIGHT = 16;
const PANEL_WIDTH = 356;

// Per-location 3D camera overrides for locations that need special framing
const LOCATION_3D = {
  eiffel:        { zoom: 15.5, bearing: 45,  pitch: 62 },
  brandenburger: { zoom: 16.0, bearing: 10,  pitch: 62 },
};

/** Build a GeoJSON FeatureCollection from a city's locations */
function buildGeojson(cityKey) {
  return {
    type: 'FeatureCollection',
    features: CITIES[cityKey].locations.map(loc => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [loc.lng, loc.lat] },
      properties: { id: loc.id, color: TYPE_COLORS[loc.type] || '#888888' },
    })),
  };
}

/** Add GeoJSON source + two circle layers (glow + dots) */
function addDotsLayers(map, cityKey, activeId) {
  try {
    if (map.getLayer('loc-glow')) map.removeLayer('loc-glow');
    if (map.getLayer('loc-dots')) map.removeLayer('loc-dots');
    if (map.getSource('locations')) map.removeSource('locations');
  } catch (_) {}

  map.addSource('locations', { type: 'geojson', data: buildGeojson(cityKey) });

  const active = activeId || '__none__';

  // Soft glow behind the active dot
  map.addLayer({
    id: 'loc-glow',
    type: 'circle',
    source: 'locations',
    filter: ['==', ['get', 'id'], active],
    paint: {
      'circle-radius': 24,
      'circle-color': ['get', 'color'],
      'circle-opacity': 0.25,
      'circle-blur': 1,
    },
  });

  // Main dots
  map.addLayer({
    id: 'loc-dots',
    type: 'circle',
    source: 'locations',
    paint: {
      'circle-radius': ['case', ['==', ['get', 'id'], active], 11, 7],
      'circle-color': ['get', 'color'],
      'circle-opacity': 0.9,
      'circle-stroke-width': ['case', ['==', ['get', 'id'], active], 2.5, 1.5],
      'circle-stroke-color': ['case',
        ['==', ['get', 'id'], active], 'rgba(255,255,255,0.85)',
        'rgba(255,255,255,0.3)',
      ],
    },
  });
}

/** Update which dot is highlighted without rebuilding the source */
function updateDotsActive(map, activeId) {
  if (!map.getLayer('loc-dots')) return;
  const active = activeId || '__none__';
  map.setPaintProperty('loc-dots', 'circle-radius',
    ['case', ['==', ['get', 'id'], active], 11, 7]);
  map.setPaintProperty('loc-dots', 'circle-stroke-width',
    ['case', ['==', ['get', 'id'], active], 2.5, 1.5]);
  map.setPaintProperty('loc-dots', 'circle-stroke-color',
    ['case', ['==', ['get', 'id'], active], 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.3)']);
  try { map.setFilter('loc-glow', ['==', ['get', 'id'], active]); } catch (_) {}
}

function makeCharacterMarkerEl(character) {
  const el = document.createElement('div');
  el.className = 'character-3d-marker';
  el.innerHTML = `
    <div class="character-3d-bounce">
      <span class="character-3d-emoji">${character.emoji}</span>
    </div>
    <div class="character-3d-shadow"></div>
  `;
  el.style.setProperty('--cc', character.color);
  return el;
}

function addBuildingsLayer(map, color) {
  try {
    if (map.getLayer('buildings-3d')) map.removeLayer('buildings-3d');
    const sources = Object.keys(map.getStyle().sources);
    const buildingSource =
      sources.find(s => s === 'carto') ||
      sources.find(s => s === 'openmaptiles') ||
      sources.find(s => s === 'composite') ||
      sources.find(s => map.getStyle().sources[s].type === 'vector');
    if (!buildingSource) return;
    map.addLayer({
      id: 'buildings-3d',
      type: 'fill-extrusion',
      source: buildingSource,
      'source-layer': 'building',
      paint: {
        'fill-extrusion-color': color || '#888888',
        'fill-extrusion-height': [
          'coalesce',
          ['get', 'render_height'], ['get', 'height'],
          ['*', ['coalesce', ['get', 'levels'], ['get', 'building:levels'], 2], 3.5],
          8,
        ],
        'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
        'fill-extrusion-opacity': 0,
        'fill-extrusion-vertical-gradient': true,
      },
    });
  } catch (e) {
    console.warn('3D buildings:', e.message);
  }
}

export default function MapView({ currentCity, currentLocId, currentLoc, character, lang, isDark, onLocationSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const characterMarkerRef = useRef(null);
  const currentLocRef = useRef(currentLoc);
  const currentCityRef = useRef(currentCity);
  const currentLocIdRef = useRef(currentLocId);
  const onSelectRef = useRef(onLocationSelect);
  const [lineCoords, setLineCoords] = useState(null);
  const [ready, setReady] = useState(false);
  const [show3DHint, setShow3DHint] = useState(false);

  useEffect(() => { currentLocRef.current = currentLoc; }, [currentLoc]);
  useEffect(() => { currentCityRef.current = currentCity; }, [currentCity]);
  useEffect(() => { currentLocIdRef.current = currentLocId; }, [currentLocId]);
  useEffect(() => { onSelectRef.current = onLocationSelect; }, [onLocationSelect]);

  const city = CITIES[currentCity];
  const locColor = currentLoc ? (TYPE_COLORS[currentLoc.type] || '#888888') : null;

  function calcLine(map) {
    const loc = currentLocRef.current;
    if (!loc) { setLineCoords(null); return; }
    const pt = map.project([loc.lng, loc.lat]);
    const canvas = map.getCanvas();
    setLineCoords({
      x1: pt.x, y1: pt.y,
      panelX: canvas.offsetWidth - PANEL_RIGHT - PANEL_WIDTH,
      mapH: canvas.offsetHeight,
    });
  }

  function placeCharacterMarker(map, loc) {
    if (characterMarkerRef.current) {
      characterMarkerRef.current.remove();
      characterMarkerRef.current = null;
    }
    if (!loc || !character) return;
    const el = makeCharacterMarkerEl(character);
    const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([loc.lng + 0.0002, loc.lat + 0.0001])
      .addTo(map);
    characterMarkerRef.current = marker;
  }

  // ── Initialize map ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: isDark ? DARK_STYLE : LIGHT_STYLE,
      center: [city.lng, city.lat],
      zoom: city.zoom,
      pitch: 0, bearing: 0,
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    map.on('load', () => {
      addBuildingsLayer(map, '#888888');
      addDotsLayers(map, currentCityRef.current, currentLocIdRef.current);
      setReady(true);
    });

    // Click dots — uses queryRenderedFeatures so it works after style reloads
    map.on('click', e => {
      try {
        const features = map.queryRenderedFeatures(e.point, { layers: ['loc-dots'] });
        if (!features.length) return;
        const locId = features[0].properties.id;
        const loc = CITIES[currentCityRef.current].locations.find(l => l.id === locId);
        if (loc) onSelectRef.current(loc);
      } catch (_) {}
    });

    // Pointer cursor over dots
    map.on('mousemove', e => {
      try {
        const f = map.queryRenderedFeatures(e.point, { layers: ['loc-dots'] });
        map.getCanvas().style.cursor = f.length ? 'pointer' : '';
      } catch (_) {}
    });

    map.on('move', () => calcLine(map));
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      characterMarkerRef.current = null;
      setReady(false);
    };
  }, []);

  // ── Theme switch ───────────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    map.setStyle(isDark ? DARK_STYLE : LIGHT_STYLE);
    map.once('style.load', () => {
      addBuildingsLayer(map, locColor || '#888888');
      addDotsLayers(map, currentCityRef.current, currentLocIdRef.current);
      if (currentLocRef.current) {
        try { map.setPaintProperty('buildings-3d', 'fill-extrusion-color', locColor); } catch (_) {}
        try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.7); } catch (_) {}
      }
    });
  }, [isDark]);

  // ── City change ────────────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const c = CITIES[currentCity];
    map.flyTo({ center: [c.lng, c.lat], zoom: c.zoom, pitch: 0, bearing: 0, duration: 1200 });
    try { map.getSource('locations').setData(buildGeojson(currentCity)); } catch (_) {}
    updateDotsActive(map, null);
    placeCharacterMarker(map, null);
    setLineCoords(null);
    setShow3DHint(false);
  }, [currentCity]);

  // ── Active dot update ──────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    updateDotsActive(map, currentLocId);
  }, [currentLocId]);

  // ── 3D / 2D transition ─────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    if (currentLoc) {
      const ov = LOCATION_3D[currentLoc.id] || {};
      map.easeTo({
        center: [currentLoc.lng, currentLoc.lat],
        zoom: ov.zoom ?? 17.5,
        pitch: ov.pitch ?? 65,
        bearing: ov.bearing ?? -30,
        duration: 1400,
      });
      const color = TYPE_COLORS[currentLoc.type] || '#888888';
      try {
        map.setPaintProperty('buildings-3d', 'fill-extrusion-color', color);
        map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.7);
      } catch (_) {}
      setTimeout(() => {
        calcLine(map);
        placeCharacterMarker(map, currentLoc);
        setShow3DHint(true);
      }, 1500);
    } else {
      const c = CITIES[currentCity];
      map.easeTo({ center: [c.lng, c.lat], zoom: c.zoom, pitch: 0, bearing: 0, duration: 1100 });
      try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0); } catch (_) {}
      placeCharacterMarker(map, null);
      setLineCoords(null);
      setShow3DHint(false);
    }
  }, [currentLoc, ready]);

  return (
    <div id="map-wrap">
      <div ref={containerRef} style={{ height: '100%', width: '100%' }} />

      {show3DHint && (
        <div className="hint-3d">
          <span>SCROLL to zoom</span>
          <span className="hint-3d-sep">·</span>
          <span>RIGHT-DRAG to orbit</span>
          <span className="hint-3d-sep">·</span>
          <span>ESC to exit</span>
        </div>
      )}

      {lineCoords && locColor && (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 798, overflow: 'visible' }}>
          <defs>
            <filter id="tri-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <polygon
            points={`${lineCoords.x1},${lineCoords.y1} ${lineCoords.panelX},0 ${lineCoords.panelX},${lineCoords.mapH}`}
            fill={locColor} fillOpacity={0.18}
            stroke={locColor} strokeWidth={1.5} strokeOpacity={0.7}
            filter="url(#tri-glow)"
          />
        </svg>
      )}
    </div>
  );
}
