const historia_clinica_Querys = require('../querys/historia_clinicaQuerys');
const antecedenteService = require('./antecedenteService');
const examen_fisicoService = require('./examen_fisicoService');
const tratamientoService = require('./tratamientoService');


async function guardar_historia_clinica(historia) {
    try {

        const nuevoTratamiento = {
            duracion: historia.tratamiento.duracion,
            indicaciones: historia.tratamiento.indicaciones,
            medicacion: historia.tratamiento.medicacion,
        };
        const tratamientoGuardado = await tratamientoService.guardar_tratamiento(nuevoTratamiento);
        console.log("Datos del tratamiento" + tratamientoGuardado);


        const nuevoAntecedente = {
            antecedente_alergico: historia.antecedente.antecedente_alergico,
            antecedente_familiar: historia.antecedente.antecedente_familiar,
            antecedente_personal: historia.antecedente.antecedente_personal,
            antecedente_quirurgico: historia.antecedente.antecedente_quirurgico,
        };
        const antecedenteGuardado = await antecedenteService.guardar_antecedente(nuevoAntecedente);

        const nuevoExamenFisico = {
            estatura: historia.examen_fisico.estatura,
            frecuencia_respiratoria: historia.examen_fisico.frecuencia_respiratoria,
            peso: historia.examen_fisico.peso,
            presion_arterial: historia.examen_fisico.presion_arterial,
            pulso: historia.examen_fisico.pulso,
            temperatura: historia.examen_fisico.temperatura,
            tipo_sanguineo: historia.examen_fisico.tipo_sanguineo
        };
        const examen_fisicoGuardado = await examen_fisicoService.guardar_examen_fisico(nuevoExamenFisico);


        // Crear un nuevo paciente asociado al usuario
        const nuevaHistoria = {
            diagnostico: historia.diagnostico,
            evolucion: historia.evolucion,
            motivo_consulta: historia.motivo_consulta,
            numero_historia: historia.numero_historia,
            id_antecedente: antecedenteGuardado.id_antecedente,
            id_cita_medica: historia.cita_medica.id_cita_medica,
            id_examen_fisico: examen_fisicoGuardado.id_examen_fisico,
            id_tratamiento: tratamientoGuardado.id_tratamiento
        };

        console.log(nuevaHistoria);
        // Guardar el nuevo paciente en la base de datos
        await historia_clinica_Querys.guardar_historia_clinica(nuevaHistoria);

        return 'Historia guardada correctamente.';
    } catch (error) {
        console.error('Error al guardar la historia clínica. ', error);
        throw new Error('Error al guardar historia clínica en la base de datos');
    }
}


module.exports = {
    guardar_historia_clinica
};
