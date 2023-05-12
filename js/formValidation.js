document.addEventListener("DOMContentLoaded", function () {
  /*Se declara variable que corresponde a la clase .needs-validation*/
  const forms = document.querySelectorAll(".needs-validation");

  /*Se crea un arreglo que lista los "forms" existentes*/
  /*Con el forEach se recorre cada elemento de dicho arreglo*/
  /*Para la función, cada elemento del arreglo se llamará "form"*/

  Array.from(forms).forEach((form) => {
    /* addEventListener es un método que se utiliza para agregar un evento a un elemento HTML. El método acepta dos argumentos: el primer argumento es el nombre del evento que se va a agregar (en este caso, es "submit"), y el segundo argumento es la función que se ejecutará cuando se produzca ese evento.*/
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          /*form.checkValidity es una función que devuelve un valor booleano que indica si un formulario es válido o no según sus restricciones de validación. Con el ! delante, podemos leerlo como "Si el formulario NO es válido...."*/
          event.preventDefault();
          /*event.preventDefault() es un método que se utiliza en JavaScript para detener la acción predeterminada de un evento. Por ejemplo, si se utiliza en el evento de envío de un formulario, se detendrá el envío del formulario y se evitará que la página se recargue*/
          event.stopPropagation();
        }
        /*event.stopPropagation() es un método que detiene la propagación de un evento más allá del elemento actual en el que se ha producido. Cuando un evento ocurre en un elemento HTML, se propaga hacia arriba en la jerarquía del DOM, afectando a los elementos secundarios. Al usar event.stopPropagation(), se detiene la propagación del evento y evita que afecte a elementos secundarios.*/

        form.classList.add("was-validated");
        /*agrega una clase was-validated al elemento form cuando se envía el formulario y se pasa la validación de Bootstrap. La clase was-validated es una clase de estilo predefinida de Bootstrap que agrega un estilo especial a los campos de formulario para indicar que han sido validados. Por lo tanto, después de agregar la clase was-validated al elemento form, los campos de formulario validados se resaltarán en verde, mientras que los campos no válidos se resaltarán en rojo.*/
      },
      false
    );
  });
});
