const mongoose = require('mongoose');
const chalk = require('chalk');

const { URI_MONGODB } = process.env;

// Module sous forme de fonction pour instancier la connection
module.exports = async () => {

    try {
        // Connection à MongoDB
        await mongoose.connect(URI_MONGODB, {
            // Options ...
        });

        console.log(chalk.cyan('Connection to MongoDB successfull !'));
    }
    catch (error) {
        console.log(chalk.red('Connection to MongoDB fail !'));
        console.error(error);

        // Si on souhaite "kill" l'application en cas d'erreur
        // process.exit(1);
    }

    return mongoose;
};