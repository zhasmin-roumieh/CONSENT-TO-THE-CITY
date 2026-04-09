import { useState, useEffect } from 'react';

const TODAY = new Date().toISOString().split('T')[0]; // e.g. "2026-04-09"
const BASE  = 'https://api.counterapi.dev/v1/consent-to-the-city';

export default function StatsPanel() {
  const [total, setTotal] = useState(null);
  const [today, setToday] = useState(null);

  useEffect(() => {
    // Hit both counters once — each call increments and returns the new value
    fetch(`${BASE}/total/up`)
      .then(r => r.json())
      .then(d => setTotal(d.count))
      .catch(() => {});

    fetch(`${BASE}/day-${TODAY}/up`)
      .then(r => r.json())
      .then(d => setToday(d.count))
      .catch(() => {});
  }, []);

  return (
    <div className="stats-panel">
      <div className="stats-panel-title">SITE TRAFFIC</div>

      <div className="stats-row">
        <div className="stats-item">
          <span className="stats-value">{today !== null ? today.toLocaleString() : '—'}</span>
          <span className="stats-label">TODAY</span>
        </div>
        <div className="stats-divider" />
        <div className="stats-item">
          <span className="stats-value">{total !== null ? total.toLocaleString() : '—'}</span>
          <span className="stats-label">ALL TIME</span>
        </div>
      </div>
    </div>
  );
}
