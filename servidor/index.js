const express = require('express')
const conectarDB = require('./config/db');

// Criar o servidor

const app = express();

// Conectar a Base de dados

conectarDB();

app.use(express.json());

app.use('/api/produtos', require('./routes/produto'))

app.listen(4000, () => {

    console.log('O servidor está funcionando perfeitamente')

})