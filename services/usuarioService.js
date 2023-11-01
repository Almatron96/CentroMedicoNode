const { encriptar_contrasenia } = require('../utilitarios/encriptar_contrasenia');
const usuarioQuerys = require('../querys/usuarioQuerys');  // 


async function guardarUsuario(usuario) {
  try {

    const encriptador = new encriptar_contrasenia();
    const contra = await encriptador.encriptar(usuario.contrasenia); //Encriptar antes de mandar a guardar contraseña
    const usuarioGuardado = {
      nombre_usuario: usuario.nombre_usuario,
      contrasenia: contra,
      correo: usuario.correo,
      activo: usuario.activo,
      tipo_usuario: usuario.tipo_usuario,
    };

    const resultado = await usuarioQuerys.guardarUsuario(usuarioGuardado);

    return resultado;
  } catch (error) {

    console.error('Error al guardar el usuario:', error);
    throw new Error('Error al guardar el usuario en la base de datos');
  }
}

async function eliminarUsuario(usuario) {
  try {
      const usuarioEliminado = {
          id_usuario: usuario.id_usuario,
      };
      await usuarioQuerys.eliminarUsuario(usuarioEliminado);
      return 'Paciente eliminado correctamente.';
  } catch (error) {
      throw new Error('Error al elimminar paciente en la base de datos');
  }
}

module.exports = {
  guardarUsuario,
  eliminarUsuario
};
