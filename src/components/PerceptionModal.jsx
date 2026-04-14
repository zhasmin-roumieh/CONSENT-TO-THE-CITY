import { useState } from 'react';
import { buildPerceptionPrompt, buildStakeholderPrompt } from '../lib/perceptionPrompts';

function buildImageUrl(prompt) {
  const seed = Math.floor(Math.random() * 999999);
  return (
    'https://image.pollinations.ai/prompt/' +
    encodeURIComponent(prompt) +
    `?model=flux-realism&width=1024&height=768&seed=${seed}&nologo=true`
  );
}

/**
 * Props:
 *   character       — always required (for emoji + color)
 *   locationName    — string
 *   cityName        — string
 *   stakeholder     — optional { text, label } — single stakeholder mode (from AccessGranted)
 *   stakeholderList — optional [{ text, tag, tagClass }] — picker mode (from map button)
 *   onClose         — function
 */
export default function PerceptionModal({
  character, locationName, cityName, locationId,
  stakeholder, stakeholderList, onClose,
}) {
  const isPicker = !!stakeholderList;     // map-button mode: show tab picker
  const isSingle = !!stakeholder && !isPicker; // AccessGranted single-stakeholder mode

  const [tab, setTab]               = useState('own'); // 'own' | 'stakeholders'
  const [userText, setUserText]     = useState('');
  const [activeStakeholder, setActiveStakeholder] = useState(null); // { text, label }
  const [imageUrl, setImageUrl]     = useState(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);

  // Determine what prompt to build
  function generate(overrideStakeholder) {
    setError(null);
    setLoading(true);
    setImageUrl(null);
    const sh = overrideStakeholder ?? (isSingle ? stakeholder : activeStakeholder);
    const prompt = sh
      ? buildStakeholderPrompt(locationName, cityName, sh.text, userText, locationId)
      : buildPerceptionPrompt(locationName, cityName, character.id, userText, locationId);
    setImageUrl(buildImageUrl(prompt));
  }

  function handleStakeholderClick(item) {
    const sh = { text: item.text, label: item.text };
    setActiveStakeholder(sh);
    setUserText('');
    generate(sh);
  }

  function handleKey(e) {
    if (e.key === 'Enter') generate();
    if (e.key === 'Escape') onClose();
  }

  // What label + subtitle to show in header
  const headerTitle = activeStakeholder?.label ?? (isSingle ? stakeholder.label : character.name);
  const headerSub   = activeStakeholder
    ? `ownership claim in ${locationName}`
    : isSingle
      ? `ownership claim in ${locationName}`
      : `perception of ${locationName}`;

  const canRegenerate = imageUrl && !loading && !error;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="perception-modal" onClick={e => e.stopPropagation()}>

        {/* ── Header ── */}
        <div className="perception-header">
          <span className="perception-char-emoji" style={{ '--cc': character.color }}>
            {character.emoji}
          </span>
          <div className="perception-titles">
            <div className="perception-title">{headerTitle}</div>
            <div className="perception-subtitle">{headerSub}</div>
          </div>
          <button className="perception-close" onClick={onClose}>✕</button>
        </div>

        {/* ── Tab bar (only in picker mode) ── */}
        {isPicker && (
          <div className="perception-tabs">
            <button
              className={`perception-tab${tab === 'own' ? ' perception-tab--active' : ''}`}
              onClick={() => { setTab('own'); setActiveStakeholder(null); setImageUrl(null); setError(null); }}
            >
              ✏ Your perception
            </button>
            <button
              className={`perception-tab${tab === 'stakeholders' ? ' perception-tab--active' : ''}`}
              onClick={() => { setTab('stakeholders'); setImageUrl(null); setError(null); }}
            >
              ◉ Stakeholders
            </button>
          </div>
        )}

        {/* ── OWN PERCEPTION pane ── */}
        {(!isPicker || tab === 'own') && !isSingle && (
          <div className="perception-input-row">
            <input
              className="perception-input"
              placeholder="Add your own vision (optional)..."
              value={userText}
              onChange={e => setUserText(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="perception-generate-btn"
              onClick={() => generate()}
              disabled={loading}
            >
              {loading ? '...' : '✦ Generate'}
            </button>
          </div>
        )}

        {/* ── SINGLE STAKEHOLDER pane (from AccessGranted) ── */}
        {isSingle && (
          <div className="perception-input-row">
            <input
              className="perception-input"
              placeholder="Add your own vision (optional)..."
              value={userText}
              onChange={e => setUserText(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="perception-generate-btn"
              onClick={() => generate()}
              disabled={loading}
            >
              {loading ? '...' : '✦ Generate'}
            </button>
          </div>
        )}

        {/* ── STAKEHOLDERS LIST pane ── */}
        {isPicker && tab === 'stakeholders' && (
          <div className="perception-stakeholder-pane">
            <p className="perception-stakeholder-hint">
              Pick a stakeholder — the image will be generated from their exact vantage point.
            </p>
            <div className="perception-stakeholder-list">
              {stakeholderList.map((item, i) => (
                <button
                  key={i}
                  className={`perception-sh-row${activeStakeholder?.text === item.text ? ' perception-sh-row--active' : ''}`}
                  onClick={() => handleStakeholderClick(item)}
                  disabled={loading}
                >
                  <span className={`tag ${item.tagClass}`}>{item.tag}</span>
                  <span className="perception-sh-text">{item.text}</span>
                  <span className="perception-sh-gen">
                    {loading && activeStakeholder?.text === item.text ? '...' : '✦'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Image canvas ── */}
        <div className="perception-canvas">
          {loading && !error && (
            <div className="perception-loading">
              <div className="perception-spinner" style={{ borderTopColor: character.color }} />
              <span>Generating perception<br /><small>10–30 seconds</small></span>
            </div>
          )}
          {error && (
            <div className="perception-error">
              ⚠ {error}
              <button className="perception-retry" onClick={() => generate()}>Try again</button>
            </div>
          )}
          {imageUrl && (
            <img
              className="perception-img"
              src={imageUrl}
              alt={`${headerTitle} perception of ${locationName}`}
              style={{ display: loading ? 'none' : 'block' }}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError('Generation failed. Service may be busy — try again.');
                setImageUrl(null);
              }}
            />
          )}
          {!loading && !imageUrl && !error && (
            <div className="perception-empty">
              <span style={{ fontSize: 36 }}>{character.emoji}</span>
              <p>
                {isPicker && tab === 'stakeholders'
                  ? 'Pick a stakeholder above to generate their view'
                  : isSingle
                    ? `How does "${stakeholder.label}" see ${locationName}?`
                    : `What does ${locationName} look like through ${character.name}'s eyes?`
                }
              </p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        {canRegenerate && (
          <div className="perception-footer">
            <button className="perception-regen" onClick={() => generate()}>↺ Regenerate</button>
            <a
              className="perception-download"
              href={imageUrl}
              download={`perception-${locationName}.jpg`}
              target="_blank"
              rel="noreferrer"
            >
              ↓ Save image
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
