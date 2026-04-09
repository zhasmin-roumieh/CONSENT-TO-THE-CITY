import { UI } from '../i18n/ui';
import { TYPE_COLORS } from '../lib/utils';
import { CITIES } from '../data/cities';
import { useLocationPhoto } from '../lib/useLocationPhoto';

export default function TermsScreen({ loc, cityKey, tcHtml, lang, onAccept, onDecline }) {
  const t = UI[lang];
  const color = TYPE_COLORS[loc.type] || '#888888';
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;
  const now = new Date();
  const ts = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  const photoSrc = useLocationPhoto(loc.id);

  return (
    <>
      <div className="panel-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />

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
            <div className="loc-hero-atmo">{loc.atmo[lang]}</div>
          </div>
        </div>

        <div className="warn-box" style={{ borderColor: color, backgroundColor: color + '28', boxShadow: `0 0 12px ${color}44` }}>
          ⚠ <strong>{t.termsTitle}</strong><br />
          <span style={{ fontSize: '10px', opacity: 0.85 }}>{t.termsSubtitle}</span>
        </div>
        <div className="tc-card">
          <div className="tc-meta">{t.termsIssued} {ts} {t.termsValid}</div>
          <div className="tc-body" dangerouslySetInnerHTML={{ __html: tcHtml }} />
        </div>
        <div className="consent-row">
          <button className="btn-accept" style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }} onClick={onAccept}>{t.accept}</button>
          <button className="btn-decline" onClick={onDecline}>{t.decline}</button>
        </div>
      </div>
    </>
  );
}
