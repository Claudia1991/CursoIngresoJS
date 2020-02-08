function mostrar()
{
    var nombre = document.getElementById("elNombre").value;
    var localidad = document.getElementById("laLocalidad").value;
    var mensaje =   "Usted es " + nombre + " y vive en la localidad de " + localidad;
    alert(mensaje);
}
