import { UI } from '../i18n/ui';

export default function IntroScreen({ lang }) {
  const t = UI[lang];
  return (
    <div className="intro-box">
      <div className="intro-title">{t.introTitle}</div>
      <div className="intro-body">{t.introBody}</div>
      <div className="intro-sub">{t.introSub}</div>
    </div>
  );
}
