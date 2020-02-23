function mostrar()
{
    /**
     * al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
     */
    //Declaracion de variables.
    var numero ;
    var cantidadNumerosPares = 0;
    var mensajeCantidadNumerosPares = "Cantidad Numeros Pares: ";
    var mensajeNumerosPares = "";

    //Ingreso de numero
    numero = prompt("Ingrese un numero: ");
    //Valido que el usuario no ingresa una palabra o numero negativo
    while(validarNumeroIngresado(numero)){
        numero = prompt("Ingrese un numero: ");
    }

    //Parseo a int
    numero = parseInt(numero);
    for(var i = 1; i<numero+1; i++){
        //Analizo si es par
        if(i % 2 === 0){
            cantidadNumerosPares++;
            mensajeNumerosPares = mensajeNumerosPares.concat(i,"<br>");
        }
    }
    //Muesto por pantalla. 
    mensajeCantidadNumerosPares = mensajeCantidadNumerosPares.concat(cantidadNumerosPares, "<br>")
    document.write(mensajeCantidadNumerosPares + mensajeNumerosPares);
}

function validarNumeroIngresado(numero){
    //Valido que el usuario no ingresa una palabra o numero negativo
    return (isNaN(numero) || parseInt(numero) < 0);
}