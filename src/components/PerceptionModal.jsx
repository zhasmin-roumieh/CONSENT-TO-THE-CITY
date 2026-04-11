import { useState } from 'react';
import { buildPerceptionPrompt } from '../lib/perceptionPrompts';

const WORKER_URL = import.meta.env.VITE_WORKER_URL;

export default function PerceptionModal({ locationName, cityName, character, onClose }) {
  const [userText, setUserText]   = useState('');
  const [imageUrl, setImageUrl]   = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [currentPrompt, setCurrentPrompt] = useState('');

  async function generate() {
    if (!WORKER_URL) {
      setError('Image generation not configured yet.');
      return;
    }
    setLoading(true);
    setError(null);
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setImageUrl(null);

    const prompt = buildPerceptionPrompt(locationName, cityName, character.id, userText);
    setCurrentPrompt(prompt);

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Server error ${res.status}`);
      }

      const blob = await res.blob();
      setImageUrl(URL.createObjectURL(blob));
    } catch (e) {
      setError(e.message || 'Generation failed. The model may be loading — try again in 20 seconds.');
    } finally {
      setLoading(false);
    }
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
            placeholder="Describe your vision (optional)..."
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
          {loading && (
            <div className="perception-loading">
              <div className="perception-spinner" style={{ borderTopColor: character.color }} />
              <span>Generating perception<br /><small>10–30 seconds</small></span>
            </div>
          )}

          {error && !loading && (
            <div className="perception-error">
              ⚠ {error}
              <button className="perception-retry" onClick={generate}>Try again</button>
            </div>
          )}

          {imageUrl && !loading && (
            <img
              className="perception-img"
              src={imageUrl}
              alt={`${character.name}'s perception of ${locationName}`}
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

        {imageUrl && !loading && (
          <div className="perception-footer">
            <button className="perception-regen" onClick={generate}>↺ Regenerate</button>
            <a
              className="perception-download"
              href={imageUrl}
              download={`${character.id}-${locationName}.jpg`}
            >
              ↓ Save image
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
