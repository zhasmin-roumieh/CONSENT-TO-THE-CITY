# Consent to the City

*Accept the terms, sign away your shadow, and try to convince a pigeon you belong here.*

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
- **Miro frame:** https://miro.com/app/board/uXjVGCtKivA=/?moveToWidget=3458764667736227417&cot=14
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
Every city runs on invisible agreements — who owns the pavement, who governs the air above a rooftop, who holds the right to a shadow cast at 3am. *Consent to the City* takes the urban paradox of unresolved ownership and makes it unbearably literal. When you try to enter any public space, you are served a formal Terms & Conditions document you must sign before proceeding.

But the constraint bites immediately: non-human actors are treated as full stakeholders. The pigeon has filed a territorial claim. The algorithm has pre-optimised your route. A ghost from 1923 still holds the deed. The stone was quarried before the city existed and answers to no one.

You can accept, decline, or walk away — but you can also fight back. Write your own terms and impose them on the space, for exactly five minutes. The city will remember. It is already building an opinion about you.

**User story (Based on True Story (To an Extent :))):**
Maya is 24, a Lebanese architecture student on exchange at BTU Cottbus. It's her last day in Germany. Her best friend Zhasmin takes the train from Weimar to spend it with her in Berlin, one day, no plan, tourist energy at full voltage. They head straight for Alexanderplatz during the Christmas Market. At the edge of the square, fixed to a bollard, is a QR code and a green light barrier humming in the cold air. No explanation. They scan it. The app opens and the girls choose to enter Berlin as humans, not fully understanding what they've walked into. Maya clicks the dot. The map tilts into 3D, a Terms & Conditions panel slides in. She reads that the city algorithm has pre-optimised her approach path, that the socialist slabs surrounding her hold structural sovereignty. She clicks Accept. Zhasmin clicks Decline. They look at each other. Same square, same moment, one inside and one not, according to something neither of them built. Zhasmin can still physically cross the barrier, but something about that green light makes her pause. What unsettles them isn't the absurdity. It's how familiar it feels. Maya has spent the week navigating Germany on a document that quietly grants or withholds access without ever explaining itself and the app makes that logic uncomfortably legible. They spend the rest of the day walking across Berlin, accepting new conditions at every dot, noticing they are the 40th humans to enter a space, watching the city slowly form an opinion about them. They even write their own rules and submit them, hoping they'll stick. The app gives them five minutes. At some point they stop at the East Side Gallery and click Generate ,  the app produces an AI image of the site through human eyes, golden and cinematic. Then they switch to Pigeon and generate again: the same wall, top-down, iridescent, indifferent. Then Algorithm: a cold surveillance heatmap, the murals reduced to density data. Three images of the same place, none of them wrong. As architects, they had been trained to draw buildings from the outside but they never fully reflected how the city is perceived by different actors. The AI generation felt super significant, something real that was always missing in their understanding. It all felt like an AI experiment with a light barrier you could disregard, but also stop at, scan, and sit with: the quiet realisation that how you see a city depends entirely on what you are inside it and that it is truly owned by noone and everyone at the same time.

---

## How to use it

1. Open the live app — you land on a splash screen. Press **Enter** to begin.
2. Choose your **character** — each one sees and inhabits the city differently (Human, Pigeon, Rat, Fox, Ghost, Algorithm, etc.).
3. Select a **city** from the top bar (Berlin, Beirut, Paris, Tokyo, London, New York, Cairo, Mumbai).
4. Click any **dot on the map** to select a location. The map tilts into 3D and the panel slides in.
5. Read the location's atmospheric description and the list of **who claims to own this space** — including stones, pigeons, algorithms, and the dead.
6. Read your **Terms & Conditions** and choose: **Accept** or **Decline**.
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

> "Before making the app, please keep in mind that it was based on the prompt in @text.txt. I want to ensure that I have multiple cities to choose from and can navigate to different locations. I also need the option to have the app work in English, German, Russian, or Arabic, depending on the selection made by the user."

> "Now, I want the whole interface to become nicer and more interactive. Add a title relevant to the city and use a gaming/Minecraft-style font for the title. I want a terms and conditions panel to appear as a floating panel on the map when a user clicks on a circle, not at the bottom as a separate section. I also need a nice-looking description that explains to the user what to do."

> "How difficult would it be to allow the user to see an AI-generated image when they click on each actor, showing how that actor's conditions affect their perception of a given element in the city? For example, if the actor is a bird, they would see the Eiffel Tower from above, perhaps with some surrealist elements. I would also like the user to be able to write their own custom perception, which would then be translated into a generated image"

> "Can we add an icon which one chooses upon entering to walk as this creature in a city. give option of 10."

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
