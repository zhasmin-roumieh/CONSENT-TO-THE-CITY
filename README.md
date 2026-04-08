# Consent to the City

A speculative interactive map where you negotiate access to urban public spaces governed by overlapping human, non-human, algorithmic, and ghostly ownership systems.

## Features

- **7 cities** — Berlin, Paris, Tokyo, London, New York, Cairo, Mumbai
- **Clickable map markers** for every location
- **Terms & Conditions** — unique, randomly generated consent forms
- **Ownership layers** — current owners, ghost owners, temporal owners with visualised distribution
- **Year slider** (1700–2150) — shift through time and see how governance changes
- **Write your own terms** — inscribe a rule into the location's governance layer
- **4 languages** — English, Deutsch, Русский, العربية (with RTL layout for Arabic)
- **Dark / light mode** — follows your system preference automatically

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173/consent-to-the-city/](http://localhost:5173/consent-to-the-city/)

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository named `consent-to-the-city`
2. Go to **Settings → Pages** → set source to **GitHub Actions**
3. Push to `main` — the site deploys automatically

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev)
- [React Leaflet](https://react-leaflet.js.org) — interactive map
- [CARTO](https://carto.com) — map tiles (dark/light)
- Plain CSS with CSS custom properties
