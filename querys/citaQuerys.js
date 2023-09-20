const pool = require('../databaseConfig');

async function listarFechas(fecha) {
    try {
        const consulta = `
            SELECT TO_CHAR(fecha_inicio, 'YYYY-MM-DD HH24:MI:SS') as fecha 
            FROM cita_medica
            WHERE DATE_TRUNC('day', fecha_inicio) = TO_TIMESTAMP($1, 'YYYY-MM-DD HH24:MI:SS.US')
        `;
        
        const result = await pool.query(consulta, [fecha]);
        
        // formatear las fechas
        const fechas = result.rows.map(row => row.fecha);
        
        return fechas;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

async function guardarCitas(cita) {
    try {
        const consulta = `
        INSERT INTO cita_medica(
             especialidad, estado, fecha_fin, fecha_inicio, observacion, id_medico, id_paciente)
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `;
        const values = [
            cita.especialidad,
            cita.estado,
            cita.fecha_fin,
            cita.fecha_inicio,
            cita.observacion,
            cita.id_medico,
            cita.id_paciente
        ];
        const result = await pool.query(consulta, values);
        
        return result;

    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

module.exports = {
    listarFechas,
    guardarCitas
  };