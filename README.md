# Utilería JS (`utileria.js`)

## Portada
- **Nombre:** Librería de Utilidades de Validación y Cálculo (`utileria.js`)
- **Problema que resuelve:** En el desarrollo web, la validación de entradas de usuario (correo, contraseñas seguras, nombres de usuario) y el cálculo de fechas (como verificar la mayoría de edad) suelen generar duplicación de código e inconsistencias en la interfaz. Esta librería centraliza y estandariza las validaciones de formularios más comunes mediante funciones nativas, reutilizables y puras en JavaScript, evitando desbordamientos de datos y mejorando la experiencia de usuario.

---

## Instalación

Incluye el archivo `utileria.js` dentro de tu proyecto HTML vinculándolo antes de cerrar la etiqueta `</body>` o en la sección `<head>`:

# Utilería JS (`utileria.js`)

Librería liviana de utilidades en JavaScript diseñada para simplificar y estandarizar la validación de formularios y cálculos comunes en aplicaciones web. 

### ¿Qué problema resuelve?
Evita la duplicación de código al validar datos ingresados por usuarios (correos, contraseñas fuertes, formatos de texto, rangos) y simplifica operaciones recurrentes con fechas (cálculo de edad exacta y verificación de mayoría de edad), proporcionando funciones listas para usar, confiables y con soporte para caracteres en español (por que tiene la ñ)

---

## Instalación

Incluye el archivo `utileria.js` en tu proyecto e impórtalo en tu documento HTML antes de tus scripts principales:

```html
<script src="utileria.js"></script>
```

---

## Ejemplos de Uso

A continuación se muestra cómo integrar y ejecutar las funciones dentro de tu código JavaScript:

```javascript
// 1. Validar un correo electrónico
if (validarCorreo("usuario@dominio.com")) {
    console.log("El correo es válido");
}

// 2. Validar que un texto contenga solo letras y caracteres en español
console.log(soloLetras("María José")); // true
console.log(soloLetras("User123"));     // false

// 3. Validar la longitud de dígitos de un número o texto
console.log(validarLongitud(12345, 5)); // true
console.log(validarLongitud("123456", 5)); // false

// 4. Calcular la edad exacta a partir de una fecha de nacimiento
const edad = calcularEdad("2000-05-15");
console.log(`Edad: ${edad} años`);

// 5. Comprobar si una persona es mayor de edad
if (esMayorDeEdad("2005-10-20")) {
    console.log("Acceso permitido: Es mayor de edad.");
}

// 6. Validar fortaleza de contraseña
// (Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial)
const esSegura = validarPassword("Pass1234!");
console.log(`¿Contraseña segura?: ${esSegura}`); // true

// 7. Verificar si un número está dentro de un rango
console.log(validarRango(15, 1, 10));  // false
console.log(validarRango(5, 1, 10));   // true

// 8. Validar nombre de usuario (4-20 caracteres alfanuméricos y guión bajo)
console.log(validarUsuario("coder_99")); // true
console.log(validarUsuario("a"));        // false
```

---

## Documentación de API

### `validarCorreo(correo)`
Valida si un texto cumple con la estructura estándar de correo electrónico.
* **Parámetros:**
  * `{string} correo` - Correo electrónico a evaluar.
* **Retorna:** `{boolean}` - `true` si es válido, de lo contrario `false`.

### `soloLetras(texto)`
Verifica que una cadena contenga únicamente letras y espacios. Admite caracteres en español (vocales con tilde, 'ñ' y diéresis).
* **Parámetros:**
  * `{string} texto` - Cadena de texto a evaluar.
* **Retorna:** `{boolean}` - `true` si contiene solo letras y espacios, de lo contrario `false`.

### `validarLongitud(numero, maxLongitud)`
Valida que la cantidad de dígitos o caracteres de un número/cadena no supere una longitud máxima.
* **Parámetros:**
  * `{number|string} numero` - Valor a evaluar.
  * `{number} maxLongitud` - Cantidad máxima permitida.
* **Retorna:** `{boolean}` - `true` si la longitud es menor o igual al límite, de lo contrario `false`.

### `calcularEdad(fechaNacimiento)`
Calcula la edad exacta en años cumplidos a partir de una fecha de nacimiento.
* **Parámetros:**
  * `{string|Date} fechaNacimiento` - Fecha de nacimiento en formato aceptado por `Date()` (ej. `"YYYY-MM-DD"`).
* **Retorna:** `{number}` - Edad calculada en años.

### `esMayorDeEdad(fechaNacimiento)`
Determina si una persona es mayor de edad (18 años o más) según su fecha de nacimiento.
* **Parámetros:**
  * `{string|Date} fechaNacimiento` - Fecha de nacimiento (ej. `"YYYY-MM-DD"`).
* **Retorna:** `{boolean}` - `true` si tiene 18 años o más, de lo contrario `false`.

### `validarPassword(password)`
Valida la fortaleza de una contraseña comprobando que cumpla con los criterios de seguridad mínimos:
* Mínimo 8 caracteres.
* Al menos una letra mayúscula (`A-Z`).
* Al menos una letra minúscula (`a-z`).
* Al menos un dígito numérico (`0-9`).
* Al menos un carácter especial (ej. `!@#$%^&*`).
* **Parámetros:**
  * `{string} password` - Contraseña a evaluar.
* **Retorna:** `{boolean}` - `true` si cumple con todos los criterios de seguridad, de lo contrario `false`.

### `validarRango(numero, minimo, maximo)`
Verifica si un número se encuentra dentro de un rango inclusivo (mínimo y máximo).
* **Parámetros:**
  * `{number} numero` - Número a evaluar.
  * `{number} minimo` - Límite inferior permitido.
  * `{number} maximo` - Límite superior permitido.
* **Retorna:** `{boolean}` - `true` si está dentro del rango, de lo contrario `false`.

### `validarUsuario(usuario)`
Valida el nombre de usuario según reglas de longitud y caracteres permitidos:
* Mínimo 4 caracteres, máximo 20.
* Permite únicamente letras (`A-Z`, `a-z`), números (`0-9`) y guion bajo (`_`).
* **Parámetros:**
  * `{string} usuario` - Nombre de usuario a evaluar.
* **Retorna:** `{boolean}` - `true` si cumple con el formato, de lo contrario `false`.