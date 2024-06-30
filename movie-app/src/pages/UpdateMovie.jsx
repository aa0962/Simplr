import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateMovie, getMovie } from '../api';

const UpdateMovie = () => {
  const { id } = useParams(); // Get movie ID from URL params

  const [movie, setMovie] = useState({
    title: '',
    director: '',
    releaseYear: '',
    language: '',
    rating: '',
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id); // Fetch movie details by ID
        setMovie(response.data.movie);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMovie(id, movie); // Update movie with new details
      // Redirect to home page or another route after successful update
      window.location.href = '/'; // Example: Redirecting to home page
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Update Movie</h1>
      <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label className="block mb-1 capitalize">Title</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize">Director</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize">Language</label>
          <input
            type="text"
            name="language"
            value={movie.language}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 capitalize">Rating</label>
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
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
