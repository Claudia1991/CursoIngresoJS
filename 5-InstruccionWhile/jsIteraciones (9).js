function mostrar() {
  // Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.
  // declarar variables
  var contador = 0;
  var minimo = 0;
  var maximo = 0;
  var respuesta = "si";
  var valorIngresado = 0;
  valorIngresado = prompt("Ingrese un numero(para terminar ingrese 'no')");
  while (validarIngresoUsuario(valorIngresado)) {
    if (isNaN(valorIngresado)) {
      valorIngresado = prompt("Ingrese un numero(para terminar ingrese 'no')");
    } else {
      if (contador === 0) {
        //Verifico que sea el primer ingreso.
        minimo = parseInt(valorIngresado);
        maximo = parseInt(valorIngresado);
        contador++;
      } else {
        //actualizo los valores de minimos y maximos.
        if (minimo > parseInt(valorIngresado)) {
          minimo = parseInt(valorIngresado);
          contador++;
        }
        if (maximo < parseInt(valorIngresado)) {
          maximo = parseInt(valorIngresado);
          contador++;
        }
      }
    }
    //vuelvo a pedir el valor al usuario.
    valorIngresado = prompt("Ingrese un numero(para terminar ingrese 'no')");
  }
  //Mostramos los numeros por pantalla
  document.getElementById("maximo").value = maximo;
  document.getElementById("minimo").value = minimo;
}

function validarIngresoUsuario(valorIngresado) {
  //Valido que el usuario no ingreso no, NO, N, n
  return (
    !isNaN(valorIngresado) &&
    (!(valorIngresado.toLowerCase() === "no") ||
      !(valorIngresado.toUpperCase() === "n"))
  );
}
