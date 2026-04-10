// Floating game-HUD cards shown on the home screen (view === 'intro')
// when the player has visited at least one location.

export default function HomeHUD({
  character, totalAccepts, totalDeclines,
  consentLogCount, collectiveStats,
  onShowConsentLog, onShowFate,
}) {
  const total = totalAccepts + totalDeclines;
  if (!character || total === 0) return null;

  const isCompliant   = totalAccepts > totalDeclines;
  const compliance    = total > 0 ? Math.round((totalAccepts / total) * 100) : 0;
  const showConsent   = consentLogCount > 0;
  const showFate      = total >= 4;
  const showCollective = collectiveStats != null;

  return (
    <div className="home-hud">

      {/* ── Collective memory chip (top, full width) ── */}
      {showCollective && (
        <div className="hud-collective">
          <span className="hud-collective-dot" />
          You are <strong>{character.name} #{collectiveStats.count}</strong> to{' '}
          {collectiveStats.action === 'accept' ? 'enter a space' : 'refuse entry'}.
        </div>
      )}

      {/* ── Card row ── */}
      <div className="hud-row">

        {/* Card 1 — Character passport (always shown) */}
        <div
          className="hud-card hud-card--passport"
          style={{ '--cc': character.color, animationDelay: '0ms', '--float-dur': '3.2s' }}
        >
          <span className="hud-emoji">{character.emoji}</span>
          <div className="hud-passport-body">
            <div className="hud-passport-label">playing as</div>
            <div className="hud-passport-name" style={{ color: character.color }}>
              {character.name}
            </div>
            <div className="hud-score-row">
              <span className="hud-score-val hud-score-val--accept">✓{totalAccepts}</span>
              <div className="hud-score-bar">
                <div
                  className="hud-score-fill"
                  style={{
                    width: `${compliance}%`,
                    background: isCompliant ? '#00e87a' : '#e82020',
                  }}
                />
              </div>
              <span className="hud-score-val hud-score-val--decline">✗{totalDeclines}</span>
            </div>
          </div>
        </div>

        {/* Card 2 — Consent log */}
        {showConsent && (
          <button
            className="hud-card hud-card--consent"
            style={{ animationDelay: '120ms', '--float-dur': '2.7s' }}
            onClick={onShowConsentLog}
          >
            <span className="hud-consent-count">{consentLogCount}</span>
            <div className="hud-consent-body">
              <div className="hud-consent-label">CLAUSES</div>
              <div className="hud-consent-sub">agreed to</div>
              <div className="hud-consent-cta">VIEW ▶</div>
            </div>
          </button>
        )}

        {/* Card 3 — City fate report */}
        {showFate && (
          <button
            className="hud-card hud-card--fate"
            style={{ animationDelay: '240ms', '--float-dur': '3.7s' }}
            onClick={onShowFate}
          >
            <span className="hud-fate-icon">{isCompliant ? '🏷️' : '🚫'}</span>
            <div className="hud-fate-body">
              <div className="hud-fate-label">CITY REPORT</div>
              <div className={`hud-fate-verdict ${isCompliant ? 'hud-fate-verdict--c' : 'hud-fate-verdict--r'}`}>
                {isCompliant ? 'COMPLIANT' : 'RESISTANT'}
              </div>
              <div className="hud-fate-cta">VIEW ▶</div>
            </div>
          </button>
        )}

      </div>
    </div>
  );
}
