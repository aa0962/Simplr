import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import FilterMovies from './pages/FilterMovies';
import UpdateMovie from './pages/UpdateMovie';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <nav className="flex justify-between items-center mb-8 p-4 bg-secondary rounded-lg shadow-lg">
        <Link to="/" className="text-primary font-bold text-2xl">MyMovieApp</Link>
        <div className="flex items-center space-x-4">
          <Link to="/add" className="text-white hover:text-accent">Add Movie</Link>
          <Link to="/filter" className="text-white hover:text-accent">Filter Movies</Link>
          <ThemeToggle />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/filter" element={<FilterMovies />} />
        <Route path="/update/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
}

export default App;
