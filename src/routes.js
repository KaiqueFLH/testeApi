const express = require('express');
const router = express.Router();

const registraUsuariosRotas = require('./usuarios/controllers/usuario-controller.js')
router.use(registraUsuariosRotas());

module.exports = router;