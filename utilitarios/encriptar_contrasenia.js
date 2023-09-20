const bcrypt = require('bcryptjs');

class encriptar_contrasenia {

  constructor() {
    this.saltRounds = 10; // Número de rounds para la sal
  }

  async encriptar(password) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async comparar(rawPassword, hashedPassword) {
    return await bcrypt.compare(rawPassword, hashedPassword);
  }
}

module.exports = {
  encriptar_contrasenia
};

/* 

const contrasenia = new encriptar_contrasenia();
(async () => {
  const password = 'miContraseña';
  const hashedPassword = await contrasenia.encriptar(password);
  console.log('Contraseña encriptada:', hashedPassword);

  const esIgual = await contrasenia.comparar('miContraseña', hashedPassword);
  console.log('Las contraseñas son iguales:', esIgual);
})();

 */
