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
  var sumaNumerosNegativos=0;
  var sumaNumerosPositivos=0;
  var cantidadNumeroNegativos=0;
  var cantidadNumerosPositivos=0;
  var cantidadCeros=0;
  var cantidadNumerosPares=0;
  var promedioNumerosPositivos=0;
  var promedioNumerosNegativos=0;
  var diferenciaPositivosNegativos=0;
  var numeroIngresado=0;
  // var contador=0;
  var respuesta = "si";
  respuesta = prompt(
    "Ingrese un numero(para terminar la carga, ingrese 'no'): "
  );
  while (respuesta != "no") {
    //Valido el ingreso del usuario.
    if (!validarRespuestaUsuario(respuesta)) {
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
        /**
         * 2%2 === 0 => true
         * 0%2 === 0 => true
         * -2%2 === 0 => true
         * Preguntar
         */
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
      " <br> 2-Suma de los positivos:" +
      sumaNumerosPositivos +
      " <br> 3-Cantidad de positivos: " +
      cantidadNumerosPositivos +
      "<br> 4-Cantidad de negativos:" +
      cantidadNumeroNegativos +
      " <br> 5-Cantidad de ceros:" +
      cantidadCeros +
      " <br> 6-Cantidad de números pares:" +
      cantidadNumerosPares +
      " <br> 7-Promedio de positivos: " +
      promedioNumerosPositivos +
      "<br> 8-Promedios de negativos: " +
      promedioNumerosNegativos +
      "<br> 9-Diferencia entre positivos y negativos, (positvos-negativos): " +
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
