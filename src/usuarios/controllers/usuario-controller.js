const express = require("express");
const routes = express.Router();
const Usuario = require("./models/usuario");

function createRoute() {
    routes.post('/usuarios', async (req, res) => {
        console.log("Criado: ", req.body);
            await Usuario.create(req.body);
            res.json();
    })
}

function findAllRoute() {
    routes.get('/usuarios',async (req, res) => {
        const users = await Usuario.findAll();
        console.log(users.every(user => user instanceof Usuario)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        res.json(await Usuario.findAll());
    })
}

function findByIdRoute() {
    routes.get('/usuarios/:id',async (req, res) => {
        console.log(req.params)
        const users = await Usuario.findAll({
            where: {
                id: req.params.id
            }
        });
        console.log(users.every(user => user instanceof Usuario)); // true
        console.log("User Finded:", JSON.stringify(users, null, 2));
        res.json(await Usuario.findOne({
            where:{
                id:req.params.id
            }
        }));
    })
}

function updateRoute() {
    routes.put('/usuarios', async (req, res) => {
        console.log(req.body);
        await Usuario.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json();
    })
}

function removeRoute() {
    routes.delete('/usuarios/:id', async (req, res) => {
        console.log(req.params);
        await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json();
    })
}


function registraUsuariosRotas() {
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    return routes;
}

module.exports = registraUsuariosRotas;