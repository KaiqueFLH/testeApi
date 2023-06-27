const express = require("express");
const routes = express.Router();
const Usuario = require("./models/usuario");

function createRoute(){
    routes.post('/usuarios', async (req,res)=>{
        console.log("Criado: ",req.body);
        await Usuario.create(req.body);
        res.json();
    })
}

function findAllRoute(){
    routes.get('/usuarios', (req,res)=>{
        res.json([]);
    })
}

function findByIdRoute(){
    routes.get('/usuarios/:id', (req,res)=>{
        console.log(req.params)
        res.json();
    })
}

function updateRoute(){
    routes.put('/usuarios', (req,res)=>{
        console.log(req.body);
        res.json();
    })
}

function removeRoute(){
    routes.delete('/usuarios/:id', (req,res)=>{
        console.log(req.params)
        res.json();
    })
}


function registraUsuariosRotas(){
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    return routes;
}

module.exports = registraUsuariosRotas;