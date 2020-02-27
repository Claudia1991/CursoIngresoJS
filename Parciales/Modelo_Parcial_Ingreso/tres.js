/**
 * Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares.
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados.
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
 */
function mostrar() {
  //Declaracion de variables
  var nombrePaisIngresado;
  var cantidadHabitantesIngresado;
  var temperaturaIngresado;

  var cantidadTemperaturasImpares = 0;
  var nombrePaisMayorHabitantes;
  var habitantesPaisMayorHabitantes;
  var cantidadPaisesDebajoVeinteGrados = 0;
  var cantidadPaisesIngresados = 0;
  var sumaHabitantesPaisesIngresados = 0;
  var temperaturaMaxima;
  var nombrePaisTemperaturaMaxima;

  var flagPrimeraCarga = true;
  var respuestaUsuario;
  //Mensajes
  var mensajeCantidadTemperaturasImpares =
    "La cantidad de temperaturas impares: ";
  var mensajeNombrePaisConMasHabitantes =
    "El nombre del pais con más habitantes: ";
  var mensajeCantidadPaisesPorDebajoVeinteGrados =
    "La cantidad de paises por debajo de los 20 grados: ";
  var mensajePromedioHabitantes =
    "El promedio de habitantes entre los paises ingresados: ";
  var mensajeTemperaturaMaxima =
    "La temperatura máxima ingresada, y nombre del pais que registro esa temperatura: ";

  //Ingreso de datos
  do {
    nombrePaisIngresado = prompt("Ingrese el nombre del pais:");
    cantidadHabitantesIngresado = prompt("Ingrese cantidad de habitantes:");
    while (!IsValidPopulation(cantidadHabitantesIngresado)) {
      cantidadHabitantesIngresado = prompt("Ingrese cantidad de habitantes:");
    }
    temperaturaIngresado = prompt("Ingrese la temperatura minime registrada: ");
    while (!IsValidTemperature(temperaturaIngresado)) {
      temperaturaIngresado = prompt(
        "Ingrese la temperatura minime registrada: "
      );
    }
    //Parseo de datos
    cantidadHabitantesIngresado = parseInt(cantidadHabitantesIngresado);
    temperaturaIngresado = parseInt(temperaturaIngresado);
    //Analisis de datos
    //El promedio de habitantes entre los paises ingresados.
    sumaHabitantesPaisesIngresados += cantidadHabitantesIngresado;
    cantidadPaisesIngresados++;
    if (temperaturaIngresado % 2 != 0) {
      //a) La cantidad de temperaturas impares.
      cantidadTemperaturasImpares++;
    }
    if (temperaturaIngresado < 20) {
      //La cantidad de paises por debajo de los 20 grados.
      cantidadPaisesDebajoVeinteGrados++;
    }
    if (flagPrimeraCarga) {
      //El nombre del pais con más habitantes.
      nombrePaisMayorHabitantes = nombrePaisIngresado;
      habitantesPaisMayorHabitantes = cantidadHabitantesIngresado;
      //La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
      temperaturaMaxima = temperaturaIngresado;
      nombrePaisTemperaturaMaxima = nombrePaisIngresado;
      flagPrimeraCarga = false;
    } else {
      //El nombre del pais con más habitantes.
      if (cantidadHabitantesIngresado > habitantesPaisMayorHabitantes) {
        nombrePaisMayorHabitantes = nombrePaisIngresado;
        habitantesPaisMayorHabitantes = cantidadHabitantesIngresado;
      }
      //La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
      if (temperaturaIngresado > temperaturaMaxima) {
        temperaturaMaxima = temperaturaIngresado;
        nombrePaisTemperaturaMaxima = nombrePaisIngresado;
      }
    }
    //Re ingreso de datos
    respuestaUsuario = prompt("Desea cancelar la carga? si para terminar");
  } while (!IsValidAnwserUser(respuestaUsuario));

  //Mostrar resultados por document . write
  mensajeCantidadTemperaturasImpares = mensajeCantidadTemperaturasImpares.concat(
    cantidadTemperaturasImpares
  );
  mensajeNombrePaisConMasHabitantes = mensajeNombrePaisConMasHabitantes.concat(
    nombrePaisMayorHabitantes,
    " Habitantes: ",
    habitantesPaisMayorHabitantes, "millones."
  );
  mensajeCantidadPaisesPorDebajoVeinteGrados = mensajeCantidadPaisesPorDebajoVeinteGrados.concat(
    cantidadPaisesDebajoVeinteGrados
  );
  mensajePromedioHabitantes = mensajePromedioHabitantes.concat(
    sumaHabitantesPaisesIngresados / cantidadPaisesIngresados, " millones"
  );
  mensajeTemperaturaMaxima = mensajeTemperaturaMaxima.concat(
    temperaturaMaxima,
    " Grados - Pais: ",
    nombrePaisTemperaturaMaxima
  );
  document.write(
    mensajeCantidadTemperaturasImpares,
    "<br>",
    mensajeNombrePaisConMasHabitantes,
    "<br>",
    mensajeCantidadPaisesPorDebajoVeinteGrados,
    "<br>",
    mensajePromedioHabitantes,
    "<br>",
    mensajeTemperaturaMaxima
  );
}

function IsValidPopulation(population) {
  return (
    !isNaN(population) &&
    parseInt(population) >= 1 &&
    parseInt(population) <= 270
  );
}

function IsValidTemperature(temperature) {
  return (
    !isNaN(temperature) &&
    parseInt(temperature) >= -50 &&
    parseInt(temperature) <= 50
  );
}

function IsValidAnwserUser(anwser) {
  var terminarCarga = "si";
  return (isNaN(anwser) && anwser.toLowerCase() === terminarCarga);
}
