import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductForm.css';

export default function ProductForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newBook = { title, author, genre, price: parseFloat(price), description };
    try {
      const res = await fetch('http://localhost:6001/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await res.json();
      navigate('/shop');
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>New Book Form</h3>
      <label>
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      <label>
        Author
        <input value={author} onChange={e => setAuthor(e.target.value)} required />
      </label>
      <label>
        Genre
        <input value={genre} onChange={e => setGenre(e.target.value)} required />
      </label>
      <label>
        Price
        <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required />
      </label>
      <label>
        Description
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}