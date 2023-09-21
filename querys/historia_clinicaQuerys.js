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

module.exports = {
    guardar_historia_clinica
};