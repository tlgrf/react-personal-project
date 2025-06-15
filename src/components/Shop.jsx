import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import '../styles/Shop.css';

export default function Shop() {
  const products = useProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop">
      <h2>Book Catalog</h2>
      <SearchBar search={search} onSearch={setSearch} />
      <div className="products-grid">
        {filtered.map(b => (
          <ProductCard key={b.id} product={b} />
        ))}
      </div>
    </div>
  );
}