import { useState, useEffect } from 'react';
import { CITIES } from '../data/cities';
import { UI } from '../i18n/ui';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' },
];

const CITY_TIMEZONES = {
  berlin:  'Europe/Berlin',
  paris:   'Europe/Paris',
  tokyo:   'Asia/Tokyo',
  london:  'Europe/London',
  newyork: 'America/New_York',
  cairo:   'Africa/Cairo',
  mumbai:  'Asia/Kolkata',
  beirut:  'Asia/Beirut',
};

function fmt(date, tz) {
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz });
}

function useDualClock(cityKey) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    local: fmt(now, localTz),
    city:  fmt(now, CITY_TIMEZONES[cityKey] || localTz),
  };
}

export default function Toolbar({ currentCity, lang, locCount, isDark, musicOn, onCityChange, onLangChange, onRandom, onThemeToggle, onMusicToggle, onExitToStart }) {
  const t = UI[lang];
  const { local, city } = useDualClock(currentCity);
  const cityName = CITIES[currentCity]?.name?.en || currentCity;

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
        className={`music-btn${musicOn ? ' music-btn--on' : ''}`}
        onClick={onMusicToggle}
        title={musicOn ? 'Mute music' : 'Play ambient music'}
      >
        {musicOn ? '♬' : '♪'}
      </button>

      <button
        className="theme-btn"
        onClick={onThemeToggle}
        title={isDark ? t.switchToLight : t.switchToDark}
      >
        {isDark ? '☀' : '◑'}
      </button>

      <span className="loc-count">{locCount} {t.locations}</span>
      <div className="toolbar-clocks">
        <div className="clock-item">
          <span className="clock-lbl">YOU</span>
          <span className="clock-val">{local}</span>
        </div>
        <div className="clock-item">
          <span className="clock-lbl">{cityName.toUpperCase()}</span>
          <span className="clock-val">{city}</span>
        </div>
      </div>

      <button className="exit-btn" onClick={onExitToStart} title="Exit to start screen">
        ⏏
      </button>
    </div>
  );
}
