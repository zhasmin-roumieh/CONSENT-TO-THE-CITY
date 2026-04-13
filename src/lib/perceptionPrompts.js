/**
 * Perception prompts — short, dense, keyword-first for Flux image model.
 * Flux reads prompts like captions: lead with what to DRAW, not how it feels.
 */

// camera = literal viewpoint/angle (short)
// style  = art style keywords (short)
const PERSPECTIVES = {
  human:  { camera: 'street-level eye height, pedestrian scale, first person',           style: 'Edward Hopper, magic realism, muted urban palette' },
  fox:    { camera: 'low ground angle, dusk, amber tint, predator viewpoint',             style: 'geometric shadows, rust and gold, impressionistic' },
  pigeon: { camera: 'bird\'s-eye top-down from rooftop height, looking straight down',    style: 'impressionistic, iridescent colours, warm updraft light' },
  rat:    { camera: 'extreme worm\'s-eye from below, looking up through drain grates',    style: 'chiaroscuro, gothic industrial, dark tunnels, rust' },
  root:   { camera: 'underground cross-section, soil strata, roots, looking up at city', style: 'botanical illustration, earthy ochres, mycelium glow' },
  ghost:  { camera: 'double exposure 1920s and present overlaid, translucent figures',    style: 'sepia and electric blue, long exposure, haunted' },
  bot:    { camera: 'overhead surveillance angle, heat map overlay, sensor grid',         style: 'neon cyan wireframe, glitch aesthetic, data visualization' },
  cloud:  { camera: 'aerial above storm clouds, city tiny below through gap in cumulus',  style: 'J.M.W. Turner painting, dramatic sky, golden light' },
  bee:    { camera: 'compound eye hexagonal grid overlay, UV spectrum vision',            style: 'ultraviolet false colour, mandala geometry, florescent' },
  spider: { camera: 'corner ceiling angle looking down, silk web geometry overlay',       style: 'baroque, dewdrop optics, gothic, dark' },
  micro:  { camera: 'electron microscope extreme macro, microscopic scale',               style: 'bioluminescent, cellular patterns, scientific surrealism' },
};

const FALLBACK = { camera: 'surrealist viewpoint', style: 'painterly surrealism, rich colour' };

/**
 * Build the full prompt sent to the image model.
 * @param {string} locationName  e.g. "Eiffel Tower"
 * @param {string} cityName      e.g. "Paris"
 * @param {string} characterId   e.g. "pigeon"
 * @param {string} userText      optional extra description from the user
 */
// ── Stakeholder entity camera angles (short, directive) ──────────────────────
const ENTITY_ANGLES = {
  bird:      'aerial top-down bird\'s eye, city grid below like a map',
  rat:       'extreme worm\'s-eye from below, looking up through drain grates',
  stone:     'extreme macro close-up, mineral grain texture, geological scale',
  root:      'underground cross-section, root tendrils through soil, looking up',
  ghost:     'double exposure, 1900s and today overlaid, translucent phantom figures',
  algorithm: 'overhead surveillance, neon wireframe heat map, sensor grid',
  cloud:     'aerial above storm clouds, location far below through gap in cumulus',
  water:     'underwater refraction, liquid distortion, ripple reflection',
  wind:      'flow lines and pressure maps, trees bending, invisible force visible',
  bee:       'compound eye hexagonal grid, UV spectrum, ultraviolet florescence',
  micro:     'electron microscope extreme macro, bacterial colonies magnified',
  human:     'street level pedestrian eye height, first person',
  fox:       'low ground-level dusk, predator angle, amber tint',
  cat:       'low angle from ledge or narrow gap, curious tilt',
  light:     'long exposure light trails, chiaroscuro',
  plant:     'looking up from soil toward light, roots framing sky',
  border:    'threshold split frame, checkpoint, before and after',
  tourist:   'wide-angle postcard view, iconic framing',
};

function detectEntityAngle(text) {
  const t = text.toLowerCase();
  if (/pigeon|bird|dove|sparrow|seagull|crow|rook|swift|starling/i.test(t)) return ENTITY_ANGLES.bird;
  if (/rat|mouse|rodent|sewer|drain/i.test(t)) return ENTITY_ANGLES.rat;
  if (/stone|rock|concrete|marble|granite|quarri|brick|cobble|pavement|material|mineral/i.test(t)) return ENTITY_ANGLES.stone;
  if (/root|tree|mycel|fungus|soil|lichen|moss|plant|botanical/i.test(t)) return ENTITY_ANGLES.root;
  if (/ghost|spirit|phantom|specter|residual|haunt|deceased|d\.\d{4}|former|memory/i.test(t)) return ENTITY_ANGLES.ghost;
  if (/algorithm|data|digital|sensor|network|software|surveillance|footfall|optimis/i.test(t)) return ENTITY_ANGLES.algorithm;
  if (/cloud|weather|atmosphere|sky|rain|fog|mist/i.test(t)) return ENTITY_ANGLES.cloud;
  if (/water|river|flood|tide|stream|canal/i.test(t)) return ENTITY_ANGLES.water;
  if (/wind|air|gust|breeze|current/i.test(t)) return ENTITY_ANGLES.wind;
  if (/bee|insect|pollinator|butterfly|moth/i.test(t)) return ENTITY_ANGLES.bee;
  if (/microbe|bacteria|microscopic|organic|pathogen/i.test(t)) return ENTITY_ANGLES.micro;
  if (/human|person|people|visitor|tourist|citizen|resident|pedestrian/i.test(t)) return ENTITY_ANGLES.tourist;
  if (/fox|predator|canine|wolf/i.test(t)) return ENTITY_ANGLES.fox;
  if (/cat|feline/i.test(t)) return ENTITY_ANGLES.cat;
  if (/light|sun|shadow|solar|lamp|illuminat/i.test(t)) return ENTITY_ANGLES.light;
  if (/border|checkpoint|guard|wall|divide|boundary/i.test(t)) return ENTITY_ANGLES.border;
  return 'surrealist non-human viewpoint';
}

// ── Per-location visual anchors ───────────────────────────────────────────────
// These describe what each location actually looks like so the image model
// has specific visual features to draw, not just a name.
const LOCATION_VISUALS = {
  // Berlin
  brandenburger:      'neoclassical triumphal arch with six Doric columns and the bronze Quadriga chariot sculpture on top, Pariser Platz cobblestone square, Berlin Germany',
  tiergarten:         'vast urban forest park with winding gravel paths through dense deciduous trees, Siegessäule golden victory column visible above the canopy, central Berlin Germany',
  hackescher:         'Hackesche Höfe red brick Jugendstil inner courtyards, historic Scheunenviertel warehouses, Mitte district Berlin Germany',
  tempelhof:          'enormous curved Nazi-era Tempelhof Airport terminal, vast flat disused airfield converted into open parkland, Berlin Germany',
  kreuzberg:          'street art murals on concrete walls, Turkish market stalls along the Landwehrkanal, multicultural tenement blocks, Kreuzberg Berlin Germany',
  museumsinsel:       'Museum Island on the River Spree, Pergamon Museum and Altes Museum neoclassical colonnades, cathedral dome, Berlin Germany',
  'east-side-gallery':'remaining 1.3km stretch of the Berlin Wall painted with murals, East Side Gallery on the Spree River bank, Friedrichshain Berlin Germany',
  'potsdamer-platz':  'Sony Center with its tent-like glass and steel roof canopy, Kollhoff Tower red brick skyscraper, Beisheim Center towers, busy urban plaza at Potsdamer Platz Berlin Germany',

  // Paris
  eiffel:             'Eiffel Tower iron lattice structure rising 330m, Champ de Mars green lawn, Seine River and Trocadéro beyond, Paris France',
  marais:             'Place des Vosges red brick arcaded square, narrow medieval cobblestone streets, ornate stone mansion facades, Le Marais Paris France',
  bastille:           'Place de la Bastille open roundabout, 52m July Column with golden spirit figure on top, Opéra Bastille modern building, Paris France',
  canal:              'Canal Saint-Martin, cast-iron swing footbridges, plane tree-lined stone towpaths, colourful barges moored along the water, Paris France',
  montmartre:         'Sacré-Cœur white travertine basilica dome crowning the Butte Montmartre hill, steep vineyard steps, artists square Place du Tertre, Paris France',
  'les-halles':       'Forum des Halles undulating glass canopy roof, underground RER interchange, Saint-Eustache Gothic church behind, central Paris France',
  'pere-lachaise':    'Père Lachaise Cemetery, moss-covered stone tombs and mausoleums, cobblestone paths through overgrown trees, Paris France',
  pigalle:            'Moulin Rouge cabaret building with red windmill, Boulevard de Clichy neon signs, Pigalle Paris France',

  // Tokyo
  shinjuku:           'Shinjuku west exit skyscraper cluster, Tokyo Metropolitan Government twin glass towers, neon-lit east exit entertainment district, Tokyo Japan',
  harajuku:           'Takeshita Street narrow pedestrian alley flanked by colourful youth fashion boutiques, crepe stands, Harajuku Tokyo Japan',
  shibuya:            'Shibuya Scramble Crossing with hundreds of pedestrians crossing simultaneously, giant LED advertising screens, Shibuya 109 building, Tokyo Japan',
  ueno:               'Ueno Park wide paths lined with cherry blossom trees, Shinobazu Pond, Tokyo National Museum brick building, Tokyo Japan',
  tsukiji:            'Tsukiji outer market narrow lanes, fresh fish and seafood stalls under corrugated iron roofs, Tokyo Japan',
  yanaka:             'Yanaka Ginza old shitamachi shopping street, traditional wooden shopfronts, Yanaka Cemetery, historic Tokyo Japan',
  asakusa:            'Senso-ji Temple Kaminarimon Thunder Gate with giant red paper lantern, Nakamise shopping arcade, five-storey pagoda, Asakusa Tokyo Japan',
  akihabara:          'Akihabara Electric Town, multi-storey electronics stores with outdoor screens, anime and manga signage, overhead rail tracks, Tokyo Japan',

  // London
  borough:            'Borough Market Victorian iron and glass roof, food stalls under railway arches, London Bridge Street, Southwark London UK',
  southbank:          'Thames South Bank, Tate Modern former power station with tall chimney, Millennium Bridge suspension footbridge, St Paul\'s Cathedral view, London UK',
  'hyde-park':        'Hyde Park, Serpentine lake with rowing boats, elm and oak trees, Marble Arch visible at northeast corner, London UK',
  'brick-lane':       'Brick Lane street market, Georgian and Victorian brick facades covered in street art murals, Bangladeshi restaurants, East London UK',
  trafalgar:          'Trafalgar Square, Nelson\'s Column with four bronze lions, National Gallery neoclassical facade, fountains, central London UK',
  brixton:            'Brixton Market Electric Avenue, colourful stalls and Afro-Caribbean traders, Victorian covered market arcade, South London UK',
  'canary-wharf':     'Canary Wharf financial district, One Canada Square pyramidal skyscraper, glass towers reflected in Docklands water, London UK',

  // New York
  centralpark:        'Central Park Bethesda Fountain and Terrace, tree-lined The Mall, Manhattan glass skyscrapers visible above the tree canopy, New York USA',
  highline:           'High Line elevated linear park on a former freight rail viaduct, Chelsea neighborhood brownstones and new glass towers alongside, New York USA',
  'times-square':     'Times Square, canyon of skyscrapers covered in massive LED billboards, yellow taxis and streams of pedestrians, Midtown Manhattan New York USA',
  'brooklyn-bridge':  'Brooklyn Bridge Gothic stone towers and steel suspension cables, East River below, lower Manhattan skyline behind, New York USA',
  harlem:             'Harlem 125th Street brownstone apartment buildings, Apollo Theater marquee sign, vibrant street life, Upper Manhattan New York USA',
  'washington-square':'Washington Square Park marble triumphal arch, central fountain, NYU red-brick buildings surrounding, Greenwich Village New York USA',
  'coney-island':     'Coney Island boardwalk, Wonder Wheel ferris wheel, Cyclone wooden roller coaster, Atlantic Ocean beach, funfair rides, Brooklyn New York USA',

  // Cairo
  tahrir:             'Tahrir Square circular plaza, pink Egyptian Museum neoclassical building, flyovers and roundabout, central Cairo Egypt',
  'khan-khalili':     'Khan el-Khalili bazaar narrow medieval alleyways, carved stone mashrabiya screens, copper lanterns, Al-Hussein Mosque minarets, Islamic Cairo Egypt',
  'nile-corniche':    'Nile Corniche waterfront promenade, wide Nile River, felucca wooden sailboats, high-rise buildings on both banks, Cairo Egypt',
  'city-of-dead':     'Cairo City of the Dead necropolis, stone mausoleums and domed tombs among ordinary dwellings, Al-Qarafa cemetery, Cairo Egypt',
  giza:               'Great Pyramid of Giza and Pyramid of Khafre on desert plateau, Great Sphinx limestone statue, Nile valley in background, Giza Egypt',
  'al-azhar-park':    'Al-Azhar Park terraced gardens, panoramic view of historic Cairo, Citadel of Saladin and Mohamed Ali Mosque minarets visible, Egypt',

  // Mumbai
  'marine-drive':     'Marine Drive curved 3km seafront promenade, Art Deco apartment blocks, Queen\'s Necklace arc of streetlights, Arabian Sea, Mumbai India',
  gateway:            'Gateway of India basalt Indo-Saracenic arch monument on the waterfront, Taj Mahal Palace Hotel red-domed building behind, Mumbai harbour, India',
  'dhobi-ghat':       'Dhobi Ghat Mahalaxmi open-air laundry, rows of concrete washing pens, thousands of colourful garments hanging to dry, Mumbai India',
  dharavi:            'Dharavi dense low-rise tin-roofed buildings in narrow lanes, colourful painted walls, small workshops, central Mumbai India',
  juhu:               'Juhu Beach wide sandy shore, Arabian Sea, beachside food stalls, informal cricket games, suburban Mumbai India',
  colaba:             'Colaba Causeway street market, British colonial Victorian stone buildings, Sassoon Dock boats, South Mumbai India',

  // Beirut
  'martyrs-square':   'Martyrs Square Beirut, bullet-scarred Martyrs statue, reconstructed downtown Solidere limestone buildings and empty lots, Beirut Lebanon',
  hamra:              'Hamra Street, mixed old and new apartment blocks, Arabic signage, street cafes, West Beirut Lebanon',
  gemmayzeh:          'Gemmayzeh neighbourhood, colourful Ottoman-era buildings with triple arched windows, street art murals, Beirut Lebanon',
  'corniche-beirut':  'Beirut Corniche seafront promenade, Mediterranean Sea, palm trees, Pigeon Rocks limestone stacks offshore, Lebanon',
  'mar-mikhael':      'Mar Mikhael industrial-turned-artsy quarter, colourful street art, old warehouses converted to bars, Armenian community church, Beirut Lebanon',
};

/**
 * Build prompts as short comma-separated keyword strings.
 * Flux reads prompts like image captions — lead with what to DRAW,
 * keep it dense and under ~60 words total.
 *
 * Format: [location visuals], [camera angle], [art style], [user text?], no text no watermarks
 */
export function buildStakeholderPrompt(locationName, cityName, ownerText, userText = '', locationId = '') {
  const angle = detectEntityAngle(ownerText);
  const vis = LOCATION_VISUALS[locationId] || `${locationName} ${cityName}`;
  const parts = [vis, angle, 'surrealist painting, highly detailed, cinematic'];
  if (userText.trim()) parts.push(userText.trim());
  parts.push('no text, no watermarks');
  return parts.join(', ');
}

export function buildPerceptionPrompt(locationName, cityName, characterId, userText = '', locationId = '') {
  const p = PERSPECTIVES[characterId] || FALLBACK;
  const vis = LOCATION_VISUALS[locationId] || `${locationName} ${cityName}`;
  const parts = [vis, p.camera, p.style, 'highly detailed, cinematic'];
  if (userText.trim()) parts.push(userText.trim());
  parts.push('no text, no watermarks');
  return parts.join(', ');
}
