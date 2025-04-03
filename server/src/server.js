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
    try{
        const data = await knex('users').select('*');
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }
});

server.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try{
        const data = await knex('users').select('*').where('id',id);
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }
});

server.post('/users', async (req, res) =>{
    const { firstname, lastname, username, password } = req.body;
    try{
        await knex('users')
        .insert({ firstname, lastname, username, password })
        res.status(201).json({ message: "User created." });
    } catch(error){
        console.error('Error inserting data:',error)
        res.status(500).json({message: "Internal Server Error Inserting Data.", error})
    }
});

// server.patch('/users:id', async (req, res) =>{

// });

server.delete('/users', async (req, res) => {
    const {id} = req.body.id;
    try{
        await knex('users')
        .where(id, id)
        .del()
    } catch(error){
        res.status(500).json({message: "Could Not Delete User.", error})
    }
});

server.get('/item', async (req, res) => {
    try{
        const data = await knex('item').select('*');
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }

});

server.get('/item/:id', async (req, res) => {
    const id  = parseInt(req.params.id)
    try{
        const data = await knex('item').select('*').where('id',id);
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }

});

server.post('/item', async (req, res) =>{
    const { userid, itemname, description, quantity } = req.body;
    try{
        await knex('item')
        .insert({ userid, itemname, description, quantity })
        res.status(201).json({ message: "item created." });
    } catch(error){
        console.error('Error inserting data:',error)
        res.status(500).json({message: "Internal Server Error Inserting Data.", error})
    }
});

// server.patch('/item', async (req, res) =>{

// });

server.delete('/item/:id', async (req, res) => {
    const id  = parseInt(req.params.id)
    try{
        const data = await knex('item').select('*').where('id',id).del();
        res.status(200).json("Item deleted");
    } catch(error){
        res.status(500).json({message: "Error retrieving data.", error})
    }

});


module.exports = server