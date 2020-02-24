function mostrar() {
    /**
     * Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
     * hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
     */
    //Mensajes
    var mensajeCantidadNumerosPares = "La cantidad de números pares: ";
    var mensajeCantidadNumerosImpares = "La cantidad de números impares: ";
    var mensajeCantidadNumerosCeros = "La cantidad de números ceros: ";
    var mensajePromedioNumerosPositivos = "El promedio de números positivos: ";
    var mensajeSumaNumerosNegativos = "La suma de los numeros negativos: ";
    var mensajeNumeroLetraMinimo = "El numero y letra minimo es: ";
    var mensajeNumeroLetraMaximo = "El numero y letra maximo es: ";
    //Declaracion de variables
    var contadorIngresos = 0;
    var numeroIngresado;
    var letraIngresada;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadDeCeros = 0;
    var sumaNumerosPositivos;
    var cantidadNumerosPositivos;
    var sumaNumerosNegativos;
    var numeroMinimo;
    var letraMinimo;
    var letraMaximo;
    var numeroMaximo;
    var respuesta = "si";
    while (!isValidAnwser(respuesta) && respuesta != "no") {
        //Ingreso de datos
        numeroIngresado = prompt("Ingrese un numero entre -100 y 100: ");
        while (!isValidNumber(numeroIngresado)) {
            numeroIngresado = prompt("Ingrese un numero entre -100 y 100: ");
        }
        letraIngresada = prompt("Ingrese una letra: ");

        //Parseo de numero
        numeroIngresado = parseInt(numeroIngresado);

        //Logica minimo - maximo
        if (contadorIngresos === 0) {
            //Es el primer ingreso de datos
            numeroMinimo = numeroIngresado;
            letraMinimo = letraIngresada;
            contadorIngresos++;
        } else {
            //No es el primer ingreso de datos, se actualizan minimo - maximo segun corrresponda.
            if (numeroMinimo > numeroIngresado) {
                numeroMinimo = numeroIngresado;
                letraMinimo = letraIngresada;
            }
            if (numeroMaximo < numeroIngresado) {
                numeroMaximo = numeroIngresado;
                letraMaximo = letraIngresada;
            }
        }

        //Logico numeros positivos, negativos, ceros
        if (numeroIngresado > 0) {
            sumaNumerosPositivos += numeroIngresado;
            cantidadNumerosPositivos++;
        } else if (numeroIngresado < 0) {
            sumaNumerosNegativos += numeroIngresado;
        } else {
            cantidadDeCeros++;
        }

        //Logica numeros pares, impares
        if (numeroIngresado % 2 === 0) {
            cantidadNumerosPares++;
        } else {
            cantidadNumerosImpares++;
        }
        //Pregunto al usuario si quiere seguir ingresando datos.
        respuesta = prompt("Quiere seguir ingresando? (para terminar ingreso 'no'): ");
    }

    //Imprimo los datos por pantalla.
    mensajeCantidadNumerosPares = mensajeCantidadNumerosPares.concat(cantidadNumerosPares, "<br>");
    mensajeCantidadNumerosImpares = mensajeCantidadNumerosImpares.concat(cantidadNumerosImpares, "<br>");
    mensajeCantidadNumerosCeros = mensajeCantidadNumerosCeros.concat(cantidadDeCeros, "<br>");
    mensajePromedioNumerosPositivos = mensajePromedioNumerosPositivos.concat((sumaNumerosPositivos / cantidadNumerosPositivos), "<br>");
    mensajeSumaNumerosNegativos = mensajeSumaNumerosNegativos.concat(sumaNumerosNegativos, "<br>");
    mensajeNumeroLetraMinimo = mensajeNumeroLetraMinimo.concat(numeroMinimo, " ", letraMinimo, " ", "<br>");
    mensajeNumeroLetraMaximo = mensajeNumeroLetraMaximo.concat(numeroMaximo, " ", letraMaximo, " ", "<br>");

    document.write(mensajeCantidadNumerosPares + mensajeCantidadNumerosImpares + mensajeCantidadNumerosCeros + mensajePromedioNumerosPositivos + mensajeSumaNumerosNegativos + mensajeNumeroLetraMinimo + mensajeNumeroLetraMaximo);
}

function isValidNumber(number) {
    //Valido que el numero este entre -100 y 100
    return (!isNaN(number) && ((parseInt(number) >= -100) && (parseInt(number) <= 100)));
}

function isValidAnwser(anwser) {
    //valido que la respuesta sea no,n, N, NO
    return (isNaN(anwser) && (anwser.toLowerCase() === "no" || anwser.toLowerCase() === "n"));
}