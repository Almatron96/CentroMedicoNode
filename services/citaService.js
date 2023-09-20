const citaQuerys = require('../querys/citaQuerys');  // 

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
async function listarCitaDelDia() {
    try {
     const citas = await citaQuerys.listarCitaDelDia();
     return citas;
    } catch (error) {
        console.error('Error al listar las citas.', error);
    }
}

module.exports = {
    listarFechas,
    guardarCitas,
    listarCitaDelDia
};
