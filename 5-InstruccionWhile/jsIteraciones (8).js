function mostrar() {
  // Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
  var contador = 0;
  var positivo = 0;
  var negativo = 0;
  var respuesta = "si";

  var numero = prompt("Ingrese un numero(para terminar ingrese si): ");

  while (numero != respuesta) {
	contador++;
	numero = parseInt(numero);
	if(numero > 0){
		positivo += numero;
	}else{
		negativo += numero
	}
	numero = prompt("Ingrese un numero(para terminar ingrese si): ");
  }

  document.getElementById("suma").value = positivo;
  document.getElementById("producto").value = negativo;
} //FIN DE LA FUNCIÓN
