import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMovies, deleteMovie, searchMovie } from '../api';
import MovieCard from '../components/MovieCard';
import "../pages/Home.css"
function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getMovies();
      setMovies(response.data.movies);
      setMovieCount(response.data.movies.length);
      toast.success('Movies fetched successfully!');
    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Failed to fetch movies.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie._id !== id));
      setMovieCount((prevCount) => prevCount - 1);
      toast.success('Movie deleted successfully!');
    } catch (error) {
      console.error('Error deleting movie:', error);
      toast.error('Failed to delete movie.');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await searchMovie(searchTerm);
      setMovies(response.data.movies);
      setMovieCount(response.data.movies.length);
      toast.success('Search completed!');
    } catch (error) {
      console.error('Error searching movies:', error);
      toast.error('Search failed.');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Movies</h1>
        <div className="flex items-center text-black">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search by name"
            className="p-2 rounded border-gray-300 focus:outline-none focus:border-primary mr-4"
          />
          <button onClick={handleSearch} className="bg-primary text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>
      <p className="mb-4">Total Movies: {movieCount}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Home;
