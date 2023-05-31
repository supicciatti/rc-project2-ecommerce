// Obtenengo los productos del localStorage
let productsJSON = localStorage.getItem("products");

// Convertir la cadena JSON a un objeto JavaScript
let products = JSON.parse(productsJSON);

let cardContainer = document.getElementById("cardContainer");

for (let i = 0; i < 3; i++) {
  let product = products[i];

  let card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-12", "mb-4");
  card.innerHTML = `
    <div class="card-body ">
      <div class="text-center">
        <img class="img-fluid imgPrueba" src="${product.imagen}">
        <br><br>
        <h5 class="card-title d-flex align-items-center justify-content-center">${product.titulo}</h5>
      </div>
      <h3 class="precio d-flex align-items-center justify-content-center">$${product.precio}</h3>
      <h5 class="online" style="color:white; text-align: center">${product.promocion}</h5>
      <div class="d-grid my-3">
        <button class="btn btn-outline-red btn-block"><img src="assets/photos/carro.png" style="width:3rem">Comprar</button>
      </div>
    </div>`;

  cardContainer.appendChild(card);
}

let bestCardContainer = document.getElementById("bestCardContainer");

for (let i = 3; i < 9; i++) {
  let product = products[i];

  let card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "mb-4");
  card.classList.add("card1", "py-6", "px-lg-8");
  card.style.height = "600px";
  card.innerHTML = `
            <div class="card-body d-flex flex-column h-100">
              <div class="text-center">
                <img src="${product.imagen}" class="img-fluid mb-6 my-auto imgPrueba" alt="Websearch">
              </div>
              <div class="card-title mb-4 text-center fs-2">${product.titulo}</div>
              <div class="text-center mb-4">
                <h5 class="text-vendido">${product.promocion}</h5>
                <h3 class="precio-vendido">$${product.precio}</h3>
              </div>
              <div class="text-center">
                <button type="button" class="btn btncolor mb-3">
                  <img src="assets/photos/carro.png" style="width:2rem">Comprar
                </button>
              </div>
            </div>`;

  bestCardContainer.appendChild(card);
}
