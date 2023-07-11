const express = require('express');
const router = express.Router();

const registraUsuariosRotas = require('./usuarios/controllers/usuario-controller.js')
const registraCardsPermissionRotas = require('./usuarios/controllers/cardsPermission-controller.js')
const registraPropertyPermissionRotas = require('./usuarios/controllers/propertyPermission-controller.js')
router.use(registraUsuariosRotas());
router.use(registraCardsPermissionRotas());
router.use(registraPropertyPermissionRotas());

module.exports = router;