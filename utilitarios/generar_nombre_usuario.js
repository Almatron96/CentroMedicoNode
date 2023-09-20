function nombreUsuario(primerNombre, cedula) {
    return primerNombre + cedula.substring(6);
  }

  module.exports = {
    nombreUsuario
  };


/*   // Ejemplo de uso
const primerNombre = "Mayton";
const cedula = "1205992686";
const resultado =  generar_nombre_usuario.nombreUsuario(primerNombre, cedula);
console.log(resultado); // 
 */