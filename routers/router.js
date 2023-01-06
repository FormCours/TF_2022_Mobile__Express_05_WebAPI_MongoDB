const movieRouter = require('./movie.router');


// Creation du router principal de l'API
const router = require('express').Router();

// Ajout des sous-router
router.use('/movie', movieRouter);

// Export du router
module.exports = router;