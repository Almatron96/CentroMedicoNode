const pool = require('../databaseConfig');

async function guardar_tratamiento(tratamiento) {
    try {
      const query =`INSERT INTO tratamiento(duracion, indicaciones, medicacion)
        VALUES ($1, $2, $3) RETURNING id_tratamiento;`;
      const values = [
        tratamiento.duracion,
        tratamiento.indicaciones,
        tratamiento.medicacion,
      ];
      
      const result = await pool.query(query, values);
      return result.rows[0]; 
    } catch (error) {
      console.error('Error al consultar la base de datos:', error);
      throw error; 
    }
  }

  module.exports = {
    guardar_tratamiento
  };
  
  