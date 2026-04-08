import { CITIES } from '../data/cities';
import { UI } from '../i18n/ui';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' },
];

export default function Toolbar({ currentCity, lang, locCount, onCityChange, onLangChange, onRandom }) {
  const t = UI[lang];

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

      <span className="loc-count">{locCount} {t.locations}</span>
    </div>
  );
}
