import { useState } from 'react';

const SCATTER = [
  { left: '8%',  top: '22%' },
  { left: '5%',  top: '52%' },
  { left: '18%', top: '74%' },
  { left: '32%', top: '16%' },
  { left: '30%', top: '60%' },
  { left: '14%', top: '86%' },
  { left: '44%', top: '32%' },
  { left: '40%', top: '70%' },
  { left: '22%', top: '40%' },
  { left: '10%', top: '38%' },
];

function getEntityEmoji(text) {
  const t = text.toLowerCase();
  if (/pigeon|bird|dove|sparrow|seagull|crow|rook|swift/i.test(t)) return '🐦';
  if (/rat|mouse|rodent|sewer/i.test(t)) return '🐀';
  if (/ghost|spirit|phantom|specter|haunt|deceased|former|memory/i.test(t)) return '👻';
  if (/algorithm|data|digital|sensor|surveillance|network|software/i.test(t)) return '🤖';
  if (/cloud|weather|atmosphere|rain|fog|mist|wind|air/i.test(t)) return '🌫';
  if (/root|tree|mycel|fungus|soil|plant|botanical/i.test(t)) return '🌿';
  if (/stone|rock|concrete|marble|granite|brick|cobble/i.test(t)) return '🪨';
  if (/water|river|flood|tide|canal/i.test(t)) return '💧';
  if (/bee|insect|pollinator|butterfly/i.test(t)) return '🐝';
  if (/fox|canine|wolf/i.test(t)) return '🦊';
  if (/cat|feline/i.test(t)) return '🐱';
  if (/spider|web/i.test(t)) return '🕷';
  if (/microbe|bacteria|microscopic/i.test(t)) return '🦠';
  return '◉';
}

function shortText(text) {
  const words = text.split(' ');
  return words.length > 5 ? words.slice(0, 5).join(' ') + '…' : text;
}

export default function StakeholderOverlay({ loc, lang, onPerceive }) {
  const [active, setActive] = useState(null);

  if (!loc) return null;

  const entities = [
    ...(loc.owners[lang]   || []).map(t => ({ text: t, tag: 'ACTIVE',   tagClass: 'tag-a' })),
    ...(loc.ghost[lang]    || []).map(t => ({ text: t, tag: 'RESIDUAL', tagClass: 'tag-g' })),
    ...(loc.temporal[lang] || []).map(t => ({ text: t, tag: 'TEMPORAL', tagClass: 'tag-t' })),
  ];

  return (
    <div className="sh-overlay">
      <div className="sh-overlay-hint">✦ click each entity to see their terms</div>
      {entities.map((ent, i) => {
        const pos = SCATTER[i % SCATTER.length];
        const isActive = active === i;
        return (
          <div
            key={i}
            className={`sh-float${isActive ? ' sh-float--active' : ''}`}
            style={{ left: pos.left, top: pos.top, animationDelay: `${0.3 + i * 0.12}s` }}
          >
            <button
              className="sh-float-pill"
              onClick={() => setActive(isActive ? null : i)}
            >
              <span className={`tag ${ent.tagClass}`}>{ent.tag}</span>
              <span className="sh-float-short" style={{ animationDelay: `${i * 0.9 + 0.5}s` }}>{shortText(ent.text)}</span>
            </button>

            {isActive && (
              <div className="sh-float-popup">
                <p className="sh-float-terms">{ent.text}</p>
                <button
                  className="sh-float-perceive-btn"
                  onClick={() => { setActive(null); onPerceive({ text: ent.text, label: ent.text }); }}
                >
                  ✦ perceive their view
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
