function mostrar() {
  // Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

  var contador = 0;
  var acumulador = 0;

  var respuesta = "si";
  var numero = prompt("Ingrese un numero(para terminar ingrese si): ");
  while (numero != respuesta) {
    document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador / 5;
	
	contador++;
	acumulador += parseInt(numero);
	
    numero = prompt("Ingrese un numero(para terminar ingrese si): ");

  }
}
