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
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: color,
    opacity: '0.9',
    cursor: 'pointer',
    boxShadow: `0 0 ${active ? 20 : 8}px ${color}`,
    border: active ? '2.5px solid rgba(255,255,255,0.85)' : `1.5px solid ${color}88`,
    transition: 'all 0.2s',
    position: 'relative',
    zIndex: active ? 10 : 1,
  });
  if (active) {
    const pulse = document.createElement('div');
    Object.assign(pulse.style, {
      position: 'absolute',
      inset: '-6px',
      borderRadius: '50%',
      background: color,
      opacity: '0.25',
      animation: 'pulse-ring 1.6s ease-out infinite',
    });
    el.appendChild(pulse);
  }
  return el;
}

function addBuildingsLayer(map, color) {
  try {
    if (map.getLayer('buildings-3d')) map.removeLayer('buildings-3d');
    // Try common source names used by CARTO and OpenMapTiles-based styles
    const sources = Object.keys(map.getStyle().sources);
    const buildingSource = sources.find(s => s === 'carto') || sources[0];
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
          ['*', ['coalesce', ['get', 'levels'], 2], 3.5],
          8,
        ],
        'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0],
        'fill-extrusion-opacity': 0,
      },
    });
  } catch (e) {
    console.warn('3D buildings layer skipped:', e.message);
  }
}

export default function MapView({ currentCity, currentLocId, currentLoc, lang, isDark, onLocationSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const currentLocRef = useRef(currentLoc);
  const onSelectRef = useRef(onLocationSelect);
  const [lineCoords, setLineCoords] = useState(null);
  const [ready, setReady] = useState(false);

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

  // ── Initialize map once
  useEffect(() => {
    if (!containerRef.current) return;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: isDark ? DARK_STYLE : LIGHT_STYLE,
      center: [city.lng, city.lat],
      zoom: city.zoom,
      pitch: 0,
      bearing: 0,
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');
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
        try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.65); } catch(e) {}
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
    setLineCoords(null);
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

  // ── 3D / 2D transition on location select
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    if (currentLoc) {
      // Fly into 3D view at ~500m zoom
      map.easeTo({
        center: [currentLoc.lng, currentLoc.lat],
        zoom: 17,
        pitch: 60,
        bearing: -20,
        duration: 1400,
      });
      const color = TYPE_COLORS[currentLoc.type] || '#888888';
      try {
        map.setPaintProperty('buildings-3d', 'fill-extrusion-color', color);
        map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0.65);
      } catch(e) {}
      setTimeout(() => calcLine(map), 1500);
    } else {
      // Return to 2D city view
      const c = CITIES[currentCity];
      map.easeTo({
        center: [c.lng, c.lat],
        zoom: c.zoom,
        pitch: 0,
        bearing: 0,
        duration: 1100,
      });
      try { map.setPaintProperty('buildings-3d', 'fill-extrusion-opacity', 0); } catch(e) {}
      setLineCoords(null);
    }
  }, [currentLoc, ready]);

  return (
    <div id="map-wrap">
      <div ref={containerRef} style={{ height: '100%', width: '100%' }} />

      {/* Triangle from dot to panel */}
      {lineCoords && locColor && (
        <svg
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none', zIndex: 798,
            overflow: 'visible',
          }}
        >
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
