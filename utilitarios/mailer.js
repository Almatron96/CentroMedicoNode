const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'cmcarrasco2023@gmail.com ',
    pass: 'dago taul qphg sklm'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function enviarMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'cmcarrasco2023@gmail.com', // sender address
    to: "cmcarrasco2023@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world de pruebita</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

async function enviarMailPendientes(datos) {
  
  for (const fila of datos.rows) {
    try {
      const info = await transporter.sendMail({
        from: 'cmcarrasco2023@gmail.com',
        to: fila.correo,
        subject: "Tiene una cita pendiente.",
        html: `<b>Tiene una cita pendiente en el centro médico Carrasco</b>
              <p>Saludos estimado ${fila.p_primer_nombre} ${fila.p_primer_apellido}. 
              Se le informa que tiene una cita pendiente, con el/la doctor(a) ${fila.m_primer_nombre} ${fila.m_primer_apellido}
              el día ${fila.fecha_inicio}</p>
        `,
      });

      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }
}


/* async function enviarMailPendientes(datos) {
  console.log(datos.rows[0].correo);
  //console.log("EL CORREO ES " +datos.correo);
  // send mail with defined transport object
  datos.rows.forEach((fila) => {
    
  })
  const info = await transporter.sendMail({
    from: 'cmcarrasco2023@gmail.com', // sender address
    to: datos.rows[0].correo, // list of receivers
    subject: "Tiene una cita pendiente.", // Subject line
    html: `<b>Tiene una cita pendiente en el centro médico Carrasco</b>
          <p>Saludos estimado ${datos.rows[0].p_primer_nombre} ${datos.rows[0].p_primer_apellido}. </p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
} */

//enviarMail().catch(console.error);

module.exports = {
  enviarMail,
  enviarMailPendientes
  };