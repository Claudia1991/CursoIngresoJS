function mostrar() {
    /**
     * al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
     */
    //Variables
    var mensajeAMostrar = "Hola UTN FRA <br>";
    var cantidadRepeticiones = prompt("ingrese el número de repeticiones");

    while(validarCantidadRepeticionesIngresado(cantidadRepeticiones)){
        cantidadRepeticiones = prompt("ingrese el número de repeticiones");
    }

    cantidadRepeticiones = parseInt(cantidadRepeticiones);

    for(var i = 0; i< cantidadRepeticiones; i++){
        document.write(mensajeAMostrar);
    }

}

function validarCantidadRepeticionesIngresado(cantidadRepeticiones){
    //Valido que el usuario no ingresa una palabra o numero negativo
    return (isNaN(cantidadRepeticiones) || parseInt(cantidadRepeticiones) < 0);
}