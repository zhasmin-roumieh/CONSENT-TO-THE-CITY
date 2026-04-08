import { useState, useEffect } from 'react';
import { CITIES } from '../data/cities';
import { UI } from '../i18n/ui';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' },
];

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

export default function Toolbar({ currentCity, lang, locCount, isDark, onCityChange, onLangChange, onRandom, onThemeToggle }) {
  const t = UI[lang];
  const timeStr = useClock();

  return (
    <div id="toolbar">
      <span className="tb-label">{t.city}</span>
      <select
        className="city-select"
        value={currentCity}
        onChange={e => onCityChange(e.target.value)}
      >
        {Object.entries(CITIES).map(([key, city]) => (
          <option key={key} value={key}>{city.name[lang]}</option>
        ))}
      </select>

      <button className="rand-btn" onClick={onRandom}>
        {t.randomLocation}
      </button>

      <div className="lang-group">
        {LANGS.map(l => (
          <button
            key={l.code}
            className={`lang-btn${lang === l.code ? ' active' : ''}`}
            onClick={() => onLangChange(l.code)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        className="theme-btn"
        onClick={onThemeToggle}
        title={isDark ? t.switchToLight : t.switchToDark}
      >
        {isDark ? '☀' : '◑'}
      </button>

      <span className="loc-count">{locCount} {t.locations}</span>
      <span className="toolbar-time">{timeStr}</span>
    </div>
  );
}
