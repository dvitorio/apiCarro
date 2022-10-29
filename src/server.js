//require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(24644, ()=>{
     console.log("Servidor rodando no endereço http://localhost:24644");
});