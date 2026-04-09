import { useState, useMemo } from 'react';
import { CITIES } from '../data/cities';

const CITY_COLORS = {
  berlin:  '#00e87a',
  paris:   '#ff2d9b',
  tokyo:   '#ff4422',
  london:  '#2299ff',
  newyork: '#ffcc00',
  cairo:   '#ff8800',
  mumbai:  '#cc44ff',
  beirut:  '#00ffee',
};

const WORLD_CITIES = [
  'TOKYO','LONDON','PARIS','DUBAI','SINGAPORE','SYDNEY','SAO PAULO',
  'MEXICO CITY','ISTANBUL','LAGOS','BANGKOK','JAKARTA','DELHI','KARACHI',
  'KINSHASA','LIMA','BOGOTA','CAIRO','DHAKA','OSAKA','MOSCOW','LOS ANGELES',
  'HONG KONG','CHICAGO','JOHANNESBURG','TEHRAN','NAIROBI','SANTIAGO',
  'BARCELONA','AMSTERDAM','BERLIN','ROME','TORONTO','MIAMI','SEOUL',
  'TAIPEI','KUALA LUMPUR','RIYADH','CASABLANCA','ACCRA','ADDIS ABABA',
  'HAVANA','ATHENS','STOCKHOLM','VIENNA','BRUSSELS','WARSAW','PRAGUE',
  'BUDAPEST','BEIRUT','MUMBAI','BOGOTÁ','OSLO','ZURICH','MILAN','TUNIS',
  'ALGIERS','DAKAR','KAMPALA','MINSK','KYIV','BAKU','TASHKENT','KATHMANDU',
  'YANGON','PHNOM PENH','MANILA','AUCKLAND','PERTH','CAPE TOWN','MONTREAL',
  'VANCOUVER','SEATTLE','PHOENIX','HOUSTON','ATLANTA','NEW YORK','DETROIT',
  'BAGHDAD','DAMASCUS','AMMAN','KABUL','ISLAMABAD','COLOMBO','DOHA',
];

export default function SplashScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  // Generate stable random positions once
  const bgItems = useMemo(() => WORLD_CITIES.map((name, i) => ({
    name,
    x: (i * 137.5) % 100,
    y: (i * 97.3 + 13) % 100,
    size: 9 + (i * 7) % 12,
    opacity: 0.04 + (i * 3) % 8 / 100,
    rotation: -25 + (i * 41) % 50,
    delay: (i * 0.15) % 4,
  })), []);

  function handleClick(key) {
    setClicked(key);
    setTimeout(() => onSelect(key), 320);
  }

  return (
    <div className="splash">
      {/* Scattered world city names in background */}
      <div className="splash-bg" aria-hidden>
        {bgItems.map((item, i) => (
          <span
            key={i}
            className="splash-bg-city"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}px`,
              opacity: item.opacity,
              transform: `rotate(${item.rotation}deg)`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Center panel */}
      <div className="splash-panel">
        <div className="splash-panel-logo">CONSENT TO THE CITY</div>
        <div className="splash-panel-sub">urban access simulation · choose your city</div>

        <div className="splash-panel-divider" />

        <div className="splash-city-list">
          {Object.entries(CITIES).map(([key, city]) => {
            const color = CITY_COLORS[key] || '#aaa';
            const isHov = hovered === key;
            const isClk = clicked === key;
            return (
              <button
                key={key}
                className={`splash-city-row${isHov ? ' splash-city-row--hov' : ''}${isClk ? ' splash-city-row--clk' : ''}`}
                style={{ '--cc': color }}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(key)}
              >
                <span className="splash-city-dot" />
                <span className="splash-city-row-name">{city.name.en}</span>
                <span className="splash-city-row-arrow">▶</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
