import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { CITIES } from '../data/cities';
import { TYPE_COLORS } from '../lib/utils';

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const TILE_URL = isDark
  ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
  : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

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

export default function MapView({ currentCity, currentLocId, lang, onLocationSelect }) {
  const city = CITIES[currentCity];
  const markersRef = useRef({});

  // Update marker icons when selection changes
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, m]) => {
      if (!m) return;
      const loc = city.locations.find(l => l.id === id);
      if (loc) m.setIcon(makeIcon(loc.type, id === currentLocId));
    });
  }, [currentLocId, currentCity]);

  return (
    <div id="map-wrap">
      <MapContainer
        center={[city.lat, city.lng]}
        zoom={city.zoom}
        style={{ height: '420px', width: '100%' }}
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          url={TILE_URL}
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
            eventHandlers={{
              click: () => onLocationSelect(loc),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
