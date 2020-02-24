function mostrar() {
    /**
     *  Pedir dos números y mostrar el resultado:
        Si son iguales los muestro concatenados.
        Si el primero es mayor, los resto,
        de lo contrario los sumo.
        Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
        "la suma es xxx y supero el 10".
     */
    //Declaracion de variables.
    var numeroUno;
    var numeroDos;
    //Ingreso de datos.
    numeroUno = prompt("Ingrese el primer numero: ");
    //Valido ingreso de datos.
    while (isNaN(numeroUno)) {
        numeroUno = prompt("Ingrese el primer numero: ");
    }
    //Ingreso de datos.
    numeroDos = prompt("Ingrese el segundo numero: ");
    //Valido ingreso de datos.
    while (isNaN(numeroDos)) {
        numeroDos = prompt("Ingrese el segundo numero: ");
    }
    //Parseo los numeros.
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    //Analisis de numeros
    imprimirMensajeSegunNumero(numeroUno, numeroDos);
}

function imprimirMensajeSegunNumero(numeroUno, numeroDos) {
    //Si son iguales los muestro concatenados.
    if (numeroDos === numeroUno) {
        alert("Son iguales." + numeroUno + "" + numeroDos);
    }else if (numeroUno > numeroDos) {
        //Si el primero es mayor, los resto, de lo contrario los sumo.
        alert("El primer numero es mayor: " + (numeroUno - numeroDos));
    } else {
        //Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
        //"la suma es xxx y supero el 10".
        if ((numeroUno + numeroDos) > 10) {
            alert("El segundo numero es mayor. La suma es " + (numeroUno + numeroDos) + " y supero el 10 .");
        } else {
            alert("El segundo numero es mayor: " + (numeroUno + numeroDos));
        }
    }
}