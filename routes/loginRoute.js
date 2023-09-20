const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/iniciarSesion', loginController.iniciarSesion);

module.exports = router;
