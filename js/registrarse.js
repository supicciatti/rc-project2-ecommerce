const registrationForm = document.getElementById("registration-form");
const usernameInput = document.getElementById("nombreYApellido");
const passwordInput = document.getElementById("imputNuevaClave");
const emailInput = document.getElementById("email");
const avatarOptions = document.querySelectorAll('input[name="avatar"]');
let selectedAvatar = "";
let avatarPath = "";

avatarOptions.forEach((option) => {
  option.addEventListener("change", (event) => {
    selectedAvatar = event.target.value;
    avatarPath = `${selectedAvatar}`;
  });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  const user = {
    username: username,
    password: password,
    email: email,
    avatar: avatarPath,
  };
  // Obtiene los usuarios existentes del Local Storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  registrationForm.reset();
});

// Agregar un controlador de eventos a cada opción de avatar
avatarOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Desactivar todas las opciones de avatar
    avatarOptions.forEach((option) => {
      option.classList.remove("selected");
    });

    // Activar la opción de avatar seleccionada
    option.classList.add("selected");
  });
});

/* 
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
});

function validarEdad(event) {
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

    event.preventDefault();
    return;
  }

  const edad = calcularEdad(fechaNacimiento);
  if (edad < 18) {
    modalError = document.querySelector("#modalError").innerHTML =
      "¡Lo siento! Debes ser mayor de 18 años para registrarte";
    event.preventDefault();
  }
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  if (
    hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() &&
      hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}
 */
