import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Toolbar from './components/Toolbar';
import MapView from './components/MapView';
import Panel from './components/Panel';
import { CITIES } from './data/cities';
import { TC_T } from './data/content';
import { rnd, getHr, ownerPcts } from './lib/utils';

export default function App() {
  const [currentCity, setCurrentCity] = useState('berlin');
  const [currentLoc, setCurrentLoc] = useState(null);
  const [view, setView] = useState('intro');
  const [tcHtml, setTcHtml] = useState('');
  const [ownerData, setOwnerData] = useState(null);
  const [userTerms, setUserTerms] = useState([]);
  const [lang, setLang] = useState('en');

  const isRTL = lang === 'ar';

  function selectLocation(loc) {
    setCurrentLoc(loc);
    const hr = getHr();
    const templates = TC_T[lang];
    const picked = templates[rnd(0, templates.length - 1)](loc, hr);
    setTcHtml(picked);
    setView('terms');
  }

  function handleCityChange(key) {
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
    setView('intro');
  }

  function handleLangChange(newLang) {
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
      <Toolbar
        currentCity={currentCity}
        lang={lang}
        locCount={CITIES[currentCity].locations.length}
        onCityChange={handleCityChange}
        onLangChange={handleLangChange}
        onRandom={handleRandom}
      />
      <MapView
        currentCity={currentCity}
        currentLocId={currentLoc?.id}
        lang={lang}
        onLocationSelect={selectLocation}
      />
      <Panel
        view={view}
        loc={currentLoc}
        cityKey={currentCity}
        tcHtml={tcHtml}
        ownerData={ownerData}
        userTerms={userTerms}
        lang={lang}
        onAccept={handleAccept}
        onDecline={handleDecline}
        onReconsider={handleReconsider}
        onAddTerm={handleAddTerm}
        onReset={handleReset}
      />
    </div>
  );
}
