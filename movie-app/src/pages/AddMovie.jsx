import React, { useState } from 'react';
import { addMovie } from '../api';

function AddMovie() {
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    releaseYear: '',
    language: '',
    rating: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie(movie);
      setMovie({
        title: '',
        director: '',
        releaseYear: '',
        language: '',
        rating: '',
      });
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Add a New Movie</h1>
      <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-lg shadow-lg space-y-4">
        {['title', 'director', 'releaseYear', 'language', 'rating'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type={field === 'releaseYear' || field === 'rating' ? 'number' : 'text'}
              name={field}
              value={movie[field]}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white "
            />
          </div>
        ))}
        <button type="submit" className="bg-primary px-4 py-2 rounded text-white">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

