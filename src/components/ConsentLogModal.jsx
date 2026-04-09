import { useEffect } from 'react';

export default function ConsentLogModal({ consentLog, onClose }) {
  // Close on ESC
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card consent-log-card" onClick={e => e.stopPropagation()}>
        <div className="cl-header">
          <div className="cl-eyebrow">⚠ FULL CONSENT RECORD</div>
          <div className="cl-title">Everything you agreed to.</div>
          <div className="cl-sub">Automatically. By entering spaces.</div>
        </div>

        <div className="cl-list">
          {consentLog.map((item, i) => (
            <div key={i} className="cl-item">
              <span className="cl-num">{String(i + 1).padStart(2, '0')}.</span>
              <span className="cl-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="cl-footer">
          <div className="cl-total">
            {consentLog.length} clauses accepted. All binding. All permanent.
          </div>
          <button className="cl-close-btn" onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}
