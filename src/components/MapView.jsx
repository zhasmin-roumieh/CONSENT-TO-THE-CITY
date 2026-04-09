import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { CITIES } from '../data/cities';
import { TYPE_COLORS } from '../lib/utils';

const DARK_STYLE  = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
const LIGHT_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

const PANEL_RIGHT = 16;
const PANEL_WIDTH = 356;

function makeMarkerEl(color, active) {
  const size = active ? 22 : 14;
  const el = document.createElement('div');
  Object.assign(el.style, {
    width: `${size}px`, height: `${size}px`,
    borderRadius: '50%', background: color, opacity: '0.9',
    cursor: 'pointer',
    boxShadow: `0 0 ${active ? 20 : 8}px ${color}`,
    border: active ? '2.5px solid rgba(255,255,255,0.85)' : `1.5px solid ${color}88`,
    transition: 'all 0.2s', position: 'relative', zIndex: active ? 10 : 1,
  });
  if (active) {
    const pulse = document.createElement('div');
    Object.assign(pulse.style, {
      position: 'absolute', inset: '-6px', borderRadius: '50%',
      background: color, opacity: '0.25', animation: 'pulse-ring 1.6s ease-out infinite',
    });
    el.appendChild(pulse);
  }
  return el;
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
    // Find the vector tile source — try known names in order
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
          ['get', 'render_height'],
          ['get', 'height'],
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
  const markersRef = useRef({});
  const characterMarkerRef = useRef(null);
  const currentLocRef = useRef(currentLoc);
  const onSelectRef = useRef(onLocationSelect);
  const [lineCoords, setLineCoords] = useState(null);
  const [ready, setReady] = useState(false);
  const [show3DHint, setShow3DHint] = useState(false);

  useEffect(() => { currentLocRef.current = currentLoc; }, [currentLoc]);
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

  function spawnMarkers(map, cityKey, activeId) {
    Object.values(markersRef.current).forEach(({ marker }) => marker.remove());
    markersRef.current = {};
    CITIES[cityKey].locations.forEach(loc => {
      const color = TYPE_COLORS[loc.type] || '#888888';
      const active = loc.id === activeId;
      const el = makeMarkerEl(color, active);
      const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat([loc.lng, loc.lat])
        .addTo(map);
      el.addEventListener('click', e => { e.stopPropagation(); onSelectRef.current(loc); });
      markersRef.current[loc.id] = { marker, el, loc };
    });
  }

  function placeCharacterMarker(map, loc) {
    if (characterMarkerRef.current) {
      characterMarkerRef.current.remove();
      characterMarkerRef.current = null;
    }
    if (!loc || !character) return;
    // Offset slightly so character doesn't sit exactly on the dot
    const el = makeCharacterMarkerEl(character);
    const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([loc.lng + 0.0002, loc.lat + 0.0001])
      .addTo(map);
    characterMarkerRef.current = marker;
  }

  // ── Initialize map
  useEffect(() => {
    if (!containerRef.current) return;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: isDark ? DARK_STYLE : LIGHT_STYLE,
      center: [city.lng, city.lat],
      zoom: city.zoom,
      pitch: 0, bearing: 0,
    });
    // Place controls bottom-left so minimap doesn't cover them
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-left');
    map.on('load', () => {
      addBuildingsLayer(map, '#888888');
      spawnMarkers(map, currentCity, currentLocRef.current?.id);
      setReady(true);
    });
    map.on('move', () => calcLine(map));
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
      characterMarkerRef.current = null;
      setReady(false);
    };
  }, []);

  // ── Theme switch
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    map.setStyle(isDark ? DARK_STYLE : LIGHT_STYLE);
    map.once('style.load', () => {
      addBuildingsLayer(map, locColor || '#888888');
      if (currentLocRef.current) {
        try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.7); } catch(e) {}
      }
    });
  }, [isDark]);

  // ── City change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const c = CITIES[currentCity];
    map.flyTo({ center: [c.lng, c.lat], zoom: c.zoom, pitch: 0, bearing: 0, duration: 1200 });
    spawnMarkers(map, currentCity, null);
    placeCharacterMarker(map, null);
    setLineCoords(null);
    setShow3DHint(false);
  }, [currentCity]);

  // ── Active marker update
  useEffect(() => {
    Object.values(markersRef.current).forEach(({ el, loc }) => {
      const color = TYPE_COLORS[loc.type] || '#888888';
      const active = loc.id === currentLocId;
      const size = active ? 22 : 14;
      Object.assign(el.style, {
        width: `${size}px`, height: `${size}px`,
        boxShadow: `0 0 ${active ? 20 : 8}px ${color}`,
        border: active ? '2.5px solid rgba(255,255,255,0.85)' : `1.5px solid ${color}88`,
      });
    });
  }, [currentLocId]);

  // ── 3D / 2D transition
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    if (currentLoc) {
      map.easeTo({
        center: [currentLoc.lng, currentLoc.lat],
        zoom: 17.5,
        pitch: 65,
        bearing: -30,
        duration: 1400,
      });
      const color = TYPE_COLORS[currentLoc.type] || '#888888';
      try {
        map.setPaintProperty('buildings-3d', 'fill-extrusion-color', color);
        map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.7);
      } catch(e) {}
      setTimeout(() => {
        calcLine(map);
        placeCharacterMarker(map, currentLoc);
        setShow3DHint(true);
      }, 1500);
    } else {
      const c = CITIES[currentCity];
      map.easeTo({ center: [c.lng, c.lat], zoom: c.zoom, pitch: 0, bearing: 0, duration: 1100 });
      try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0); } catch(e) {}
      placeCharacterMarker(map, null);
      setLineCoords(null);
      setShow3DHint(false);
    }
  }, [currentLoc, ready]);

  return (
    <div id="map-wrap">
      <div ref={containerRef} style={{ height: '100%', width: '100%' }} />

      {/* 3D navigation hint */}
      {show3DHint && (
        <div className="hint-3d">
          <span>🖱 SCROLL to orbit</span>
          <span className="hint-3d-sep">·</span>
          <span>ESC to exit</span>
        </div>
      )}

      {/* Triangle from dot to panel */}
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
