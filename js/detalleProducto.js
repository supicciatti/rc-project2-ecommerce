// Obtenengo los productos del localStorage
let productsJSON = localStorage.getItem("products");

// Convertir la cadena JSON a un objeto JavaScript
let products = JSON.parse(productsJSON);

let tituloProducto, precioProducto, unidadesProducto;

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  if (product.codigo === 9199) {
    tituloProducto = product.titulo;
    precioProducto = product.precio;
    unidadesProducto = product.unidades;

    break;
  }
}

// Actualiza los datos del producto en el HTML
let contenedorProducto = document.getElementById("producto");
contenedorProducto.querySelector("h2").textContent = tituloProducto;
let contenedorPrecio = document.getElementById("precioProducto");
contenedorPrecio.textContent = `$${precioProducto}`;

let contenedorUnidades = document.getElementById("unidadesProducto");

contenedorUnidades.textContent = `(${unidadesProducto} disponibles)`;

function showFullDescription() {
  var cajaTexto = document.getElementById("textBox");
  cajaTexto.classList.toggle("fullTextBox");
  var verMas = document.getElementById("showMore");
  if (cajaTexto.classList.contains("fullTextBox")) {
    verMas.innerHTML = "Ver menos";
  } else {
    verMas.innerHTML = "Ver descripción completa";
  }
}
