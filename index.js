const express = require('express');
const loginRoute = require('./routes/loginRoute');
const pacienteRoute = require('./routes/pacienteRoute');
const citaRoute = require('./routes/citaRoute');
const { encriptar_contrasenia } = require('./utilitarios/encriptar_contrasenia');
const app = express();

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes 
app.use('/login', loginRoute);
app.use('/paciente', pacienteRoute);
app.use('/cita_medica',citaRoute );

app.listen(8080, () => {
  console.log(`Server is up and running on 8080 ...`);
});



/* const contrasenia = new encriptar_contrasenia();
(async () => {
  const password = '1585648732';
  const hashedPassword = await contrasenia.encriptar(password);
  console.log('Contraseña encriptada:', hashedPassword);

  const esIgual = await contrasenia.comparar('miContraseña', hashedPassword);
  console.log('Las contraseñas son iguales:', esIgual);
})();
 */


/* const obtenerUsuario = async () => {
   try {
    const resp = await pool.query('select * from usuario');
    console.log(resp.rows);
   } catch (error) {
    console.log(error);
   }
}

obtenerUsuario(); */