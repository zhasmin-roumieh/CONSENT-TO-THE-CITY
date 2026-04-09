import { useState } from 'react';
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

export default function SplashScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  function handleClick(key) {
    setClicked(key);
    setTimeout(() => onSelect(key), 280);
  }

  return (
    <div className="splash">
      <div className="splash-scanlines" />
      <div className="splash-header">
        <div className="splash-logo">CONSENT TO THE CITY</div>
        <div className="splash-prompt">▶ SELECT A CITY TO BEGIN ◀</div>
      </div>
      <div className="splash-grid">
        {Object.entries(CITIES).map(([key, city]) => {
          const color = CITY_COLORS[key] || '#ffffff';
          const isHov = hovered === key;
          const isClk = clicked === key;
          return (
            <button
              key={key}
              className={`splash-city${isHov ? ' splash-city--hov' : ''}${isClk ? ' splash-city--clk' : ''}`}
              style={{ '--cc': color, '--cg': color + '55' }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(key)}
            >
              <span className="splash-city-name">{city.name.en.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
      <div className="splash-footer">
        an urban access simulation · {Object.keys(CITIES).length} cities · click to negotiate entry
      </div>
    </div>
  );
}
