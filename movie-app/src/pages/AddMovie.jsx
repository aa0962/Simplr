import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addMovie } from '../api';

const AddMovie = () => {
  const navigate = useNavigate();
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
      toast.success('Movie added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error adding movie:', error);
      toast.error('Failed to add movie.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add Movie</h1>
      <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label className="block mb-1 capitalize text-orange-700">Title</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize text-orange-700">Director</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize text-orange-700">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize text-orange-700">Language</label>
          <input
            type="text"
            name="language"
            value={movie.language}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize text-orange-700">Rating</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <button type="submit" className="bg-primary px-4 py-2 rounded text-white">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
