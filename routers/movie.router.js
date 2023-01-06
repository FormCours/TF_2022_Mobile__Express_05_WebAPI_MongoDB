const movieController = require('../controllers/movie.controller');


const movieRouter = require('express').Router();

movieRouter.route('/')
    .get(movieController.getAll)
    .post(movieController.add);

movieRouter.route('/:id')
    .get(movieController.getById)
    .put(movieController.update)
    .delete(movieController.delete);

module.exports = movieRouter;