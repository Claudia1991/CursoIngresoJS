/**
 * Debemos realizar la carga de cuatro personas, 
de cada una debo obtener los siguientes datos: 
el nombre, 
el género (validar "masculino", "femenino" u "otro"), 
la edad (validar que sea un número y esté entre 18 y 100), 
y el peso (validar que sea un número y mayor a 1).

a) El promedio de las edades mayores o iguales a 25.
b) El nombre de la persona menos pesada y su peso.
c) La cantidad personas de género distinto a masculino ó peso mayor a 80.
 */
function mostrar() {
  //Declaracion de variables
  var nombre;
  var genero;
  var edad;
  var peso;
  var flagPrimeraCarga = true;
  var nombrePersonaMenosPesada = "";
  var pesoPersonaMenosPesada = 0;
  var sumaEdadesMayoresIgualesVenticinco = 0;
  var cantidadEdadesMayoresIgualesVenticinco = 0;
  var nombrePersonaMenosPesada = "";
  var cantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta = 0;
  //Mensajes
  var mensajePromedioEdadesMayoresIgualesVenticinco =
    "El promedio de las edades mayores o iguales a 25: ";
  var mensajePersonaMenosPesada =
    "El nombre de la persona menos pesada y su peso: ";
  var mensajeCantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta =
    "La cantidad personas de género distinto a masculino ó peso mayor a 80: ";

  //Ingreso de datos
  for (var i = 0; i < 4; i++) {
    nombre = prompt("Ingrese el nombre: ");
    genero = prompt("Ingrese el genero: ");
    //Validacion de genero
    while (!IsValidGender(genero)) {
      genero = prompt("Ingrese el genero: ");
    }
    edad = prompt("Ingrese la edad:");
    //Validacion de la edad
    while (!IsValidAge(edad)) {
      edad = prompt("Ingrese la edad:");
    }
    peso = prompt("Ingrese el peso:");
    while (!IsValidWeight(peso)) {
      peso = prompt("Ingrese el peso:");
    }
    //Parseo de datos
    edad = parseInt(edad);
    peso = parseInt(peso);
    //Analisis de datos
    if (flagPrimeraCarga) {
      flagPrimeraCarga = false;
      //El nombre de la persona menos pesada y su peso.
      nombrePersonaMenosPesada = nombre;
      pesoPersonaMenosPesada = peso;
      if (edad >= 25) {
        //El promedio de las edades mayores o iguales a 25.
        sumaEdadesMayoresIgualesVenticinco += edad;
        cantidadEdadesMayoresIgualesVenticinco += 1;
      }
      if (genero.toLowerCase() != "masculino" || peso > 80) {
        cantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta++;
      }
    } else {
      if (pesoPersonaMenosPesada > peso) {
        //El nombre de la persona menos pesada y su peso.
        nombrePersonaMenosPesada = nombre;
        pesoPersonaMenosPesada = peso;
      }
      if (edad >= 25) {
        //El promedio de las edades mayores o iguales a 25.
        sumaEdadesMayoresIgualesVenticinco += edad;
        cantidadEdadesMayoresIgualesVenticinco += 1;
      }
      if (genero.toLowerCase() != "masculino" || peso > 80) {
        //La cantidad personas de género distinto a masculino ó peso mayor a 80.
        cantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta++;
      }
    }
  }
  //Fin Carga de datos
  //Mostrar mensajes por alert
  cantidadEdadesMayoresIgualesVenticinco > 0
    ? (mensajePromedioEdadesMayoresIgualesVenticinco = mensajePromedioEdadesMayoresIgualesVenticinco.concat(
        sumaEdadesMayoresIgualesVenticinco /
          cantidadEdadesMayoresIgualesVenticinco
      ))
    : (mensajePromedioEdadesMayoresIgualesVenticinco = mensajePromedioEdadesMayoresIgualesVenticinco.concat(
        0
      ));

  mensajePersonaMenosPesada = mensajePersonaMenosPesada.concat(
    nombrePersonaMenosPesada,
    " ",
    pesoPersonaMenosPesada
  );
  mensajeCantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta = mensajeCantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta.concat(
    cantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta
  );

  alert(
    mensajePromedioEdadesMayoresIgualesVenticinco +
      "\n" +
      mensajePersonaMenosPesada +
      "\n" +
      mensajeCantidadPersonasGeneroDistintoMasculinoOPesoMayorOchenta
  );
}

function IsValidGender(gender) {
  return (
    isNaN(gender) &&
    (gender.toLowerCase() === "masculino" ||
      gender.toLowerCase() === "femenino" ||
      gender.toLowerCase() === "otro")
  );
}

function IsValidAge(age) {
  return !isNaN(age) && parseInt(age) >= 18 && parseInt(age) <= 100;
}

function IsValidWeight(weight) {
  return !isNaN(weight) && parseInt(weight) > 1;
}
