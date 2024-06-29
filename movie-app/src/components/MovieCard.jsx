import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onDelete }) => (
  <div className="border p-4 rounded mb-2">
    <h2 className="text-xl">{movie.title}</h2>
    <p>Director: {movie.director}</p>
    <p>Release Year: {movie.releaseYear}</p>
    <p>Language: {movie.language}</p>
    <p>Rating: {movie.rating}</p>
    <Link to={`/update/${movie._id}`} className="text-blue-500">Update</Link>
    <button onClick={() => onDelete(movie._id)} className="text-red-500 ml-4">Delete</button>
  </div>
);

export default MovieCard;
