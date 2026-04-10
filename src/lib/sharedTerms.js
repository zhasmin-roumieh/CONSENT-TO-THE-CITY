/**
 * Shared inscribed terms — Firebase Realtime Database (REST, no SDK).
 * Terms are visible to ALL visitors at the same location for 5 minutes.
 *
 * ── ONE-TIME SETUP (~2 minutes) ──────────────────────────────────────────────
 *
 * 1. Go to https://console.firebase.google.com
 *    (Sign in with any Google account)
 *
 * 2. Click "Add project" → give it any name → skip Analytics → Create project
 *
 * 3. In the left sidebar: Build → Realtime Database → Create database
 *    → choose any region → "Start in TEST MODE" → Enable
 *
 * 4. Copy the URL shown — looks like:
 *    https://your-project-default-rtdb.firebaseio.com
 *
 * 5. Add it as a GitHub Secret called VITE_FIREBASE_DB_URL
 *    (repo Settings → Secrets and variables → Actions → New secret)
 *
 * 6. For local testing: create a .env file in the project root with:
 *    VITE_FIREBASE_DB_URL=https://your-project-default-rtdb.firebaseio.com
 *
 * That's it. Test mode allows public read/write for 30 days.
 * After 30 days, update the Database Rules to:
 *   { "rules": { "terms": { ".read": true, ".write": true } } }
 * ─────────────────────────────────────────────────────────────────────────────
 */

const DB = import.meta.env.VITE_FIREBASE_DB_URL?.replace(/\/$/, '');
export const sharedEnabled = !!DB;

/** Post a new term under /terms/{locationId}/ */
export async function inscribeTerm(locationId, text, characterId) {
  if (!sharedEnabled) return;
  try {
    await fetch(`${DB}/terms/${encodeURIComponent(locationId)}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        characterId: characterId || null,
        createdAt: Date.now(),
      }),
    });
  } catch (_) {}
}

/** Fetch all terms for a location, filter to the last 5 minutes. */
export async function fetchLiveTerms(locationId) {
  if (!sharedEnabled) return [];
  try {
    const res = await fetch(
      `${DB}/terms/${encodeURIComponent(locationId)}.json`
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!data || typeof data !== 'object') return [];
    const cutoff = Date.now() - 5 * 60 * 1000;
    return Object.values(data)
      .filter(t => t && t.createdAt > cutoff)
      .sort((a, b) => b.createdAt - a.createdAt);
  } catch (_) {
    return [];
  }
}

/** "just now" or "X min ago" */
export function minsAgo(createdAt) {
  const m = Math.floor((Date.now() - createdAt) / 60000);
  return m <= 0 ? 'just now' : `${m} min ago`;
}

/** Minutes remaining before the 5-minute window closes */
export function minsLeft(createdAt) {
  return Math.max(0, Math.ceil(5 - (Date.now() - createdAt) / 60000));
}
