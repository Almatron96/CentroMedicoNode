const express = require('express');
const loginRoute = require('./routes/loginRoute');
const pacienteRoute = require('./routes/pacienteRoute');
const citaRoute = require('./routes/citaRoute');
const medicoRoute = require('./routes/medicoRoute');
const historia_clinicaRoute = require('./routes/historia_clinicaRoute');
const cors = require('cors');
const { encriptar_contrasenia } = require('./utilitarios/encriptar_contrasenia');
const mail = require('./utilitarios/mailer');
const citaService = require('./services/citaService');
const app = express();

// middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes 
app.use('/login', loginRoute);
app.use('/paciente', pacienteRoute);
app.use('/cita_medica',citaRoute );
app.use('/medico',medicoRoute );
app.use('/historia_clinica',historia_clinicaRoute );



app.listen(process.env.PORT || 8080, () =>{
  console.log('Server on port 8080');
});
 
citaService.correoDeCitasPendientes();

//mail.enviarMail().catch(console.error);

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