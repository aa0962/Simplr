import React, { useEffect, useState } from 'react';
import { getMovies, deleteMovie } from '../api';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getMovies();
      setMovies(response.data.movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Movies</h1>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Home;
