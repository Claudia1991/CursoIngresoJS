function mostrar() {
  // Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
  var edad = parseInt(document.getElementById("edad").value);

  if (edad >= 18) {
    alert("Es mayor de edad.");
  } else if (edad <= 17 && edad >= 13) {
    alert("Es adolescente.");
  } else {
    alert("Es menor de edad.");
  }
}
