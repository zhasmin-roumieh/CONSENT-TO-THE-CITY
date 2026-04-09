import { useState } from 'react';

export const CREATURES = [
  { id: 'fox',    emoji: '🦊', name: 'URBAN FOX',    desc: 'Navigates borders at night',      color: '#ff8800' },
  { id: 'pigeon', emoji: '🐦', name: 'CITY PIGEON',  desc: 'Witnesses everything from above', color: '#8899ff' },
  { id: 'rat',    emoji: '🐀', name: 'STREET RAT',   desc: 'Knows every underground route',   color: '#aaaaaa' },
  { id: 'root',   emoji: '🌿', name: 'TREE ROOT',    desc: 'Slow, persistent, territorial',   color: '#3DB847' },
  { id: 'ghost',  emoji: '👻', name: 'URBAN GHOST',  desc: 'Unregistered. No record kept',    color: '#ccccff' },
  { id: 'bot',    emoji: '🤖', name: 'ALGORITHM',    desc: 'Optimises every pathway',         color: '#00e87a' },
  { id: 'cloud',  emoji: '🌧️', name: 'RAIN CLOUD',  desc: 'Claims all land. Owns none',      color: '#2299ff' },
  { id: 'bee',    emoji: '🐝', name: 'CITY BEE',     desc: 'Maps the city in pollen trails',  color: '#ffcc00' },
  { id: 'spider', emoji: '🕷️', name: 'SPIDER',      desc: 'Weaves jurisdiction into webs',   color: '#cc44ff' },
  { id: 'micro',  emoji: '🦠', name: 'MICROBE',      desc: 'Oldest resident. No language',    color: '#ff2d9b' },
];

export default function CharacterSelect({ cityKey, onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  function handleClick(c) {
    setClicked(c.id);
    setTimeout(() => onSelect(c), 360);
  }

  return (
    <div className="charselect">
      <div className="charselect-header">
        <div className="charselect-eyebrow">ENTERING {cityKey.toUpperCase()}</div>
        <div className="charselect-title">CHOOSE YOUR FORM</div>
        <div className="charselect-sub">you will walk as this entity through the city</div>
      </div>

      <div className="charselect-grid">
        {CREATURES.map(c => {
          const isHov = hovered === c.id;
          const isClk = clicked === c.id;
          return (
            <button
              key={c.id}
              className={`charselect-card${isHov ? ' charselect-card--hov' : ''}${isClk ? ' charselect-card--clk' : ''}`}
              style={{ '--cc': c.color }}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(c)}
            >
              <span className="charselect-emoji">{c.emoji}</span>
              <span className="charselect-name">{c.name}</span>
              <span className="charselect-desc">{c.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
