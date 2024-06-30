const Movie = require('../models/movie');

// Show all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      success: true,
      message: 'Movies Retrieved Succesfully',
      movies,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  const { title, director, releaseYear, language, rating } = req.body;
  try {
    const newMovie = new Movie({
      title,
      director,
      releaseYear,
      language,
      rating,
    });
    await newMovie.save();
    res.status(201).json({
      success: true,
      message: 'Movie Created Successfully',
      movie: newMovie,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedMovie)
      return res
        .status(404)
        .json({ success: false, message: 'Movie not found' });
    res.status(200).json({
      success: true,
      message: 'Movie Updated Successfully',
      movie: updatedMovie,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie)
      return res
        .status(404)
        .json({ success: false, message: 'Movie not found' });
    res.json({ success: true, message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Count movies by language
const countMoviesByLanguage = async (req, res) => {
  const { language } = req.query;
  try {
    const count = await Movie.countDocuments({ language });
    res.json({ success: true, language, count });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Search for a movie by title
const searchMovie = async (req, res) => {
  const { title } = req.params;
  try {
    const movies = await Movie.find({ title: { $regex: title, $options: 'i' } });
    if (movies.length === 0) {
      return res.status(404).json({ success: false, message: 'No movies found matching the title' });
    }
    res.status(200).json({
      success: true,
      message: 'Movies Retrieved Successfully',
      movies,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Filter movies
const filterMovies = async (req, res) => {
  const { title, director, releaseYear, language, rating } = req.query;
  const filter = {};

  if (title) filter.title = title;
  if (director) filter.director = director;
  if (releaseYear) filter.releaseYear = parseInt(releaseYear);
  if (language) filter.language = language;
  if (rating) filter.rating = parseFloat(rating);

  try {
    if (Object.keys(filter).length === 0) {
      return res.status(400).json({
        success: false,
        message:
          'No filter criteria provided. Please specify at least one filter.',
      });
    }

    const movies = await Movie.find(filter);
    res.json({
      success: true,
      message: 'Movies retrieved successfully',
      movies,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get movie by id
const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ success: false, message: 'Movie not found' });
    }
    res.status(200).json({ success: true, message: 'Movie retrieved successfully', movie });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  countMoviesByLanguage,
  searchMovie,
  filterMovies,
  getMovieById,
};
