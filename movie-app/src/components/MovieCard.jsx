import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onDelete }) => (
  <div className="bg-card dark:bg-darkCard p-4 rounded-lg mb-4 shadow-lg transition-transform hover:scale-105">
    <h2 className="text-xl font-bold truncate">{movie.title}</h2>
    <div className="mt-2">
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
    <div className="mt-4 flex justify-between">
      <Link to={`/update/${movie._id}`} className="bg-primary text-white px-4 py-2 rounded">Update</Link>
      <button onClick={() => onDelete(movie._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  </div>
);

export default MovieCard;
