function mostrar()
{
    /**
     * al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
     */
    //Declaracion de variables.
    var numero ;
    var cantidadNumerosDivisores = 0;
    var mensajeCantidadNumerosDivisores = "Cantidad Numeros Divisores: ";
    var tituloMensajeNumerosDivisores = "Numero Divisores: <br>";
    var mensajeNumerosDivisores = "";

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
        if(numero % i === 0){
            cantidadNumerosDivisores++;
            mensajeNumerosDivisores = mensajeNumerosDivisores.concat(i,"<br>");
        }
    }
    //Muesto por pantalla. 
    mensajeCantidadNumerosDivisores = mensajeCantidadNumerosDivisores.concat(cantidadNumerosDivisores, "<br>")
    document.write(mensajeCantidadNumerosDivisores + tituloMensajeNumerosDivisores + mensajeNumerosDivisores);
}

function validarNumeroIngresado(numero){
    //Valido que el usuario no ingresa una palabra o numero negativo
    return (isNaN(numero) || parseInt(numero) < 0);
}