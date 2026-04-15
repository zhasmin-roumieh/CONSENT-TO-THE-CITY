import { useState, useEffect } from 'react';
import { WIKI_TITLES } from '../data/wikiTitles';
import { PHOTOS } from '../data/photos';

// Fetches the Wikipedia thumbnail for a location.
// Falls back to the static PHOTOS entry if the API returns nothing.
export function useLocationPhoto(locId) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(null);
    const directSrc = PHOTOS[locId] || null;
    const title = WIKI_TITLES[locId];

    if (!title) {
      if (directSrc) setSrc(directSrc);
      return;
    }

    let cancelled = false;

    const url =
      'https://en.wikipedia.org/w/api.php?' +
      new URLSearchParams({
        action: 'query',
        titles: title,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 800,
        origin: '*',
      });

    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        const pages = data.query?.pages;
        if (!pages) { if (directSrc) setSrc(directSrc); return; }
        const page = Object.values(pages)[0];
        const imgSrc = page?.thumbnail?.source;
        setSrc(imgSrc || directSrc || null);
      })
      .catch(() => { if (!cancelled) setSrc(directSrc); });

    return () => { cancelled = true; };
  }, [locId]);

  return src;
}
