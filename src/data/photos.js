// Photo URLs for each location.
// Uses Wikimedia Commons Special:FilePath redirects — these follow to the actual CDN image.
// If a photo fails to load, the UI will silently hide it.
// You can replace any URL here with your own image link.

export const PHOTOS = {
  // ── Berlin ──────────────────────────────────────────
  brandenburger:    'https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburger_Tor_abends.jpg?width=800',
  tiergarten:       'https://commons.wikimedia.org/wiki/Special:FilePath/Tiergarten_Berlin.jpg?width=800',
  hackescher:       'https://commons.wikimedia.org/wiki/Special:FilePath/Hackescher_Markt_Berlin.jpg?width=800',
  tempelhof:        'https://commons.wikimedia.org/wiki/Special:FilePath/Tempelhofer_Feld_20100710.jpg?width=800',
  kreuzberg:        'https://commons.wikimedia.org/wiki/Special:FilePath/Berlin_Kreuzberg_Viktoriapark.jpg?width=800',
  museumsinsel:     'https://commons.wikimedia.org/wiki/Special:FilePath/Museumsinsel_Berlin_Juli_2009.jpg?width=800',
  'east-side-gallery': 'https://commons.wikimedia.org/wiki/Special:FilePath/East_Side_Gallery,_Berlin.jpg?width=800',
  'potsdamer-platz':   'https://commons.wikimedia.org/wiki/Special:FilePath/Potsdamer_Platz_Berlin_2009.jpg?width=800',

  // ── Paris ───────────────────────────────────────────
  eiffel:           'https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons.jpg?width=800',
  marais:           'https://commons.wikimedia.org/wiki/Special:FilePath/Le_Marais_de_Paris.jpg?width=800',
  bastille:         'https://commons.wikimedia.org/wiki/Special:FilePath/Place_de_la_Bastille.jpg?width=800',
  canal:            'https://commons.wikimedia.org/wiki/Special:FilePath/Canal_Saint-Martin_Paris.jpg?width=800',
  montmartre:       'https://commons.wikimedia.org/wiki/Special:FilePath/Sacre-Coeur_Basilique.jpg?width=800',
  'les-halles':     'https://commons.wikimedia.org/wiki/Special:FilePath/Forum_des_Halles_2014.jpg?width=800',
  'pere-lachaise':  'https://commons.wikimedia.org/wiki/Special:FilePath/Père_Lachaise_Cemetery,_Paris_2012.jpg?width=800',
  pigalle:          'https://commons.wikimedia.org/wiki/Special:FilePath/Place_Pigalle_Paris.jpg?width=800',

  // ── Tokyo ────────────────────────────────────────────
  shinjuku:         'https://commons.wikimedia.org/wiki/Special:FilePath/Shinjuku_2012.jpg?width=800',
  harajuku:         'https://commons.wikimedia.org/wiki/Special:FilePath/Harajuku_Takeshita_Street.jpg?width=800',
  shibuya:          'https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya_Crossing,_Shibuya,_Japan_(2).jpg?width=800',
  ueno:             'https://commons.wikimedia.org/wiki/Special:FilePath/Ueno_Park_sakura_2010.jpg?width=800',
  tsukiji:          'https://commons.wikimedia.org/wiki/Special:FilePath/Tsukiji_Outer_Market.jpg?width=800',
  yanaka:           'https://commons.wikimedia.org/wiki/Special:FilePath/Yanakaginza-street.jpg?width=800',
  asakusa:          'https://commons.wikimedia.org/wiki/Special:FilePath/Senso-ji_temple,_Tokyo.jpg?width=800',
  akihabara:        'https://commons.wikimedia.org/wiki/Special:FilePath/Akihabara_Tokyo_2012.jpg?width=800',

  // ── London ──────────────────────────────────────────
  borough:          'https://commons.wikimedia.org/wiki/Special:FilePath/Borough_Market_hall_interior.jpg?width=800',
  southbank:        'https://commons.wikimedia.org/wiki/Special:FilePath/Southbank_London_Eye_2013.jpg?width=800',
  'hyde-park':      'https://commons.wikimedia.org/wiki/Special:FilePath/Hyde_Park_London_2003.jpg?width=800',
  'brick-lane':     'https://commons.wikimedia.org/wiki/Special:FilePath/Brick_Lane_London.jpg?width=800',
  trafalgar:        'https://commons.wikimedia.org/wiki/Special:FilePath/Trafalgar_Square_2_ies.jpg?width=800',
  brixton:          'https://commons.wikimedia.org/wiki/Special:FilePath/Brixton_Market,_London.jpg?width=800',
  'canary-wharf':   'https://commons.wikimedia.org/wiki/Special:FilePath/Canary_Wharf_from_Greenwich.jpg?width=800',

  // ── New York ─────────────────────────────────────────
  centralpark:      'https://commons.wikimedia.org/wiki/Special:FilePath/CentralPark_from_above.jpg?width=800',
  highline:         'https://commons.wikimedia.org/wiki/Special:FilePath/High_Line_by_Clemens_v._Vogelsang.jpg?width=800',
  'times-square':   'https://commons.wikimedia.org/wiki/Special:FilePath/New_york_times_square-terabass.jpg?width=800',
  'brooklyn-bridge':'https://commons.wikimedia.org/wiki/Special:FilePath/Brooklyn_Bridge_Postdlf.jpg?width=800',
  harlem:           'https://commons.wikimedia.org/wiki/Special:FilePath/125th_Street_Harlem_NYC.jpg?width=800',
  'washington-square': 'https://commons.wikimedia.org/wiki/Special:FilePath/Washington_Square_Park.jpg?width=800',
  'coney-island':   'https://commons.wikimedia.org/wiki/Special:FilePath/Coney_Island_Boardwalk.jpg?width=800',

  // ── Cairo ────────────────────────────────────────────
  tahrir:           'https://commons.wikimedia.org/wiki/Special:FilePath/Tahrir_Square_-_November_2011.jpg?width=800',
  'khan-khalili':   'https://commons.wikimedia.org/wiki/Special:FilePath/Khan_el-Khalili_bazaar_area.jpg?width=800',
  'nile-corniche':  'https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_from_Nile.jpg?width=800',
  'city-of-dead':   'https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_city_of_dead.jpg?width=800',
  giza:             'https://commons.wikimedia.org/wiki/Special:FilePath/All_Gizah_Pyramids.jpg?width=800',
  'al-azhar-park':  'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Azhar_Park.jpg?width=800',

  // ── Mumbai ───────────────────────────────────────────
  dharavi:          'https://commons.wikimedia.org/wiki/Special:FilePath/Dharavi_slum_Mumbai.jpg?width=800',
  'marine-drive':   'https://commons.wikimedia.org/wiki/Special:FilePath/Marine_Drive_Mumbai.jpg?width=800',
  gateway:          'https://commons.wikimedia.org/wiki/Special:FilePath/Gateway_of_India_2014.jpg?width=800',
  'dhobi-ghat':     'https://commons.wikimedia.org/wiki/Special:FilePath/Dhobi_Ghat_(Mumbai).jpg?width=800',
  juhu:             'https://commons.wikimedia.org/wiki/Special:FilePath/Juhu_Beach_Mumbai.jpg?width=800',
  colaba:           'https://commons.wikimedia.org/wiki/Special:FilePath/Colaba_Causeway_Mumbai.jpg?width=800',

  // ── Beirut ───────────────────────────────────────────
  'martyrs-square': 'https://commons.wikimedia.org/wiki/Special:FilePath/Martyrs_Square_Beirut.jpg?width=800',
  hamra:            'https://commons.wikimedia.org/wiki/Special:FilePath/Hamra_Street_Beirut.jpg?width=800',
  gemmayzeh:        'https://commons.wikimedia.org/wiki/Special:FilePath/Gemmayze_Beirut.jpg?width=800',
  'corniche-beirut':'https://commons.wikimedia.org/wiki/Special:FilePath/Corniche_Beirut.jpg?width=800',
  'mar-mikhael':    'https://commons.wikimedia.org/wiki/Special:FilePath/Mar_Mikhael_Beirut.jpg?width=800',
  'raouche':        'https://commons.wikimedia.org/wiki/Special:FilePath/Raouche_Pigeons_Rock_Beirut.jpg?width=800',
  'bourj-hammoud':  'https://commons.wikimedia.org/wiki/Special:FilePath/Bourj_Hammoud_Beirut.jpg?width=800',
  shatila:          'https://commons.wikimedia.org/wiki/Special:FilePath/Shatila_refugee_camp.jpg?width=800',
};
