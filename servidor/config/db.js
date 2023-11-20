const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false

            // Essas funções não tem mais efeito desde o driver nodejs v4.0.0 e serão removida futuramente
            })

            console.log('Base de dados conectada!');
        
    } catch (error) {
        
        console.log(error)
        process.exit(1) // Impede o funcionamento do app

    }

}

module.exports = conectarDB