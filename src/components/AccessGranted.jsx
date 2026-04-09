import { useState } from 'react';
import { UI } from '../i18n/ui';
import { TYPE_COLORS, shuffle, getTemporalText } from '../lib/utils';
import { CITIES } from '../data/cities';
import { useLocationPhoto } from '../lib/useLocationPhoto';

function Bar({ label, pct, color }) {
  return (
    <div className="bar-group">
      <div className="bar-meta">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

export default function AccessGranted({ loc, cityKey, ownerData, userTerms, identity, lang, character, consentLogCount, collectiveStats, totalLocations, onAddTerm, onReset, onShowConsentLog, onShowFate }) {
  const t = UI[lang];
  const [year, setYear] = useState(2025);
  const [termInput, setTermInput] = useState('');
  const color = TYPE_COLORS[loc.type] || '#888888';
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;
  const photoSrc = useLocationPhoto(loc.id);

  const owners = shuffle(loc.owners[lang]);
  const ghosts = shuffle(loc.ghost[lang]);
  const temporals = shuffle(loc.temporal[lang]);

  function handleAddTerm() {
    const v = termInput.trim();
    if (!v) return;
    onAddTerm(v);
    setTermInput('');
  }

  function handleKey(e) {
    if (e.key === 'Enter') handleAddTerm();
  }

  return (
    <>
      <div className="panel-accent" style={{ background: `linear-gradient(90deg, #1D9E75, #0f6e5688)` }} />

      <div className="panel-inner">
        <div className="loc-hero">
          {photoSrc && (
            <img
              className="loc-hero-img"
              src={photoSrc}
              alt={loc.name[lang]}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <div className="loc-hero-text">
            <div className="loc-hero-city">{cityName}</div>
            <div className="loc-hero-name">{loc.name[lang]}</div>
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="grant-check" style={{ fontSize: 13 }}>✔</span>
              <span className="grant-title" style={{ fontSize: 12 }}>{t.accessGranted}</span>
            </div>
            {identity ? (
              <div className="identity-badge" style={{ marginTop: 4 }}>
                <span style={{ opacity: 0.6, fontSize: 9 }}>▲</span>
                <span>{identity.name}</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span style={{ opacity: 0.7 }}>{t.identityCategories.find(c => c.value === identity.category)?.label || identity.category}</span>
              </div>
            ) : (
              <div className="identity-badge" style={{ opacity: 0.55, marginTop: 4 }}>
                <span style={{ fontSize: 9 }}>○</span>
                <span>{t.identityIncognito}</span>
              </div>
            )}
          </div>
        </div>

        <div className="section-hdr" style={{ marginTop: '0.25rem' }}>{t.ownershipDist}</div>
        <Bar label={t.nonHuman}   pct={ownerData.nh} color="#3DB847" />
        <Bar label={t.historical} pct={ownerData.gh} color="#888780" />
        <Bar label={t.algorithmic}pct={ownerData.al} color="#7C5CE8" />
        <Bar label={t.temporal}   pct={ownerData.tp} color="#E8820C" />
        <Bar label={t.human}      pct={ownerData.hu} color="#2B8FE8" />

        <hr className="divider" />
        <div className="section-hdr">{t.currentOwners}</div>
        {owners.map((o, i) => (
          <div key={i} className="owner-item">
            <span className="owner-lbl"><span className="tag tag-a">{t.activeTag}</span></span>
            <span className="owner-val">{o}</span>
          </div>
        ))}
        {userTerms.length > 0 && (
          <div className="owner-item">
            <span className="owner-lbl"><span className="tag tag-s">{t.inscribedTag}</span></span>
            <span className="owner-val">{userTerms[userTerms.length - 1]}</span>
          </div>
        )}

        <hr className="divider" />
        <div className="section-hdr">{t.ghostOwners}</div>
        {ghosts.map((g, i) => (
          <div key={i} className="owner-item">
            <span className="owner-lbl"><span className="tag tag-g">{t.residualTag}</span></span>
            <span className="owner-val">{g}</span>
          </div>
        ))}

        <hr className="divider" />
        <div className="section-hdr">
          {t.temporalOwners} <span className="tag tag-c">{t.conflictTag}</span>
        </div>
        {temporals.map((tp, i) => (
          <div key={i} className="owner-item">
            <span className="owner-lbl"><span className="tag tag-t">{t.tempTag}</span></span>
            <span className="owner-val">{tp}</span>
          </div>
        ))}

        <hr className="divider" />
        <div className="section-hdr">{t.temporalShift}</div>
        <div className="slider-row">
          <label>{t.year}</label>
          <input
            type="range" min="1700" max="2150" step="1" value={year}
            onChange={e => setYear(parseInt(e.target.value))}
          />
          <span className="slider-val">{year}</span>
        </div>
        <div className="temp-box">{getTemporalText(loc, year, lang)}</div>

        <hr className="divider" />
        <div className="section-hdr">{t.addYourTerms}</div>
        <div className="add-terms-hint">{t.addTermsHint}</div>
        <div className="term-row">
          <input
            className="term-input"
            placeholder={t.termPlaceholder}
            value={termInput}
            onChange={e => setTermInput(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
          />
          <button className="inscribe-btn" onClick={handleAddTerm}>{t.inscribeBtn}</button>
        </div>
        {userTerms.length > 0 && (
          <div>
            <div className="stakeholder">{t.stakeholder}</div>
            {userTerms.map((term, i) => (
              <div key={i} className="stored-term">↳ {term}</div>
            ))}
          </div>
        )}

        {/* ── Collective memory ── */}
        {collectiveStats && character && (
          <>
            <hr className="divider" />
            <div className="collective-block collective-block--accept">
              <span className="collective-label">COLLECTIVE MEMORY</span>
              <span className="collective-text">
                You are <strong>{character.name} #{collectiveStats.count}</strong> to accept access to a city space.
              </span>
            </div>
          </>
        )}

        {/* ── Consent log reveal ── */}
        {consentLogCount > 0 && (
          <>
            <hr className="divider" />
            <button className="consent-log-btn" onClick={onShowConsentLog}>
              ⚠ YOU HAVE CONSENTED TO {consentLogCount} CLAUSES — VIEW ALL
            </button>
          </>
        )}

        {/* ── City report ── */}
        {totalLocations >= 4 && (
          <>
            <hr className="divider" />
            <button className="fate-btn" onClick={onShowFate}>
              ▶ VIEW YOUR CITY REPORT
            </button>
          </>
        )}

        <hr className="divider" />
        <button className="back-btn" onClick={onReset}>{t.backToMap}</button>
      </div>
    </>
  );
}
