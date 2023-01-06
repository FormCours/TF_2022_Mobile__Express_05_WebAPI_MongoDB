'use strict';

// Chargement des variables d'environnement
require('dotenv').config();

// Import d'express et d'un package qui permet de gérer les errors async/await 
const express = require('express');
require('express-async-errors');

// Import divers
const chalk = require('chalk');
const router = require('./routers/router');
const morgan = require('morgan');
const database = require('./database');

// Connection à la base de donnée MongoDB
database();

// Creation de la Web API
const app = express();



// Utilisation du logger « morgan »
app.use(morgan('tiny'));

// Middleware pour activé le traitement des données "application/json"
app.use(express.json());

// Ajout du Routing
app.use('/api', router);

// Demarrage de la Web API
app.listen(process.env.PORT, () => {
    console.log(chalk.greenBright(`Server up on port ${process.env.PORT}`));
});