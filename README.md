# Consent to the City

> *A speculative interactive web application exploring who owns urban space — and what you must agree to in order to enter it.*

---

## Concept

**Consent to the City** is an interactive urban simulation built for the studio *[Your Studio Name]* at Bauhaus-Universität Weimar. It asks a simple but unsettling question: **what are the real terms and conditions of entering a public space?**

Every time you step into a street, a square, or a park, you implicitly consent to a complex web of ownership claims — by governments, corporations, historical ghosts, non-human inhabitants, and algorithms. This app makes those invisible agreements visible, absurd, and personal.

You choose a city, select a character (human, pigeon, rat, algorithm, ghost, etc.), click on a location, and are presented with a formal **Terms & Conditions** document you must sign before entering. The clauses shift depending on who you are, who owns the space, and what kind of entity is asking for your consent.

---

## Live Site

**[https://zhasmin-roumieh.github.io/CONSENT-TO-THE-CITY/](https://zhasmin-roumieh.github.io/CONSENT-TO-THE-CITY/)**

---

## Features

| Feature | Description |
|---|---|
| **8 cities** | Berlin, Beirut, Paris, Tokyo, London, New York, Cairo, Mumbai |
| **80+ locations** | Each with unique ownership layers and atmospheric descriptions |
| **10 characters** | Human, Pigeon, Fox, Rat, Root, Ghost, Algorithm, Cloud, Bee, Spider |
| **Consent system** | Unique T&C generated per location — accept, decline, or counter-offer |
| **Ownership layers** | Current owners, ghost owners, temporal events — visualised as stacked claims |
| **AI image generation** | Each stakeholder's view of a location rendered through an AI image model |
| **4 languages** | English, Deutsch, Русский, العربية (with full RTL layout for Arabic) |
| **3D map** | Buildings extrude in 3D when you enter a location |
| **Dark / light mode** | Toggle or follows system preference |
| **Consent log** | Your full history of accepted and declined spaces |

---

## Characters

Each character sees the city differently and generates a different perspective image:

- **Human** — street-level eye height
- **Pigeon** — top-down bird's eye
- **Fox** — low amber dusk angle
- **Rat** — worm's eye from below
- **Root** — underground cross-section
- **Ghost** — double exposure of past and present
- **Algorithm** — surveillance heat map overhead
- **Cloud** — aerial above storm clouds
- **Bee** — compound eye UV spectrum
- **Spider** — ceiling corner looking down

---

## Ownership System

Each location has three layers of ownership claims:

1. **Current owners** — who legally or physically controls the space today
2. **Ghost owners** — former claims that were never legally resolved
3. **Temporal events** — time-specific governance shifts (tidal flooding, festivals, curfews)

The ownership claims are deliberately non-human: stones, pigeons, algorithms, mycelium networks, and dead border guards all assert territory.

---

## Academic Context

- **Programme:** Master of Science in [Your Programme]
- **University:** Bauhaus-Universität Weimar
- **Studio:** The Prompt City — Summer 2026
- **Tutor:** [Tutor Name]
- **Student:** Zhasmin Roumieh

---

## Run Locally

```bash
# Clone the repository
git clone https://github.com/zhasmin-roumieh/CONSENT-TO-THE-CITY.git
cd CONSENT-TO-THE-CITY/consent-to-the-city

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite](https://vite.dev) |
| Map | [MapLibre GL](https://maplibre.org) with CARTO tiles |
| Icons | [react-icons](https://react-icons.github.io) |
| Fonts | [Orbitron](https://fonts.google.com/specimen/Orbitron) (UI) + Noto Sans Arabic (RTL) |
| AI images | Flux image model via API |
| Hosting | GitHub Pages (auto-deploy on push to `main`) |
| Language | JavaScript (no TypeScript) |

---

## Project Structure

```
src/
├── components/       UI screens (map, panel, modals, consent flow)
├── data/
│   ├── cities.js     Base city + location data
│   ├── cities-extra.js  Extended locations for Berlin & Beirut
│   ├── consentItems.js  The consent clauses pool
│   ├── photos.js     Fallback photo URLs per location
│   └── wikiTitles.js Wikipedia article titles for location photos
├── lib/
│   ├── useLocationPhoto.js  Fetches location photos (Wikipedia API + fallback)
│   └── perceptionPrompts.js AI image prompt builder per character
└── i18n/
    └── ui.js         All UI strings in 4 languages
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions. No manual steps needed.

---

## References & Inspirations

- Henri Lefebvre, *The Right to the City* (1968)
- Don Mitchell, *The Right to the City: Social Justice and the Fight for Public Space* (2003)
- Keller Easterling, *Extrastatecraft: The Power of Infrastructure Space* (2014)
- The terms and conditions of every app you have ever agreed to without reading
