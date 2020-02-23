function mostrar() {
  // Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
  var contador = 0;
  var positivo = 0;
  var negativo = 1;
  var respuestaUsuario = prompt("Ingrese un numero(para terminar ingrese si): ");

  while (validarRespuestaUsuario(respuestaUsuario)) {
    //El usuario ingreso algo distinto a "si"
    if(!validarRespuestaUsuario(respuestaUsuario)){
      //No ingreso un numero ni "si"
      respuestaUsuario = prompt("Ingrese un numero(para terminar ingrese si): ");  
    }else{
      //Ingreso un numero
      respuestaUsuario = parseInt(respuestaUsuario);
      if (respuestaUsuario > 0) {
        //Numero Positivo
        positivo += respuestaUsuario;
        contador++;
      } else {
        //Numero negativo
        negativo *= respuestaUsuario;
      }
    }
    //Nuevo ingreso de datos.
    respuestaUsuario = prompt("Ingrese un numero(para terminar ingrese si): ");
  }
  //Se muestran los resultados.
  document.getElementById("suma").value = positivo;
  document.getElementById("producto").value = negativo;
} 

function validarRespuestaUsuario(respuestaUsuario) {
  //Valido que el usuario no ingreso si, SI, s, S
  var respuesta = "si";
  return (
    !isNaN(respuestaUsuario) &&
    (!(respuestaUsuario.toLowerCase() === respuesta) ||
      !(respuestaUsuario.toUpperCase() === "S"))
  );
}
