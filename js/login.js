// Inicio de sesión
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("imputEmailLabel");
    const passwordInput = document.getElementById("imputPassword1");

    const email = emailInput.value;
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem("users"));

    let isLoggedIn = false;
    let loggedInUser;

    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (email === user.email && password === user.password) {
          loggedInUser = {
            username: `${user.username}`,
            password: `${user.password}`,
            email: `${user.email}`,
            avatar: `${user.avatar}`,
          };
          isLoggedIn = true;
          break;
        }
      }
    }

    if (isLoggedIn) {
      // Almacenamos el logueo en el localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      let message = document.getElementById("wrongCredentials");
      message.style.display = "none";
      // window.location.href = "../index.html";
      console.log(`${loggedInUser.avatar}`);
    } else {
      let message = document.getElementById("wrongCredentials");
      message.textContent =
        "Usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.";
    }

    loginForm.reset();
  });
});
