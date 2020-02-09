/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largoTerreno;
var anchoTerreno;
var radioTerreno;
var cantidadAlambre;
var mensaje = "El alambre necesario es: ";

function ObtenerMedidas(){
    largoTerreno = parseInt(document.getElementById("Largo").value);
    anchoTerreno = parseInt(document.getElementById("Ancho").value);
    radioTerreno = parseInt(document.getElementById("Radio").value);
}

function Rectangulo () 
{
    ObtenerMedidas();
    cantidadAlambre = (2 *largoTerreno + 2* anchoTerreno) * 3;
    alert(mensaje + cantidadAlambre);
}
function Circulo () 
{
	ObtenerMedidas();
    cantidadAlambre = 2 * radioTerreno * 3.14;
    alert(mensaje + cantidadAlambre);
}
function Materiales () 
{
    /*Aca depende de si es rectangulo o circulo, hallar el area. Por metro cuadrado, la relacion es 2 bolsas de cemento y 3 de cal.
    */
    var areaRectangulo = largoTerreno * anchoTerreno;
    var areaCirculo = radioTerreno * radioTerreno * 3.14;
    
    var cementoRectangulo = areaRectangulo * 2;
    var calRectangulo = areaRectangulo * 3;

    var cementoCirculo = areaCirculo * 2;
    var calCirculo = areaCirculo * 3;

    alert("Para el rectangulo, se necesitan "+cementoRectangulo+" cementos y "+calRectangulo+" de cal.");
    alert("Para el circulo, se necesitan "+cementoCirculo+" cementos y "+calCirculo+" de cal.");
}