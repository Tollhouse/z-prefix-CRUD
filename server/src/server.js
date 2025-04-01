const cors = require('cors');
const express = require('express');
const server = express();
const PORT = 1000;
const knex = require('knex')(require('../knexfile.js')['development']);

server.use(express.json());
server.use(cors());

server.get('/', async (req, res) => {
    res.status(200).json(data)
})

server.get('/users', async (req, res) => {
    knex('users')
    .select('*')
    .then(data => {
        res.status(200).json(data)
    });
});

// server.post('/users', async (req, res) =>{
//     knex('user')
//     .insert()
// })

// server.patch('/users', async (req, res) =>{

// });

// server.delete('/users', async (req, res) => {

// });

server.get('/item', async (req, res) => {
    try {
        const data = await knex('item').select('*');
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }

});

// server.post('/item', async (req, res) =>{
//     knex('item')
//     .insert()
// })

// server.patch('/item', async (req, res) =>{

// });

// server.delete('/item', async (req, res) => {

// });


module.exports = server