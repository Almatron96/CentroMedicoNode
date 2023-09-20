//const { usuarioQuerys } = require('../querys/usuarioQuerys');
const { encriptar_contrasenia } = require('../utilitarios/encriptar_contrasenia');
const usuarioQuerys = require('../querys/usuarioQuerys');

async function iniciarSesion(datosEntrada) {
  const encriptador = new encriptar_contrasenia();
  try {
    // Obtener usuario 
    const resultadoConsulta = await usuarioQuerys.obtenerUsuarioPorCorreo(datosEntrada.correo);
    
    if (!resultadoConsulta) {
      return { status: 404, error: 'Usuario no registrado' };
    }

    // Verificar la contraseña utilizando bcrypt
    const contraseniaCorrecta = await encriptador.comparar(
      datosEntrada.contrasenia,
      resultadoConsulta.contrasenia
    );

    if (!contraseniaCorrecta) {
      return { status: 401, error: 'Contraseña incorrecta' };
    }

    // Crear un objeto UsuarioDTO 
    const usuarioDTO = {
      nombre_usuario: resultadoConsulta.nombre_usuario,
      id_usuario: resultadoConsulta.id_usuario,
      tipo_usuario: resultadoConsulta.tipo_usuario,
    };

    return { usuarioDTO };
  } catch (error) {
    console.error(error);
    return { status: 500, error: 'Error interno del servidor' };
  }
}

module.exports = {
  iniciarSesion,
};
