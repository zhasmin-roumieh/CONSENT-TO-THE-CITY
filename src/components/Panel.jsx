import IntroScreen from './IntroScreen';
import TermsScreen from './TermsScreen';
import IdentityScreen from './IdentityScreen';
import AccessGranted from './AccessGranted';
import AccessDenied from './AccessDenied';
import CounterOfferScreen from './CounterOfferScreen';
import { TYPE_COLORS } from '../lib/utils';

export default function Panel({
  view, loc, cityKey, tcHtml, ownerData, userTerms, identity, lang,
  counterOfferIdx, character, consentLogCount, collectiveStats,
  totalAccepts, totalDeclines,
  onAccept, onDecline, onCounterOfferAccept, onCounterOfferDecline,
  onAddTerm, onReset, onReconsider, onIdentitySet,
  onShowConsentLog, onShowFate,
}) {
  const locColor = loc ? (TYPE_COLORS[loc.type] || '#888888') : '#888888';
  const showTriangle = view !== 'intro' && loc;

  return (
    <>
      {showTriangle && (
        <div className="panel-triangle" style={{ '--loc-color': locColor }} />
      )}
      <div className={`panel panel--${view}`} style={{ '--loc-color': locColor }}>
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

        {view === 'counter-offer' && (
          <CounterOfferScreen
            idx={counterOfferIdx}
            onAccept={onCounterOfferAccept}
            onDecline={onCounterOfferDecline}
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
            character={character}
            consentLogCount={consentLogCount}
            collectiveStats={collectiveStats}
            totalLocations={totalAccepts + totalDeclines}
            onAddTerm={onAddTerm}
            onReset={onReset}
            onShowConsentLog={onShowConsentLog}
            onShowFate={onShowFate}
          />
        )}

        {view === 'denied' && loc && (
          <AccessDenied
            key={loc.id + '-denied-' + lang}
            loc={loc}
            cityKey={cityKey}
            lang={lang}
            character={character}
            collectiveStats={collectiveStats}
            totalLocations={totalAccepts + totalDeclines}
            onReconsider={onReconsider}
            onReset={onReset}
            onShowFate={onShowFate}
          />
        )}
      </div>
    </>
  );
}
