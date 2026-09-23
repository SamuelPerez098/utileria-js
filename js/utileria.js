/**
 * Librería de Utilidades de Validación y Cálculo (`utileria.js`)
 * Conjunto de funciones auxiliares para validación de formularios y cálculos comunes.
 */

/**
 * Valida si un texto cumple con la estructura estándar de correo electrónico.
 * 
 * @param {string} correo - Correo electrónico a validar.
 * @returns {boolean} Retorna `true` si el correo es válido, de lo contrario `false`.
 */
function validarCorreo(correo) {
    const expresion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return expresion.test(correo);
}

/**
 * Verifica que una cadena contenga únicamente letras y espacios.
 * Admite caracteres en español (vocales con tilde, 'ñ' y diéresis).
 * 
 * @param {string} texto - Cadena de texto a evaluar.
 * @returns {boolean} Retorna `true` si contiene solo letras y espacios, de lo contrario `false`.
 */
function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    return expresion.test(texto);
}

/**
 * Valida que la cantidad de dígitos de un número no supere una longitud máxima.
 * 
 * @param {number|string} numero - Número o valor numérico a evaluar.
 * @param {number} maxLongitud - Cantidad máxima de caracteres/dígitos permitidos.
 * @returns {boolean} Retorna `true` si la longitud es menor o igual al límite, de lo contrario `false`.
 */
function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

/**
 * Calcula la edad exacta en años cumplidos a partir de una fecha de nacimiento.
 * 
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento en formato aceptado por `Date()` (ej. "YYYY-MM-DD").
 * @returns {number} Edad calculada en años.
 */
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}

/**
 * Determina si una persona es mayor de edad (18 años o más) según su fecha de nacimiento.
 * 
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento (ej. "YYYY-MM-DD").
 * @returns {boolean} Retorna `true` si tiene 18 años o más, de lo contrario `false`.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida la fortaleza de una contraseña.
 * Criterios requeridos:
 * - Mínimo 8 caracteres.
 * - Al menos una letra mayúscula (A-Z).
 * - Al menos una letra minúscula (a-z).
 * - Al menos un dígito numérico (0-9).
 * - Al menos un carácter especial (ej. !@#$%^&*).
 * 
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} Retorna `true` si cumple con todos los criterios de seguridad, de lo contrario `false`.
 */
function validarPassword(password) {
    const minimo8 = /.{8,}/;
    const mayuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const numero = /[0-9]/;
    const especial = /[^A-Za-z0-9]/;

    return (
        minimo8.test(password) &&
        mayuscula.test(password) &&
        minuscula.test(password) &&
        numero.test(password) &&
        especial.test(password)
    );
}

/**
 * Verifica si un número se encuentra dentro de un rango inclusivo (mínimo y máximo).
 * 
 * @param {number} numero - Número a evaluar.
 * @param {number} minimo - Límite inferior permitido.
 * @param {number} maximo - Límite superior permitido.
 * @returns {boolean} Retorna `true` si el número está dentro del rango, de lo contrario `false`.
 */
function validarRango(numero, minimo, maximo) {
    return numero >= minimo && numero <= maximo;
}

/**
 * Valida el nombre de usuario según reglas de longitud y caracteres permitidos.
 * Criterios:
 * - Mínimo 4 caracteres, máximo 20.
 * - Permite únicamente letras (A-Z, a-z), números (0-9) y guion bajo (_).
 * 
 * @param {string} usuario - Nombre de usuario a validar.
 * @returns {boolean} Retorna `true` si cumple con el formato, de lo contrario `false`.
 */
function validarUsuario(usuario) {
    const expresion = /^[A-Za-z0-9_]{4,20}$/;
    return expresion.test(usuario);
}