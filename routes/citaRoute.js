const express = require('express');
const citaController = require('../controllers/citaController');

const router = express.Router();

router.post('/listar_fechas', citaController.listarFechas);
router.post('/guardar', citaController.guardarCitas);
router.post('/citas_del_dia', citaController.listarCitaDelDia);
router.post('/citas_por_medico', citaController.listarCitasPorMedico);
router.post('/listar_citas_por_cedula', citaController.listarCitasPorCedulaPacienteOMedico);
router.post('/citas_del_dia_paciente', citaController.listarCitasDelDiaPaciente);
router.post('/citas_del_paciente', citaController.listarCitasDelPaciente);
router.post('/actualizar', citaController.actualizarCita);
router.post('/eliminar', citaController.eliminarCita);
module.exports = router;
