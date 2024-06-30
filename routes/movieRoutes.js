const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAllMovies);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
router.get('/count', movieController.countMoviesByLanguage);
router.get('/search/:title', movieController.searchMovie);
router.get('/filter', movieController.filterMovies);
router.get('/:id', movieController.getMovieById);

module.exports = router;
