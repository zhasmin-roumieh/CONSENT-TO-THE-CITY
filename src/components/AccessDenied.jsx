import { useMemo } from 'react';
import { UI } from '../i18n/ui';
import { GHOST_F } from '../data/content';
import { shuffle, rnd } from '../lib/utils';
import { TYPE_COLORS } from '../lib/utils';
import { CITIES } from '../data/cities';

export default function AccessDenied({ loc, cityKey, lang, character, collectiveStats, totalLocations, onReconsider, onReset, onShowFate }) {
  const t = UI[lang];
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;
  const frags = useMemo(() => shuffle(GHOST_F[lang]).slice(0, rnd(3, 5)), [loc, lang]);

  return (
    <>
      <div className="panel-accent" style={{ background: 'linear-gradient(90deg, #a32d2d, #a32d2d44)' }} />
      <div className="panel-inner">
        <div className="deny-card">
          <div className="deny-header">{t.accessRestricted}</div>
          <div className="loc-pill">
            <span>{loc.name[lang]}</span>
            <span className="loc-pill-city">{cityName}</span>
          </div>
          <div className="ghost-section">
            {frags.map((f, i) => (
              <div key={i} className="ghost-frag">{f}</div>
            ))}
          </div>
          <div className="ghost-note">{t.ghostNote}</div>
        </div>
        {/* ── Collective memory ── */}
        {collectiveStats && character && (
          <div className="collective-block collective-block--deny">
            <span className="collective-label">COLLECTIVE MEMORY</span>
            <span className="collective-text">
              You are <strong>{character.name} #{collectiveStats.count}</strong> to refuse entry.
            </span>
          </div>
        )}

        {/* ── City report ── */}
        {totalLocations >= 4 && (
          <button className="fate-btn fate-btn--deny" onClick={onShowFate} style={{ marginBottom: '0.75rem' }}>
            ▶ VIEW YOUR CITY REPORT
          </button>
        )}

        <div className="consent-row">
          <button className="btn-accept" onClick={onReconsider}>{t.reconsider}</button>
          <button className="btn-decline" onClick={onReset}>{t.leave}</button>
        </div>
      </div>
    </>
  );
}
