export const CONSENT_ITEMS = [
  "You consent to your precise location being tracked for the full duration of your visit.",
  "You consent to your image being captured and processed by operated camera infrastructure.",
  "You consent to your anonymised movement patterns being shared with city authorities.",
  "You consent to your device identifiers being logged and linked to this access event.",
  "You consent to your visit data being retained for a minimum of 90 days.",
  "You consent to your presence being used to calibrate crowd density and flow models.",
  "You consent to targeted commercial messaging based on your inferred spatial profile.",
  "You consent to background data collection continuing for 48 hours after your visit.",
  "You consent to your biometric indicators being estimated from movement speed and rhythm.",
  "You consent to your social connections being mapped if they visit the same space.",
  "You consent to your digital identity being permanently linked to this physical location.",
  "You consent to your emotional state being inferred from passive environmental sensors.",
  "You consent to waiving your right to assemble or protest within 200 metres of this location.",
  "You consent to predictive access profiling being applied to all future visits.",
  "You consent to your consent history being shared with third-party data brokers.",
  "You consent to pre-emptive access denial based on behavioural prediction models.",
  "You consent to the permanent transfer of your spatial data to the operating entity.",
  "You consent to your data being retained indefinitely, including after account deletion.",
  "You consent to your children's future access being conditional on your compliance record.",
  "You consent to your spatial behaviour being used in machine learning training datasets.",
  "You consent to your physical presence constituting implicit endorsement of this space.",
  "You consent to all terms being updated at any time without prior notification.",
  "You consent to your patterns being licensed to urban analytics companies.",
  "You consent to your right to challenge this agreement being waived upon entry.",
];

/** Pick `count` unique items not already in `existing`. */
export function pickConsentItems(count, existing = []) {
  const available = CONSENT_ITEMS.filter(item => !existing.includes(item));
  const pool = available.length >= count ? available : [...CONSENT_ITEMS];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
