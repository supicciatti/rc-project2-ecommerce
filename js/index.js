const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

// Lista de sugerencias
const suggestions = [
  "Celulares Samsung",
  "Celulares Motorola",
  "Celulares Apple",
  "Notebooks",
  "Tablets",
  "Smart TV",
  "Videos juegos",
  "Heladeras",
  "Lavarropas",
  "Aires",
  "Parlantes portátiles",
  "",
];
// Función para actualizar las sugerencias
function updateSuggestions() {
  const inputValue = searchInput.value.toLowerCase();

  // Ocultar la lista de sugerencias si el campo de búsqueda está vacío
  if (inputValue === "") {
    suggestionsList.style.display = "none";
    return;
  }

  // Limpiar la lista de sugerencias
  suggestionsList.innerHTML = "";

  // Filtrar las sugerencias basadas en el valor del campo de búsqueda
  const filteredSuggestions = suggestions.filter(function (suggestion) {
    return suggestion.toLowerCase().includes(inputValue);
  });

  // Mostrar las sugerencias en la lista
  filteredSuggestions.forEach(function (suggestion) {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;
    listItem.classList.add("list-group-item");
    suggestionsList.appendChild(listItem);

    listItem.addEventListener("click", function () {
      // Redirigir a la página correspondiente al elemento de la lista seleccionado
      redirectToPage(suggestion);
    });
  });

  // Mostrar la lista de sugerencias
  suggestionsList.style.display = "block";
}

// Evento "input" para detectar cambios en el campo de búsqueda
searchInput.addEventListener("input", updateSuggestions);

// Fuera de la función updateSuggestions
function redirectToPage(suggestion) {
  // Realizar la redirección según el elemento de la lista seleccionado
  if (suggestion === "Celulares Samsung") {
    window.location.href = "pages/detalleProducto.html";
  } else if (suggestion === "Celulares Motorola") {
    window.location.href = "pages/motorola.html";
  } else if (suggestion === "Celulares Apple") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Notebooks") {
    window.location.href = "pages/notebook.html";
  } else if (suggestion === "Tablets") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Smart TV") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Videos juegos") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Heladeras") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Lavarropas") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Aires") {
    window.location.href = "pages/apple.html";
  } else if (suggestion === "Parlantes portátiles") {
    window.location.href = "pages/apple.html";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el usuario ha iniciado sesión consultando localStorage
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let loggedInUser = localStorage.getItem("loggedInUser");

  if (isLoggedIn === "true" && loggedInUser) {
    // El usuario ha iniciado sesión, modificar el estilo y contenido del navbar
    let navbar = document.getElementById("navbar");
    let loginBtn = document.getElementById("login-btn");
    let createAccountLink = document.getElementById("create-account-link");
    let userInfoContainer = document.getElementById("user-info");

    if (navbar !== null) {
      navbar.classList.add("logged-in"); // Agrega la clase "logged-in" al navbar

      // Ocultar los botones de "Ingresar" y "Crear cuenta"
      if (loginBtn !== null) {
        loginBtn.style.display = "none";
      }
      if (createAccountLink !== null) {
        createAccountLink.style.display = "none";
      }

      // Obtener los datos del usuario logueado del localStorage
      let userAttributes = JSON.parse(loggedInUser);

      // Crear y agregar el mensaje de saludo
      let greeting = document.createElement("span");
      greeting.textContent = `Hola ${userAttributes.username}!`;
      greeting.classList.add("navbar-text", "mr-2");
      userInfoContainer.appendChild(greeting);

      // Crear y agregar la imagen del avatar
      let avatarImg = document.createElement("img");
      avatarImg.src = userAttributes.avatar;
      avatarImg.classList.add("avatar-img");
      userInfoContainer.appendChild(avatarImg);
      console.log(userAttributes.avatar);
      console.log(userAttributes.username);
    }
  }
});
