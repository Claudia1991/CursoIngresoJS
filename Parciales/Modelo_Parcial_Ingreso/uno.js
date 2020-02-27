/**
 * Realizar el algoritmo que tome los datos de un paralelogramo del documento.
Mostrar sus lados concatenados. 
Ej. LadoA: 5, LadoB: 2. Resultado: "Lados concatenados: 52."
Adicionalmente, 
de ser rectángulo, mostrar la superficie/área, 
de ser romboide, mostrar el perímetro,
de ser cuadrado, mostrar la multiplicación de sus lados,
y de ser rombo, mostrar la suma de sus lados. 
 */
function mostrar() {
  //Declaracion de variables
  var ladoA = document.getElementById("ladoA").value;
  var ladoB = document.getElementById("ladoB").value;
  var ladosConcatenados = ladoA + ladoB;
  var angulosRectos = document.getElementById("angulosRectos").value;
  //Mensajes
  var mensajeGenerico =
    "LadoA: " +
    ladoA +
    " , LadoB: " +
    ladoB +
    ". Resultado: Lados concatenados: " +
    ladosConcatenados;
  var mensajeEsRectangulo = "\nEs Rectangulo, el area es: ";
  var mensajeEsRomboide = "\nEs romboide, el perimetro es: ";
  var mensajeEsCuadrado = "\nEs cuadrado, la multiplicacion de sus lados es: ";
  var mensajeEsRombo = "\nEs rombo, la suma de sus lado es: ";
  //Parseo de datos
  ladoA = parseInt(ladoA);
  ladoB = parseInt(ladoB);
  //Analisis de tipo de figura

  if (ladoA === ladoB && angulosRectos === "SI") {
    //Es cuadrado: tiene angulos rectos y sus lados son iguales
    var lados = ladoA * ladoB;
    alert(mensajeGenerico + mensajeEsCuadrado + lados);
  } else if (ladoA != ladoB && angulosRectos === "SI") {
    //Es rectangulo: tiene angulos rectos y sus lados no son iguales
    var area = ladoA * ladoB;
    alert(mensajeGenerico + mensajeEsRectangulo + area);
  } else if (ladoA === ladoB && angulosRectos === "NO") {
    //Es rombo:no tiene angulos rectos y sus lados  son iguales
    var lados = 4 * ladoA;
    alert(mensajeGenerico + mensajeEsRombo + lados);
  } else {
    //Es romboide: no tiene angulos rectos y sus lados no son iguales
    var perimetro = 2 * ladoA + 2 * ladoB;
    alert(mensajeGenerico + mensajeEsRomboide + perimetro);
  }
}
