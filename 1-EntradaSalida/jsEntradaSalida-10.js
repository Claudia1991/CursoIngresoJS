/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var resultado = document.getElementById("resultado");
    var importe = parseInt(document.getElementById("importe").value);
    resultado.value = importe - (importe * 25 / 100) ;
}
