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
  const [userTerms, setUserTerms] = useState([]);
  const [identity, setIdentity] = useState(null);
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [musicOn, setMusicOn] = useState(false);

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

  function handleAccept() {
    setOwnerData(ownerPcts());
    setView('identity');
  }

  function handleIdentitySet(id) {
    setIdentity(id);
    setView('granted');
  }

  function handleDecline() {
    setView('denied');
  }

  function handleReconsider() {
    const hr = getHr();
    const templates = TC_T[lang];
    const picked = templates[rnd(0, templates.length - 1)](currentLoc, hr);
    setTcHtml(picked);
    setView('terms');
  }

  function handleAddTerm(text) {
    setUserTerms(prev => [...prev, text]);
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
      />
      <div id="map-stage">
        <MiniMap
          currentCity={currentCity}
          locColor={CITY_COLORS[currentCity] || '#00e87a'}
          isDark={isDark}
        />
        {view === 'intro' && <StatsPanel />}
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
          userTerms={userTerms}
          identity={identity}
          lang={lang}
          onAccept={handleAccept}
          onDecline={handleDecline}
          onReconsider={handleReconsider}
          onAddTerm={handleAddTerm}
          onReset={handleReset}
          onIdentitySet={handleIdentitySet}
        />
      </div>
    </div>
  );
}
