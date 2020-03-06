/**
 * Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera: 
peso (entre 10 y 1000)en kilo, 
precio por kilo (más de cero ), 
tipo validad("v";"a";"m")(vegetal,animal o mezcla ) 
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar. 
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
a) El importe total a pagar , bruto sin descuento y... 
b) el importe total a pagar con descuento(solo si corresponde) 
d) Informar el tipo de alimento más caro.	
f) El promedio de precio por kilo en total.
 */
function mostrar() {
  //Declaracion Variables
  var pesoIngresado;
  var precioPorKiloIngresado;
  var tipoCalidadIngresado;
  var kiloTotalComprado = 0;
  var importeTotal = 0;
  var alimentoMasCaro;
  var precioAlimentoMasCaro = 0;
  var acumuladorPrecios = 0;
  var cantidadProductosIngresada = 0;
  var esPrimerIngreso = true;
  var resultado = "";
  //Ingreso datos
  do {
    pesoIngresado = prompt("Ingrese el peso del ingrediente(entre 10 y 1000):");
    while (!EsPesoValido(pesoIngresado)) {
      pesoIngresado = prompt(
        "ERROR :Ingrese el peso del ingrediente(entre 10 y 1000):"
      );
    }
    precioPorKiloIngresado = prompt(
      "Ingrese el precio por kilo del ingrediente(mayor a cero):"
    );
    while (!EsPrecioPorKiloValido(precioPorKiloIngresado)) {
      precioPorKiloIngresado = prompt(
        "ERROR :Ingrese el precio por kilo del ingrediente(mayor a cero):"
      );
    }
    tipoCalidadIngresado = prompt(
      "Ingrese el tipo del ingrediente((v;a;m)(vegetal,animal o mezcla )):"
    );
    while (!EsTipoCalidadIngresado(tipoCalidadIngresado)) {
      tipoCalidadIngresado = prompt(
        "ERROR :Ingrese el tipo del ingrediente((v;a;m)(vegetal,animal o mezcla )):"
      );
    }
    //Analisis de datos
    /**
     * Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar. 
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
a) El importe total a pagar , bruto sin descuento y... 
b) el importe total a pagar con descuento(solo si corresponde) 
d) Informar el tipo de alimento más caro.	
f) El promedio de precio por kilo en total.
     */
    pesoIngresado = parseInt(pesoIngresado);
    precioPorKiloIngresado = parseInt(precioPorKiloIngresado);

    if (esPrimerIngreso || precioAlimentoMasCaro < precioPorKiloIngresado) {
      esPrimerIngreso = false;
      alimentoMasCaro = tipoCalidadIngresado;
      precioAlimentoMasCaro = precioPorKiloIngresado;
    }
    kiloTotalComprado += pesoIngresado;
    importeTotal += pesoIngresado * precioPorKiloIngresado;
    acumuladorPrecios += pesoIngresado;
    cantidadProductosIngresada++;
  } while (confirm("¿Desea seguir ingresando productos?"));
  /**
     * Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar. 
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
a) El importe total a pagar , bruto sin descuento y... 
b) el importe total a pagar con descuento(solo si corresponde) 
d) Informar el tipo de alimento más caro.	
f) El promedio de precio por kilo en total.
     */
  //Armado de resultado
  if (kiloTotalComprado > 100) {
    resultado +=
      "Importe bruto:" +
      importeTotal +
      "tiene un descuento del 15%, importe con descuento: " +
      ((importeTotal * 85) / 100).toFixed(2) +
      "\n";
  } else if (kiloTotalComprado > 300) {
    resultado +=
      "Importe bruto:" +
      importeTotal +
      "tiene un descuento del 25%, importe con descuento: " +
      ((importeTotal * 75) / 100).toFixed(2) +
      "\n";
  } else {
    resultado += "Importe bruto:" + importeTotal + "\n";
  }
  resultado += "El tipo de alimento mas caro es: " + alimentoMasCaro + "\n";
  resultado +=
    "El promedio total de precio por kilo es: " +
    (acumuladorPrecios / cantidadProductosIngresada).toFixed(2);
  alert(resultado);
  alert("dos");
}

function EsPesoValido(peso) {
  return parseInt(peso) >= 10 && parseInt(peso) <= 1000;
}

function EsPrecioPorKiloValido(precioPorKilo) {
  return parseInt(precioPorKilo) > 0;
}

function EsTipoCalidadIngresado(tipoCalidad) {
  return (
    tipoCalidad.toLowerCase() == "v" ||
    tipoCalidad.toLowerCase() == "a" ||
    tipoCalidad.toLowerCase() == "m"
  );
}
