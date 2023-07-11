const express = require("express");
const routes = express.Router();
const PropertyPermission = require("./models/propertyPermission");

function createRoute() {
    routes.post('/propertyPermission', async (req, res) => {
        console.log("Criado: ", req.body);
            await PropertyPermission.create(req.body);
            res.json();
    })
}

function findAllRoute() {
    routes.get('/propertyPermission',async (req, res) => {
        const permissions = await PropertyPermission.findAll();
        console.log(permissions.every(permission => permission instanceof PropertyPermission)); // true
        console.log("All users:", JSON.stringify(permissions, null, 2));
        res.json(await PropertyPermission.findAll());
    })
}

function findByIdRoute() {
    routes.get('/propertyPermission/:id_usuario',async (req, res) => {
        
        const permissions = await PropertyPermission.findAll({
            where: {
                id_usuario: req.params.id_usuario
            }
        });
        console.log(permissions.every(permission => permission instanceof PropertyPermission)); // true
        console.log("User Finded:", JSON.stringify(permissions, null, 2));
        res.json(await PropertyPermission.findOne({
            where:{
                id_usuario:req.params.id_usuario
            }
        }));
    })
}

function updateRoute() {
    routes.put('/propertyPermission', async (req, res) => {
        console.log(req.body);
        await PropertyPermission.update(req.body, {
            where: {
                id_usuario: req.body.id_usuario
            }
        });
        res.json();
    })
}

function removeRoute() {
    routes.delete('/propertyPermission/:id_usuario', async (req, res) => {
        console.log(req.params);
        await PropertyPermission.destroy({
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