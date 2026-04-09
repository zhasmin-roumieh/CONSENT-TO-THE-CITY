import IntroScreen from './IntroScreen';
import TermsScreen from './TermsScreen';
import IdentityScreen from './IdentityScreen';
import AccessGranted from './AccessGranted';
import AccessDenied from './AccessDenied';

export default function Panel({
  view, loc, cityKey, tcHtml, ownerData, userTerms, identity, lang,
  onAccept, onDecline, onAddTerm, onReset, onReconsider, onIdentitySet,
}) {
  return (
    <div className={`panel panel--${view}`}>
      {view === 'intro' && <IntroScreen lang={lang} />}

      {view === 'terms' && loc && (
        <TermsScreen
          key={loc.id + lang}
          loc={loc}
          cityKey={cityKey}
          tcHtml={tcHtml}
          lang={lang}
          onAccept={onAccept}
          onDecline={onDecline}
        />
      )}

      {view === 'identity' && loc && (
        <IdentityScreen
          key={loc.id + '-identity-' + lang}
          loc={loc}
          cityKey={cityKey}
          lang={lang}
          onIdentitySet={onIdentitySet}
        />
      )}

      {view === 'granted' && loc && (
        <AccessGranted
          key={loc.id + '-granted-' + lang}
          loc={loc}
          cityKey={cityKey}
          ownerData={ownerData}
          userTerms={userTerms}
          identity={identity}
          lang={lang}
          onAddTerm={onAddTerm}
          onReset={onReset}
        />
      )}

      {view === 'denied' && loc && (
        <AccessDenied
          key={loc.id + '-denied-' + lang}
          loc={loc}
          cityKey={cityKey}
          lang={lang}
          onReconsider={onReconsider}
          onReset={onReset}
        />
      )}
    </div>
  );
}
