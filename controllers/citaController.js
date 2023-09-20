const  citaService  = require('../services/citaService');

async function listarFechas(req, res) {
  try {
    console.log("FECHA INGRESADA: "+ req.body.fecha);
    const fechasResultado = await citaService.listarFechas(req.body.fecha);
    if (fechasResultado.error) {
      return res.status(fechasResultado.status).json(fechasResultado.error);
    }
    return res.status(200).json(fechasResultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

async function guardarCitas(req, res) {
    try {
      console.log("CITA INGRESADA:  " + req.body);
      const resultado = await citaService.guardarCitas(req.body);
      if (resultado.error) {
        return res.status(resultado.status).json(resultado.error);
      }
      return res.status(200).json("Cita agendada correctamente.");
    } catch (error) {
      console.error(error);
      return res.status(500).json('Error interno del servidor');
    }
  }

module.exports = {
    listarFechas,
    guardarCitas
};
