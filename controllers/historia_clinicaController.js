const historia_clinicaService = require('../services/historia_clinicaService');

async function guardar_historia_clinica(req, res) {
    try {
      console.log("HISTORIA INGRESADA:    " + req.body);
      const resultado = await historia_clinicaService.guardar_historia_clinica(req.body);
      if (resultado.error) {
        return res.status(resultado.status).json(resultado.error);
      }
      return res.status(200).json("Historia guardada correctamente.");
    } catch (error) {
      console.error(error);
      return res.status(500).json('Error interno del servidor');
    }
  }

  async function listarHistoriaClinicaPorMedico(req, res) {
    try {
      console.log("HISTORIA INGRESADA:    " + req.body.id_medico);
      const resultado = await historia_clinicaService.listarHistoriaClinicaPorMedico(req.body.id_medico);
      if (resultado.error) {
        return res.status(resultado.status).json(resultado.error);
      }
      return res.status(200).json(resultado);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Error interno del servidor');
    }
  }

  async function listarPacientesCorrespondientesAMedico(req, res) {
    try {
      const resultado = await historia_clinicaService.listarPacientesCorrespondientesAMedico(req.body.id_usuario);
      if (resultado.error) {
        return res.status(resultado.status).json(resultado.error);
      }
      return res.status(200).json(resultado);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Error interno del servidor');
    }
  }
  async function listarTodoPacientes(req, res) {
    try {
      const resultado = await historia_clinicaService.listarTodoPacientes();
      if (resultado.error) {
        return res.status(resultado.status).json(resultado.error);
      }
      return res.status(200).json(resultado);
    } catch (error) {
      console.error(error);
      return res.status(500).json('Error interno del servidor');
    }
  }
  
module.exports = {
    guardar_historia_clinica,
    listarHistoriaClinicaPorMedico,
    listarPacientesCorrespondientesAMedico,
    listarTodoPacientes
  };