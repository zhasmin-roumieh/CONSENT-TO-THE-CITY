import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, useMap } from 'react-leaflet';
import { CITIES } from '../data/cities';

const TILE_DARK  = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const TILE_LIGHT = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';

function Updater({ city }) {
  const map = useMap();
  useEffect(() => {
    map.setView([city.lat, city.lng], 2, { animate: true, duration: 1 });
  }, [city]);
  return null;
}

export default function MiniMap({ currentCity, locColor, isDark }) {
  const city = CITIES[currentCity];
  const color = locColor || '#00e87a';
  const tile = isDark ? TILE_DARK : TILE_LIGHT;

  return (
    <div className="minimap-wrap">
      <div className="minimap-label">WORLD MAP</div>
      <MapContainer
        center={[city.lat, city.lng]}
        zoom={2}
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer key={tile} url={tile} subdomains="abcd" />
        <Updater city={city} />

        {/* Country-area glow — large soft circle around the city */}
        <CircleMarker
          key={`outer-${color}`}
          center={[city.lat, city.lng]}
          radius={38}
          fillColor={color}
          fillOpacity={0.18}
          color={color}
          weight={1}
          opacity={0.3}
        />
        {/* Inner glow ring */}
        <CircleMarker
          key={`inner-${color}`}
          center={[city.lat, city.lng]}
          radius={18}
          fillColor={color}
          fillOpacity={0.25}
          color="transparent"
          weight={0}
        />
        {/* City dot */}
        <CircleMarker
          key={`dot-${color}`}
          center={[city.lat, city.lng]}
          radius={5}
          fillColor={color}
          fillOpacity={1}
          color="#ffffff"
          weight={1.5}
          opacity={1}
        />
      </MapContainer>
    </div>
  );
}
