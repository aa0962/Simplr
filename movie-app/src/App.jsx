import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import FilterMovies from './pages/FilterMovies';

function App() {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex space-x-4 mb-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/add" className="text-blue-500">Add New Movie</Link>
        <Link to="/filter" className="text-blue-500">Filter Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/filter" element={<FilterMovies />} />
      </Routes>
    </div>
  );
}

export default App;
