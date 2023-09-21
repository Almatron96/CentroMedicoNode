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


async function listarCitaDelDia(medico_id_usuario) {
    try {
        const consulta = `
        select current_date as fecha,  cm.especialidad, cm.estado, extract(hour from  fecha_inicio) as hora_inicio , 
        extract(hour from  fecha_fin) as hora_fin,  cm.observacion, p.primer_nombre, p.primer_apellido, cm.id_cita_medica
        from usuario u 
        inner join medico m ON u.id_usuario = m.id_usuario 
        inner join cita_medica cm ON cm.id_medico = m.id_medico
        inner join paciente p on p.id_paciente = cm.id_paciente 
        where u.id_usuario = $1
        AND DATE(fecha_inicio) = current_date
        AND estado = 'Agendada'
        `;

        console.log("DATOS RECIBIDOS:  " + medico_id_usuario);
        const values = [medico_id_usuario]
        const citas = await pool.query(consulta,values);

        return citas.rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
}

module.exports = {
    listarFechas,
    guardarCitas,
    listarCitaDelDia
};