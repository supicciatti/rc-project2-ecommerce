// Obtener los productos almacenados en el localStorage
let productsJSON = localStorage.getItem("products");

if (productsJSON) {
  // Convertir la cadena JSON a un array de objetos
  products = JSON.parse(productsJSON);
} else {
  products = [
    {
      imagen: "../assets/photos/videoSize.png",
      titulo: "Play Station 5",
      precio: 274999,
      promocion: "20% OFF exclusivo para venta online",
      unidades: 124,
      id: 1,
      codigo: 4783,
    },
    {
      imagen: "../assets/photos/tv3Size.png",
      titulo: "Smart TV NOBLEX 32'",
      precio: 65000,
      promocion: "10% OFF exclusivo para venta online",
      unidades: 285,
      id: 2,
      codigo: 6241,
    },
    {
      imagen: "../assets/photos/tv1Size.png",
      titulo: "Smart TV HITACHI 32'",
      precio: 63999,
      promocion: "Envío gratis exclusivo desde la app",
      unidades: 74,
      id: 3,
      codigo: 2058,
    },
    {
      imagen: "../assets/photos/notebook3Size.png",
      titulo: "Notebook ACER 8GB RAM 256GB SSD",
      precio: 179299,
      promocion: "15% OFF en todas las capacidades",
      unidades: 142,
      id: 4,
      codigo: 7612,
    },
    {
      imagen: "../assets/photos/motorola4Size.png",
      titulo: "Motorola E32 Dual Sim 128 GB 6 GB RAM",
      precio: 63999,
      promocion: "Envío gratis en CABA",
      unidades: 98,
      id: 5,
      codigo: 9199,
    },
    {
      imagen: "../assets/photos/notebook2Size.png",
      titulo: "Notebook DELL 4GB RAM ",
      precio: 123999,
      promocion: "30% OFF en modelos seleccionados",
      unidades: 210,
      id: 6,
      codigo: 1267,
    },
    {
      imagen: "../assets/photos/lavarropa3Size.png",
      titulo: "Lavarropas DREAN",
      precio: 249999,
      promocion: "Envío gratis a todo el país",
      unidades: 67,
      id: 7,
      codigo: 3784,
    },
    {
      imagen: "../assets/photos/celu1Size.png",
      titulo: "Motorola MOTO G4",
      precio: 92999,
      promocion: "10% OFF en todos los modelos",
      unidades: 183,
      id: 8,
      codigo: 5327,
    },
    {
      imagen: "../assets/photos/apple5Size.png",
      titulo: "iPhone 13 PRO MAX",
      precio: 189499,
      promocion: "Envío gratis",
      unidades: 123,
      id: 9,
      codigo: 1529,
    },
    {
      imagen: "../assets/photos/aire1Size.png",
      titulo: "Aire acondicionado NOBLEX 3200 Watts Frio Calor",
      precio: 239000,
      promocion: "20% OFF abonando en efectivo en sucursales",
      unidades: 95,
      id: 10,
      codigo: 8516,
    },
  ];
  guardarProductosEnLocalStorage();
}

// Llamar a la función para renderizar los productos
renderproducts();

// Función para renderizar los productos en la tabla
function renderproducts() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  products.forEach(function (product) {
    let row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${product.id}</th>
      <td>${product.codigo}</td>
      <td><img src="${product.imagen}" alt="${product.titulo}"></td>
      <td>${product.titulo}</td>
      <td class="precioVenta">${product.precio}</td>
      <td class="unidades">${product.unidades}</td>
      <td>
        <button type="button" class="btn btn-warning editar mt-3" data-id="${product.id}">Editar</button>
        <button type="button" class="btn btn-danger eliminar mt-3" data-id="${product.id}">Eliminar</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Agregar event listeners a los botones de editar y eliminar
  let editButtons = document.querySelectorAll(".editar");
  editButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      //extrae el valor del atributo data-id del elemento HTML que desencadenó el evento y lo almacena en la variable id como un número entero.
      let id = parseInt(event.target.dataset.id, 10);
      let precio = prompt("Ingrese el nuevo precio de venta:");
      let unidades = prompt("Ingrese las nuevas unidades:");

      actualizarProducto(id, precio, unidades);
    });
  });

  let deleteButtons = document.querySelectorAll(".eliminar");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let id = parseInt(event.target.dataset.id, 10);
      eliminarProducto(id);
    });
  });
}

// Función para obtener un producto por su ID
function getProductoById(id) {
  return products.find(function (producto) {
    return producto.id === id;
  });
}

// Función para actualizar los datos de un producto
function actualizarProducto(id, precio, unidades) {
  let producto = getProductoById(id);
  if (producto) {
    producto.precio = precio;
    producto.unidades = unidades;
    renderproducts();
    alert(`Producto actualizado: ${producto.titulo}`);
    guardarProductosEnLocalStorage();
  }
}

// Función para eliminar un producto
function eliminarProducto(id) {
  let index = products.findIndex(function (product) {
    return product.id === id;
  });

  if (index !== -1) {
    let producto = products[index];
    products.splice(index, 1);
    renderproducts();
    alert(`Producto eliminado: ${producto.titulo}`);
    guardarProductosEnLocalStorage();
  }
}

// Obtener el formulario y agregar un event listener para el evento "submit"
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores ingresados en el formulario
  let codigo = document.getElementById("inputCodigo").value;
  let imagen = document.getElementById("inputImagen").files[0];
  let titulo = document.getElementById("inputNombre").value;
  let precio = document.getElementById("inputPrecioVenta").value;
  let unidades = document.getElementById("inputUnidades").value;

  imagen = URL.createObjectURL(imagen);
  // Crear un nuevo objeto de producto con los valores ingresados
  let nuevoProducto = {
    id: products.length + 1,
    codigo: codigo,
    imagen: imagen,
    titulo: titulo,
    precio: precio,
    unidades: unidades,
  };

  // Agregar el nuevo producto al array de productos
  products.push(nuevoProducto);

  // Limpiar los valores del formulario
  formulario.reset();

  // Volver a renderizar la tabla de products con el nuevo producto incluido
  renderproducts();
  alert(`Producto agregado exitosamente: ${nuevoProducto.titulo}`);
  guardarProductosEnLocalStorage();
});

// Obtener el botón "Agregar producto"
let botonAgregar = document.getElementById("botonAgregarProducto");

// Obtener el formulario
formulario = document.getElementById("formulario");

// Agregar un event listener al botón "Agregar producto"
botonAgregar.addEventListener("click", function () {
  formulario.style.display = "block"; // Mostrar el formulario
  botonAgregar.style.display = "none";
});

// Agregar un event listener al formulario para ocultarlo cuando se envía
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  formulario.style.display = "none"; // Ocultar el formulario después de enviarlo
});

// Llamar a la función para renderizar los productos
renderproducts();

// Guardar los productos en el localStorage
function guardarProductosEnLocalStorage() {
  let productsJSON = JSON.stringify(products);
  localStorage.setItem("products", productsJSON);
}
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

// Llamar a la función para renderizar los usuarios
renderUsers();

// Función para renderizar los usuarios en la tabla
function renderUsers() {
  let usersTable = document.getElementById("usersTable");
  usersTable.innerHTML = "";

  users.forEach(function (user) {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td><img src="${
        user.avatar || "default-avatar.png"
      }" alt="Avatar" class="avatar"></td>
      <td>
        <button type="button" class="btn btn-warning editar mt-3" data-email="${
          user.email
        }">Editar</button>
        <button type="button" class="btn btn-danger eliminar mt-3" data-email="${
          user.email
        }">Eliminar</button>
      </td>
    `;

    usersTable.appendChild(row);
  });

  // Agregar event listeners a los botones de editar y eliminar
  let editButtons = document.querySelectorAll(".editar");
  editButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let email = event.target.dataset.email;
      let username = prompt("Ingrese el nuevo nombre de usuario:");
      let password = prompt("Ingrese la nueva contraseña:");

      updateUser(email, username, password);
    });
  });

  let deleteButtons = document.querySelectorAll(".eliminar");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let email = event.target.dataset.email;
      if (email != "admin@admin.com") {
        deleteUser(email);
      } else {
        alert(`Imposible! Nadie puede eliminar al admin!`);
        location.reload();
      }
    });
  });
}

// Función para obtener un usuario por su email
function getUserByEmail(email) {
  return users.find(function (user) {
    return user.email === email;
  });
}

// Función para actualizar los datos de un usuario
function updateUser(email, username, password) {
  let user = getUserByEmail(email);
  if (user) {
    user.username = username;
    user.password = password;
    renderUsers();
    alert(`Usuario actualizado: ${user.username}`);
    saveUsersToLocalStorage();
  }
}

// Función para eliminar un usuario
function deleteUser(email) {
  let index = users.findIndex(function (user) {
    return user.email === email;
  });

  if (index !== -1) {
    let user = users[index];
    users.splice(index, 1);
    renderUsers();
    alert(`Usuario eliminado: ${user.username}`);
    saveUsersToLocalStorage();
  }
}

// Obtener el formulario y agregar un event listener para el evento "submit"
let userForm = document.getElementById("userForm");
userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("inputUsername").value;
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  let avatar = document.getElementById("inputAvatar").files[0];
  let avatarURL = "";

  if (avatar) {
    // Cargar la imagen al servidor o almacenarla de alguna manera y obtener su URL
    // Aquí puedes implementar la lógica para cargar la imagen al servidor
    avatarURL = "../assets/photos/" + avatar.name;
  }

  let newUser = {
    username: username,
    email: email,
    password: password,
    avatar: avatarURL,
  };

  users.push(newUser);

  userForm.reset();

  renderUsers();
  alert(`Usuario agregado exitosamente: ${newUser.username}`);
  saveUsersToLocalStorage();
});

// Función para guardar los usuarios en el localStorage
function saveUsersToLocalStorage() {
  let usersJSON = JSON.stringify(users);
  localStorage.setItem("users", usersJSON);
}

// Obtener el botón "Agregar usuario"
let addUserButton = document.getElementById("addUserButton");

// Obtener el formulario de usuario
userForm = document.getElementById("userForm");

// Agregar un event listener al botón "Agregar usuario"
addUserButton.addEventListener("click", function () {
  userForm.style.display = "block";
  addUserButton.style.display = "none";
});

// Agregar un event listener al formulario de usuario para ocultarlo cuando se envía
userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  userForm.style.display = "none";
});

// Llamar a la función para renderizar los usuarios
renderUsers();
