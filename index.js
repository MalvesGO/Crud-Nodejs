const express = require('express');

const server = express();

server.use(express.json());

//Query params = ?/teste=1
//Route params = /users/1
//Request body = {"name": "Marcelo", "email": "marceloalves@teste.com.br"}

//Crud - Create - Read, Update, Delete

const users = [ 'Diego', 'Robson', 'Vitor'];

server.use((req, res, next) => {
    console.log(`Metodo: ${req.method}; Url: ${req.url}`)
    return next();
})

// Listar todos usuarios
server.get('/users', (req, res) => {
    return res.json(users);
})

// Listagem de usuario especifico
server.get('/users/:index', (req, res) => {
    const {index} = req.params;
    return res.json(users[index]);
})

// Criar um usuario
server.post('/users', (req, res) => {
    const {name} = req.body;
    users.push(name);
    return res.json(users)
})

// Editar o usuario
server.put('/users/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    users[index] = name;
    return res.json(users)
})

// Deletar o usuario
server.delete('/users/:index', (req, res) => {
    const {index} = req.params;
    users.splice(index, 1)
    return res.send();
})

server.listen(3000);