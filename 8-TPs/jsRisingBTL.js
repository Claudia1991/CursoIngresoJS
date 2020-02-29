/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
  //Declaracion e variables
  var edadIngresada;
  var sexoIngresada;
  var estadoCivilIngresada;
  var sueldoBrutoIngresada;
  var numeroLegajoIngresada;
  var nacionalidadIngresada;

  //Ingreso de datos
  edadIngresada = prompt("Ingrese la edad:");
  while (!IsValidAge(edadIngresada)) {
    edadIngresada = prompt("ERROR: Ingrese la edad:");
  }
  sexoIngresada = prompt("Ingrese el sexo:");
  while (!IsValidSex(sexoIngresada)) {
    sexoIngresada = prompt("ERROR: Ingrese el sexo:");
  }
  estadoCivilIngresada = prompt("Ingrese el estado civil:");
  while (!IsValidCivilState(estadoCivilIngresada)) {
    estadoCivilIngresada = prompt("ERROR: Ingrese el estado civil:");
  }
  sueldoBrutoIngresada = prompt("Ingrese el sueldo bruto:");
  while (!IsValidSalary(sueldoBrutoIngresada)) {
    sueldoBrutoIngresada = prompt("ERROR: Ingrese el sueldo bruto:");
  }
  numeroLegajoIngresada = prompt("Ingrese el numero de legajo:");
  while (!IsValidLegacyNumber(numeroLegajoIngresada)) {
    numeroLegajoIngresada = prompt("ERROR: Ingrese el numero de legajo:");
  }
  nacionalidadIngresada = prompt("Ingrese la nacionalidad:");
  while (!IsValidnacioNality(nacionalidadIngresada)) {
    nacionalidadIngresada = prompt("ERROR: Ingrese la nacionalidad:");
  }

  //Mostrar por pantalla
  document.getElementById("Edad").value = edadIngresada;
  document.getElementById("Sexo").value = sexoIngresada;
  document.getElementById("EstadoCivil").value = estadoCivilIngresada;
  document.getElementById("Sueldo").value = sueldoBrutoIngresada;
  document.getElementById("Legajo").value = numeroLegajoIngresada;
  document.getElementById("Nacionalidad").value = nacionalidadIngresada;
}

function IsValidAge(age) {
  return !isNaN(age) && (parseInt(age) >= 18 && parseInt(age) <= 90);
}

function IsValidSex(sex) {
  return isNaN(sex) && (sex.toUpperCase() === "M" || sex.toUpperCase() === "F");
}

function IsValidCivilState(civilState) {
  return (
    !isNaN(civilState) &&
    (parseInt(civilState) === 1 ||
      parseInt(civilState) === 2 ||
      parseInt(civilState) === 3 ||
      parseInt(civilState) === 4)
  );
}

function IsValidSalary(salary) {
  return !isNaN(salary) && parseInt(salary) > 8000;
}

function IsValidLegacyNumber(legacyNumber) {
  return !isNaN(legacyNumber) && /^[0-9]{4}/.test(parseInt(legacyNumber));
}

function IsValidnacioNality(nacionality) {
  return (
    isNaN(nacionality) &&
    (nacionality.toUpperCase() === "A" ||
      nacionality.toUpperCase() === "E" ||
      nacionality.toUpperCase() === "N")
  );
}
