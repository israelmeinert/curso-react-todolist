const PORT = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express();
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors)

server.listen(PORT, function(){
    console.log(`Rodando na porta ${PORT}`)
})

module.exports = server;