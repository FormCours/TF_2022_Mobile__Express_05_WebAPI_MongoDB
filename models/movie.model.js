const mongoose = require('mongoose');

// Création du schema des données 
const movieSchema = mongoose.Schema({
    // Permet de définir les champs de la collection
    title: String,
    desc: String,
    duration: Number,
    genres: [String]
}, {
    // Options du schema
    timestamps: true,
    collection: 'Movie'
});

// Création d'un model base sur le schema "movieSchema"
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;