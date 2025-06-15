import { useState, useEffect } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/books')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return products;
}