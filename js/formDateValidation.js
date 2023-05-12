/* Validación de +18 años */

function validarEdad(event) {
  // Obtener la fecha de nacimiento ingresada por el usuario
  const fechaNacimiento = new Date(
    document.querySelector("#fechaNacimiento").value
  );
  if (
    isNaN(fechaNacimiento.getTime()) ||
    document.querySelector("#fechaNacimiento").value === ""
  ) {
    modalError = document.querySelector("#modalError").innerHTML =
      "<p style ='color: red'> ¡Debes completar tu fecha de nacimiento!</p>";
    document.querySelector("#modalError").style.textAlign = "center";

    // Evitar que se envíe el formulario
    event.preventDefault();
    return;
  }
  // Calcular la edad actual del usuario
  const edad = calcularEdad(fechaNacimiento);
  // Comparar la edad actual con la edad mínima requerida
  if (edad < 18) {
    // Mostrar un mensaje de error al usuario
    modalError = document.querySelector("#modalError").innerHTML =
      "¡Lo siento! Debes ser mayor de 18 años para registrarte";
    // Evitar que se envíe el formulario
    event.preventDefault();
  }
}

// Calcular la edad actual del usuario
const edad = calcularEdad(fechaNacimiento);
// Comparar la edad actual con la edad mínima requerida
if (edad < 18) {
  // Mostrar un mensaje de error al usuario
  modalError = document.querySelector("#modalError").innerHTML =
    "¡Lo siento! Debes ser mayor de 18 años para registrarte";
  // Evitar que se envíe el formulario
  event.preventDefault();
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaNacimientoAnio = fechaNacimiento.getFullYear();
  const fechaNacimientoMes = fechaNacimiento.getMonth();
  const fechaNacimientoDia = fechaNacimiento.getDate();

  const edad = hoy.getFullYear() - fechaNacimientoAnio;
  if (
    hoy.getMonth() < fechaNacimientoMes ||
    (hoy.getMonth() === fechaNacimientoMes &&
      hoy.getDate() < fechaNacimientoDia)
  ) {
    edad--;
  }
  return edad;
}
