import React from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({ search, onSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search books..."
      value={search}
      onChange={e => onSearch(e.target.value)}
    />
  );
}