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
    window.location.href = "https://mxhome.netlify.app/pages/samsungcelu";
  } else if (suggestion === "Celulares Motorola") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Celulares Apple") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Notebooks") {
    window.location.href = "https://mxhome.netlify.app/pages/notebook.html";
  } else if (suggestion === "Tablets") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Smart TV") {
    window.location.href = "https://mxhome.netlify.app/pages/smartTv.html";
  } else if (suggestion === "Videos juegos") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Heladeras") {
    window.location.href = "https://mxhome.netlify.app/pages/heladera.html";
  } else if (suggestion === "Lavarropas") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Aires") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  } else if (suggestion === "Parlantes portátiles") {
    window.location.href = "https://mxhome.netlify.app/pages/enconstruccion";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el usuario ha iniciado sesión consultando localStorage

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  // isLoggedIn = true
  let loggedInUser = localStorage.getItem("loggedInUser");

  /* avatar: "/assets/photos/cuteBear.jpg";
email: "enzosupicciatti97@gmail.com";
password: "Enzo1234";
username: "Enzo Supicciatti"; */
  if (isLoggedIn === "true" && loggedInUser) {
    // El usuario ha iniciado sesión, modificar el estilo y contenido del navbar
    let navbar = document.getElementById("navbar");
    let myAccount = document.getElementById("myAccount");

    // Obtener los datos del usuario logueado del localStorage
    let userAttributes = JSON.parse(loggedInUser);

    myAccount.textContent = `Hola ${userAttributes.username} ! `;
    myAccount.style.textAlign = "center";
    myAccount.href = "https://mxhome.netlify.app/pages/enconstruccion";

    // Crear y agregar la imagen del avatar

    let avatarImg = document.createElement("img");
    avatarImg.src = userAttributes.avatar;
    avatarImg.classList.add("avatar-img");
    myAccount.appendChild(avatarImg);

    // Agrega la clase "logged-in" al navbar, la cual modificará su apariencia
    navbar.classList.add("logged-in");
    if (userAttributes.username === "admin") {
      myAccount.href = "https://mxhome.netlify.app/pages/administracion.html";
    }
  } else {
    // No hay usuario registrado, mostrar "Mi Cuenta"
    myAccount.textContent = "Mi Cuenta";
    myAccount.href = "/pages/login.html";
  }
});
