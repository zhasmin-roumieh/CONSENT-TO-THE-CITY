import { useState, useEffect } from 'react';
import { WIKI_TITLES } from '../data/wikiTitles';

// Fetches the Wikipedia thumbnail for a location.
// Uses the Pageimages API so we can request a specific size directly
// without hacking the URL — much more reliable than the summary endpoint.
export function useLocationPhoto(locId) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(null);
    const title = WIKI_TITLES[locId];
    if (!title) return;

    let cancelled = false;

    const url =
      'https://en.wikipedia.org/w/api.php?' +
      new URLSearchParams({
        action: 'query',
        titles: title,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 800,
        origin: '*',   // required for browser CORS requests
      });

    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        const pages = data.query?.pages;
        if (!pages) return;
        const page = Object.values(pages)[0];
        const imgSrc = page?.thumbnail?.source;
        if (imgSrc) setSrc(imgSrc);
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [locId]);

  return src;
}
