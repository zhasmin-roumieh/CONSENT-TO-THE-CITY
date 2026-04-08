import { useState } from 'react';
import { UI } from '../i18n/ui';
import { TYPE_COLORS } from '../lib/utils';
import { CITIES } from '../data/cities';

export default function IdentityScreen({ loc, cityKey, lang, onIdentitySet }) {
  const t = UI[lang];
  const color = TYPE_COLORS[loc.type] || '#888888';
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;

  const [mode, setMode] = useState(null); // null | 'named'
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  function handleIncognito() {
    onIdentitySet(null);
  }

  function handleSubmit() {
    if (!name.trim() || !category) return;
    onIdentitySet({ name: name.trim(), category });
  }

  return (
    <>
      <div className="panel-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
      <div className="panel-inner">
        <div className="loc-pill">
          <span className="loc-pill-dot" style={{ background: color }} />
          <span>{loc.name[lang]}</span>
          <span className="loc-pill-city">{cityName}</span>
        </div>

        <div className="section-hdr" style={{ marginTop: 0 }}>{t.whoAreYou}</div>
        <p className="identity-intro">{t.whoAreYouHint}</p>

        {mode === null && (
          <>
            <div className="identity-option" style={{ cursor: 'pointer' }} onClick={() => setMode('named')}>
              <div className="identity-option-title">{t.identityNamed}</div>
              <div className="identity-option-desc">{t.identityNamedDesc}</div>
            </div>

            <button className="incognito-btn" onClick={handleIncognito}>
              {t.identityIncognito}
              <span style={{ marginLeft: 8, opacity: 0.5, fontSize: 10 }}>{t.identityIncognitoDesc}</span>
            </button>
          </>
        )}

        {mode === 'named' && (
          <div className="identity-option">
            <div className="identity-option-title">{t.identityNamed}</div>
            <div className="identity-form">
              <input
                className="identity-input"
                placeholder={t.identityNamePlaceholder}
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete="off"
              />
              <select
                className="identity-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">{t.identityCategoryPlaceholder}</option>
                {t.identityCategories.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  className="identity-submit"
                  onClick={handleSubmit}
                  disabled={!name.trim() || !category}
                >
                  {t.identityEnter}
                </button>
                <button
                  className="back-btn"
                  onClick={() => setMode(null)}
                >
                  ←
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
