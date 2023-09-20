const pool = require('../databaseConfig');

async function guardarPaciente(paciente) {
  try {
    const query = `INSERT INTO 
      paciente(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, telefono_movil, telefono_fijo, 
      fecha_nacimiento, estado_civil, id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;

    const values = [
      paciente.primer_nombre,
      paciente.segundo_nombre,
      paciente.primer_apellido,
      paciente.segundo_apellido,
      paciente.cedula,
      paciente.correo,
      paciente.telefono_movil,
      paciente.telefono_fijo,
      paciente.fecha_nacimiento,
      paciente.estado_civil,
      paciente.id_usuario
    ];

    const result = await pool.query(query, values);
    // console.log(result.rows);
    return result.rows[0];
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    throw error;
  }
}
async function listarPaciente() {
  const query = 'select * from paciente';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    throw error;
  }
};

module.exports = {
  guardarPaciente,
  listarPaciente
};