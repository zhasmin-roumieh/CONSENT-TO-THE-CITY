import { useEffect } from 'react';
import { FATES } from '../data/fates';

export default function FateModal({ character, totalAccepts, totalDeclines, onClose }) {
  const total = totalAccepts + totalDeclines;
  const isCompliant = totalAccepts > totalDeclines;
  const fateKey = isCompliant ? 'compliant' : 'resistant';
  const fateText = character ? (FATES[character.id]?.[fateKey] ?? '') : '';
  const complianceRate = total > 0 ? Math.round((totalAccepts / total) * 100) : 0;

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card fate-card" onClick={e => e.stopPropagation()}>
        <div className="fate-eyebrow">CITY REPORT</div>

        {character && (
          <div className="fate-character" style={{ '--cc': character.color }}>
            <span className="fate-emoji">{character.emoji}</span>
            <span className="fate-charname">{character.name}</span>
          </div>
        )}

        <div
          className={`fate-verdict ${isCompliant ? 'fate-verdict--compliant' : 'fate-verdict--resistant'}`}
        >
          {isCompliant ? 'COMPLIANT' : 'RESISTANT'}
        </div>

        <p className="fate-text">{fateText}</p>

        <div className="fate-stats">
          <div className="fate-stat">
            <span className="fate-stat-val">{totalAccepts}</span>
            <span className="fate-stat-lbl">ACCEPTED</span>
          </div>
          <div className="fate-stat-bar">
            <div
              className="fate-stat-fill"
              style={{
                width: `${complianceRate}%`,
                background: isCompliant ? '#00e87a' : '#e82020',
              }}
            />
          </div>
          <div className="fate-stat">
            <span className="fate-stat-val">{totalDeclines}</span>
            <span className="fate-stat-lbl">REFUSED</span>
          </div>
        </div>

        <div className="fate-footer">
          <span className="fate-footer-note">{total} spaces negotiated</span>
          <button className="fate-close-btn" onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}
