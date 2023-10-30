const express = require('express');
const router = express.Router();
const pacienteService = require('../services/pacienteService');


async function guardarPaciente(req, res) {
  try {
    // Obtiene los datos del paciente del cuerpo de la solicitud
    const datosPaciente = req.body;

    // Llama al servicio para guardar el paciente en la base de datos
    const resultado = await pacienteService.guardarPaciente(datosPaciente);

    // Verifica si se produjo un error al guardar el paciente
    if (resultado.error) {
      return res.status(resultado.status).json(resultado.error);
    }

    // Si se guardó correctamente, devuelve una respuesta exitosa
    return res.status(200).json('Paciente guardado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

async function actualizarPaciente(req, res) {
  try {
    // Obtiene los datos del paciente del cuerpo de la solicitud
    const datosPaciente = req.body;

    // Llama al servicio para guardar el paciente en la base de datos
    const resultado = await pacienteService.actualizarPaciente(datosPaciente);

    // Verifica si se produjo un error al guardar el paciente
    if (resultado.error) {
      return res.status(resultado.status).json(resultado.error);
    }

    // Si se guardó correctamente, devuelve una respuesta exitosa
    return res.status(200).json('Paciente actualizado correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

async function listarPaciente(req, res) {
  try {
    const resultado = await pacienteService.listarPaciente();

    // Verifica si se produjo un error al guardar el paciente
    if (resultado.error) {
      return res.status(resultado.status).json(resultado.error);
    }

    // Si se guardó correctamente, devuelve una respuesta exitosa
    return res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

module.exports = {
  guardarPaciente,
  listarPaciente,
  actualizarPaciente
};
