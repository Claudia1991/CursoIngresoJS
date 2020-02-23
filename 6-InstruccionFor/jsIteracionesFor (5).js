function mostrar()
{
    /**
     * al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
     */
    var numero ;
    for(var i = 0; i<Infinity; i++){
        numero = prompt("Ingrese un numero: ");
        numero = parseInt(numero);
        console.log(numero);
        if(numero === 9){
            console.log("break")
            break;
        }
    }
}