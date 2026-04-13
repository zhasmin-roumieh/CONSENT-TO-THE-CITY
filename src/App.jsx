import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // kept for MiniMap (react-leaflet)
import Toolbar from './components/Toolbar';
import MapView from './components/MapView';
import Panel from './components/Panel';
import SplashScreen from './components/SplashScreen';
import LoadingScreen from './components/LoadingScreen';
import MiniMap from './components/MiniMap';
import StatsPanel from './components/StatsPanel';
import CharacterSelect from './components/CharacterSelect';
import { CITIES } from './data/cities';
import { TYPE_COLORS } from './lib/utils';
import { TC_T } from './data/content';
import { rnd, getHr, ownerPcts } from './lib/utils';
import { ambientPlayer } from './lib/ambientMusic';
import { pickConsentItems } from './data/consentItems';
import ConsentLogModal from './components/ConsentLogModal';
import FateModal from './components/FateModal';
import FullDeniedScreen from './components/FullDeniedScreen';
import HomeHUD from './components/HomeHUD';
import PerceptionModal from './components/PerceptionModal';

// ─── DEV MODE ───────────────────────────────────────────────────────────────
// Set to true while testing: locks city to Berlin, English only, skips splash.
// Change to false when you're ready to test the full app.
const DEV_MODE = false;
// ────────────────────────────────────────────────────────────────────────────

const CITY_COLORS = {
  berlin:  '#00e87a',
  paris:   '#ff2d9b',
  tokyo:   '#ff4422',
  london:  '#2299ff',
  newyork: '#ffcc00',
  cairo:   '#ff8800',
  mumbai:  '#cc44ff',
  beirut:  '#00ffee',
};

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function App() {
  // 'splash' → 'loading' → 'charselect' → 'app'
  const [phase, setPhase] = useState(DEV_MODE ? 'app' : 'splash');
  const [character, setCharacter] = useState(null);

  const [currentCity, setCurrentCity] = useState('berlin');
  const [currentLoc, setCurrentLoc] = useState(null);
  const [view, setView] = useState('intro');
  const [tcHtml, setTcHtml] = useState('');
  const [ownerData, setOwnerData] = useState(null);
  const [userTermsByLoc, setUserTermsByLoc] = useState({});
  const [identity, setIdentity] = useState(null);
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [musicOn, setMusicOn] = useState(false);

  // ── Interactive mechanics ──────────────────────────────────────────────
  const [consentLog, setConsentLog] = useState([]);          // accumulation reveal
  const [counterOfferIdx, setCounterOfferIdx] = useState(0); // escalation
  const [totalAccepts, setTotalAccepts] = useState(0);       // fate + collective
  const [totalDeclines, setTotalDeclines] = useState(0);
  const [collectiveStats, setCollectiveStats] = useState(null);
  const [showConsentLog, setShowConsentLog] = useState(false);
  const [showFate, setShowFate] = useState(false);
  const [showDeniedScreen, setShowDeniedScreen] = useState(false);
  const [showMapPerception, setShowMapPerception] = useState(false);
  const [perceiveHint, setPerceiveHint] = useState(false);

  const isDark = theme === 'dark' || (theme === null && systemDark());
  const isRTL = lang === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.dataset.theme = 'dark';
    else if (theme === 'light') root.dataset.theme = 'light';
    else delete root.dataset.theme;
  }, [theme]);

  function handleCitySelect(key) {
    setCurrentCity(key);
    setCurrentLoc(null);
    setView('intro');
    setPhase('loading');
  }

  function handleLoadingDone() {
    setPhase('charselect');
  }

  function handleCharacterSelect(c) {
    setCharacter(c);
    setPhase('app');
  }

  function handleMusicToggle() {
    if (musicOn) {
      ambientPlayer.stop();
      setMusicOn(false);
    } else {
      ambientPlayer.play(currentCity);
      setMusicOn(true);
    }
  }

  // When city changes while music is on, crossfade to new city's music
  useEffect(() => {
    if (musicOn) ambientPlayer.setCity(currentCity);
  }, [currentCity]);

  function handleThemeToggle() {
    setTheme(prev => {
      if (prev === null) return isDark ? 'light' : 'dark';
      return prev === 'dark' ? 'light' : 'dark';
    });
  }

  function selectLocation(loc) {
    setCurrentLoc(loc);
    setCounterOfferIdx(0);
    setCollectiveStats(null);
    const hr = getHr();
    const templates = TC_T[lang];
    const picked = templates[rnd(0, templates.length - 1)](loc, hr);
    setTcHtml(picked);
    setView('terms');
  }

  function handleCityChange(key) {
    if (DEV_MODE) return;
    setCurrentCity(key);
    setCurrentLoc(null);
    setView('intro');
  }

  function handleRandom() {
    const city = CITIES[currentCity];
    const loc = city.locations[Math.floor(Math.random() * city.locations.length)];
    selectLocation(loc);
  }

  function bumpAccept(extraItems = 0) {
    const items = pickConsentItems(2 + Math.floor(Math.random() * 2) + extraItems, consentLog);
    setConsentLog(prev => [...prev, ...items]);
    setTotalAccepts(prev => prev + 1);
    if (character) {
      const BASE = 'https://api.counterapi.dev/v1/consent-to-city';
      fetch(`${BASE}/c-${character.id}-a/up`)
        .then(r => r.json())
        .then(d => setCollectiveStats({ action: 'accept', count: d.count }))
        .catch(() => {});
    }
  }

  function bumpDecline() {
    setTotalDeclines(prev => prev + 1);
    if (character) {
      const BASE = 'https://api.counterapi.dev/v1/consent-to-city';
      fetch(`${BASE}/c-${character.id}-d/up`)
        .then(r => r.json())
        .then(d => setCollectiveStats({ action: 'decline', count: d.count }))
        .catch(() => {});
    }
  }

  function handleAccept() {
    setOwnerData(ownerPcts());
    bumpAccept(0);
    setView('identity');
  }

  function handleIdentitySet(id) {
    setIdentity(id);
    setView('granted');
  }

  function handleDecline() {
    // First decline → show first counter-offer
    setCounterOfferIdx(0);
    setView('counter-offer');
  }

  function handleCounterOfferAccept() {
    // User caved after counterOfferIdx refusals — pile on more consent items
    setOwnerData(ownerPcts());
    bumpAccept(counterOfferIdx);   // more items the longer they resisted
    setView('identity');
  }

  function handleCounterOfferDecline() {
    const nextIdx = counterOfferIdx + 1;
    const TOTAL_OFFERS = 5; // COUNTER_OFFERS.length
    if (nextIdx >= TOTAL_OFFERS) {
      // Past last offer — full-screen denied
      bumpDecline();
      setShowDeniedScreen(true);
    } else {
      setCounterOfferIdx(nextIdx);
      // stays on 'counter-offer' view — component re-renders with new idx
    }
  }

  function handleExitToStart() {
    setShowDeniedScreen(false);
    setShowConsentLog(false);
    setShowFate(false);
    setCurrentLoc(null);
    setView('intro');
    setCharacter(null);
    setConsentLog([]);
    setCounterOfferIdx(0);
    setTotalAccepts(0);
    setTotalDeclines(0);
    setCollectiveStats(null);
    setUserTermsByLoc({});
    if (musicOn) { ambientPlayer.stop(); setMusicOn(false); }
    setPhase('splash');
  }

  function handleReconsider() {
    const hr = getHr();
    const templates = TC_T[lang];
    const picked = templates[rnd(0, templates.length - 1)](currentLoc, hr);
    setTcHtml(picked);
    setView('terms');
  }

  function handleAddTerm(text) {
    const locId = currentLoc?.id;
    if (!locId) return;
    setUserTermsByLoc(prev => ({
      ...prev,
      [locId]: [...(prev[locId] || []), text],
    }));
  }

  function handleReset() {
    setCurrentLoc(null);
    setIdentity(null);
    setView('intro');
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && view !== 'intro') handleReset();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view]);

  function handleLangChange(newLang) {
    if (DEV_MODE) return;
    setLang(newLang);
    if (view === 'terms' && currentLoc) {
      const hr = getHr();
      const templates = TC_T[newLang];
      const picked = templates[rnd(0, templates.length - 1)](currentLoc, hr);
      setTcHtml(picked);
    }
  }

  if (phase === 'splash') {
    return <SplashScreen onSelect={handleCitySelect} />;
  }

  if (phase === 'loading') {
    return <LoadingScreen cityKey={currentCity} onDone={handleLoadingDone} />;
  }

  if (phase === 'charselect') {
    return <CharacterSelect cityKey={currentCity} onSelect={handleCharacterSelect} />;
  }

  return (
    <div id="app" dir={isRTL ? 'rtl' : 'ltr'}>
      <header id="site-header">
        <span
          className="site-title"
          style={{ '--title-color': CITY_COLORS[currentCity] || '#00e87a' }}
        >
          CONSENT TO THE CITY
        </span>
        <span className="site-subtitle">urban access simulation</span>
        {character && (
          <div className="character-badge" style={{ '--cc': character.color }}>
            <span className="character-badge-emoji">{character.emoji}</span>
            <span className="character-badge-name">{character.name}</span>
          </div>
        )}
      </header>
      <Toolbar
        currentCity={currentCity}
        lang={lang}
        locCount={CITIES[currentCity].locations.length}
        isDark={isDark}
        musicOn={musicOn}
        onCityChange={handleCityChange}
        onLangChange={handleLangChange}
        onRandom={handleRandom}
        onThemeToggle={handleThemeToggle}
        onMusicToggle={handleMusicToggle}
        onExitToStart={handleExitToStart}
      />
      <div id="map-stage">
        <MiniMap
          currentCity={currentCity}
          locColor={CITY_COLORS[currentCity] || '#00e87a'}
          isDark={isDark}
        />
        {view === 'intro' && <StatsPanel />}
        {view === 'intro' && (
          <HomeHUD
            character={character}
            totalAccepts={totalAccepts}
            totalDeclines={totalDeclines}
            consentLogCount={consentLog.length}
            collectiveStats={collectiveStats}
            onShowConsentLog={() => setShowConsentLog(true)}
            onShowFate={() => setShowFate(true)}
          />
        )}
        <MapView
          currentCity={currentCity}
          currentLocId={currentLoc?.id}
          currentLoc={currentLoc}
          character={character}
          lang={lang}
          isDark={isDark}
          onLocationSelect={selectLocation}
        />
        <Panel
          view={view}
          loc={currentLoc}
          cityKey={currentCity}
          tcHtml={tcHtml}
          ownerData={ownerData}
          userTerms={userTermsByLoc[currentLoc?.id] || []}
          identity={identity}
          lang={lang}
          character={character}
          counterOfferIdx={counterOfferIdx}
          consentLogCount={consentLog.length}
          collectiveStats={collectiveStats}
          totalAccepts={totalAccepts}
          totalDeclines={totalDeclines}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onCounterOfferAccept={handleCounterOfferAccept}
          onCounterOfferDecline={handleCounterOfferDecline}
          onReconsider={handleReconsider}
          onAddTerm={handleAddTerm}
          onReset={handleReset}
          onIdentitySet={handleIdentitySet}
          onShowConsentLog={() => setShowConsentLog(true)}
          onShowFate={() => setShowFate(true)}
        />

        {showConsentLog && (
          <ConsentLogModal
            consentLog={consentLog}
            onClose={() => setShowConsentLog(false)}
          />
        )}
        {showFate && (
          <FateModal
            character={character}
            totalAccepts={totalAccepts}
            totalDeclines={totalDeclines}
            onClose={() => setShowFate(false)}
          />
        )}
        {showDeniedScreen && (
          <FullDeniedScreen
            character={character}
            onTryAgain={() => { setShowDeniedScreen(false); setCounterOfferIdx(0); setView('terms'); }}
            onExploreMap={() => { setShowDeniedScreen(false); handleReset(); }}
            onExitToStart={handleExitToStart}
          />
        )}

        {/* ── Floating map perception button ── */}
        {character && (
          <div className="map-perceive-wrap">
            <button
              className="map-perceive-btn"
              style={{ '--cc': character.color }}
              onClick={() => {
                if (!currentLoc) {
                  setPerceiveHint('location');
                  setTimeout(() => setPerceiveHint(false), 3000);
                } else if (view !== 'granted') {
                  setPerceiveHint('terms');
                  setTimeout(() => setPerceiveHint(false), 3000);
                } else {
                  setPerceiveHint(false);
                  setShowMapPerception(true);
                }
              }}
              title="Generate AI perception of this place"
            >
              <span className="map-perceive-emoji">{character.emoji}</span>
              <span className="map-perceive-label">✦ perceive</span>
            </button>
            {perceiveHint === 'location' && (
              <div className="perceive-hint">
                First click a location on the map
              </div>
            )}
            {perceiveHint === 'terms' && (
              <div className="perceive-hint">
                Accept the terms of access to this location first
              </div>
            )}
          </div>
        )}

        {showMapPerception && character && (
          <PerceptionModal
            character={character}
            locationName={currentLoc?.name[lang] || CITIES[currentCity]?.name[lang] || currentCity}
            cityName={CITIES[currentCity]?.name[lang] || currentCity}
            locationId={currentLoc?.id || ''}
            stakeholderList={currentLoc ? [
              ...(currentLoc.owners[lang] || []).map(t => ({ text: t, tag: 'ACTIVE',   tagClass: 'tag-a' })),
              ...(currentLoc.ghost[lang]  || []).map(t => ({ text: t, tag: 'RESIDUAL', tagClass: 'tag-g' })),
              ...(currentLoc.temporal[lang] || []).map(t => ({ text: t, tag: 'TEMPORAL', tagClass: 'tag-t' })),
            ] : []}
            onClose={() => setShowMapPerception(false)}
          />
        )}
      </div>
    </div>
  );
}
