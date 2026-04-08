import { useState, useEffect } from 'react';
import { WIKI_TITLES } from '../data/wikiTitles';

// Fetches the Wikipedia thumbnail for a location and returns the URL.
// Returns null while loading or if no photo is available.
export function useLocationPhoto(locId) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(null);
    const title = WIKI_TITLES[locId];
    if (!title) return;

    let cancelled = false;

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { headers: { Accept: 'application/json' } }
    )
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        const thumb = data.thumbnail?.source;
        if (thumb) {
          // Swap the size part of the URL to get a wider image
          setSrc(thumb.replace(/\/\d+px-/, '/800px-'));
        }
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [locId]);

  return src;
}
