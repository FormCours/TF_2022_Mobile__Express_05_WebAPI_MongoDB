'use strict';

// Chargement des variables d'environnement
require('dotenv').config();

// Import
const express = require('express');
const chalk = require('chalk');
const router = require('./routers/router');
const morgan = require('morgan');

// Creation de la Web API
const app = express();

// Utilisation du logger « morgan »
app.use(morgan('tiny'));

// Ajout du Routing
app.use(router);

// Demarrage de la Web API
app.listen(process.env.PORT, () => {
    console.log(chalk.greenBright(`Server up on port ${process.env.PORT}`));
});