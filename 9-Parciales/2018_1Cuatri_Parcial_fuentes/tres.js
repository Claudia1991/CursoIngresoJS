function mostrar()
{
    /**
     * Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
     */
    //Ingreso de datos
    var precio = parseInt(prompt("Ingrese el precio: "));
    //Valido el ingreso de datos.
    while(!IsAPositiveNumber(precio)){
        precio = parseInt(prompt("Ingrese el precio: "));
    }
    //Ingreso de datos.
    var porcentaje = parseInt(prompt("Ingrese el porcentaje: "));
    //Valido ingreso de datos.
    while(!IsAPositiveNumber(porcentaje)){
        porcentaje = parseInt(prompt("Ingrese el porcentaje: "));
    }
    document.getElementById("elPrecioFinal").value = precio - (precio * porcentaje / 100);
}

function IsAPositiveNumber(number){
    return (!isNaN(number) && parseInt(number) > 0);
}