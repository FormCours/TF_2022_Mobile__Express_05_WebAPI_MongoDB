const Movie = require('./../models/movie.model');

const movieService = {

    getAll: async () => {
        // Récuperation des films (uniquement l'id et le titre)
        const moviesDTO = await Movie.find({}, ["_id", "title"]);
        return moviesDTO;
    },

    getById: async (id) => {
        // Récuperation d'un film via l'id
        const movieDTO = await Movie.findById(id, ["_id", "title", "desc", "duration", "genres"]);
        return movieDTO;
    },

    insert: async ({ title, desc, duration, genres }) => {
        // Ajouter dans la DB

        // - Via le constructeur du model
        /*
        const movie = new Movie({ title, desc, duration, genres });
        await movie.save();
        */

        // - Via la méthode "create"
        const movie = await Movie.create({ title, desc, duration, genres });

        return movie;
    },

    update: async (id, { title, desc, duration, genres }) => {
        // Mise à jours complete de l'objet en DB
        return await Movie.findByIdAndUpdate(id, { title, desc, duration, genres });
    },

    delete: async (id) => {
        // Suppression de l'objet en DB
        return await Movie.findByIdAndDelete(id);
    }
};

module.exports = movieService;