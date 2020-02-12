function mostrar() {
  // 	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
  // "EXCELENTE" para notas igual a 9 o 10,
  // "APROBÓ" para notas mayores a 4,
  // "Vamos, la proxima se puede" para notas menores a 4
  var numero = Math.floor(Math.random() * 10) + 1;

  if(numero >=9){
	  alert("EXCELENTE "+ numero);
  }else if(numero > 3){
	alert("APROBÓ "+ numero);
  }else{
	alert("Vamos, la proxima se puede "+ numero);
  }
}
