const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//middleware
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });


//o require tem que ser depois do connect com o DB
require('./src/models/Product');

//aqui estão as rotas do /api
app.use('/api', require('./src/routes'));



app.listen(3000);

