import { useState } from 'react';
import { CITIES } from '../data/cities';

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

const ALL_CITIES = [
  'TOKYO','LONDON','PARIS','DUBAI','SINGAPORE','SYDNEY','SAO PAULO','MEXICO CITY',
  'ISTANBUL','LAGOS','BANGKOK','JAKARTA','DELHI','KARACHI','KINSHASA','LIMA',
  'BOGOTA','CAIRO','DHAKA','OSAKA','MOSCOW','LOS ANGELES','HONG KONG','CHICAGO',
  'JOHANNESBURG','TEHRAN','NAIROBI','SANTIAGO','BARCELONA','AMSTERDAM','BERLIN',
  'ROME','TORONTO','MIAMI','SEOUL','TAIPEI','KUALA LUMPUR','RIYADH','CASABLANCA',
  'ACCRA','ADDIS ABABA','HAVANA','ATHENS','STOCKHOLM','VIENNA','BRUSSELS','WARSAW',
  'PRAGUE','BUDAPEST','BEIRUT','MUMBAI','OSLO','ZURICH','MILAN','TUNIS','ALGIERS',
  'DAKAR','KAMPALA','MINSK','KYIV','BAKU','TASHKENT','KATHMANDU','YANGON',
  'PHNOM PENH','MANILA','AUCKLAND','PERTH','CAPE TOWN','MONTREAL','VANCOUVER',
  'SEATTLE','PHOENIX','HOUSTON','ATLANTA','NEW YORK','BAGHDAD','DAMASCUS','AMMAN',
  'KABUL','ISLAMABAD','COLOMBO','DOHA','EDINBURGH','DUBLIN','LISBON','PORTO',
  'SEVILLA','FLORENCE','NAPLES','SOFIA','BUCHAREST','RIGA','TALLINN','VILNIUS',
  'HELSINKI','COPENHAGEN','ROTTERDAM','GENEVA','LYON','MARSEILLE','BORDEAUX',
  'FRANKFURT','HAMBURG','MUNICH','COLOGNE','DRESDEN','WROCLAW','KRAKOW','GDANSK',
  'SARAJEVO','BELGRADE','ZAGREB','SKOPJE','TIRANA','YEREVAN','TBILISI','ASTANA',
  'ALMATY','BISHKEK','ULAANBAATAR','SAINT PETERSBURG','NOVOSIBIRSK','VLADIVOSTOK',
  'LUANDA','HARARE','LUSAKA','MAPUTO','DAR ES SALAAM','KIGALI','WINDHOEK',
  'LIBREVILLE','BRAZZAVILLE','BANGUI','NIAMEY','BAMAKO','CONAKRY','ABIDJAN',
  'ABUJA','KANO','PORT HARCOURT','KHARTOUM','DJIBOUTI','MOGADISHU','TRIPOLI',
  'RABAT','MARRAKECH','MUSCAT','ABU DHABI','KUWAIT CITY','MANAMA','SANAA',
  'LAHORE','RAWALPINDI','MULTAN','CHITTAGONG','SYLHET','POKHARA','KANDY',
  'MANDALAY','CHIANG MAI','VIENTIANE','HANOI','HO CHI MINH','DANANG',
  'SURABAYA','MEDAN','BANDUNG','MAKASSAR','CEBU','DAVAO','PENANG','JOHOR BAHRU',
  'KAOHSIUNG','TAICHUNG','BEIJING','SHANGHAI','GUANGZHOU','SHENZHEN','CHENGDU',
  'WUHAN','XIAN','CHONGQING','NANJING','HANGZHOU','TIANJIN','SHENYANG','HARBIN',
  'BUSAN','INCHEON','DAEGU','KYOTO','YOKOHAMA','NAGOYA','SAPPORO','FUKUOKA',
  'KOBE','HIROSHIMA','SENDAI','MELBOURNE','BRISBANE','ADELAIDE','GOLD COAST',
  'CANBERRA','WELLINGTON','CHRISTCHURCH','BUENOS AIRES','ROSARIO','CORDOBA',
  'MONTEVIDEO','ASUNCION','LA PAZ','QUITO','GUAYAQUIL','AREQUIPA','CUSCO',
  'MEDELLIN','CALI','CARACAS','SAN JOSE','PANAMA CITY','TEGUCIGALPA','MANAGUA',
  'GUATEMALA CITY','PORT AU PRINCE','SANTO DOMINGO','KINGSTON','NASSAU',
  'DETROIT','CALGARY','GLASGOW','ANTWERP','ROTTERDAM','STUTTGART','HANNOVER',
  'NUREMBERG','LODZ','POZNAN','PRISTINA','CHISINAU','DUSHANBE','ASHGABAT',
  'YEKATERINBURG','SAMARA','KAZAN','ROSTOV','VOLGOGRAD','MOMBASA','ANTANANARIVO',
];

// Split cities into rows, each with a color and speed
const ROW_CONFIGS = [
  { color: '#00e87a', speed: 55 },
  { color: '#ff2d9b', speed: 70 },
  { color: '#2299ff', speed: 45 },
  { color: '#ffcc00', speed: 80 },
  { color: '#cc44ff', speed: 60 },
  { color: '#ff4422', speed: 40 },
  { color: '#00ffee', speed: 65 },
  { color: '#ff8800', speed: 50 },
];

// Distribute cities evenly across rows
const ROWS = ROW_CONFIGS.map((cfg, rowIdx) => {
  const rowCities = ALL_CITIES.filter((_, i) => i % ROW_CONFIGS.length === rowIdx);
  return { ...cfg, cities: rowCities };
});

export default function SplashScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  function handleClick(key) {
    setClicked(key);
    setTimeout(() => onSelect(key), 320);
  }

  return (
    <div className="splash">
      {/* Horizontally scrolling rows */}
      <div className="splash-bg" aria-hidden>
        {ROWS.map((row, ri) => {
          // Duplicate cities for seamless loop
          const track = [...row.cities, ...row.cities];
          return (
            <div key={ri} className="splash-bg-row">
              <div
                className="splash-bg-track"
                style={{
                  animationDuration: `${row.speed}s`,
                  color: row.color,
                }}
              >
                {track.map((city, ci) => (
                  <span key={ci} className="splash-bg-city">{city}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center panel */}
      <div className="splash-panel">
        <div className="splash-panel-logo">CONSENT TO THE CITY</div>
        <div className="splash-panel-sub">urban access simulation · choose your city</div>
        <div className="splash-panel-divider" />
        <div className="splash-city-list">
          {Object.entries(CITIES).map(([key, city]) => {
            const color = CITY_COLORS[key] || '#aaa';
            const isHov = hovered === key;
            const isClk = clicked === key;
            return (
              <button
                key={key}
                className={`splash-city-row${isHov ? ' splash-city-row--hov' : ''}${isClk ? ' splash-city-row--clk' : ''}`}
                style={{ '--cc': color }}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(key)}
              >
                <span className="splash-city-dot" />
                <span className="splash-city-row-name">{city.name.en}</span>
                <span className="splash-city-row-arrow">▶</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
