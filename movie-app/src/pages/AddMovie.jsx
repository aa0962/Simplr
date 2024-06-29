import React, { useState } from 'react';
import { addMovie } from '../api';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const [form, setForm] = useState({
    title: '',
    director: '',
    releaseYear: '',
    language: '',
    rating: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie(form);
      navigate('/');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Director</label>
          <input type="text" name="director" value={form.director} onChange={handleChange} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Release Year</label>
          <input type="number" name="releaseYear" value={form.releaseYear} onChange={handleChange} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Language</label>
          <input type="text" name="language" value={form.language} onChange={handleChange} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block">Rating</label>
          <input type="number" step="0.1" name="rating" value={form.rating} onChange={handleChange} className="border p-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
