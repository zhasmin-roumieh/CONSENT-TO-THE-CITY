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
/**
 * Build a prompt from a stakeholder's ownership text.
 * Used when clicking "Perceive" on an individual owner entry.
 */
export function buildStakeholderPrompt(locationName, cityName, ownerText, userText = '') {
  let prompt =
    `Surrealist urban artwork: ${locationName} in ${cityName}, ` +
    `as perceived and claimed by the following entity — "${ownerText}". ` +
    `Visualize this territorial claim as a living consciousness: ` +
    `what does this space look, feel and mean to this specific owner? ` +
    `Dreamlike, painterly, surrealist illustration with rich symbolic and spatial detail. `;
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
