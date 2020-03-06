/**
 * Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
la Marca y el fabricante. 
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante 
c) Cuántas unidades de jabones hay en total 

 */
function mostrar() {
  //Declaracion de variables
  var tipoIngresado;
  var precioIngresado;
  var cantidadIngresada;
  var marcaIngresada;
  var fabricanteIngresada;
  var resultado = "";
  var barbijoMasCaro = 0;
  var cantidadBarbijoMasCaro = 0;
  var fabricanteBarbijoMasCaro = "";
  var itemMayorCantidad = "";
  var cantidadItemMayorCantidad = 0;
  var fabricanteItemMayorCantidad = "";
  var cantidadTotalJabones = 0;

  //Ingreso de datos.
  for (var i = 0; i < 5; i++) {
    tipoIngresado = prompt(
      "Ingrese un tipo de producto(barbijo , jabón o alcohol): "
    );
    while (!EsProductoValido(tipoIngresado)) {
      tipoIngresado = prompt(
        "ERROR: Ingrese un tipo de producto(barbijo , jabón o alcohol): "
      );
    }
    precioIngresado = prompt(
      "Ingrese un precio para el producto ( entre 100 y 300): "
    );
    while (!EsPrecioValido(precioIngresado)) {
      precioIngresado = prompt(
        "ERROR: Ingrese un precio para el producto( entre 100 y 300)): "
      );
    }
    cantidadIngresada = prompt(
      "Ingrese una cantidad para el producto (no puede ser 0 o negativo y no debe superar las 1000 unidades): "
    );
    while (!EsCantidadValida(cantidadIngresada)) {
      cantidadIngresada = prompt(
        "ERROR: Ingrese una cantidad para el producto( no puede ser 0 o negativo y no debe superar las 1000 unidades)): "
      );
    }
    marcaIngresada = prompt("Ingrese una marca:");
    fabricanteIngresada = prompt("Ingrese un fabricante:");
    //Analisis de datos
    precioIngresado = parseInt(precioIngresado);
    cantidadIngresada = parseInt(cantidadIngresada);
    if (i === 0) {
      //Es la primera Carga de datos
      if (tipoIngresado === "barbijo") {
        barbijoMasCaro = precioIngresado;
        cantidadBarbijoMasCaro = cantidadIngresada;
        fabricanteBarbijoMasCaro = fabricanteIngresada;
      }
      if (tipoIngresado === "jabón") {
        cantidadTotalJabones += cantidadIngresada;
      }
      itemMayorCantidad = tipoIngresado;
      cantidadItemMayorCantidad = cantidadIngresada;
      fabricanteItemMayorCantidad = fabricanteIngresada;
    } else {
      //Actualizamos los datos
      if (tipoIngresado === "barbijo" && barbijoMasCaro < precioIngresado) {
        cantidadBarbijoMasCaro = cantidadIngresada;
        fabricanteBarbijoMasCaro = fabricanteIngresada;
      }
      if (tipoIngresado === "jabón") {
        cantidadTotalJabones += cantidadIngresada;
      }
      if (cantidadItemMayorCantidad < cantidadIngresada) {
        itemMayorCantidad = tipoIngresado;
        cantidadItemMayorCantidad = cantidadIngresada;
        fabricanteItemMayorCantidad = fabricanteIngresada;
      }
    }
  }
  //Armado de resultado
  /**
   * Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante 
c) Cuántas unidades de jabones hay en total 
   */
  if (cantidadBarbijoMasCaro != 0) {
    resultado +=
      "El barbijo mas caro tiene" +
      cantidadBarbijoMasCaro +
      " y el fabricante es: " +
      fabricanteBarbijoMasCaro +
      "\n";
  } else {
    resultado += "No hay barbijos.\n";
  }
  resultado +=
    "El fabricante del item con mas unidades ingresadas es:" +
    fabricanteItemMayorCantidad +
    "\n";
  if (cantidadTotalJabones != 0) {
    resultado += "La cantidad total de jabones es:" + cantidadTotalJabones;
  } else {
    resultado += "No hay jabones.";
  }
  alert(resultado);
  alert("uno");
}

function EsProductoValido(producto) {
  return (
    producto.toLowerCase() === "barbijo" ||
    producto.toLowerCase() === "jabón" ||
    producto.toLowerCase() === "alcohol"
  );
}

function EsPrecioValido(precio) {
  return parseInt(precio) >= 100 && parseInt(precio) <= 300;
}

function EsCantidadValida(cantidad) {
  return (
    parseInt(cantidad) != 0 &&
    parseInt(cantidad) > 0 &&
    parseInt(cantidad) < 1000
  );
}
