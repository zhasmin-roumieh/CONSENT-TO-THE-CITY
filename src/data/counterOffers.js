/** Escalating counter-offers shown each time the user declines.
 *  Starts corporate, ends absurd. Index 4 is the lockout — no accept button. */
export const COUNTER_OFFERS = [
  {
    tag: "OH. OKAY. THAT'S FINE.",
    title: "We just want you to feel welcome.",
    body: "Would you mind creating a small account? Tiny one. Just your name. And email. And phone number. And one blood type. (The blood type is optional. Probably.)",
    ctaAccept: "Sure, fine",
    ctaDecline: "No thank you",
    accentColor: "#e8a020",
    locked: false,
  },
  {
    tag: "INTERESTING CHOICE",
    title: "Okay. Different approach.",
    body: "What if we just tracked your location for a week? We promise it's mostly automated. The intern only checks it on Tuesdays. And sometimes Thursdays. He's very enthusiastic.",
    ctaAccept: "I suppose",
    ctaDecline: "Still no",
    accentColor: "#e87020",
    locked: false,
  },
  {
    tag: "THIS IS GETTING AWKWARD",
    title: "We've called a meeting about you.",
    body: "The committee has convened. They are offering 2 hours of supervised access in exchange for 30 days of biometric data. The committee also wants you to know they find your attitude refreshing, if difficult.",
    ctaAccept: "Fine. 2 hours.",
    ctaDecline: "Tell the committee I said hi",
    accentColor: "#e84020",
    locked: false,
  },
  {
    tag: "PLEASE",
    title: "We're running out of options here.",
    body: "Just... accept everything? Forever? We'll give you a badge. It says 'TRUSTED URBAN SUBJECT.' It's laminated. There's a little hologram on it. We spent a lot on the hologram.",
    ctaAccept: "Give me the badge",
    ctaDecline: "I do not want the badge",
    accentColor: "#cc1a1a",
    locked: false,
  },
  {
    tag: "FINE. WE GIVE UP. (SORT OF.)",
    title: null,
    body: "The system has flagged your profile. Or it flagged someone else. The logs are unclear. The algorithm is, frankly, confused. Either way — you're not getting in. Probably.",
    ctaAccept: null,
    ctaDecline: "Noted",
    accentColor: "#880000",
    locked: true,
  },
];
