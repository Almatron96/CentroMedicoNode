const express = require('express');
const medicoController = require('../controllers/medicoController');

const router = express.Router();

router.post('/listar', medicoController.listarMedicos);
router.post('/guardar', medicoController.guardarMedico);
router.post('/actualizar', medicoController.actualizarMedico);

module.exports = router;
