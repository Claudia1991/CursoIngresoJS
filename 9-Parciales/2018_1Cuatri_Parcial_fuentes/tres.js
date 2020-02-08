function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio: "));
    var porcentaje = parseInt(prompt("Ingrese el porcentaje: "));

    document.getElementById("elPrecioFinal").value = precio - (precio * porcentaje / 100);
}