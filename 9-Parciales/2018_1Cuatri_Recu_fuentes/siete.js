/**
 * Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */
function mostrar() {
    //Declaracion de variables
    var notaIngresada;
    var sexoIngresado;
    var acumuladorNotasTotales = 0;
    var notaMasBaja;
    var sexoNotaMasBaja;
    var cantidadVaronesNotaMayorIgualSeis = 0;
    var resultadoAMostrarPorAlert = "";

    //Ingreso de datos
    for (var i = 0; i < 5; i++) {
        notaIngresada = prompt("Ingrese la nota(del 0 al 10): ");
        while (!EsNotaValida(notaIngresada)) {
            notaIngresada = prompt("ERROR: Ingrese la nota(del 0 al 10): ");
        }
        sexoIngresado = prompt("Ingrese el sexo(f o m): ");
        while (!EsSexoValido(sexoIngresado)) {
            sexoIngresado = prompt("ERROR: Ingrese el sexo(f o m): ");
        }
        //Parseo de datos
        notaIngresada = parseInt(notaIngresada);
        //Analisis de datos
        acumuladorNotasTotales += notaIngresada;
        if (i === 0 || notaIngresada < notaMasBaja) {
            notaMasBaja = notaIngresada;
            sexoNotaMasBaja = sexoIngresado
        }
        if (sexoIngresado === "m" && notaIngresada >= 6) {
            cantidadVaronesNotaMayorIgualSeis++;
        }
    }
    //Armado de respuesta general
    resultadoAMostrarPorAlert += "El promedio de las notas totales: " + (acumuladorNotasTotales / 5) + "\n";
    resultadoAMostrarPorAlert += "La nota más baja: " + notaMasBaja + " ;el sexo de esa persona: " + sexoNotaMasBaja + "\n";
    resultadoAMostrarPorAlert += "La cantidad de varones que su nota haya sido mayor o igual a 6: " + cantidadVaronesNotaMayorIgualSeis + "\n";

    alert(resultadoAMostrarPorAlert);
}

function EsNotaValida(nota) {
    return !isNaN(nota) && (parseInt(nota) >= 0 && parseInt(nota) <= 10);
}

function EsSexoValido(sexo) {
    // No hago toLowerCase ni toUppperCase, ya que f/m tiene que ser minuscula
    return isNaN(sexo) && (sexo === "f" || sexo === "m");
}