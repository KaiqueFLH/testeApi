const express = require("express");
const routes = express.Router();
const CardPermission = require("./models/cardsPermission");

function createRoute() {
    routes.post('/cardPermission', async (req, res) => {
        console.log("Criado: ", req.body);
            await CardPermission.create(req.body);
            res.json();
    })
}

function findAllRoute() {
    routes.get('/cardPermission',async (req, res) => {
        const cards = await CardPermission.findAll();
        console.log(cards.every(card => card instanceof CardPermission)); // true
        console.log("All users:", JSON.stringify(cards, null, 2));
        res.json(await CardPermission.findAll());
    })
}

function findByIdRoute() {
    routes.get('/cardPermission/:id_usuario',async (req, res) => {
        
        const cards = await CardPermission.findAll({
            where: {
                id_usuario: req.params.id_usuario
            }
        });
        console.log(users.every(user => user instanceof CardPermission)); // true
        console.log("User Finded:", JSON.stringify(users, null, 2));
        res.json(await CardPermission.findOne({
            where:{
                id_usuario:req.params.id_usuario
            }
        }));
    })
}

function updateRoute() {
    routes.put('/cardPermission', async (req, res) => {
        console.log(req.body);
        await CardPermission.update(req.body, {
            where: {
                id_usuario: req.body.id_usuario
            }
        });
        res.json();
    })
}

function removeRoute() {
    routes.delete('/cardPermission/:id_usuario', async (req, res) => {
        console.log(req.params);
        await CardPermission.destroy({
            where: {
                id_usuario: req.params.id_usuario
            }
        });
        res.json();
    })
}


function registraCardsPermissionRotas() {
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    return routes;
}

module.exports = registraCardsPermissionRotas;