document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const forgottenPasswordForm = document.getElementById("forgottenPassword");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("imputEmailLabel");
    const passwordInput = document.getElementById("imputPassword1");

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validar el formulario utilizando HTML5 Constraint Validation API
    if (!loginForm.checkValidity()) {
      // Si el formulario no es válido, muestra los mensajes de validación
      loginForm.classList.add("was-validated");
      return;
    }

    // Obtener los usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    let isLoggedIn = false;
    let loggedInUser;

    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (email === user.email && password === user.password) {
          loggedInUser = {
            username: user.username,
            password: user.password,
            email: user.email,
            avatar: user.avatar,
          };
          isLoggedIn = true;
          break;
        }
      }
    }

    if (isLoggedIn) {
      // Almacenar el inicio de sesión en el localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      let message = document.querySelector("#wrongCredentials");
      message.style.display = "none";
      window.location.href = "../index.html";
      console.log(loggedInUser.avatar);
    } else {
      let message = document.querySelector("#wrongCredentials");
      message.textContent =
        "Usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.";
      message.style.display = "block";
    }

    loginForm.reset();
  });

  forgottenPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar el formulario utilizando HTML5 Constraint Validation API
    if (!forgottenPasswordForm.reportValidity()) {
      // Si el formulario no es válido, muestra los mensajes de validación
      forgottenPasswordForm.classList.add("was-validated");
      return;
    }

    forgottenPasswordForm.reset();
  });
});
