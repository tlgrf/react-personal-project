
import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';

export default function LandingPage() {
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:6001/store_info')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data.length > 0) setStore(data[0]);
        else setError('No store info found');
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="landing"><p>Error: {error}</p></div>;
  if (!store) return <div className="landing"><p>Loading store info…</p></div>;

  return (
    <div className="landing">
      <h1>{store.name}</h1>
      <p>{store.description}</p>
      <p><strong>Phone:</strong> {store.phone_number}</p>
    </div>
  );
}