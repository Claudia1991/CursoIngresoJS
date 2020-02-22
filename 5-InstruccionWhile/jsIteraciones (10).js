function mostrar() {
  /**Ejercicio:
   * Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
   * 1-Suma de los negativos.
   * 2-Suma de los positivos.
   * 3-Cantidad de positivos.
   * 4-Cantidad de negativos.
   * 5-Cantidad de ceros.
   * 6-Cantidad de números pares.
   * 7-Promedio de positivos.
   * 8-Promedios de negativos.
   * 9-Diferencia entre positivos y negativos, (positvos-negativos).
   */
  //declarar contadores y variables
  var sumaNumerosNegativos;
  var sumaNumerosPositivos;
  var cantidadNumeroNegativos;
  var cantidadNumerosPositivos;
  var cantidadCeros;
  var cantidadNumerosPares;
  var promedioNumerosPositivos;
  var promedioNumerosNegativos;
  var diferenciaPositivosNegativos;
  var numeroIngresado;
  // var contador=0;
  var respuesta = "si";
  while (respuesta != "no") {
    respuesta = prompt(
      "Ingrese un numero(para terminar la carga, ingrese 'no'): "
    );
    //Valido el ingreso del usuario.
    if (isNaN(respuesta) && !validarRespuestaUsuario(respuesta)) {
      respuesta = prompt(
        "Ingrese un numero(para terminar la carga, ingrese 'no'): "
      );
    } else {
      //Ingreso un numero.
      //Valido los casos
      numeroIngresado = parseInt(respuesta);
      if (numeroIngresado < 0) {
        //numero negativo
        sumaNumerosNegativos += numeroIngresado;
        cantidadNumeroNegativos++;
      } else if (numeroIngresado > 0) {
        //numero positivo
        sumaNumerosPositivos += numeroIngresado;
        cantidadNumerosPositivos++;
      } else {
        //numero cero
        cantidadCeros++;
      }
      //Analizo si es par
      if (numeroIngresado % 2 === 0) {
        cantidadNumerosPares++;
      }
    }
    //Vuelvo a pedir el ingreso de datos.
    respuesta = prompt(
      "Ingrese un numero(para terminar la carga, ingrese 'no'): "
    );
  }
  //Ya no se piden datos, se obtienen los promedios.
  promedioNumerosNegativos = sumaNumerosNegativos / cantidadNumeroNegativos;
  promedioNumerosPositivos = sumaNumerosPositivos / cantidadNumerosPositivos;
  diferenciaPositivosNegativos = sumaNumerosPositivos + sumaNumerosNegativos;

  //Se imprimen los datos en pantalla, metodo document.write.
  document.write(
    "1-Suma de los negativos:" +
      sumaNumerosNegativos +
      " \n 2-Suma de los positivos:" +
      sumaNumerosPositivos +
      " \n 3-Cantidad de positivos: " +
      cantidadNumerosPositivos +
      "\n 4-Cantidad de negativos:" +
      cantidadNumeroNegativos +
      " \n 5-Cantidad de ceros:" +
      cantidadCeros +
      " \n 6-Cantidad de números pares:" +
      cantidadNumerosPares +
      " \n 7-Promedio de positivos: " +
      promedioNumerosPositivos +
      "\n 8-Promedios de negativos: " +
      promedioNumerosNegativos +
      "\n 9-Diferencia entre positivos y negativos, (positvos-negativos): " +
      diferenciaPositivosNegativos
  );
}

function validarRespuestaUsuario(respuestaUsuario) {
  //Valido que el usuario no ingreso no, NO, N, n
  return (
    !isNaN(respuestaUsuario) &&
    (!(respuestaUsuario.toLowerCase() === "no") ||
      !(respuestaUsuario.toUpperCase() === "n"))
  );
}
