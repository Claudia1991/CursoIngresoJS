function mostrar() {
  const claveCorrecta = "utn750";
  var clave = prompt("ingrese el número clave.");
  while(clave != claveCorrecta){
    clave = prompt("ingrese el número clave.");
  }
  alert("Clave Correcta.!");
}
