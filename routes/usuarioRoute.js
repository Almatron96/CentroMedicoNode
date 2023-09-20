const express = require('express');
const loginController = require('../controllers/usuarioController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/guardarUsuario', usuarioController.guardarUsuario);

module.exports = router;
