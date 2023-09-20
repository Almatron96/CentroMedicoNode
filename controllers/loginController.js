const  loginService  = require('../services/loginService');

async function iniciarSesion(req, res) {
  try {
    const resultadoSesion = await loginService.iniciarSesion(req.body);
    if (resultadoSesion.error) {
      return res.status(resultadoSesion.status).json(resultadoSesion.error);
    }

    return res.status(200).json(resultadoSesion.usuarioDTO);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

module.exports = {
  iniciarSesion,
};


/* const userModel = require('../querys/usuarioQuerys'); // Importar modelo de usuario
const { encriptar_contrasenia } = require('../utilitarios/encriptar_contrasenia');

// Función para iniciar sesión
async function iniciarSesion(req, res) {
  const datosEntrada = req.body;

  const encriptador = new encriptar_contrasenia();
  try {
    // Obtener usuario 
    const resultadoConsulta = await userModel.obtenerUsuarioPorCorreo(datosEntrada.correo);
    
    if (!resultadoConsulta) {
      return res.status(404).json('Usuario no registrado');
    }

    // Verificar la contraseña utilizando bcrypt
    const contraseniaCorrecta = await encriptador.comparar(
      datosEntrada.contrasenia,
      resultadoConsulta.contrasenia
    );

    if (!contraseniaCorrecta) {
      return res.status(401).json('Contraseña incorrecta');
    }

    // Crear un objeto UsuarioDTO 
    const usuarioDTO = {
      nombre_usuario: resultadoConsulta.nombre_usuario,
      id_usuario: resultadoConsulta.id_usuario,
      tipo_usuario: resultadoConsulta.tipo_usuario,
    };

    return res.status(200).json(usuarioDTO);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
}

module.exports = {
  iniciarSesion
}; */