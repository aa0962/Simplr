import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getMovies = () => api.get('/movies');
export const addMovie = (movie) => api.post('/movies', movie);
export const filterMovies = (params) => api.get('/movies/filter', { params });
export const deleteMovie = (id) => api.delete(`/movies/${id}`);
