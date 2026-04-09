/** Escalating counter-offers shown each time the user declines.
 *  Index 4 is the lockout state — no accept button, only "Leave". */
export const COUNTER_OFFERS = [
  {
    tag: "ALTERNATIVE ACCESS OPTION",
    title: "Don't leave yet.",
    body: "Create a verified account and access this space immediately. No payment. No commitment. One registration, permanent access.",
    ctaAccept: "Register & Enter",
    ctaDecline: "Still decline",
    accentColor: "#e8a020",
    locked: false,
  },
  {
    tag: "LOCATION-BASED ACCESS OFFER",
    title: "Standard arrangement available.",
    body: "Enable passive location sharing for the next 7 days. In exchange, you will gain unrestricted access to this and all adjacent spaces.",
    ctaAccept: "Enable Sharing & Enter",
    ctaDecline: "Still decline",
    accentColor: "#e87020",
    locked: false,
  },
  {
    tag: "SPECIAL TEMPORARY ARRANGEMENT",
    title: "Final standard-tier offer.",
    body: "Provide 30 days of passive biometric movement data in exchange for 2-hour timed access to this space. This arrangement cannot be repeated.",
    ctaAccept: "Submit Data & Enter",
    ctaDecline: "Still decline",
    accentColor: "#e84020",
    locked: false,
  },
  {
    tag: "COMPLIANCE NOTICE — URGENT",
    title: "Your refusals have been logged.",
    body: "To avoid being permanently flagged as an access risk, accept standard urban data terms for all city spaces — now, and indefinitely. No further negotiation will be offered.",
    ctaAccept: "Accept All Terms Permanently",
    ctaDecline: "Refuse and be flagged",
    accentColor: "#cc1a1a",
    locked: false,
  },
  {
    tag: "ACCESS PERMANENTLY SUSPENDED",
    title: null,
    body: "Your profile has been flagged. Entry to this space and all adjacent spaces has been suspended pending review. No further negotiation is available at this time.",
    ctaAccept: null,
    ctaDecline: "Leave",
    accentColor: "#880000",
    locked: true,
  },
];
