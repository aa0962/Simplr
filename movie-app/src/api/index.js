import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getMovies = () => api.get('/movies');
export const addMovie = (movie) => api.post('/movies', movie);
export const filterMovies = (params) => api.get('/movies/filter', { params });
export const deleteMovie = (id) => api.delete(`/movies/${id}`);
export const updateMovie = (id, movie) => api.put(`/movies/${id}`, movie);
export const searchMovie = (title) => api.get(`/movies/search/${title}`);
export const countMoviesByLanguage = () => api.get('/movies/count');
export const getMovie = (id) => api.get(`/movies/${id}`);