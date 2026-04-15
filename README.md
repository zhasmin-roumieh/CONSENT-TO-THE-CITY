# Consent to the City

*A city simulator where everyone — pigeons, algorithms, and 1923 ghosts — owns the space before you do and has terms to accept.*

---

## Author & course

**Author:** Zhasmin Roumieh

**Studio:** Prompt City — Urban Vision Wolfsburg 2026

**Course:** IUDD Master, SoSe 2026

**Chair:** Informatics in Architecture and Urbanism (InfAU), Faculty of Architecture and Urbanism, Bauhaus-Universität Weimar

**Teaching staff:** Reinhard König, Martin Bielik, Sven Schneider, Egor Gaydukov, Egor Gavrilov

**Exercise:** Urban Absurdities (Nonsense Project)

**Submission date:** 2026-04-16

---

## Links

- **Live app (GitHub Pages):** https://zhasmin-roumieh.github.io/CONSENT-TO-THE-CITY/
- **Source repo:** https://github.com/zhasmin-roumieh/CONSENT-TO-THE-CITY
- **Miro frame:** https://miro.com/app/board/uXjVGCtKivA=/moveToWidget=3458764667736227417&cot=14
- **60 s showreel:** embedded on the Miro frame above

---

## The task

Nonsense Project is a two-weeks long task designed to get familiar with application of coding agents in building apps, tools and projects that investigate unique ways of working with urban context. I was randomly assigned **one urban paradox and one constraint** from the studio's Nonsense Ideas deck and built a working web app that answers this combination. The process is documented here and in a 60-second showreel.

---

## Theme & constraint

**Theme (Urban Absurdity):**
In this city, nobody knows who owns what anymore.

**Constraint (Playful Limitation):**
You must treat non-human actors as active stakeholders. 

---

## Concept and User Story

**Concept:**
[FILL IN: 100–150 words. What the app is, how it reads the theme, where the constraint actually bites. No technical details here.]

**User story:**
[FILL IN: 100–200 words. A small narrative about one specific imagined user — who they are, why they open the app, what they do step by step, what they see and feel, what they take away.]

---

## How to use it

1. Open the live app — you land on a splash screen. Press **Enter** to begin.
2. Choose your **character** — each one sees and inhabits the city differently (Human, Pigeon, Rat, Fox, Ghost, Algorithm, etc.).
3. Select a **city** from the top bar (Berlin, Beirut, Paris, Tokyo, London, New York, Cairo, Mumbai).
4. Click any **dot on the map** to select a location. The map tilts into 3D and the panel slides in.
5. Read the location's atmospheric description and the list of **who claims to own this space** — including stones, pigeons, algorithms, and the dead.
6. Read your **Terms & Conditions** and choose: **Accept**, **Decline**, or negotiate a **Counter-offer**.
7. After accepting, view the location through your character's eyes via an **AI-generated image**.
8. Keep exploring — your consent log tracks every space you've entered or refused.
9. *Tip: try the same location as a Pigeon, then as an Algorithm — the ownership claims read very differently.*

---

## Technical implementation

**Frontend:** React 19 + Vite (JavaScript, no TypeScript)
**Hosting & build:** GitHub Pages, built via GitHub Actions workflow (auto-deploys on push to `main`)
**Data sources / APIs:**
- Wikipedia Pageimages API — location photos fetched at runtime
- Wikimedia Commons — fallback photo URLs
- Flux image model API — AI-generated character perspective images
- CARTO — vector map tiles (dark and light styles via MapLibre GL)

**Models at runtime:** Flux image generation model (hosted, called via API on stakeholder view)
**Notable libraries:** MapLibre GL, react-icons, @mapbox/mapbox-gl-rtl-text (Arabic text rendering)

**Run locally:**
```bash
git clone https://github.com/zhasmin-roumieh/CONSENT-TO-THE-CITY.git
cd CONSENT-TO-THE-CITY/consent-to-the-city
npm install
npm run dev
# open http://localhost:5173
```

---

## Working with AI

**Coding agents used:** Claude Code, model `claude-sonnet-4-6`

**Key prompts (that actually moved the project):**

> "I need us to build a web app where you explore cities on a map and each location has terms and conditions you must consent to before entering, with different ownership layers — current owners, ghost owners, and temporal events."

> "Add Beirut as a full city with locations including Shatila camp, Mar Mikhael, Gemmayzeh, the port explosion site — each with atmospheric descriptions, ownership claims, and ghost claims in English, German, Russian, and Arabic."

> "The consent clauses are too scary and give privacy concerns — replace all of them with fun, poetic, absurdist ones that fit the satirical tone of the project."

> "Add a character selection system where each character (pigeon, rat, ghost, algorithm, etc.) generates a different AI image of the location from their perspective — bird's eye for pigeon, underground cross-section for root, surveillance heatmap for algorithm."

**Reflection:**
[FILL IN: ≤ 150 words. What unlocked progress? Where did the agent get stuck or go sideways? What would you do differently next time?]

---

## Credits, assets, licenses

**Fonts:** Orbitron (Google Fonts, OFL); Noto Sans Arabic (Google Fonts, OFL)
**Map tiles:** CARTO Dark Matter & Positron (CC BY 3.0)
**Location photos:** Wikipedia / Wikimedia Commons (CC BY-SA, per file)
**AI images:** Generated at runtime via Flux model — not stored in the repository
**Data:** Location descriptions, ownership claims, and consent clauses written for this project
**Third-party code:** MapLibre GL (BSD-3-Clause); React (MIT); Vite (MIT); react-icons (MIT)
**This repo:** MIT
