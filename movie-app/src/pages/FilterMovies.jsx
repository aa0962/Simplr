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
      <h1 className="text-3xl font-bold mb-6">Filter Movies</h1>
      <form onSubmit={handleFilter} className="bg-secondary p-6 rounded-lg shadow-lg space-y-4">
        {['title', 'director', 'releaseYear', 'language', 'rating'].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize text-orange-700">{field}</label>
            <input
              type={field === 'releaseYear' || field === 'rating' ? 'number' : 'text'}
              name={field}
              value={filters[field]}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>
        ))}
        <button type="submit" className="bg-primary px-4 py-2 rounded text-white">Filter Movies</button>
      </form>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FilterMovies;
