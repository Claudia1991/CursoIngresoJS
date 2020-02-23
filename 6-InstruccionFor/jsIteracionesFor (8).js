function mostrar()
{
    /**
     * al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
     */
    //Declaracion de variables.
    var numero ;
    var contadorDivisores = 0;

    //Ingreso de numero
    numero = prompt("Ingrese un numero: ");
    //Valido que el usuario no ingresa una palabra o numero negativo
    while(validarNumeroIngresado(numero)){
        numero = prompt("Ingrese un numero: ");
    }

    //Parseo a int
    numero = parseInt(numero);
    for(var i = 1; i<numero+1; i++){
        //Analizo si es primo
        if(numero % i === 0){
            contadorDivisores++;
        }
    }
    //Muesto por pantalla si es primo o no(si contadorDivisores es mas de 2, no es primo).
    if(contadorDivisores > 2){
        document.write("El numero: "+numero+" no es primo.");
    }else{
        document.write("El numero: "+numero+" es primo.");
    }
}

function validarNumeroIngresado(numero){
    //Valido que el usuario no ingresa una palabra o numero negativo
    return (isNaN(numero) || parseInt(numero) < 0);
}