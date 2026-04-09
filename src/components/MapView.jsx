import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { CITIES } from '../data/cities';
import { TYPE_COLORS } from '../lib/utils';

const DARK_TILE  = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const LIGHT_TILE = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

// Panel dimensions — must match CSS (.panel--terms right:16px width:356px)
const PANEL_RIGHT  = 16;
const PANEL_WIDTH  = 356;
const TRIANGLE_Y   = 74; // vertical center of the panel-triangle

function makeIcon(type, active) {
  const c = TYPE_COLORS[type] || '#888888';
  const size = active ? 20 : 13;
  const halo = active ? size + 14 : size + 6;
  const svgW = halo + 8;
  const cx = svgW / 2;
  const ringHtml = active
    ? `<div class="marker-pulse" style="position:absolute;inset:0;border-radius:50%;background:${c};opacity:0.3;"></div>`
    : '';
  const html = `<div style="position:relative;width:${svgW}px;height:${svgW}px;">
    ${ringHtml}
    <svg width="${svgW}" height="${svgW}" viewBox="0 0 ${svgW} ${svgW}" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;">
      ${active ? `<circle cx="${cx}" cy="${cx}" r="${halo / 2}" fill="${c}" opacity="0.2"/>` : ''}
      <circle cx="${cx}" cy="${cx}" r="${size / 2}" fill="${c}" opacity="0.9"/>
      <circle cx="${cx}" cy="${cx}" r="${size / 2 - 2}" fill="${c}"/>
    </svg>
  </div>`;
  return L.divIcon({ className: '', html, iconSize: [svgW, svgW], iconAnchor: [svgW / 2, svgW / 2] });
}

function CityFlyTo({ city }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([city.lat, city.lng], city.zoom, { duration: 1.2 });
  }, [city]);
  return null;
}

// Runs inside MapContainer so it can use useMap/useMapEvents
function CoordTracker({ loc, onUpdate }) {
  const map = useMap();

  function calc() {
    if (!loc) { onUpdate(null); return; }
    const pt  = map.latLngToContainerPoint([loc.lat, loc.lng]);
    const sz  = map.getSize();
    onUpdate({
      x1: pt.x,
      y1: pt.y,
      x2: sz.x - PANEL_RIGHT - PANEL_WIDTH, // panel's left edge
      y2: TRIANGLE_Y,
    });
  }

  useEffect(() => { calc(); }, [loc]);
  useMapEvents({ move: calc, zoom: calc, resize: calc });

  return null;
}

export default function MapView({ currentCity, currentLocId, currentLoc, lang, isDark, onLocationSelect }) {
  const city = CITIES[currentCity];
  const markersRef = useRef({});
  const tileUrl = isDark ? DARK_TILE : LIGHT_TILE;
  const [lineCoords, setLineCoords] = useState(null);

  const locColor = currentLoc ? (TYPE_COLORS[currentLoc.type] || '#888888') : null;

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, m]) => {
      if (!m) return;
      const loc = city.locations.find(l => l.id === id);
      if (loc) m.setIcon(makeIcon(loc.type, id === currentLocId));
    });
  }, [currentLocId, currentCity]);

  // Clear line when location is deselected
  useEffect(() => {
    if (!currentLoc) setLineCoords(null);
  }, [currentLoc]);

  return (
    <div id="map-wrap">
      <MapContainer
        center={[city.lat, city.lng]}
        zoom={city.zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          key={tileUrl}
          url={tileUrl}
          attribution='&copy; <a href="https://carto.com">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          subdomains="abcd"
          maxZoom={19}
        />
        <CityFlyTo city={city} />
        {city.locations.map(loc => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={makeIcon(loc.type, loc.id === currentLocId)}
            ref={m => { markersRef.current[loc.id] = m; }}
            eventHandlers={{ click: () => onLocationSelect(loc) }}
          />
        ))}
        <CoordTracker loc={currentLoc} onUpdate={setLineCoords} />
      </MapContainer>

      {/* SVG line from dot to panel */}
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
            <filter id="line-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {/* Glow layer */}
          <line
            x1={lineCoords.x1} y1={lineCoords.y1}
            x2={lineCoords.x2} y2={lineCoords.y2}
            stroke={locColor}
            strokeWidth={5}
            strokeOpacity={0.25}
          />
          {/* Main line */}
          <line
            x1={lineCoords.x1} y1={lineCoords.y1}
            x2={lineCoords.x2} y2={lineCoords.y2}
            stroke={locColor}
            strokeWidth={1.5}
            strokeOpacity={0.8}
            filter="url(#line-glow)"
          />
        </svg>
      )}
    </div>
  );
}
