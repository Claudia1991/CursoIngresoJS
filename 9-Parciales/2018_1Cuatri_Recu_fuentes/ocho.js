/**
 * Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

 */
function mostrar() {
    //Variables
    var numeroIngresado;
    var letraIngresada;
    var resultado = "";
    var cantiNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;
    var acumuladorNumerosPositivos = 0;
    var cantidadNumerosPositivos = 0;
    var acumuladorNumerosNegativos = 0;
    var numeroMinimo;
    var letraMinimo;
    var numeroMaximo;
    var letraMaximo;
    var esPrimerIngreso = true;

    //Ingreso de datos
    do {
        letraIngresada = prompt("Ingrese una letra entra la A - Z(minuscula/mayuscula):");
        while (!EsLetraValida(letraIngresada)) {
            letraIngresada = prompt("ERROR: Ingrese una letra entra la A - Z(minuscula/mayuscula):");
        }
        numeroIngresado = prompt("Ingrese un numero entre -100 y 100:");
        while (!EsNumeroValido(numeroIngresado)) {
            numeroIngresado = prompt("ERROR: Ingrese un numero entre -100 y 100:");
        }
        //Parseo de datos
        numeroIngresado = parseInt(numeroIngresado);
        //Analisis de datos
        if (numeroIngresado == 0) {
            //No tomo al cero positivo ni negativo ni par ni impar
            cantidadCeros++;
        } else {
            if (numeroIngresado % 2 == 0) {
                cantiNumerosPares++;
            } else {
                cantidadNumerosImpares++;
            }
            if (numeroIngresado < 0) {
                acumuladorNumerosNegativos += numeroIngresado;
            } else {
                acumuladorNumerosPositivos += numeroIngresado;
                cantidadNumerosPositivos++;
            }
        }
        if (esPrimerIngreso) {
            letraMinimo = letraIngresada;
            numeroMinimo = numeroIngresado;
            letraMaximo = letraIngresada;
            numeroMaximo = numeroIngresado;
            esPrimerIngreso = false;
        } else {
            if (numeroMinimo > numeroIngresado) {
                letraMinimo = letraIngresada;
                numeroMinimo = numeroIngresado;
            }
            if (numeroMaximo < numeroIngresado) {
                letraMaximo = letraIngresada;
                numeroMaximo = numeroIngresado;
            }
        }
        //Re ingreso de datos
    } while (confirm("¿Desea seguir ingresando datos?"));
    //Armado de respuesta
    resultado += "La cantidad de números pares:" + cantiNumerosPares + "<br>";
    resultado += "La cantidad de números impares:" + cantidadNumerosImpares + "<br>";
    resultado += "La cantidad de ceros:" + cantidadCeros + "<br>";
    resultado += cantidadNumerosPositivos == 0 ? "No se puede calcular el promedio de los numeros positivos ingresados. <br>" : "El promedio de todos los números positivos ingresados:" + (acumuladorNumerosPositivos / cantidadNumerosPositivos).toFixed(2) + "<br>";
    resultado += "La suma de todos los números negativos:" + acumuladorNumerosNegativos + "<br>";
    resultado += "El número minimo: " + numeroMinimo + "; letra minima: " + letraMinimo + "; numero maximo: " + numeroMaximo + "; letra maximo:" + letraMaximo;

    document.write(resultado);
}

function EsNumeroValido(numero) {
    return !isNaN(numero) && (parseInt(numero) >= -100 && parseInt(numero) <= 100);
}

function EsLetraValida(letra) {
    return isNaN(letra) && /^[a-zA-Z]+$/.test(letra);
}