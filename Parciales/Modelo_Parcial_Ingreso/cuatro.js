/**
 * Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra (validar que sea una letra sin caracteres especiales ni ñ. 
No distinguir mayúsculas de minúsculas. Ayuda: Utilizar tabla ASCII.), 
y un número entre -10 y 10 (validar que sea un número en ese rango) 
hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La resta de los números impares.
b) La suma de los números pares.
c) La cantidad de ceros.
d) El promedio de todos los números negativos ingresados.
e) La multiplicación de todos los números positivos.
f) El número y la letra del máximo.
g) El número y la letra del mínimo.
h) La cantidad de vocales.

!!! Cero no es par, ni impar, ni positivo, ni negativo.!!!
 */
function mostrar() {
    //Declaracion de variables
    var numeroIngresado;
    var letraIngresada;
    var restaNumerosImpares = 0;
    var sumaNumerosPares = 0;
    var cantidadDeCeros = 0;
    var cantidadNumerosNegativos = 0;
    var sumaNumerosNegativos = 0;
    var multiplicacionNumerosPositivos = 1;
    var cantidadVocales = 0;
    var numeroMaximo;
    var letraMaximo;
    var numeroMinimo;
    var letraMinimo;
    var isFirstCharge = true;
    var respuestaAMostrarPorPantalla = "";
    const saltoLineaDocumentWrite = "<br>";
    var respuestaUsuario;

    //Ingreso de datos
    do {
        numeroIngresado = prompt("Ingrese un numero entre -10 y 10:");
        while (!IsValidNumber(numeroIngresado)) {
            numeroIngresado = prompt("ERROR: Ingrese un numero entre -10 y 10:");
        }
        letraIngresada = prompt("Ingrese una letra");
        while (!IsValidChar(letraIngresada)) {
            letraIngresada = prompt("ERROR: Ingrese una letra");
        }
        //Parseo de datos
        numeroIngresado = parseInt(numeroIngresado);
        //Analisis de datos
        if (numeroIngresado === 0) {
            //La cantidad de ceros.
            cantidadDeCeros++;
        } else if (numeroIngresado % 2 == 0) {
            //La suma de los números pares.
            sumaNumerosPares += numeroIngresado;
        } else {
            //numeroIngresado % 2 !=0
            //La resta de los números impares.
            restaNumerosImpares -= numeroIngresado;
        }

        if (numeroIngresado < 0) {
            //El promedio de todos los números negativos ingresados.
            cantidadNumerosNegativos++;
            sumaNumerosNegativos += numeroIngresado;
        } 
        if(numeroIngresado > 0) {
            //La multiplicación de todos los números positivos.
            multiplicacionNumerosPositivos *= numeroIngresado;
        }

        if (IsVowel(letraIngresada)) {
            //La cantidad de vocales.
            cantidadVocales++;
        }

        //El número y la letra del máximo - El número y la letra del mínimo.
        if (isFirstCharge) {
            isFirstCharge = false;
            letraMinimo = letraIngresada;
            numeroMinimo = numeroIngresado;
            letraMaximo = letraIngresada;
            numeroMaximo = numeroIngresado;
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
        respuestaUsuario = confirm("Desea seguir ingresando datos?");
    } while (respuestaUsuario == true);
    //Mostrar por pantalla el resultado
    respuestaAMostrarPorPantalla += "La resta de los números impares: " + restaNumerosImpares + saltoLineaDocumentWrite;
    respuestaAMostrarPorPantalla += "La suma de los números pares: " + sumaNumerosPares + saltoLineaDocumentWrite;
    respuestaAMostrarPorPantalla += "La cantidad de ceros: " + cantidadDeCeros + saltoLineaDocumentWrite;
    //El promedio de todos los números negativos ingresados
    if (cantidadNumerosNegativos === 0) {
        respuestaAMostrarPorPantalla += "No se puede calculat el promedio de los números negativos ingresados, no se ingresaron numeros negativos. " + restaNumerosImpares + saltoLineaDocumentWrite;
    } else {
        respuestaAMostrarPorPantalla += "El promedio de todos los números negativos ingresados: " + (sumaNumerosNegativos / cantidadNumerosNegativos).toFixed(2) + saltoLineaDocumentWrite;
    }
    respuestaAMostrarPorPantalla += "La multiplicación de todos los números positivos: " + multiplicacionNumerosPositivos + saltoLineaDocumentWrite;
    respuestaAMostrarPorPantalla += " El número y la letra del máximo: " + numeroMaximo + " - " + letraMaximo + saltoLineaDocumentWrite;
    respuestaAMostrarPorPantalla += "El número y la letra del mínimo: " + numeroMinimo + " - " + letraMinimo + saltoLineaDocumentWrite;
    respuestaAMostrarPorPantalla += "La cantidad de vocales: " + cantidadVocales + saltoLineaDocumentWrite;
    document.write(respuestaAMostrarPorPantalla);
}

function IsValidChar(char) {
    return /^[a-zA-Z]+$/.test(char);
}

function IsVowel(char) {
    return /^[aeyiuo]+$/.test(char);
}

function IsConsonat(char) {
    return /^[^aeyiuo]+$/.test(char);
}

function IsValidNumber(number) {
    return !isNaN(number) && parseInt(number) >= -10 && parseInt(number) <= 10;
}

/**
 * ^[aeyiuo]+$ for only vowels

^[^aeyiuo]+$ for only consonants.
 */