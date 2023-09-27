const pool = require('../databaseConfig');

async function guardar_historia_clinica(historia) {
    try {
        const consulta = `
        INSERT INTO public.historia_clinica(
            diagnostico, evolucion, motivo_consulta, numero_historia, id_antecedente, id_cita_medica, id_examen_fisico, id_tratamiento)
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8);
        `;
        const values = [
            historia.diagnostico,
            historia.evolucion,
            historia.motivo_consulta,
            historia.numero_historia,
            historia.id_antecedente,
            historia.id_cita_medica,
            historia.id_examen_fisico,
            historia.id_tratamiento
        ];

        const result = await pool.query(consulta, values);

        return result;

    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

async function listarHistoriaClinicaPorMedico(id_medico) {
    try {
        console.log();
        const consulta = `
        
        SELECT DISTINCT p.cedula, p.primer_nombre, p.primer_apellido, p.segundo_apellido, cm.id_paciente, cm.id_medico, 
		hc.numero_historia, hc.diagnostico, hc.evolucion, hc.motivo_consulta,
        a.antecedente_alergico, a.antecedente_familiar, a.antecedente_personal, a.antecedente_quirurgico,
        ef.estatura, ef.frecuencia_respiratoria, ef.peso, ef.pulso,ef.presion_arterial, ef.tipo_sanguineo, ef.temperatura,
        t.indicaciones, t.duracion, t.medicacion
        FROM medico m 
        INNER JOIN usuario u ON m.id_usuario = u.id_usuario
        INNER JOIN cita_medica cm ON cm.id_medico = m.id_medico
        INNER JOIN paciente p ON p.id_paciente = cm.id_paciente
        INNER JOIN historia_clinica hc ON hc.id_cita_medica = cm.id_cita_medica
        INNER JOIN antecedente a ON a.id_antecedente= hc.id_antecedente   
        INNER JOIN examen_fisico ef ON ef.id_examen_fisico = hc.id_examen_fisico
        INNER JOIN tratamiento t ON t.id_tratamiento = hc.id_tratamiento
        WHERE m.id_usuario =  $1
        `;

        const values = [id_medico]
        const citas = await pool.query(consulta, values);
        return citas.rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

module.exports = {
    guardar_historia_clinica,
    listarHistoriaClinicaPorMedico
};