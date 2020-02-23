function mostrar()
{
    /**
     * al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
     */
    
    var mensaje = "";
    for(var i = 0; i<10; i++){
        mensaje = mensaje.concat((i+1), "<br>");
    }
    document.write(mensaje);
}