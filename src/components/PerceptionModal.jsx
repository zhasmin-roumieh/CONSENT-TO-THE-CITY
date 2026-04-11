import { useState } from 'react';
import { buildPerceptionPrompt } from '../lib/perceptionPrompts';

// Pollinations.ai — free, browser-callable, no API key required
function buildImageUrl(prompt) {
  const seed = Math.floor(Math.random() * 999999);
  return (
    'https://image.pollinations.ai/prompt/' +
    encodeURIComponent(prompt) +
    `?model=flux&width=1024&height=768&seed=${seed}&nologo=true`
  );
}

export default function PerceptionModal({ locationName, cityName, character, onClose }) {
  const [userText, setUserText] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  function generate() {
    setError(null);
    setLoading(true);
    setImageUrl(null);
    const prompt = buildPerceptionPrompt(locationName, cityName, character.id, userText);
    setImageUrl(buildImageUrl(prompt));
  }

  function handleKey(e) {
    if (e.key === 'Enter') generate();
    if (e.key === 'Escape') onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="perception-modal" onClick={e => e.stopPropagation()}>

        <div className="perception-header">
          <span className="perception-char-emoji" style={{ '--cc': character.color }}>
            {character.emoji}
          </span>
          <div className="perception-titles">
            <div className="perception-title">{locationName}</div>
            <div className="perception-subtitle">through {character.name}'s eyes</div>
          </div>
          <button className="perception-close" onClick={onClose}>✕</button>
        </div>

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
            onClick={generate}
            disabled={loading}
          >
            {loading ? '...' : '✦ Generate'}
          </button>
        </div>

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
              <button className="perception-retry" onClick={generate}>Try again</button>
            </div>
          )}

          {imageUrl && (
            <img
              className="perception-img"
              src={imageUrl}
              alt={`${character.name}'s perception of ${locationName}`}
              style={{ display: loading ? 'none' : 'block' }}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError('Generation failed. The service may be busy — try again.');
                setImageUrl(null);
              }}
            />
          )}

          {!loading && !imageUrl && !error && (
            <div className="perception-empty">
              <span style={{ fontSize: 36 }}>{character.emoji}</span>
              <p>
                What does {locationName} look like<br />
                to a {character.name}?
              </p>
            </div>
          )}
        </div>

        {imageUrl && !loading && !error && (
          <div className="perception-footer">
            <button className="perception-regen" onClick={generate}>↺ Regenerate</button>
            <a
              className="perception-download"
              href={imageUrl}
              download={`${character.id}-${locationName}.jpg`}
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
