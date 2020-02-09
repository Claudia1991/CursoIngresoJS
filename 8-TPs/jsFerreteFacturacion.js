/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var resultado;
var mensaje = "El resultado es: ";

function ObtenerPrecios(){
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
}

function Sumar () 
{
    ObtenerPrecios();
    resultado = precioUno + precioDos + precioTres;
    alert(mensaje + resultado);
}
function Promedio () 
{
    ObtenerPrecios();
    resultado = resultado / 3;
    alert(mensaje + resultado);
}
function PrecioFinal () 
{
    ObtenerPrecios();
    resultado = (resultado * 21 / 100) + resultado;
    alert(mensaje + resultado);
}