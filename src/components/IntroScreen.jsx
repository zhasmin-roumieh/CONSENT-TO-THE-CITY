import { UI } from '../i18n/ui';

export default function IntroScreen({ lang }) {
  const t = UI[lang];
  return (
    <div className="intro-box">
      <div className="intro-how">
        <div className="intro-how-dot" />
        <span className="intro-how-label">How to play</span>
      </div>
      <div className="intro-body">
        <strong>Click any marker</strong> on the map to reveal that location's Terms &amp; Conditions — then decide whether to accept or decline access.
      </div>
      <div className="intro-sub">{t.introBody}</div>
    </div>
  );
}
