import { useEffect, useState } from 'react';
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

const LOG_LINES = [
  'SCANNING OWNERSHIP LAYERS...',
  'MAPPING JURISDICTIONAL ZONES...',
  'LOADING NON-HUMAN STAKEHOLDERS...',
  'CONNECTING TO URBAN NETWORK...',
  'VERIFYING ACCESS PROTOCOLS...',
  'INITIALIZING CONSENT ENGINE...',
  'PREPARING TERMS & CONDITIONS...',
  'ACCESS LAYER READY.',
];

export default function LoadingScreen({ cityKey, onDone }) {
  const city = CITIES[cityKey];
  const color = CITY_COLORS[cityKey] || '#00e87a';
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([LOG_LINES[0]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + 1.8;
        return next >= 100 ? 100 : next;
      });
    }, 36); // ~2 seconds total
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const idx = Math.floor((progress / 100) * (LOG_LINES.length - 1));
    setLogs(LOG_LINES.slice(0, idx + 1));
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <div className="loading-screen">
      <div className="splash-scanlines" />
      <div className="loading-city" style={{ '--cc': color, '--cg': color + '55' }}>
        {city.name.en.toUpperCase()}
      </div>
      <div className="loading-bar-wrap">
        <div
          className="loading-bar"
          style={{ width: `${progress}%`, background: color, boxShadow: `0 0 16px ${color}, 0 0 4px ${color}` }}
        />
      </div>
      <div className="loading-pct" style={{ color }}>{Math.floor(progress)}%</div>
      <div className="loading-log">
        {logs.map((line, i) => (
          <div key={i} className="loading-log-line" style={{ color: i === logs.length - 1 ? color : '#333' }}>
            {i === logs.length - 1 ? '▶ ' : '✓ '}{line}
          </div>
        ))}
      </div>
    </div>
  );
}
