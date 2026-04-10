/**
 * Shared inscribed terms — stored in Supabase for cross-user, 5-minute visibility.
 *
 * SETUP (one-time, ~3 minutes):
 * 1. Create a free project at https://supabase.com
 * 2. Open the SQL editor and run:
 *
 *    create table inscribed_terms (
 *      id bigint generated always as identity primary key,
 *      location_id text not null,
 *      term_text  text not null,
 *      character_id text,
 *      created_at timestamptz default now()
 *    );
 *    alter table inscribed_terms enable row level security;
 *    create policy "public read"   on inscribed_terms for select using (true);
 *    create policy "public insert" on inscribed_terms for insert with check (true);
 *
 * 3. Copy your Project URL + anon key from Settings → API
 * 4. Add them to a .env file (see .env.example) and as GitHub Secrets.
 */

const BASE = import.meta.env.VITE_SUPABASE_URL;
const KEY  = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const sharedEnabled = !!(BASE && KEY);

const HEADERS = {
  apikey: KEY || '',
  Authorization: `Bearer ${KEY || ''}`,
  'Content-Type': 'application/json',
};

/** Post a new inscribed term. Silently fails if not configured. */
export async function inscribeTerm(locationId, text, characterId) {
  if (!sharedEnabled) return;
  try {
    await fetch(`${BASE}/rest/v1/inscribed_terms`, {
      method: 'POST',
      headers: { ...HEADERS, Prefer: 'return=minimal' },
      body: JSON.stringify({
        location_id:  locationId,
        term_text:    text,
        character_id: characterId || null,
      }),
    });
  } catch (_) {}
}

/** Fetch all terms for a location created within the last 5 minutes. */
export async function fetchLiveTerms(locationId) {
  if (!sharedEnabled) return [];
  const since = new Date(Date.now() - 5 * 60 * 1000).toISOString();
  try {
    const res = await fetch(
      `${BASE}/rest/v1/inscribed_terms` +
        `?location_id=eq.${encodeURIComponent(locationId)}` +
        `&created_at=gt.${since}` +
        `&select=term_text,character_id,created_at` +
        `&order=created_at.desc`,
      { headers: HEADERS }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (_) {
    return [];
  }
}

/** How many minutes ago was this timestamp? */
export function minsAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const m = Math.floor(diff / 60000);
  return m <= 0 ? 'just now' : `${m} min ago`;
}

/** How many minutes remain before expiry? */
export function minsLeft(isoString) {
  const elapsed = (Date.now() - new Date(isoString).getTime()) / 60000;
  return Math.max(0, Math.ceil(5 - elapsed));
}
