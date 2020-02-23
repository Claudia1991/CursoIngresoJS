function mostrar()
{
    /**
     * al presionar el botón mostrar 10 repeticiones con números DESCENDENTE, desde el 1 al 10.
     */

    var mensaje = "";
    for(var i = 10; i>0; i--){
        mensaje = mensaje.concat((i), "<br>");
    }
    document.write(mensaje);

}