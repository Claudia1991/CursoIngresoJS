function mostrar() {
     /**
      * Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
      * el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
      a) El promedio de las notas totales.
      b) La nota más baja y el sexo de esa persona.
      c) La cantidad de varones que su nota haya sido mayor o igual a 6.
      */
     //Declaracion de variables.
     var notas = 0;
     var notaMasBaja = 0;
     var sexoNotaMasBaja;
     var cantidadVaronesNota = 0;
     var cantidadNotasAIngresar = 5;
     var notaIngresada;
     var sexoIngresado;

     //Ingreso de datos
     for (var i = 0; i < cantidadNotasAIngresar; i++) {
          //Ingreso de nota
          notaIngresada = prompt("Ingrese la nota del alumno: ");
          while (!IsValidNote(notaIngresada)) {
               //Nota no valida
               notaIngresada = prompt("Ingrese la nota del alumno: ");
          }
          //Ingreso de sexo
          sexoIngresado = prompt("Ingrese el sexo del alumno: ");
          while (!IsValidSex(sexoIngresado)) {
               //Sexo no valido
               sexoIngresado = prompt("Ingrese el sexo del alumno: ");
          }
          //Parseo de string a number
          notaIngresada = parseInt(notaIngresada);
          
          //Acumulo las notas.
          notas = notas + notaIngresada;

          //Busco la nota mas baja
          if (i === 0) {
               notaMasBaja = notaIngresada;
               sexoNotaMasBaja = sexoIngresado;
          } else {
               if (notaMasBaja > notaIngresada) {
                    notaMasBaja = notaIngresada;
                    sexoNotaMasBaja = sexoIngresado;
               }
          }

          //La cantidad de varones que su nota haya sido mayor o igual a 6.
          if (sexoIngresado === "m" && notaIngresada >= 6) {
               cantidadVaronesNota++;
          }
     }

     //Mostrar los datos por alert
     alert("Promedio de notas: " + (notas / cantidadNotasAIngresar));
     alert("La nota más baja: " + notaMasBaja + " y el sexo de esa persona: " + sexoNotaMasBaja);
     alert("La cantidad de varones que su nota haya sido mayor o igual a 6: " + cantidadVaronesNota);
}

function IsValidSex(sex) {
     //Validamos si lo ingresado por el usuario es f o m.
     return ((isNaN(sex)) && ((sex.toLowerCase() === "f") || (sex.toLowerCase() === "m")));
}

function IsValidNote(note) {
     //Validamos si lo ingresado por el usuario es una nota valida[0-10]
     return (!isNaN(note) && (parseInt(note)>= 0) && (parseInt(note)<= 10));
}