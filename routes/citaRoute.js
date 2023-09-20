const express = require('express');
const citaController = require('../controllers/citaController');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/listar_fechas', citaController.listarFechas);
router.post('/guardar', citaController.guardarCitas);
router.post('/citas_del_dia', citaController.listarCitaDelDia);

module.exports = router;
