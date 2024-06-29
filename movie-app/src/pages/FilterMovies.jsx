import React, { useState } from 'react';
import { filterMovies } from '../api';
import MovieCard from '../components/MovieCard';

function FilterMovies() {
  const [filters, setFilters] = useState({
    title: '',
    director: '',
    releaseYear: '',
    language: '',
    rating: '',
  });
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const response = await filterMovies(filters);
      setFilteredMovies(response.data.movies);
    } catch (error) {
      console.error('Error filtering movies:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Filter Movies</h1>
      <form onSubmit={handleFilter} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input type="text" name="title" value={filters.title} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Director</label>
          <input type="text" name="director" value={filters.director} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Release Year</label>
          <input type="number" name="releaseYear" value={filters.releaseYear} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Language</label>
          <input type="text" name="language" value={filters.language} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Rating</label>
          <input type="number" step="0.1" name="rating" value={filters.rating} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Filter Movies</button>
      </form>
      <div className="mt-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterMovies;