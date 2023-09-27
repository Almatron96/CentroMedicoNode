const citaQuerys = require('../querys/citaQuerys');  // 
const mail = require('../utilitarios/mailer');

async function listarFechas(fecha) {
    try {
        const resultado = await citaQuerys.listarFechas(fecha);

        return resultado;
    } catch (error) {

        console.error('Error al listar fechas:', error);
        throw new Error(error);
    }
}

async function guardarCitas(cita) {
    try {
        const nuevaCita = {
            especialidad: cita.especialidad,
            estado: cita.estado,
            fecha_fin: cita.fecha_fin,
            fecha_inicio: cita.fecha_inicio,
            observacion: cita.observacion,
            id_medico: cita.medico.id_medico,
            id_paciente: cita.paciente.id_paciente
        };

        const resultado = await citaQuerys.guardarCitas(nuevaCita);

        return resultado;
    } catch (error) {

        console.error('Error al guardar cita.', error);
        throw new Error(error);
    }
}
async function listarCitaDelDia(id_usuario) {
    try {
     console.log("ID EN EL SERVICES: " + id_usuario);
     const citas = await citaQuerys.listarCitaDelDia(id_usuario);
     return citas;
    } catch (error) {
        console.error('Error al listar las citas.', error);
    }
}


async function listarCitasPendientes() {
    try {
     const citas = await citaQuerys.listarCitasPendientes();
     if (citas){
        mail.enviarMailPendientes(citas);
     }
    } catch (error) {
        console.error('Error al listar las citas.', error);
    }
}

async function listarCitasPorMedico(id_usuario) {
    try {
     const citas = await citaQuerys.listarCitasPorMedico(id_usuario);
     return citas;
    } catch (error) {
        console.error('Error al listar las citas.', error);
    }
}

async function listarCitasPorCedulaPacienteOMedico(cedula) {
    try {
    console.log(cedula);
     const citas = await citaQuerys.listarCitasPorCedulaPacienteOMedico(cedula);
     return citas;
    } catch (error) {
        console.error('Error al listar las citas.', error);
    }
}

module.exports = {
    listarFechas,
    guardarCitas,
    listarCitaDelDia,
    listarCitasPendientes,
    listarCitasPorMedico,
    listarCitasPorCedulaPacienteOMedico
};
