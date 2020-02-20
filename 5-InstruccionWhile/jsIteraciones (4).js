function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	numero = parseInt(numero);

	while(numero< 0 || numero > 10){
		numero = prompt("ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
	}

	document.getElementById("Numero").value = numero;

}