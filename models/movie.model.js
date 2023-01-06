const mongoose = require('mongoose');

// Création du schema des données 
const movieSchema = mongoose.Schema({
    // Permet de définir les champs de la collection
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [50, 'Le titre ne peut pas faire plus de 50 caracteres !']
    },
    desc: {
        type: String,
        default: null,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        min: [1, 'Le film doit au moins faire une minute !']
    },
    genres: {
        type: [{ type: String, minLength: 2, trim: true }],
        validate: {
            validator: (value) => value.length >= 1,
            message: 'Il doit avoir un moins un genre !'
        }
    }
}, {
    // Options du schema
    timestamps: true,
    collection: 'Movie'
});

// Création d'un model base sur le schema "movieSchema"
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;