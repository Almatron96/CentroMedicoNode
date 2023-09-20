const usuarioService = require('./usuarioService');
const utilitarios = require('../utilitarios/generar_nombre_usuario');
const pacienteQuerys = require('../querys/pacienteQuerys');

// Función para guardar un paciente
async function guardarPaciente(paciente) {
    try {
        // Generar un nombre de usuario
        const nombreUsuarioGenerado = utilitarios.nombreUsuario(paciente.primer_nombre, paciente.cedula);

        // Crear un nuevo usuario
        const nuevoUsuario = {
            nombre_usuario: nombreUsuarioGenerado,
            contrasenia: paciente.cedula,
            correo: paciente.correo,
            activo: true,
            tipo_usuario: 'PACIENTE'
        };

        console.log(nuevoUsuario);

        // Guardar el nuevo usuario en la base de datos
        const usuarioGuardado = await usuarioService.guardarUsuario(nuevoUsuario);

        // Crear un nuevo paciente asociado al usuario
        const nuevoPaciente = {
            primer_nombre: paciente.primer_nombre,
            segundo_nombre: paciente.segundo_nombre,
            primer_apellido: paciente.primer_apellido,
            segundo_apellido: paciente.segundo_apellido,
            cedula: paciente.cedula,
            correo: paciente.correo,
            telefono_movil: paciente.telefono_movil,
            telefono_fijo: paciente.telefono_fijo,
            fecha_nacimiento: paciente.fecha_nacimiento,
            estado_civil: paciente.estado_civil,
            contrasenia: paciente.contrasenia,
            id_usuario: usuarioGuardado // Asociar al usuario recién creado
        };

        console.log(nuevoPaciente);
        // Guardar el nuevo paciente en la base de datos
        await pacienteQuerys.guardarPaciente(nuevoPaciente);

        return 'Paciente guardado correctamente.';
    } catch (error) {
        console.error('Error al guardar el paciente:', error);
        throw new Error('Error al guardar el paciente en la base de datos');
    }
}

async function listarPaciente() {
    try {
     const pacientes = await pacienteQuerys.listarPaciente();
     console.log(pacientes.rows);
     return pacientes;
    } catch (error) {
        console.error('Error al listar el paciente:', error);
    }
}



module.exports = {
    guardarPaciente,
    listarPaciente
};
