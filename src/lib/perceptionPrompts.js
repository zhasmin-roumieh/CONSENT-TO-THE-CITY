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
  brandenburger:      'neoclassical triumphal arch with six Doric columns and the bronze Quadriga chariot sculpture on top, wide cobblestone square, Berlin Germany',
  tiergarten:         'vast urban forest park, winding gravel paths through dense deciduous trees, tall golden victory column rising above the tree canopy, central Berlin Germany',
  hackescher:         'historic inner courtyard complex, ornate red brick Art Nouveau facades with colourful tile mosaics and arched passageways, Mitte Berlin Germany',
  tempelhof:          'enormous curved 1930s monumental stone airport terminal with a long colonnade facade, vast flat open airfield converted to public parkland with no trees, Berlin Germany',
  kreuzberg:          'spray-painted concrete walls covered in large street art murals, outdoor market stalls beside a narrow urban canal with metal railings, multicultural six-storey tenement blocks with ornate balconies, Berlin Germany',
  museumsinsel:       'cluster of neoclassical museum buildings on a river island, wide colonnaded facades, green copper domes, stone steps leading to the water, Berlin Germany',
  'east-side-gallery':'long continuous stretch of concrete wall painted with large colourful murals, riverside path alongside it, modern apartment towers behind, Berlin Germany',
  'potsdamer-platz':  'large glass and steel tent-like canopy roof over an open plaza, red brick skyscraper with pyramid top, cluster of modern glass towers, busy urban square, Berlin Germany',
  alexanderplatz:     'tall steel needle tower with a silver sphere near the top, wide open pedestrian plaza with a rotating world time clock sculpture, GDR-era low-rise buildings surrounding, Berlin Germany',
  'checkpoint-charlie':'white guardhouse booth on a wide urban street, historic border crossing signs in four languages, cobblestone road, central Berlin Germany',
  gendarmenmarkt:     'elegant square with twin domed stone cathedrals facing each other, neoclassical concert hall with columned portico in the centre, bronze statue, Berlin Germany',
  oberbaumbruecke:    'double-deck red brick Gothic bridge over a river, twin towers with pointed battlements, elevated metro train crossing the upper level, Berlin Germany',
  'prenzlauer-berg':  'historic red brick water tower on a small hill surrounded by trees, tree-lined cobblestone residential streets with 19th-century five-storey apartment buildings, Berlin Germany',
  mauerpark:          'wide open grassy urban park on a former border strip, short remnant concrete wall painted with colourful graffiti, outdoor stone amphitheatre on a slope, Berlin Germany',
  charlottenburg:     'Baroque palace with a long white symmetrical facade and central tower, gilded equestrian statue in front, formal French garden with trimmed hedges and a fountain, Berlin Germany',
  neukoelln:          'busy multicultural commercial street with Arabic-script shop fronts, fruit and vegetable market stalls on wide pavements, mixed residential and retail buildings four to six storeys tall, Berlin Germany',

  // Paris
  eiffel:             'Eiffel Tower iron lattice structure rising 330m, Champ de Mars green lawn, Seine River and Trocadéro beyond, Paris France',
  marais:             'Place des Vosges red brick arcaded square, narrow medieval cobblestone streets, ornate stone mansion facades, Le Marais Paris France',
  bastille:           'large open circular urban square, tall bronze column with golden winged figure at the very top, large modern curved stone opera house on one side, Paris France',
  canal:              'narrow urban canal with historic cast-iron swing footbridges, stone-paved tree-lined towpaths, colourful narrow barges moored alongside old stone buildings, Paris France',
  montmartre:         'Sacré-Cœur white domed basilica crowning a steep hill, wide stone steps descending, narrow cobblestone artists square with cafe terraces below, Paris France',
  'les-halles':       'large undulating glass and steel canopy roof over a pedestrian plaza, large Gothic church with tall flying buttresses visible behind, central Paris France',
  'pere-lachaise':    'historic cemetery, moss-covered stone tombs and elaborate mausoleums, narrow cobblestone paths through dense overgrown trees, Paris France',
  pigalle:            'neon-lit entertainment district, red windmill on top of a building, crowded boulevard with red and pink illuminated signs and cabaret facades, Paris France',

  // Tokyo
  shinjuku:           'cluster of glass skyscrapers at a west train station exit, twin glass government towers, neon-lit narrow streets packed with signs at the east exit, Tokyo Japan',
  harajuku:           'narrow pedestrian-only alley flanked by densely packed colourful youth fashion boutiques and crepe stalls, crowds of young people, Tokyo Japan',
  shibuya:            'large scramble crossing with hundreds of pedestrians crossing simultaneously from all directions, giant LED advertising screens on surrounding buildings, Tokyo Japan',
  ueno:               'wide park paths lined with cherry blossom trees in full bloom, rowing boats on a pond, large brick museum building, Tokyo Japan',
  tsukiji:            'busy outdoor fish and seafood market, narrow lanes between crowded stalls under corrugated metal awnings, vendors with rubber boots and aprons, Tokyo Japan',
  yanaka:             'quiet narrow pedestrian shopping lane with traditional low-rise wooden shopfronts, stone lanterns, Buddhist cemetery with mossy stone graves nearby, historic Tokyo Japan',
  asakusa:            'Senso-ji Temple Kaminarimon Thunder Gate with giant red paper lantern, Nakamise shopping arcade, five-storey pagoda, Asakusa Tokyo Japan',
  akihabara:          'dense cluster of multi-storey electronics and anime shops with large outdoor screens and colourful signage, elevated rail tracks overhead, Tokyo Japan',

  // London
  borough:            'Victorian iron and glass market hall with arched roof, food stalls packed under dark railway brick arches, crowded with vendors and shoppers, Southwark London UK',
  southbank:          'Thames riverside walkway, former brick power station with a tall chimney converted to an art gallery, modern steel suspension footbridge, St Paul\'s Cathedral dome visible across the river, London UK',
  'hyde-park':        'wide open parkland with a large lake and rowing boats, tall elm and oak trees, a classical triumphal arch visible at the far corner, central London UK',
  'brick-lane':       'narrow urban market street, Georgian and Victorian brick facades covered in large-scale street art murals, food market stalls and vintage clothing vendors, East London UK',
  trafalgar:          'Trafalgar Square, Nelson\'s Column with four bronze lions at the base, National Gallery neoclassical facade, fountains, central London UK',
  brixton:            'covered Victorian market arcade with iron and glass roof, colourful produce and food stalls with Afro-Caribbean goods, lively covered market street, South London UK',
  'canary-wharf':     'cluster of modern glass and steel financial skyscrapers reflected in calm docklands water, wide waterfront plaza, London UK',

  // New York
  centralpark:        'Central Park Bethesda Fountain and Terrace, tree-lined The Mall, Manhattan glass skyscrapers visible above the tree canopy, New York USA',
  highline:           'elevated linear park on an old steel railway viaduct above street level, wildflower plantings and wooden walkways, city buildings on both sides, New York USA',
  'times-square':     'Times Square, canyon of skyscrapers covered in massive LED billboards, yellow taxis and streams of pedestrians, Midtown Manhattan New York USA',
  'brooklyn-bridge':  'Brooklyn Bridge Gothic stone towers and steel suspension cables, East River below, lower Manhattan skyline behind, New York USA',
  harlem:             'wide avenue lined with brownstone six-storey apartment buildings, stone cornices and bay windows, street-level shops with awnings, Apollo Theater marquee sign, Upper Manhattan New York USA',
  'washington-square':'public park with a large classical stone arch at the north entrance, central round fountain, red-brick university buildings surrounding, Greenwich Village New York USA',
  'coney-island':     'beachside amusement park, large ferris wheel with gondola cabins, old wooden roller coaster, wide sandy beach and Atlantic Ocean, colourful fairground rides, Brooklyn New York USA',

  // Cairo
  tahrir:             'large open circular urban square with a roundabout, large pink neoclassical museum building with arched facade on one side, elevated flyovers, central Cairo Egypt',
  'khan-khalili':     'narrow medieval bazaar alleyways, carved stone lattice screens on upper windows, copper and brass lanterns hanging overhead, mosque minarets above the rooftops, Cairo Egypt',
  'nile-corniche':    'wide riverfront promenade along the Nile, traditional wooden triangular-sail sailboats on calm brown river water, high-rise buildings on both banks, Cairo Egypt',
  'city-of-dead':     'vast outdoor necropolis, stone mausoleums and domed tombs interspersed with ordinary dwelling buildings, crumbling plaster and carved stone facades, Cairo Egypt',
  giza:               'Great Pyramid of Giza and Pyramid of Khafre on a desert plateau, Great Sphinx limestone statue, sandy desert, Nile valley in background, Egypt',
  'al-azhar-park':    'terraced ornamental gardens on a hillside, panoramic view of a historic city with domes and minarets on the horizon, gravel paths between low hedges, Cairo Egypt',

  // Mumbai
  'marine-drive':     'curved seafront promenade three kilometres long, Art Deco four-to-six storey apartment blocks along the shore, Arabian Sea, Mumbai India',
  gateway:            'large Indo-Saracenic stone arch monument on the waterfront, grand historic hotel with red domed roof visible behind, busy harbour with ferries, Mumbai India',
  'dhobi-ghat':       'vast open-air public laundry facility, hundreds of concrete washing basins arranged in long rows, colourful garments and textiles hanging on lines to dry in the sun, Mumbai India',
  dharavi:            'dense low-rise informal settlement, narrow lanes between tin-roofed workshop buildings, brightly coloured painted walls, small doorways and bustling foot traffic, Mumbai India',
  juhu:               'wide sandy ocean beach, food cart vendors along the waterfront, informal cricket games on the sand, suburban apartment blocks in the background, Mumbai India',
  colaba:             'busy street market with clothing and souvenir stalls, British colonial Victorian stone arcade buildings with verandas, working fishing dock with wooden boats nearby, South Mumbai India',

  // Beirut
  'martyrs-square':   'large open urban square, weathered bronze statue with bullet scars, reconstructed limestone neoclassical buildings alongside vacant lots, central Beirut Lebanon',
  hamra:              'busy mixed urban commercial street, older stone apartment buildings with large triple-arched windows above ground-floor shops, Arabic-language signage and street cafes, West Beirut Lebanon',
  gemmayzeh:          'steep residential street, colourful 19th-century stone and plaster buildings with large triple-arched windows, staircase alleys between levels, street art murals, Beirut Lebanon',
  'corniche-beirut':  'wide seafront promenade along the Mediterranean, palm trees lining the walkway, rocky coastline, two large natural limestone sea stacks visible offshore, Lebanon',
  'mar-mikhael':      'old industrial quarter street, low warehouses and former workshops converted to bars and cafes, colourful murals on concrete walls, mixed old residential buildings, Beirut Lebanon',
  'bourj-hammoud':    'narrow market street packed with colourful jewellery and gold shops, multi-language signs in two alphabets, dense pedestrian crowds, East Beirut Lebanon',
  achrafieh:          'hilly residential street, ornate 19th-century stone buildings with triple arched windows and ornamental iron balconies, steep staircase connecting street levels, Beirut Lebanon',
  solidere:           'reconstructed historic downtown, clean limestone neoclassical facades, large blue mosque dome, open plazas with Roman column ruins at street level, quiet wide streets, Lebanon',
  'port-beirut':      'ruined industrial port area, half-collapsed concrete grain silos with blast damage, destroyed warehouse shells, Mediterranean sea visible beyond the rubble, Beirut Lebanon',
  badaro:             'quiet tree-lined residential street, 1930s Art Deco apartment buildings with rounded balconies and ornamental facades, overgrown front gardens, South Beirut Lebanon',
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
