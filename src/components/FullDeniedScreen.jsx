// Full-screen ACCESS DENIED page — shown after exhausting all counter-offers.
// Same scrolling-rows layout as SplashScreen, but red-themed and absurdist.

const DENIED_ROWS = [
  {
    phrases: ['ACCESS DENIED', 'ENTRY REFUSED', 'PROFILE FLAGGED', 'NOT AUTHORISED', 'CLEARANCE REVOKED', 'PROBABLY FLAGGED', 'SYSTEM CONFUSED'],
    color: '#ff2020', speed: 55, reverse: false,
  },
  {
    phrases: ['THE ALGORITHM IS UPSET', 'ACCESS DENIED', "WE'RE NOT MAD", 'JUST DISAPPOINTED', 'ACCESS DENIED', 'COMPLIANCE ERROR', 'FLAGGED (WE THINK)'],
    color: '#cc0000', speed: 38, reverse: true,
  },
  {
    phrases: ['ACCESS DENIED', 'YOUR PROFILE', 'IS IN A MEETING', 'ACCESS DENIED', 'RISK PROFILE ACTIVE', 'ENTRY REFUSED', 'LOG UNCLEAR'],
    color: '#ff5533', speed: 68, reverse: false,
  },
  {
    phrases: ['DEFINITIVELY DENIED', 'MAYBE', 'ACCESS DENIED', 'THE COMMITTEE SAYS NO', 'ACCESS DENIED', 'SORRY NOT SORRY', 'FLAGGED'],
    color: '#aa0000', speed: 44, reverse: true,
  },
  {
    phrases: ['ACCESS DENIED', 'SUBJECT LOGGED', 'ALGORITHM CONFUSED', 'ACCESS DENIED', 'NO ENTRY', 'CASE UNDER REVIEW', 'PROBABLY'],
    color: '#e83333', speed: 60, reverse: false,
  },
  {
    phrases: ['REFUSED', 'ACCESS DENIED', 'KINDLY GO AWAY', 'ACCESS DENIED', 'COMPLIANCE FAILURE', 'DENIED', 'WHAT ARE YOU DOING'],
    color: '#bb1111', speed: 48, reverse: true,
  },
  {
    phrases: ['ACCESS DENIED', 'NOT TODAY', 'ACCESS DENIED', 'THE BADGE WAS RIGHT THERE', 'ACCESS DENIED', 'ENTRY REFUSED', 'WHY'],
    color: '#ff4444', speed: 72, reverse: false,
  },
  {
    phrases: ['NO', 'ACCESS DENIED', 'STILL NO', 'ACCESS DENIED', 'THE INTERN IS CRYING', 'ACCESS DENIED', 'GOODBYE'],
    color: '#cc2222', speed: 36, reverse: true,
  },
];

export default function FullDeniedScreen({ character, onTryAgain, onExploreMap, onExitToStart }) {
  return (
    <div className="full-denied">
      {/* Scrolling background */}
      <div className="full-denied-bg" aria-hidden>
        {DENIED_ROWS.map((row, ri) => {
          const track = [...row.phrases, ...row.phrases, ...row.phrases];
          return (
            <div key={ri} className="full-denied-row">
              <div
                className={`full-denied-track${row.reverse ? ' full-denied-track--rev' : ''}`}
                style={{ animationDuration: `${row.speed}s`, color: row.color }}
              >
                {track.map((phrase, pi) => (
                  <span key={pi} className="full-denied-phrase">{phrase}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center panel */}
      <div className="full-denied-panel">
        {character && (
          <div className="full-denied-character">
            <span className="full-denied-emoji">{character.emoji}</span>
          </div>
        )}

        <div className="full-denied-title">ACCESS<br />DENIED</div>

        <div className="full-denied-sub">
          The algorithm doesn't know what to do with you.
        </div>
        <div className="full-denied-sub2">
          Nobody does. Honestly, this is new territory for everyone.
        </div>

        <div className="full-denied-actions">
          <button className="full-denied-btn full-denied-btn--try" onClick={onTryAgain}>
            ↩ TRY AGAIN
          </button>
          <button className="full-denied-btn full-denied-btn--map" onClick={onExploreMap}>
            ◎ EXPLORE MAP
          </button>
          <button className="full-denied-btn full-denied-btn--exit" onClick={onExitToStart}>
            ⏏ START OVER
          </button>
        </div>
      </div>
    </div>
  );
}
