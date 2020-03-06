/**
 * Bienvenidos. 
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo"); 
a) El nombre del hombre casado más joven. 
b) El sexo y nombre del pasajero/a más viejo. 
c) La cantidad de mujeres que hay casadas o viudas. 
d) El promedio de edad entre las mujeres. 
e) El promedio de edad entre los hombres solteros.
 */
function mostrar() {
	//Variables
	var nombreIngresado;
	var edadIngrasada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var nombreHombreCasadoMasJoven;
	var edadHombreCasadoMasJoven=0;
	var sexoPasajeroMasViejo;
	var nombrePasajeroMasViejo;
	var edadPasajeroMasViejo=0;
	var cantidadMujeresCasadasOViudas=0;
	var cantidadMujeres=0;
	var acumuladorEdadMujeres=0;
	var cantidadHombresSolteros=0;
	var acumuladorEdadHombresSolteros=0;
	var esPrimerIngreso=true;
	var resultado="";

	//Ingreso de datos
	do{
		nombreIngresado =  prompt("Ingrese su nombre:");
		edadIngrasada = parseInt(prompt("Ingrese su edad(mayor 18):"));
		sexoIngresado = prompt("Ingrese su sexo(f-m):")
		estadoCivilIngresado = prompt("Ingrese su estado civil(soltero, casado o viudo):");
		//Analisis de datos
		 if(esPrimerIngreso){
			 esPrimerIngreso=false;
			 if(sexoIngresado.toLowerCase()=="m"){
				 if(estadoCivilIngresado == "casado"){
					 //El nombre del hombre casado más joven. 
				 edadHombreCasadoMasJoven = edadIngrasada;
				 nombreHombreCasadoMasJoven = nombreIngresado;
				 }
				 if(estadoCivilIngresado == "soltero"){
					//El promedio de edad entre los hombres solteros.
				cantidadHombresSolteros++;
				acumuladorEdadHombresSolteros+= edadIngrasada;
				}
			 }
			 //El sexo y nombre del pasajero/a más viejo.
			 sexoPasajeroMasViejo = sexoIngresado;
			 edadPasajeroMasViejo = edadIngrasada;
			 nombrePasajeroMasViejo= nombreIngresado; 
			 if(sexoIngresado== "f" && (estadoCivilIngresado == "casado" || estadoCivilIngresado == "viudo")){
				//La cantidad de mujeres que hay casadas o viudas. 
				//El promedio de edad entre las mujeres. 
				cantidadMujeresCasadasOViudas++;
				cantidadMujeres++;
				acumuladorEdadMujeres+=edadIngrasada;
			 }
		}else{
			if(sexoIngresado.toLowerCase()=="m"){
				if(estadoCivilIngresado == "casado" && edadHombreCasadoMasJoven > edadIngrasada){
					//El nombre del hombre casado más joven. 
				edadHombreCasadoMasJoven = edadIngrasada;
				nombreHombreCasadoMasJoven = nombreIngresado;
				}
				if(estadoCivilIngresado == "soltero"){
				   //El promedio de edad entre los hombres solteros.
			   cantidadHombresSolteros++;
			   acumuladorEdadHombresSolteros+= edadIngrasada;
			   }
			} 
			if(sexoIngresado== "f" && (estadoCivilIngresado == "casado" || estadoCivilIngresado == "viudo")){
			   //La cantidad de mujeres que hay casadas o viudas. 
			   //El promedio de edad entre las mujeres. 
			   cantidadMujeresCasadasOViudas++;
			   cantidadMujeres++;
			   acumuladorEdadMujeres+=edadIngrasada;
			}
			if(edadIngrasada > edadPasajeroMasViejo){
				//El sexo y nombre del pasajero/a más viejo.
			sexoPasajeroMasViejo = sexoIngresado;
			edadPasajeroMasViejo = edadIngrasada;
			nombrePasajeroMasViejo= nombreIngresado;
			}
		}

		
	}while(confirm("Desea seguir ingresando datos?"));

	//Armado de resultado
	/**
	 * a) El nombre del hombre casado más joven. 
b) El sexo y nombre del pasajero/a más viejo. 
c) La cantidad de mujeres que hay casadas o viudas. 
d) El promedio de edad entre las mujeres. 
e) El promedio de edad entre los hombres solteros.
	 */
	if(edadHombreCasadoMasJoven!=0){
		resultado+="El nombre del hombre casado mas joven es: "+nombreHombreCasadoMasJoven+"\n";
	}else{
		resultado+="No hay hombre casado."
	}
	resultado += "El sexo: " + sexoPasajeroMasViejo + " y nombre: " +nombrePasajeroMasViejo+" del pasajero/a más viejo \n" 
	if(cantidadMujeresCasadasOViudas !=0){
		resultado+="La cantidad de mujeres que hay casadas o viudas:"+ cantidadMujeresCasadasOViudas+"\n";
	}else{
		resultado+="No hay mujeres casadas o viuda. \n"
	}
	if(cantidadMujeres !=0){
		resultado+="El promedio de edad entre las mujeres. "+(acumuladorEdadMujeres/cantidadMujeres)
	}else{
		resultado+="No hay mujeres."
	}
	if(cantidadHombresSolteros !=0){
		resultado+="El promedio de edad entre las hombres solteros:" +(acumuladorEdadHombresSolteros/cantidadHombresSolteros)
	}else{
		resultado+="No hay mujeres."
	}
	alert(resultado);
  alert("tres");
}
