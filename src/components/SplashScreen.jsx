import { useState, useMemo } from 'react';
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

const NEON_COLORS = [
  '#00e87a', '#ff2d9b', '#ff4422', '#2299ff',
  '#ffcc00', '#ff8800', '#cc44ff', '#00ffee',
  '#ff0066', '#00ccff', '#aaff00', '#ff6600',
  '#ff00ff', '#00ff88', '#ffaa00', '#0088ff',
];

const WORLD_CITIES = [
  'TOKYO','LONDON','PARIS','DUBAI','SINGAPORE','SYDNEY','SAO PAULO',
  'MEXICO CITY','ISTANBUL','LAGOS','BANGKOK','JAKARTA','DELHI','KARACHI',
  'KINSHASA','LIMA','BOGOTA','CAIRO','DHAKA','OSAKA','MOSCOW','LOS ANGELES',
  'HONG KONG','CHICAGO','JOHANNESBURG','TEHRAN','NAIROBI','SANTIAGO',
  'BARCELONA','AMSTERDAM','BERLIN','ROME','TORONTO','MIAMI','SEOUL',
  'TAIPEI','KUALA LUMPUR','RIYADH','CASABLANCA','ACCRA','ADDIS ABABA',
  'HAVANA','ATHENS','STOCKHOLM','VIENNA','BRUSSELS','WARSAW','PRAGUE',
  'BUDAPEST','BEIRUT','MUMBAI','OSLO','ZURICH','MILAN','TUNIS',
  'ALGIERS','DAKAR','KAMPALA','MINSK','KYIV','BAKU','TASHKENT','KATHMANDU',
  'YANGON','PHNOM PENH','MANILA','AUCKLAND','PERTH','CAPE TOWN','MONTREAL',
  'VANCOUVER','SEATTLE','PHOENIX','HOUSTON','ATLANTA','NEW YORK','DETROIT',
  'BAGHDAD','DAMASCUS','AMMAN','KABUL','ISLAMABAD','COLOMBO','DOHA',
  'MONTREAL','CALGARY','EDINBURGH','GLASGOW','DUBLIN','LISBON','PORTO',
  'SEVILLA','VALENCIA','GRANADA','FLORENCE','NAPLES','PALERMO','VALLETTA',
  'NICOSIA','SOFIA','BUCHAREST','RIGA','TALLINN','VILNIUS','HELSINKI',
  'COPENHAGEN','ROTTERDAM','ANTWERP','ZURICH','GENEVA','LYON','MARSEILLE',
  'BORDEAUX','TOULOUSE','STRASBOURG','FRANKFURT','HAMBURG','MUNICH','COLOGNE',
  'DRESDEN','LEIPZIG','STUTTGART','DÜSSELDORF','DORTMUND','ESSEN','BREMEN',
  'HANNOVER','NUREMBERG','WROCLAW','KRAKOW','LODZ','GDANSK','POZNAN',
  'SARAJEVO','BELGRADE','ZAGREB','LJUBLJANA','SKOPJE','TIRANA','PRISTINA',
  'CHISINAU','YEREVAN','TBILISI','ASTANA','ALMATY','BISHKEK','DUSHANBE',
  'ASHGABAT','ULAANBAATAR','PYONGYANG','VLADIVOSTOK','NOVOSIBIRSK','YEKATERINBURG',
  'SAINT PETERSBURG','NIZHNY NOVGOROD','SAMARA','KAZAN','ROSTOV','VOLGOGRAD',
  'LUANDA','HARARE','LUSAKA','MAPUTO','DAR ES SALAAM','MOMBASA','KIGALI',
  'ANTANANARIVO','PORT LOUIS','WINDHOEK','GABORONE','MASERU','MBABANE',
  'LIBREVILLE','BRAZZAVILLE','BANGUI','NDJAMENA','NIAMEY','OUAGADOUGOU',
  'BAMAKO','CONAKRY','FREETOWN','MONROVIA','ABIDJAN','ACCRA','COTONOU',
  'PORTO NOVO','LOME','ABUJA','KANO','IBADAN','PORT HARCOURT','KADUNA',
  'KHARTOUM','ADDIS ABABA','DJIBOUTI','ASMARA','MOGADISHU','KAMPALA',
  'JUBA','TRIPOLI','BENGHAZI','TUNIS','ALGIERS','RABAT','MARRAKECH',
  'MUSCAT','ABU DHABI','KUWAIT CITY','MANAMA','SANAA','ADEN','BEIRUT',
  'AMMAN','JERUSALEM','TEL AVIV','NICOSIA','ANKARA','IZMIR','BURSA',
  'ANTALYA','ADANA','GAZIANTEP','KONYA','MERSIN','BAKU','YEREVAN',
  'LAHORE','FAISALABAD','RAWALPINDI','MULTAN','HYDERABAD','QUETTA','PESHAWAR',
  'DHAKA','CHITTAGONG','SYLHET','KATHMANDU','POKHARA','COLOMBO','KANDY',
  'YANGON','MANDALAY','NAYPYIDAW','BANGKOK','CHIANG MAI','PHUKET',
  'PHNOM PENH','VIENTIANE','HANOI','HO CHI MINH','DANANG','HUE',
  'JAKARTA','SURABAYA','MEDAN','BANDUNG','BALI','MAKASSAR','PALEMBANG',
  'MANILA','CEBU','DAVAO','QUEZON CITY','SINGAPORE','KUALA LUMPUR','PENANG',
  'JOHOR BAHRU','KOTA KINABALU','TAIPEI','KAOHSIUNG','TAICHUNG','TAINAN',
  'BEIJING','SHANGHAI','GUANGZHOU','SHENZHEN','CHENGDU','WUHAN','XIAN',
  'CHONGQING','NANJING','HANGZHOU','TIANJIN','SHENYANG','HARBIN','DALIAN',
  'QINGDAO','JINAN','ZHENGZHOU','CHANGSHA','KUNMING','URUMQI','LHASA',
  'SEOUL','BUSAN','INCHEON','DAEGU','DAEJEON','GWANGJU','ULSAN',
  'TOKYO','OSAKA','KYOTO','YOKOHAMA','NAGOYA','SAPPORO','FUKUOKA',
  'KOBE','KAWASAKI','SAITAMA','HIROSHIMA','SENDAI','KITAKYUSHU','CHIBA',
  'SYDNEY','MELBOURNE','BRISBANE','PERTH','ADELAIDE','GOLD COAST','CANBERRA',
  'AUCKLAND','WELLINGTON','CHRISTCHURCH','HAMILTON','TAURANGA','DUNEDIN',
  'BUENOS AIRES','ROSARIO','CORDOBA','MENDOZA','MONTEVIDEO','ASUNCION',
  'LA PAZ','SUCRE','QUITO','GUAYAQUIL','LIMA','AREQUIPA','CUSCO',
  'BOGOTA','MEDELLIN','CALI','CARACAS','MARACAIBO','VALENCIA','BARQUISIMETO',
  'HAVANA','SANTIAGO','VALPARAISO','CONCEPCION','SAN JOSE','PANAMA CITY',
  'TEGUCIGALPA','MANAGUA','SAN SALVADOR','GUATEMALA CITY','BELIZE CITY',
  'PORT AU PRINCE','SANTO DOMINGO','SAN JUAN','KINGSTON','NASSAU',
  'BRIDGETOWN','PORT OF SPAIN','PARAMARIBO','GEORGETOWN','CAYENNE',
];

export default function SplashScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const bgItems = useMemo(() => {
    // Deduplicate and generate positions
    const unique = [...new Set(WORLD_CITIES)];
    return unique.map((name, i) => ({
      name,
      x: (i * 137.508) % 100,
      y: (i * 98.617 + 17) % 100,
      size: 7 + (i * 5) % 11,
      color: NEON_COLORS[i % NEON_COLORS.length],
      rotation: -30 + (i * 43) % 60,
      // stagger the blink animation so they don't all flash together
      blinkDuration: 1.5 + (i * 0.37) % 3.5,
      blinkDelay: (i * 0.29) % 4,
    }));
  }, []);

  function handleClick(key) {
    setClicked(key);
    setTimeout(() => onSelect(key), 320);
  }

  return (
    <div className="splash">
      {/* Scattered world city names */}
      <div className="splash-bg" aria-hidden>
        {bgItems.map((item, i) => (
          <span
            key={i}
            className="splash-bg-city"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}px`,
              color: item.color,
              transform: `rotate(${item.rotation}deg)`,
              animationDuration: `${item.blinkDuration}s`,
              animationDelay: `${item.blinkDelay}s`,
            }}
          >
            {item.name}
          </span>
        ))}
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
