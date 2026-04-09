import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import Toolbar from './components/Toolbar';
import MapView from './components/MapView';
import Panel from './components/Panel';
import { CITIES } from './data/cities';
import { TC_T } from './data/content';
import { rnd, getHr, ownerPcts } from './lib/utils';

// ─── DEV MODE ───────────────────────────────────────────────────────────────
// Set to true while testing: locks city to Berlin and language to English.
// Change to false when you're ready to test the full app.
const DEV_MODE = true;
// ────────────────────────────────────────────────────────────────────────────

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function App() {
  const [currentCity, setCurrentCity] = useState('berlin');
  const [currentLoc, setCurrentLoc] = useState(null);
  const [view, setView] = useState('intro');
  const [tcHtml, setTcHtml] = useState('');
  const [ownerData, setOwnerData] = useState(null);
  const [userTerms, setUserTerms] = useState([]);
  const [identity, setIdentity] = useState(null);
  const [lang, setLang] = useState('en');
  // theme: null = follow system, 'light' = force light, 'dark' = force dark
  const [theme, setTheme] = useState(null);

  const isDark = theme === 'dark' || (theme === null && systemDark());
  const isRTL = lang === 'ar';

  // Apply theme to <html> so CSS can pick it up
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.dataset.theme = 'dark';
    else if (theme === 'light') root.dataset.theme = 'light';
    else delete root.dataset.theme;
  }, [theme]);

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

  return (
    <div id="app" dir={isRTL ? 'rtl' : 'ltr'}>
      <header id="site-header">
        <span className="site-title">CONSENT TO THE CITY</span>
        <span className="site-subtitle">urban access simulation</span>
      </header>
      <Toolbar
        currentCity={currentCity}
        lang={lang}
        locCount={CITIES[currentCity].locations.length}
        isDark={isDark}
        onCityChange={handleCityChange}
        onLangChange={handleLangChange}
        onRandom={handleRandom}
        onThemeToggle={handleThemeToggle}
      />
      <div id="map-stage">
        <MapView
          currentCity={currentCity}
          currentLocId={currentLoc?.id}
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
