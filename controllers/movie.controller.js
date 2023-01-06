const movieService = require('../services/movie.service');

const movieController = {

    getAll: async (req, res) => {
        // Récuperation des données via le service
        const data = await movieService.getAll();

        // Envoi
        res.json(data);
    },

    getById: async (req, res) => {
        // Récuperation de l'id depuis le route !
        const id = req.params.id;

        // Récuperation le film via son id
        const movie = await movieService.getById(id);

        // Si aucun film n'a été trouvé => 404
        if (!movie) {
            res.sendStatus(404);
            return;
        }

        // Envoi des données
        res.json(movie);
    },

    add: async (req, res) => {
        // Monde des bisounours => Les données ne necessite pas de validation 🐻
        const data = req.body;

        // Ajout dans la DB
        const movieCreated = await movieService.insert(data);

        // Envoi d'un réponse
        res.location('/api/movie/' + movieCreated._id);
        res.status(201).json(movieCreated);
    },

    update: async (req, res) => {
        // Monde des bisounours => Toujours pas de validation des données 🧸
        const data = req.body;

        // Récuperation de l'id
        const id = req.params.id;

        // Mise à jours de la DB
        const movieUpdated = await movieService.update(id, data);

        // Si l'element est inexistant -> Erreur 404
        if (!movieUpdated) {
            res.sendStatus(404);
            return;
        }

        // Envoi d'une réponse
        res.sendStatus(204);
    },

    delete: async (req, res) => {
        // Récuperation de l'id
        const id = req.params.id;

        // Suppression du film
        const movieDeleted = await movieService.delete(id);

        // Si l'element est inexistant -> Erreur 404
        if (!movieDeleted) {
            res.sendStatus(404);
            return;
        }

        res.sendStatus(204);
    },
};

module.exports = movieController;