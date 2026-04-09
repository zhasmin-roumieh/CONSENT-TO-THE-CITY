import { COUNTER_OFFERS } from '../data/counterOffers';

export default function CounterOfferScreen({ idx, onAccept, onDecline }) {
  const offer = COUNTER_OFFERS[Math.min(idx, COUNTER_OFFERS.length - 1)];
  const { tag, title, body, ctaAccept, ctaDecline, accentColor, locked } = offer;

  return (
    <>
      <div
        className="panel-accent"
        style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}44)` }}
      />
      <div className="panel-inner">
        <div className="co-step-tag" style={{ color: accentColor, borderColor: accentColor + '55' }}>
          {tag}
        </div>

        {locked ? (
          <div className="co-locked-icon">⛔</div>
        ) : (
          <div className="co-step-num" style={{ color: accentColor }}>
            OFFER {idx + 1} OF {COUNTER_OFFERS.length - 1}
          </div>
        )}

        {title && (
          <div className="co-title">{title}</div>
        )}

        <div className={`co-body${locked ? ' co-body--locked' : ''}`}>{body}</div>

        <div className="consent-row" style={{ marginTop: '1.5rem' }}>
          {ctaAccept && (
            <button
              className="btn-accept"
              style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)` }}
              onClick={onAccept}
            >
              {ctaAccept}
            </button>
          )}
          <button
            className={locked ? 'btn-decline btn-decline--leave' : 'btn-decline'}
            onClick={onDecline}
          >
            {ctaDecline}
          </button>
        </div>

        {!locked && (
          <div className="co-warning">
            Declining again will escalate your access review.
          </div>
        )}
      </div>
    </>
  );
}
