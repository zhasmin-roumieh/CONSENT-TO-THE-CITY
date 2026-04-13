import { useState, useEffect } from 'react';
import { UI } from '../i18n/ui';
import { TYPE_COLORS, shuffle, getTemporalText } from '../lib/utils';
import { CITIES } from '../data/cities';
import { useLocationPhoto } from '../lib/useLocationPhoto';
import { inscribeTerm, fetchLiveTerms, minsAgo, minsLeft, sharedEnabled } from '../lib/sharedTerms';
import { CREATURES } from './CharacterSelect';
import PerceptionModal from './PerceptionModal';

const CHAR_EMOJI = Object.fromEntries(CREATURES.map(c => [c.id, c.emoji]));

const FUNNY_REASONS = [
  "The algorithm has a 5-minute memory. We're working on it. We're not.",
  "Municipal bylaw 112-B prohibits permanent inscriptions. The wall also gets tired.",
  "Urban ephemera policy 7.4c: all unofficial terms dissolve at 300 seconds.",
  "The city's legal team reviewed your term. They need the conference room back.",
  "Memory allocated. Please do not exceed your 300-second entitlement.",
  "Terms older than 5 minutes may contain expired consent. Safety first.",
];

function Bar({ label, pct, color }) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(pct), 80); return () => clearTimeout(t); }, [pct]);
  return (
    <div className="bar-group">
      <div className="bar-meta">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${w}%`, background: color }} />
      </div>
    </div>
  );
}

function getEra(yr) {
  if (yr < 1800) return 'PRE-MODERN ERA';
  if (yr < 1900) return 'INDUSTRIAL ERA';
  if (yr < 1945) return 'EARLY MODERN';
  if (yr < 1990) return 'POST-WAR ERA';
  if (yr < 2026) return 'DIGITAL ERA';
  if (yr < 2080) return 'CLIMATE ERA';
  return 'POST-HUMAN';
}

export default function AccessGranted({ loc, cityKey, ownerData, userTerms, identity, lang, character, consentLogCount, collectiveStats, totalLocations, onAddTerm, onReset, onShowConsentLog, onShowFate }) {
  const t = UI[lang];
  const [year, setYear] = useState(2025);
  const [termInput, setTermInput] = useState('');
  const [liveTerms, setLiveTerms] = useState([]);
  const [inscribeMsg, setInscribeMsg] = useState(null);
  const [showPerception, setShowPerception]       = useState(false);
  const [stakeholderPerception, setStakeholderPerception] = useState(null); // { text, label }
  const color = TYPE_COLORS[loc.type] || '#888888';

  // Fetch live shared terms on mount and every 30 s
  useEffect(() => {
    if (!sharedEnabled) return;
    let alive = true;
    const load = () => fetchLiveTerms(loc.id).then(t => { if (alive) setLiveTerms(t); });
    load();
    const id = setInterval(load, 30_000);
    return () => { alive = false; clearInterval(id); };
  }, [loc.id]);
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;
  const photoSrc = useLocationPhoto(loc.id);

  const owners = shuffle(loc.owners[lang]);
  const ghosts = shuffle(loc.ghost[lang]);
  const temporals = shuffle(loc.temporal[lang]);

  async function handleAddTerm() {
    const v = termInput.trim();
    if (!v) return;
    onAddTerm(v);
    setTermInput('');
    if (sharedEnabled) {
      await inscribeTerm(loc.id, v, character?.id);
      setInscribeMsg(FUNNY_REASONS[Math.floor(Math.random() * FUNNY_REASONS.length)]);
      // Refresh list so own term appears in shared section
      const fresh = await fetchLiveTerms(loc.id);
      setLiveTerms(fresh);
    }
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

        {/* ── Perception section ── */}
        {character && (
          <div className="perception-section">
            <div className="section-hdr" style={{ marginTop: 0 }}>AI PERCEPTION</div>

            {/* User's own character view */}
            <div className="perception-card" style={{ '--cc': character.color }}>
              <div className="perception-card-left">
                <div className="perception-card-emoji">{character.emoji}</div>
                <div className="perception-card-info">
                  <div className="perception-card-label">YOUR VIEW</div>
                  <div className="perception-card-name">{character.name}</div>
                  <div className="perception-card-hint">Your character's perspective</div>
                </div>
              </div>
              <button className="perception-card-btn" onClick={() => setShowPerception(true)}>
                ✦ Generate
              </button>
            </div>

            {/* Stakeholder list */}
            <div className="stakeholder-perception-intro">
              <span className="stakeholder-perception-intro-icon">◉</span>
              <span>
                Want to see <strong>{loc.name[lang]}</strong> through a different lens?
                Pick any stakeholder below to generate an AI image from their exact angle —
                pigeons see from above, stones see in macro, ghosts see across time.
              </span>
            </div>
            <div className="stakeholder-perception-list">
              {[
                ...owners.map(o   => ({ text: o,  tag: 'ACTIVE',   tagClass: 'tag-a' })),
                ...ghosts.map(g   => ({ text: g,  tag: 'RESIDUAL', tagClass: 'tag-g' })),
                ...temporals.map(tp => ({ text: tp, tag: 'TEMPORAL', tagClass: 'tag-t' })),
              ].map((item, i) => (
                <button
                  key={i}
                  className="stakeholder-gen-item"
                  onClick={() => setStakeholderPerception({ text: item.text, label: item.text })}
                >
                  <span className={`tag ${item.tagClass}`}>{item.tag}</span>
                  <span className="stakeholder-gen-text">{item.text}</span>
                  <span className="stakeholder-gen-action">✦ Generate</span>
                </button>
              ))}
            </div>
          </div>
        )}

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
        <div className="slider-era">{getEra(year)}</div>
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
        {sharedEnabled && (
          <div className="shared-terms-hint">
            ◎ Visible to all visitors for 5 minutes.
          </div>
        )}
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

        {/* Funny 5-min confirmation */}
        {inscribeMsg && (
          <div className="inscribe-confirm" style={{ borderColor: color }}>
            <span className="inscribe-confirm-icon">⏳</span>
            <span>
              <strong>Inscribed.</strong> Vanishes in 5 minutes.<br />
              <em>{inscribeMsg}</em>
            </span>
          </div>
        )}

        {userTerms.length > 0 && (
          <div>
            <div className="stakeholder">{t.stakeholder}</div>
            {userTerms.map((term, i) => (
              <div key={i} className="stored-term">↳ {term}</div>
            ))}
          </div>
        )}

        {/* Live shared terms from other visitors */}
        {liveTerms.length > 0 && (
          <>
            <div className="section-hdr" style={{ marginTop: '0.75rem' }}>
              LIVE INSCRIPTIONS
              <span className="live-dot" />
            </div>
            {liveTerms.map((t, i) => (
              <div key={i} className="live-term">
                <span className="live-term-char">
                  {CHAR_EMOJI[t.characterId] || '?'}
                </span>
                <span className="live-term-text">{t.text}</span>
                <span className="live-term-meta">
                  {minsLeft(t.createdAt)}m left · {minsAgo(t.createdAt)}
                </span>
              </div>
            ))}
          </>
        )}

        {/* ── Collective memory ── */}
        {collectiveStats && character && (
          <>
            <hr className="divider" />
            <div className="collective-block collective-block--accept">
              <span className="collective-label">COLLECTIVE MEMORY</span>
              <span className="collective-text">
                You are <strong>{character.name} #{collectiveStats.count}</strong> to access a space in this city.
              </span>
            </div>
          </>
        )}

        <hr className="divider" />
        <div className="back-hint">Return to map to see your full stats.</div>
        <button className="back-btn" onClick={onReset}>{t.backToMap}</button>
      </div>

      {showPerception && character && (
        <PerceptionModal
          locationName={loc.name[lang]}
          cityName={cityName}
          locationId={loc.id}
          character={character}
          onClose={() => setShowPerception(false)}
        />
      )}

      {stakeholderPerception && character && (
        <PerceptionModal
          locationName={loc.name[lang]}
          cityName={cityName}
          locationId={loc.id}
          character={character}
          stakeholder={stakeholderPerception}
          onClose={() => setStakeholderPerception(null)}
        />
      )}
    </>
  );
}
