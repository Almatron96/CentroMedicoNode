const express = require('express');
const citaController = require('../controllers/citaController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/listar_fechas', citaController.listarFechas);
router.post('/guardar', citaController.guardarCitas);
router.post('/citas_del_dia', citaController.listarCitaDelDia);
router.post('/citas_por_medico', citaController.listarCitasPorMedico);
router.post('/listar_citas_por_cedula', citaController.listarCitasPorCedulaPacienteOMedico);
module.exports = router;
