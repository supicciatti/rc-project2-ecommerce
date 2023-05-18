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
