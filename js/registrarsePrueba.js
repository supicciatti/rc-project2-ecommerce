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

  if (!registrationForm.checkValidity()) {
    event.stopPropagation();
    registrationForm.classList.add("was-validated");
    return;
  }

  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  const user = {
    username: username,
    password: password,
    email: email,
    avatar: avatarPath,
  };

  // Obtener los usuarios existentes del Local Storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  registrationForm.reset();
});

registrationForm.addEventListener("submit", validarEdad);

function validarEdad(event) {
  const fechaNacimiento = new Date(
    document.querySelector("#fechaNacimiento").value
  );

  if (
    isNaN(fechaNacimiento.getTime()) ||
    document.querySelector("#fechaNacimiento").value === ""
  ) {
    document.querySelector("#modalError").innerHTML =
      "<p style ='color: red'> ¡Debes completar tu fecha de nacimiento!</p>";
    document.querySelector("#modalError").style.textAlign = "center";
    event.preventDefault();
    return;
  }

  const edad = calcularEdad(fechaNacimiento);
  if (edad < 18) {
    event.preventDefault();
    document.querySelector("#modalError").innerHTML =
      "¡Lo siento! Debes ser mayor de 18 años para registrarte";
  } else {
    document.querySelector("#modalError").innerHTML = "";
  }
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  if (
    hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() &&
      hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}
