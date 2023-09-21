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
  

module.exports = {
    guardar_historia_clinica
  };