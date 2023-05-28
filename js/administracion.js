let products = [
  {
    imagen: "../assets/photos/tv1.png",
    titulo: "Televisor Samsung",
    precio: 50000,
    promocion: "20% OFF exclusivo para venta online",
    unidades: 124,
    id: 1,
  },
  {
    imagen: "../assets/photos/aire1.png",
    titulo: "Aire acondicionado",
    precio: 180000,
    promocion: "10% OFF exclusivo para venta online",
    unidades: 285,
    id: 2,
  },
  {
    imagen: "../assets/photos/celu1.png",
    titulo: "Samsung Galaxy S23 PLUS",
    precio: 259000,
    promocion: "Envío gratis exclusivo desde la app",
    unidades: 74,
    id: 3,
  },
  {
    imagen: "../assets/photos/lavarropa3.png",
    titulo: "Lavadora LG",
    precio: 85000,
    promocion: "15% OFF en todas las capacidades",
    unidades: 142,
    id: 4,
  },
  {
    imagen: "../assets/photos/tv3.png",
    titulo: "Heladera Whirlpool",
    precio: 120000,
    promocion: "Envío gratis en CABA",
    unidades: 98,
    id: 5,
  },
  {
    imagen: "../assets/photos/notebook2.png",
    titulo: "Microondas Panasonic",
    precio: 35000,
    promocion: "30% OFF en modelos seleccionados",
    unidades: 210,
    id: 6,
  },
  {
    imagen: "../assets/photos/motorola4.png",
    titulo: "Aspiradora Electrolux",
    precio: 55000,
    promocion: "Envío gratis a todo el país",
    unidades: 67,
    id: 7,
  },
  {
    imagen: "../assets/photos/notebook3.png",
    titulo: "Licuadora Oster",
    precio: 25000,
    promocion: "10% OFF en todos los modelos",
    unidades: 183,
    id: 8,
  },
  {
    imagen: "../assets/photos/video.png",
    titulo: "Cafetera Nespresso",
    precio: 8000,
    promocion: "Capsulas de regalo en la compra",
    unidades: 123,
    id: 9,
  },
  {
    imagen: "../assets/photos/apple5.png",
    titulo: "Plancha Philips",
    precio: 4500,
    promocion: "20% OFF en todos los modelos",
    unidades: 95,
    id: 10,
  },
  {
    imagen: "../assets/photos/motorola3.png",
    titulo: "Ventilador de pie",
    precio: 3000,
    promocion: "Envío gratis a partir de 2 unidades",
    unidades: 180,
    id: 11,
  },
  {
    imagen: "../assets/photos/apple1.png",
    titulo: "Licuadora Moulinex",
    precio: 28000,
    promocion: "Descuento exclusivo con tarjeta de crédito",
    unidades: 75,
    id: 12,
  },
];

let tbody = document.getElementById("tbody");

for (let i = 0; i < 9; i++) {
  let product = products[i];

  let trow = document.createElement("tr");
  trow.innerHTML = `<td>${product.id}</td>
    <td><img src="${product.imagen}"alt="Imagen del producto"></td>
    <td>${product.titulo}</td>
    <td>${product.precio}</td>
    <td>${product.unidades}</td>
    <td>
      <button class="btn btn-primary">Agregar</button>
      <button class="btn btn-secondary data-producto-index="${product.id}" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>
      <button class="btn btn-danger">Eliminar</button>
    </td>`;

  tbody.appendChild(trow);
}

/* // Obtiene el arreglo de productos en formato JSON
let productsJSON = JSON.stringify(products);

// Guardar los productos en el localStorage
localStorage.setItem("products", productsJSON);
 */
