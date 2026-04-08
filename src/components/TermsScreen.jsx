import { useState } from 'react';
import { UI } from '../i18n/ui';
import { TYPE_COLORS } from '../lib/utils';
import { CITIES } from '../data/cities';
import { PHOTOS } from '../data/photos';

export default function TermsScreen({ loc, cityKey, tcHtml, lang, onAccept, onDecline }) {
  const t = UI[lang];
  const color = TYPE_COLORS[loc.type] || '#888888';
  const cityName = CITIES[cityKey]?.name[lang] || cityKey;
  const now = new Date();
  const ts = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  const photoUrl = PHOTOS[loc.id];
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <>
      <div className="panel-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />

      {photoUrl && photoOk && (
        <div className="loc-photo-wrap">
          <img
            className="loc-photo"
            src={photoUrl}
            alt={loc.name[lang]}
            onError={() => setPhotoOk(false)}
          />
          <div className="loc-photo-gradient" />
        </div>
      )}

      <div className="panel-inner">
        <div className="loc-pill">
          <span className="loc-pill-dot" style={{ background: color }} />
          <span>{loc.name[lang]}</span>
          <span className="loc-pill-city">{cityName}</span>
        </div>
        <div className="atmo">{loc.atmo[lang]}</div>
        <div className="warn-box">
          ⚠ <strong>{t.termsTitle}</strong><br />
          <span style={{ fontSize: '10px', opacity: 0.85 }}>{t.termsSubtitle}</span>
        </div>
        <div className="tc-card">
          <div className="tc-meta">{t.termsIssued} {ts} {t.termsValid}</div>
          <div className="tc-body" dangerouslySetInnerHTML={{ __html: tcHtml }} />
        </div>
        <div className="consent-row">
          <button className="btn-accept" onClick={onAccept}>{t.accept}</button>
          <button className="btn-decline" onClick={onDecline}>{t.decline}</button>
        </div>
      </div>
    </>
  );
}
