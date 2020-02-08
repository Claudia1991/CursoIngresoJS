//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{

	var nombreAlumno = prompt("Ingrese su nombre:","");
    var edadAlumno = prompt("Ingrese su edad:","");
    
	//  nombreAlumno = "Claudia";
	
	//  edadAlumno = "28";

	var mensaje = "Soy " + nombreAlumno + " y tengo " + edadAlumno +" años."; 

	alert(mensaje);
}

