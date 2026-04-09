import { useState, useEffect } from 'react';

export default function VisitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Hit the counter once per page load — increments globally and returns total
    fetch('https://api.counterapi.dev/v1/consent-to-the-city/visits/up')
      .then(r => r.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return (
    <div className="visit-counter">
      <span className="visit-counter-num">{count.toLocaleString()}</span>
      <span className="visit-counter-label">VISITS</span>
    </div>
  );
}
