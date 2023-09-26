const express = require('express');
const historia_clinica_Controller = require('../controllers/historia_clinicaController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/guardar', historia_clinica_Controller.guardar_historia_clinica);
router.post('/listar_por_medico', historia_clinica_Controller.listarHistoriaClinicaPorMedico);


module.exports = router;
