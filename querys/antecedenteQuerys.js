const pool = require('../databaseConfig');

async function guardar_antecedente(antecedente) {
  try {
    const query = `
    INSERT INTO antecedente(
      antecedente_alergico, antecedente_familiar, antecedente_personal, antecedente_quirurgico)
      VALUES ($1, $2, $3, $4) RETURNING id_antecedente;
    `;
    const values = [
      antecedente.antecedente_alergico,
      antecedente.antecedente_familiar,
      antecedente.antecedente_personal,
      antecedente.antecedente_quirurgico
    ];

    const result = await pool.query(query, values);

    return result.rows[0]; 

  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    throw error;
  }
}

module.exports = {
  guardar_antecedente
};

