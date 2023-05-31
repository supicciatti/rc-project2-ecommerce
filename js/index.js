// Obtener los usuarios almacenados en el localStorage
let usersJSON = localStorage.getItem("users");

if (usersJSON) {
  // Convertir la cadena JSON a un array de objetos
  users = JSON.parse(usersJSON);
} else {
  users = [
    {
      email: "admin@admin.com",
      password: "Admin1234",
      username: "admin",
      avatar: "../assets/photos/cuteBear.jpg",
    },
  ];
  saveUsersToLocalStorage();
}
// Función para guardar los usuarios en el localStorage
function saveUsersToLocalStorage() {
  let usersJSON = JSON.stringify(users);
  localStorage.setItem("users", usersJSON);
}
