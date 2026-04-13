/**
 * Surrealist perception prompts — one per character type.
 * Each describes how that creature/entity experiences urban space.
 */

const PERSPECTIVES = {
  human: {
    view: 'seen through human eyes at street level, the uncanny magic-realist experience of everyday urban life, a consenting citizen navigating bureaucratic and architectural space, the body as document',
    style: 'Edward Hopper loneliness, sharp late-afternoon shadows, magic realism, hyperrealistic with surrealist undertones, muted urban palette',
  },
  fox: {
    view: 'seen from ground level through the amber eyes of an urban fox at dusk, hunting perspective, alert and cunning, weaving through shadows and human legs, low angle',
    style: 'twilight palette, geometric shadows, rust and gold tones, fluid predator energy',
  },
  pigeon: {
    view: 'aerial rooftop perspective of a pigeon, city grid far below, humans reduced to meaningless heat patterns, thermal currents visible as shimmering waves, power lines as highways',
    style: 'iridescent feather colors, warm updraft light, impressionistic crowd below, vast urban canopy',
  },
  rat: {
    view: 'seen from below through drainage grates and tunnel openings, labyrinthine underground perspective, looking up through metal grids at the city above, the underside of civilization',
    style: 'chiaroscuro, rust and concrete, subterranean bioluminescence, gothic industrial',
  },
  root: {
    view: 'beneath the surface, slow geological time, root network spreading beneath the foundations, soil strata visible, the city as a temporary skin on ancient earth',
    style: 'botanical cross-section illustration, earthy ochres and deep greens, mycelial networks glowing, old scientific diagram aesthetic',
  },
  ghost: {
    view: 'spectral overlay of multiple time periods simultaneously, the building as it was in 1920 and 1970 and today all layered, transparent figures of past occupants still moving through their routines',
    style: 'translucent double-exposure layers, sepia and electric blue, temporal echo photography, haunted long-exposure',
  },
  bot: {
    view: 'algorithmic data visualization of the space, heat maps of human movement, sensor network overlays, wifi signal topology, the city as pure information flow',
    style: 'wireframe architecture, neon cyan and purple, data streams, glitch aesthetic, surveillance grid',
  },
  cloud: {
    view: 'vast atmospheric perspective from above the cloud layer, city seen through gaps in cumulus clouds, meteorological scale, the architecture tiny and temporary',
    style: 'diffuse golden light through clouds, meteorological painting, Turner-esque sky drama, sublime scale',
  },
  bee: {
    view: 'UV spectrum vision of a bee, flower-like patterns visible on urban surfaces invisible to humans, hexagonal compound eye grid overlay, nectar paths through the concrete',
    style: 'ultraviolet palette with false-color florescence, compound eye tessellation, mandala geometry, pollinator trails glowing',
  },
  spider: {
    view: 'web anchor point perspective from a corner where walls and ceiling meet, vibration sensitivity as visible ripples in the air, silk thread geometry connecting all surfaces',
    style: 'baroque ornamentation, tension-map lines, dewdrop optics, gothic engineering',
  },
  micro: {
    view: 'microscopic scale, bacterial colonies on every surface rendered enormous, the city as a petri dish, human skin cells and concrete crystals at the same magnification',
    style: 'electron microscope aesthetic, bioluminescent, cellular patterns, scientific surrealism, scale collapse',
  },
};

const FALLBACK = {
  view: 'surrealist perspective of an unknown urban entity, dreamlike and uncanny',
  style: 'painterly surrealism, rich color, mysterious',
};

/**
 * Build the full prompt sent to the image model.
 * @param {string} locationName  e.g. "Eiffel Tower"
 * @param {string} cityName      e.g. "Paris"
 * @param {string} characterId   e.g. "pigeon"
 * @param {string} userText      optional extra description from the user
 */
// ── Stakeholder entity detection ─────────────────────────────────────────────

const ENTITY_ANGLES = {
  bird:      'strict aerial top-down view from high altitude, city grid below like a map, tiny humans, rooftop textures, wingspan perspective',
  rat:       'extreme low angle from underground looking upward through drain grates and cracks, the underside of the city, legs and feet visible above, labyrinthine tunnels',
  stone:     'extreme macro close-up photographic view, mineral grain and crystal texture filling the frame, geological timescale, millimeter-scale detail, slow material consciousness',
  root:      'underground cross-section view, root tendrils spreading through soil layers and cracked foundations, bioluminescent filaments, looking up at the city from below the surface',
  ghost:     'spectral double-exposure, multiple historical time periods superimposed simultaneously — 1900 and today layered, translucent phantom figures still inhabiting their routines, temporal echo',
  algorithm: 'data visualization overhead surveillance view, heat maps of human density, wifi signal topology, sensor network overlays, neon wireframe grid, infrared human silhouettes',
  cloud:     'vast atmospheric aerial view from above the clouds, location barely visible through breaks in cumulus, meteorological scale, looking down from kilometers high',
  water:     'refracted underwater or rain-surface perspective, liquid distortion, ripple patterns across architecture, reflection and refraction',
  wind:      'invisible force perspective, trees bending, papers flying, the invisible made visible as flow lines and pressure maps',
  bee:       'UV spectrum compound-eye hexagonal tessellation, ultraviolet florescence on every surface invisible to humans, mandala-like pollinator vision',
  micro:     'extreme microscopic scale, bacterial colonies on stone surfaces magnified ten-thousand times, bioluminescent cellular patterns, petri-dish aesthetic',
  human:     'street level first-person pedestrian height, eye level urban scale, the city as experienced walking through it',
  fox:       'low ground-level dusk angle, predator hunting perspective, geometric shadows, amber tinted vision',
  cat:       'low to ground, independent and curious, impossible angles, watching from high ledges and narrow gaps',
  light:     'photographic long-exposure light trails, chiaroscuro deep shadow and brilliant highlight, time-collapsed rays',
  plant:     'slow upward growth perspective, looking up from soil toward light, leaves and branches framing sky above',
  border:    'threshold and boundary view, the line between two worlds, checkpoint architecture, before-and-after split frame',
  tourist:   'wide-angle postcard perspective, framed for photography, the iconic view from the designated viewpoint',
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
  // fallback — still descriptive
  return 'unique non-human surrealist perspective, abstract spatial consciousness, dreamlike';
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
  southbank:          'Thames South Bank, Tate Modern former power station with tall chimney, Millennium Bridge suspension footbridge, St Paul's Cathedral view, London UK',
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
 * Build a prompt from a stakeholder's ownership text.
 * Detects the entity type and sets the camera angle accordingly.
 * @param {string} locationId  e.g. "potsdamer-platz" — used to look up visual description
 */
export function buildStakeholderPrompt(locationName, cityName, ownerText, userText = '', locationId = '') {
  const angle = detectEntityAngle(ownerText);
  const vis = LOCATION_VISUALS[locationId] || `${locationName}, ${cityName}`;
  let prompt =
    `${locationName}, ${cityName}. ` +
    `Scene: ${vis}. ` +
    `Surrealist artwork of this exact place. ` +
    `Ownership perspective applied: "${ownerText}". ` +
    `Camera angle: ${angle}. ` +
    `The architecture and setting must be unmistakably ${locationName}. ` +
    `Dreamlike, painterly, richly detailed surrealist illustration, cinematic composition. `;
  if (userText.trim()) prompt += `Additional vision: ${userText.trim()}. `;
  prompt += `No text, no words, no watermarks, no labels.`;
  return prompt;
}

export function buildPerceptionPrompt(locationName, cityName, characterId, userText = '', locationId = '') {
  const p = PERSPECTIVES[characterId] || FALLBACK;
  const vis = LOCATION_VISUALS[locationId] || `${locationName}, ${cityName}`;

  let prompt =
    `${locationName}, ${cityName}. ` +
    `Scene: ${vis}. ` +
    `Surrealist artwork of this exact place. ` +
    `Perspective: ${p.view}. ` +
    `Art style: ${p.style}. ` +
    `The architecture and setting must be unmistakably ${locationName}. ` +
    `Dreamlike, highly detailed, painterly illustration, cinematic composition. `;

  if (userText.trim()) {
    prompt += `Additional vision: ${userText.trim()}. `;
  }

  prompt += `No text, no words, no watermarks, no labels.`;

  return prompt;
}
