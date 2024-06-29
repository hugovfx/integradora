document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("categoria");
    var estado = document.getElementById("estado");
    var op = this.documentElement("op");

    estado.style.display = "none";  // Ocultar el menú de estado inicialmente

    menu.addEventListener("change", function () {
        if (menu.value == "2") {
            estado.style.display = "block";  // Mostrar el menú de estado si la categoría es Electrónica
            op.style.display = "block";
        } else {
            estado.style.display = "none";  // Ocultar el menú de estado en otras categorías
        }
    });
});