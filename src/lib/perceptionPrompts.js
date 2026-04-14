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
  // ── Berlin ──────────────────────────────────────────────────────────────────
  brandenburger:      'six massive pale sandstone Doric columns supporting a wide entablature, bronze four-horse chariot sculpture on top, wide open grey cobblestone square, neoclassical triumphal arch, Berlin Germany',
  tiergarten:         'dense city forest, winding sandy gravel paths between tall green oaks and lime trees, shaft of tall golden column visible above the leafy canopy, dappled light, Berlin Germany',
  hackescher:         'red brick inner courtyard with arched gateways, ornate Art Nouveau tile mosaics in blue amber and cream on the facade, decorative terracotta ironwork, connected courtyards, Mitte Berlin Germany',
  tempelhof:          'enormously long horizontal stone terminal building with rows of square columns, monumental 1930s pale stone facade, vast flat empty tarmac airfield stretching to the horizon behind it, overcast sky, Berlin Germany',
  kreuzberg:          'yellow stucco five-storey apartment blocks with stone balconies, outer walls floor to ceiling covered in vivid red blue yellow spray-painted graffiti murals, narrow dark canal water below iron railings, Berlin Germany',
  museumsinsel:       'row of pale sandstone neoclassical museum buildings on a river island, wide Corinthian colonnades, green patina copper domes, broad stone steps descending to dark river water, Berlin Germany',
  'east-side-gallery':'flat three-metre-high grey concrete wall stretching along a riverbank, every surface painted with large colourful murals, crumbling painted texture, grey glass apartment towers behind, Berlin Germany',
  'potsdamer-platz':  'large tent-shaped glass and steel roof canopy over an open courtyard, dark red brick tower with flat angular pyramid on top beside it, glass and steel office towers reflecting grey sky, Berlin Germany',
  alexanderplatz:     'tall thin steel TV tower with large silver mirrored ball at 200 metres, wide treeless pedestrian square, round rotating multicoloured clock sculpture on a plinth, grey socialist-era slab buildings surrounding, Berlin Germany',
  'checkpoint-charlie':'small white painted wooden sentry booth in the centre of a wide asphalt street, checkpoint warning signs on metal poles, yellow taxi, grey urban street, central Berlin Germany',
  gendarmenmarkt:     'twin stone cathedral towers with large green copper domes facing each other across a grey cobblestone square, white neoclassical hall with six columns between them, dark bronze statue on a plinth, Berlin Germany',
  oberbaumbruecke:    'double-decker red brick bridge with two tall Gothic towers and crenellated battlements spanning a wide green river, yellow metro train crossing the upper deck, Berlin Germany',
  'prenzlauer-berg':  'cylindrical red brick water tower on a gentle hill, tree-lined cobblestone street below with lime trees in golden autumn colour, rows of five-storey pale yellow sandstone apartment buildings, Berlin Germany',
  mauerpark:          'gently sloping open grassy urban park, short section of grey concrete wall with peeling colourful graffiti at the lower edge, stone terraced amphitheatre seating carved into the hillside above, Berlin Germany',
  charlottenburg:     'long symmetrical white and gold Baroque palace three storeys tall, gilded bronze equestrian statue before a black iron gate, formal garden with clipped dark green hedges and circular stone fountain, Berlin Germany',
  neukoelln:          'wide straight street lined with four-storey sand-coloured plaster buildings, shop fronts with hand-painted Arabic signs in green red and gold, colourful vegetable and fruit stalls overflowing onto the grey pavement, Berlin Germany',
  reichstag:          'large stone neoclassical parliament building with Corinthian columns, a large modern transparent glass dome on top reflecting the sky, wide open esplanade, Berlin Germany',
  teufelsberg:        'artificial hill made of wartime rubble, two large white radome spheres on top like golf balls, peeling graffiti-covered concrete ruins of a Cold War listening station, forest growing around the base, Berlin Germany',
  treptower:          'enormous Soviet war memorial, vast park with tall stone pylons, giant twelve-metre bronze soldier on a central mound holding a child and a lowered sword, solemn stone sarcophagi in rows, Berlin Germany',
  gorlitzer:          'open urban park with patchy grass, bare earth paths, scattered trees, old red brick pavilion building, groups of people gathered in informal clusters, Berlin Germany',
  'karl-marx-allee':  'enormously wide straight boulevard ninety metres across, matching rows of eight-storey socialist-era apartment buildings clad in pale grey and cream ceramic tiles, strict bilateral symmetry, Berlin Germany',

  // ── Paris ───────────────────────────────────────────────────────────────────
  eiffel:             'Eiffel Tower iron lattice structure rising 330m, Champ de Mars green lawn, Seine River and Trocadéro beyond, Paris France',
  marais:             'Place des Vosges red brick arcaded square, narrow medieval cobblestone streets, ornate cream stone mansion facades, Le Marais Paris France',
  bastille:           'large open urban roundabout, tall slender dark bronze column topped by a small golden winged figure, large curved modern pale stone opera house facade on one side, Paris France',
  canal:              'narrow green water canal, old cast-iron pedestrian swing bridge painted dark green, stone quay with tall plane trees, blue and red flat barges moored against the stone bank, Paris France',
  montmartre:         'Sacré-Cœur white travertine domed basilica at the top of a steep hill, wide grey stone steps cascading down, narrow cobblestone square with cafe terraces and easels below, Paris France',
  'les-halles':       'huge undulating glass and steel canopy shaped like a wave over a pedestrian plaza, large Gothic church with tall pale stone flying buttresses and pointed arches rising behind it, Paris France',
  'pere-lachaise':    'historic walled cemetery, grey moss-covered stone tombs and ornate stone mausoleums, narrow cobblestone lanes between dense overgrown chestnut trees, autumn leaves, Paris France',
  pigalle:            'Paris night street, large red wooden windmill mounted on the corner of a cream building, red and pink neon signs for cabarets, wet cobblestone boulevard, Paris France',

  // ── Tokyo ───────────────────────────────────────────────────────────────────
  shinjuku:           'cluster of glass skyscrapers at a large train station, twin tall glass government towers, dense neon-lit narrow streets packed with vertical signs in Japanese characters, Tokyo Japan',
  harajuku:           'extremely narrow pedestrian alley, densely packed candy-coloured boutiques and crepe stalls with pink blue and yellow signage, young people in fashion clothes, overhead electric wires, Tokyo Japan',
  shibuya:            'large pedestrian scramble crossing with crowds flowing in all directions, giant LED advertising screens in Japanese on all surrounding buildings, night scene, Tokyo Japan',
  ueno:               'park avenue with rows of cherry blossom trees in full white and pink bloom, small rowing boats on a grey pond, large red brick museum building at the end, Tokyo Japan',
  tsukiji:            'crowded outdoor market lanes under low corrugated grey steel awnings, fresh fish and seafood on ice on wooden counters, yellow rubber-booted vendors, wet stone ground, Tokyo Japan',
  yanaka:             'quiet narrow lane with low timber-framed wooden shopfronts with dark wood and paper panels, red and white stone lanterns, mossy stone grave markers through a cemetery gate, old Tokyo Japan',
  asakusa:            'Senso-ji Temple Kaminarimon gate with a giant red paper lantern hanging below the dark wooden roof, crowded Nakamise shopping arcade, five-storey stone pagoda behind, Tokyo Japan',
  akihabara:          'dense canyon of multi-storey shops with enormous outdoor screens and overlapping colourful signage in Japanese, elevated concrete rail viaduct overhead, crowds below, Tokyo Japan',

  // ── London ──────────────────────────────────────────────────────────────────
  borough:            'covered Victorian market under dark riveted iron and glass barrel-vaulted roof, fresh food stalls crowded beneath old dark railway brick arches, busy with shoppers, Southwark London UK',
  southbank:          'Thames riverside promenade, massive brown brick former power station with tall square chimney, modern white steel suspension footbridge, St Paul\'s Cathedral pale dome on the far bank, London UK',
  'hyde-park':        'vast flat parkland, large oval lake with wooden rowing boats, tall mature oak trees, white classical triumphal arch visible at a distant corner, grey sky, central London UK',
  'brick-lane':       'narrow cobblestone market street, old Georgian dark red brick facades entirely covered in large colourful street art murals, clothing stalls on the pavement, East London UK',
  trafalgar:          'Trafalgar Square, tall grey granite Nelson\'s Column with four large bronze lions at the base, National Gallery cream stone neoclassical facade, two stone fountains, central London UK',
  brixton:            'covered Victorian market arcade, iron and glass barrel-vaulted roof, crowded stalls of bright orange yellow and green Caribbean fruits, Brixton South London UK',
  'canary-wharf':     'cluster of tall glass and steel skyscrapers, towers reflected symmetrically in calm dark dockland water, wide pale stone waterfront plaza, London UK',

  // ── New York ────────────────────────────────────────────────────────────────
  centralpark:        'Central Park Bethesda Fountain and Terrace, tree-lined promenade, Manhattan glass skyscrapers visible above the green tree canopy, New York USA',
  highline:           'elevated park on old rusted steel railway structure above a street, wild grasses and yellow flowers in wooden planters, red brick buildings close on both sides, New York USA',
  'times-square':     'Times Square, canyon of skyscrapers covered in enormous bright LED billboards, yellow taxis and dense pedestrian crowds, night scene, Midtown Manhattan New York USA',
  'brooklyn-bridge':  'Brooklyn Bridge, two tall Gothic stone towers with pointed arches, thick steel suspension cables, East River below, lower Manhattan skyline of glass towers behind, New York USA',
  harlem:             'wide straight avenue, rows of narrow five-storey brownstone buildings in dark brown and red brick, stone cornices and bay windows, low street-level shops with coloured canvas awnings, Manhattan New York USA',
  'washington-square':'public park, large white marble triumphal arch at the north end, central circular fountain, tall red-brick university buildings on all four sides, Greenwich Village New York USA',
  'coney-island':     'sandy beach amusement park, large steel spoked ferris wheel with red gondola cabins, old tan wooden roller coaster, colourful funfair stalls, grey Atlantic Ocean behind, Brooklyn New York USA',

  // ── Cairo ───────────────────────────────────────────────────────────────────
  tahrir:             'large open circular urban roundabout, large sand-coloured neoclassical museum building with arched windows and columns on one side, elevated flyover road, midday heat haze, Cairo Egypt',
  'khan-khalili':     'narrow bazaar alley, mashrabiya carved stone lattice screens projecting from upper storeys, ornate copper and brass lanterns hanging low overhead, tall mosque minaret above the rooftops, Islamic Cairo Egypt',
  'nile-corniche':    'wide promenade boulevard beside a broad slow brown river, traditional wooden felucca sailboats with large white triangular sails, pale stone buildings on the far bank, Cairo Egypt',
  'city-of-dead':     'vast walled necropolis, tall ochre plaster domed mausoleums and flat-roofed tomb houses among palm trees, crumbling carved stone facades, sandy ground, Cairo Egypt',
  giza:               'Great Pyramid of Giza enormous tan limestone mass, Pyramid of Khafre beside it, Great Sphinx pale carved limestone head and body, sandy desert plateau, clear sky, Egypt',
  'al-azhar-park':    'formal terraced garden on a hill, low dark green box hedges and pale gravel paths, distant city skyline with pale stone domes and pencil-thin minarets on the horizon, Cairo Egypt',

  // ── Mumbai ──────────────────────────────────────────────────────────────────
  'marine-drive':     'long curved seafront boulevard, rows of three-to-four storey Art Deco buildings with rounded corners, cream and pale yellow facades, deep blue Arabian Sea, Mumbai India',
  gateway:            'large dark basalt stone arch with Indo-Saracenic pointed arches and corner turrets on the waterfront, grand Edwardian hotel with large red dome visible behind, harbour with wooden boats, Mumbai India',
  'dhobi-ghat':       'vast open-air laundry, hundreds of square concrete washing tubs in long parallel rows, vivid pink yellow blue and green garments hanging on lines filling the air, Mumbai India',
  dharavi:            'dense low-rise settlement, narrow lanes between corrugated tin-roofed workshop buildings, bright blue orange and yellow painted plaster walls, small low doorways, Mumbai India',
  juhu:               'wide flat sandy beach, coconut palm trees in a row, colourful painted food cart stalls, informal cricket game on the sand, grey-white Arabian Sea behind, suburban Mumbai India',
  colaba:             'narrow street market, wooden stalls with clothing and souvenirs, Victorian stone arcaded buildings with green wooden shutters and verandas above, old wooden fishing boats at a dock, South Mumbai India',

  // ── Beirut ──────────────────────────────────────────────────────────────────
  'martyrs-square':   'large empty open square, solitary bronze statue on a tall stone plinth, row of reconstructed pale limestone neoclassical buildings on one side, vacant rubble-strewn lots on the other, Beirut Lebanon',
  hamra:              'busy mid-rise commercial street, 1960s concrete apartment blocks with large triple-arched window bays above ground-floor shops, red and green Arabic neon signs, outdoor cafe chairs on the pavement, Beirut Lebanon',
  gemmayzeh:          'steep narrow street, 19th-century stone buildings with large triple-arched windows and colourful painted shutters in yellow blue and green, staircase alleys between levels, street art murals on low walls, Beirut Lebanon',
  'corniche-beirut':  'wide seafront promenade, a row of tall palm trees, dark blue Mediterranean sea, two large natural rock columns rising from the water fifty metres offshore, Lebanon',
  'mar-mikhael':      'low industrial street, old stone warehouses with corrugated metal roofs, large painted murals on building end walls in vivid colours, outdoor bar terraces with string lights on the street, Beirut Lebanon',
  'bourj-hammoud':    'narrow busy market street, tiny jewellery shops side by side, gold rings necklaces chains in small lit window displays, layered signage in Arabic and Armenian scripts, East Beirut Lebanon',
  achrafieh:          'hilly Beirut residential street, ornate 1890s ochre stone buildings with large triple arched windows and decorative iron balconies, steep narrow stone staircase between the levels, Lebanon',
  solidere:           'clean wide downtown street, polished pale limestone neoclassical buildings, large pale blue mosque dome with minarets visible, ancient Roman stone column bases in an open plaza at street level, Beirut Lebanon',
  'port-beirut':      'blasted industrial port, broken grey concrete grain silos with large collapsed sections, destroyed corrugated metal warehouses, bright blue Mediterranean sea beyond the wreckage, Beirut Lebanon',
  badaro:             'quiet residential street, 1930s–1940s white plaster Art Deco buildings with curved corner balconies and geometric ornamental facades, mature trees overhanging the pavement, South Beirut Lebanon',
  shatila:            'extremely dense informal refugee camp, nine-storey concrete buildings crammed together with no gap, narrow dark alleys too tight for sunlight, tangled overhead wires and pipes, Beirut Lebanon',
  'national-museum':  'large 1930s neoclassical museum building with a colonnaded facade, pale stone, shrapnel scars visible on the lower walls, wide empty plaza in front, Beirut Lebanon',
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
  const vis = LOCATION_VISUALS[locationId] || `${locationName}, ${cityName}`;
  const parts = [vis, angle, 'surrealist oil painting, masterpiece, highly detailed, sharp focus, cinematic lighting'];
  if (userText.trim()) parts.push(userText.trim());
  parts.push('no text, no watermarks, no logos');
  return parts.join(', ');
}

export function buildPerceptionPrompt(locationName, cityName, characterId, userText = '', locationId = '') {
  const p = PERSPECTIVES[characterId] || FALLBACK;
  const vis = LOCATION_VISUALS[locationId] || `${locationName}, ${cityName}`;
  const parts = [vis, p.camera, p.style, 'masterpiece, highly detailed, sharp focus, cinematic lighting'];
  if (userText.trim()) parts.push(userText.trim());
  parts.push('no text, no watermarks, no logos');
  return parts.join(', ');
}
