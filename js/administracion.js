// Array para almacenar los productos
var productos = [
  {
    id: 1,
    codigo: '001',
    imagen: '/assets/photos/tv1-removebg-preview.png',
    nombre: 'Smart TV 4K UHD Samsung 65"',
    precioVenta: '$259.999',
    unidades: 13
  },
  {
    id: 2,
    codigo: '002',
    imagen: '/assets/photos/aire1-removebg-preview.png',
    nombre: 'Aire Acondicionado Samsung Split Inverter Frío/calor',
    precioVenta: '$400.679',
    unidades: 8
  },
  {
    id: 3,
    codigo: '003',
    imagen: '/assets/photos/celu1-removebg-preview.png',
    nombre: 'Smartphone Moto E7i Power 32 GB azul 2 GB RAM',
    precioVenta: '$65.999',
    unidades: 22
  }
];

// Función para renderizar los productos en la tabla
function renderProductos() {
  var tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  productos.forEach(function(producto) {
    var row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${producto.id}</th>
      <td>${producto.codigo}</td>
      <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
      <td>${producto.nombre}</td>
      <td class="precioVenta">${producto.precioVenta}</td>
      <td class="unidades">${producto.unidades}</td>
      <td>
        <button type="button" class="btn btn-warning editar" data-id="${producto.id}">Editar</button>
        <button type="button" class="btn btn-danger eliminar" data-id="${producto.id}">Eliminar</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Agregar event listeners a los botones de editar y eliminar
  var editButtons = document.querySelectorAll('.editar');
  editButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var id = parseInt(event.target.dataset.id, 10);
      var precioVenta = prompt('Ingrese el nuevo precio de venta:');
      var unidades = prompt('Ingrese las nuevas unidades:');

      actualizarProducto(id, precioVenta, unidades);
    });
  });

  var deleteButtons = document.querySelectorAll('.eliminar');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var id = parseInt(event.target.dataset.id, 10);
      eliminarProducto(id);
    });
  });
}

// Función para obtener un producto por su ID
function getProductoById(id) {
  return productos.find(function(producto) {
    return producto.id === id;
  });
}

// Función para actualizar los datos de un producto
function actualizarProducto(id, precioVenta, unidades) {
  var producto = getProductoById(id);
  if (producto) {
    producto.precioVenta = precioVenta;
    producto.unidades = unidades;
    renderProductos();
    console.log(`Producto actualizado: ${producto.nombre}`);
  }
}

// Función para eliminar un producto
function eliminarProducto(id) {
  var index = productos.findIndex(function(producto) {
    return producto.id === id;
  });

  if (index !== -1) {
    var producto = productos[index];
    productos.splice(index, 1);
    renderProductos();
    console.log(`Producto eliminado: ${producto.nombre}`);
  }
}

// Llamar a la función para renderizar los productos
renderProductos();

// ...

// Obtener el formulario y agregar un event listener para el evento "submit"
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores ingresados en el formulario
  var codigo = document.getElementById('inputCodigo').value;
  var imagen = document.getElementById('inputImagen').value;
  var nombre = document.getElementById('inputNombre').value;
  var precioVenta = document.getElementById('inputPrecioVenta').value;
  var unidades = document.getElementById('inputUnidades').value;

  // Crear un nuevo objeto de producto con los valores ingresados
  var nuevoProducto = {
    id: productos.length + 1,
    codigo: codigo,
    imagen: imagen,
    nombre: nombre,
    precioVenta: precioVenta,
    unidades: unidades
  };

  // Agregar el nuevo producto al array de productos
  productos.push(nuevoProducto);

  // Limpiar los valores del formulario
  formulario.reset();

  // Volver a renderizar la tabla de productos con el nuevo producto incluido
  renderProductos();

  console.log('Producto agregado:', nuevoProducto);
});

// ...


// Obtener el botón "Agregar producto"
var botonAgregar = document.querySelector('button[data-target="#formulario"]');

// Obtener el formulario
var formulario = document.getElementById('formulario');

// Agregar un event listener al botón "Agregar producto"
botonAgregar.addEventListener('click', function() {
  formulario.style.display = 'block'; // Mostrar el formulario
});

// Agregar un event listener al formulario para ocultarlo cuando se envía
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  formulario.style.display = 'none'; // Ocultar el formulario después de enviarlo
});

