import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditProductForm.css';

export default function EditProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:6001/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setBook(data);
        setTitle(data.title);
        setAuthor(data.author);
        setGenre(data.genre);
        setPrice(data.price);
        setDescription(data.description);
      })
      .catch(err => console.error('Fetch error:', err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const handleSubmit = async e => {
    e.preventDefault();
    const updates = { title, author, genre, price: parseFloat(price), description };
    try {
      const res = await fetch(`http://localhost:6001/books/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await res.json();
      navigate('/shop');
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  return (
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <h3>Edit Book</h3>
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
      <button type="submit">Save Changes</button>
    </form>
);
}