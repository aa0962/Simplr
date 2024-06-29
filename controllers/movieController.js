const Movie = require('../models/movie');

// Show all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      success: true,
      message: "Movies Retrieved Succesfully",
      movies 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  const { title, director, releaseYear, language, rating } = req.body;
  try {
    const newMovie = new Movie({ title, director, releaseYear, language, rating });
    await newMovie.save();
    res.status(201).json({
      success: true,
      message: "Movie Created Successfully",
      movie: newMovie
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({
      success: true,
      message: "Movie Updated Successfully",
      movie: updatedMovie
    });;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
};
