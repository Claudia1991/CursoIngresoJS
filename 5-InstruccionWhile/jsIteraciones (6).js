function mostrar() {
  // Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

  var contador = 0;
  var acumulador = 0;
  //var numero = prompt("Ingrese un numero: ")

  while (contador < 5) {
    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = acumulador / 5;

    var numero = prompt("Ingrese un numero: ");

    contador++;
    acumulador += parseInt(numero);
  }
}
