export const CONSENT_ITEMS = [
  "You consent to the wind having passed through you on the way to somewhere else.",
  "You consent to this location remembering you, slightly.",
  "You consent to your footsteps being silently added to the pavement's long memory.",
  "You consent to the ambient noise having entered your ears without prior arrangement.",
  "You consent to this street having formed a loose opinion about you.",
  "You consent to the birds in this area updating their internal map of humans.",
  "You consent to the algorithm having found your energy somewhat predictable.",
  "You consent to the sunlight touching you free of charge, for now.",
  "You consent to local plants registering your CO₂ as a minor contribution.",
  "You consent to your mood being briefly visible to strangers and pigeons.",
  "You consent to the city forming a vague impression of your aesthetic preferences.",
  "You consent to the pavement knowing the rough weight of your choices.",
  "You consent to your shadow being temporarily borrowed by this location.",
  "You consent to being included in the neighbourhood's current sense of itself.",
  "You consent to the air here having developed opinions about you.",
  "You consent to any cats in the area having already assessed your character.",
  "You consent to your presence briefly inflating the local sense of possibility.",
  "You consent to the infrastructure silently approving of your arrival.",
  "You consent to having formed an opinion about this place, whether you intended to or not.",
  "You consent to the city noting your visit as neither remarkable nor forgettable.",
  "You consent to whatever feeling this space generates in you belonging partly to it.",
  "You consent to the approximate position of the moon being loosely relevant to this visit.",
  "You consent to the smell of this place following you home, briefly and without permission.",
  "You consent to having been here, in the full existential sense that being somewhere entails.",
];

/** Pick `count` unique items not already in `existing`. */
export function pickConsentItems(count, existing = []) {
  const available = CONSENT_ITEMS.filter(item => !existing.includes(item));
  const pool = available.length >= count ? available : [...CONSENT_ITEMS];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
