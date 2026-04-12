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

/**
 * Build a prompt from a stakeholder's ownership text.
 * Detects the entity type and sets the camera angle accordingly.
 */
export function buildStakeholderPrompt(locationName, cityName, ownerText, userText = '') {
  const angle = detectEntityAngle(ownerText);
  let prompt =
    `Surrealist urban artwork: ${locationName} in ${cityName}. ` +
    `Ownership claim: "${ownerText}". ` +
    `Camera angle and perspective: ${angle}. ` +
    `The image visualizes this entity's territorial consciousness — ` +
    `what this space looks and feels like from their specific vantage point. ` +
    `Dreamlike, painterly, richly detailed surrealist illustration, cinematic composition. `;
  if (userText.trim()) prompt += `Additional vision: ${userText.trim()}. `;
  prompt += `No text, no words, no watermarks, no labels.`;
  return prompt;
}

export function buildPerceptionPrompt(locationName, cityName, characterId, userText = '') {
  const p = PERSPECTIVES[characterId] || FALLBACK;

  let prompt = `Surrealist urban artwork. ${locationName} in ${cityName}, ${p.view}. `;
  prompt += `Art style: ${p.style}. `;
  prompt += `Dreamlike, highly detailed, painterly illustration, cinematic composition. `;

  if (userText.trim()) {
    prompt += `Additional vision: ${userText.trim()}. `;
  }

  prompt += `No text, no words, no watermarks, no labels.`;

  return prompt;
}
