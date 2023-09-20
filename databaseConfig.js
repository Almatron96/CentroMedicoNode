const {Pool} = require('pg');

const configDB = {
    user: 'postgres',
    host: 'localhost',
    password: '123456789',
    database: 'CentroMedicoBD'
}

const pool = new Pool(configDB);


pool.connect((err, client, done) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos establecida correctamente');
        done();
    }
});

module.exports = pool;