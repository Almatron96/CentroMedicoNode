const express = require('express');
const pacienteController = require('../controllers/pacienteController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/guardar', pacienteController.guardarPaciente);
router.post('/actualizar', pacienteController.actualizarPaciente);
router.post('/listar', pacienteController.listarPaciente);

module.exports = router;
