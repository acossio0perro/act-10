// Capturamos los elementos del HTML
let inputTemp = document.getElementById("inputTemp");
let selectTipo = document.getElementById("selectTipo");
let btnConvertir = document.getElementById("btnConvertir");
let pResultado = document.getElementById("resultado");

// Creamos el evento para el botón
btnConvertir.addEventListener("click", function() {
    let valor = inputTemp.value;

    // Validación si está vacío
    if (valor === "") {
        alert("Escribe un número por favor");
        return;
    }

    let temperatura = parseFloat(valor);
    let tipo = selectTipo.value;
    let resultado = 0;

    // Hacemos las operaciones según la opción elegida
    if (tipo === "cf") {
        resultado = (temperatura * 9 / 5) + 32;
        pResultado.textContent = temperatura + " °C equivalen a " + resultado.toFixed(2) + " °F";
    } else {
        resultado = (temperatura - 32) * 5 / 9;
        pResultado.textContent = temperatura + " °F equivalen a " + resultado.toFixed(2) + " °C";
    }
});
