/**
 * Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
 */
function mostrar() {
    //Variables
    var nombreIngresado;
    var pesoIngresado;
    var temperaturaIngresado;
    var resultado = "";
    var cantidadTemperaturasPares = 0;
    var nombreMasPesado;
    var temperaturaMasPesado;
    var pesoMasPesado;
    var cantidadAnimalesMenosDeCeroGrados = 0;
    var acumuladorPesoAnimales = 0;
    var cantidadAnimales = 0;
    var pesoMinimo;
    var pesoMaximo;
    var esPrimerAnimalBajoCero = true;
    var esPrimerAnimalMasPesado = true;

    //Ingreso de datos
    do {
        nombreIngresado = prompt("Ingrese el nombre del animal:");
        pesoIngresado = prompt("Ingrese el peso del animal(entre 1 y 1000):");
        while (!EsPesoValido(pesoIngresado)) {
            pesoIngresado = prompt("ERROR: Ingrese el peso del animal(entre 1 y 1000):");
        }
        temperaturaIngresado = prompt("Ingrese la temperatura del habitat(entre -30 y 30):");
        while (!EsTemperaturaValida(temperaturaIngresado)) {
            temperaturaIngresado = prompt("ERROR: Ingrese la temperatura del habitat(entre -30 y 30):");
        }
        //Parseo de datos
        pesoIngresado = parseInt(pesoIngresado);
        temperaturaIngresado = parseInt(temperaturaIngresado);
        //Analisis de datos
        if (temperaturaIngresado != 0 && temperaturaIngresado % 2 === 0) {
            //a) La cantidad de temperaturas pares. ¡NO! tomo el cero como par
            cantidadTemperaturasPares++;
        }
        //d) El promedio del peso de todos los animales.
        acumuladorPesoAnimales += pesoIngresado;
        cantidadAnimales++;
        /**
        c) La cantidad de animales que viven a menos de 0 grados.
        f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
        */
        if (temperaturaIngresado < 0) {
            cantidadAnimalesMenosDeCeroGrados++;
            if (esPrimerAnimalBajoCero) {
                pesoMaximo = pesoIngresado;
                pesoMinimo = pesoIngresado;
                esPrimerAnimalBajoCero = false;
            } else {
                if (pesoMaximo < pesoIngresado) {
                    pesoMaximo = pesoIngresado;
                }
                if (pesoMinimo > pesoIngresado) {
                    pesoMinimo = pesoIngresado;
                }
            }
        }
        if (esPrimerAnimalMasPesado || pesoIngresado > pesoMasPesado) {
            //b) El nombre y temperatura del animal más pesado
            esPrimerAnimalMasPesado = false;
            nombreMasPesado = nombreIngresado;
            temperaturaMasPesado = temperaturaIngresado;
            pesoMasPesado = pesoIngresado;
        }
        //Re ingreso de datos
    } while (confirm("¿Desea seguir ingresando?"));

    //Armado de resultado para mostrar en pantalla
    resultado += "La cantidad de temperaturas pares: " + cantidadTemperaturasPares + "<br>";
    resultado += "El nombre y temperatura del animal más pesado: " + nombreMasPesado + " " + temperaturaMasPesado + " °C <br>";
    resultado += "La cantidad de animales que viven a menos de 0 grados: " + cantidadAnimalesMenosDeCeroGrados + "<br>";
    resultado += cantidadAnimales == 0 ? "No se puede calcular el promedio del peso de todos los animales. <br>" : "El promedio del peso de todos los animales:" + (acumuladorPesoAnimales / cantidadAnimales).toFixed(2) + "<br>";
    resultado += "El peso máximo: " + pesoMaximo + " y el mínimo:" + pesoMinimo + " de todos los animales cuyas temperaturas sean bajo cero.<br>";

    document.write(resultado);
}

function EsPesoValido(peso) {
    return !isNaN(peso) && (parseInt(peso) >= 1 && parseInt(peso) <= 1000);
}

function EsTemperaturaValida(temperatura) {
    return !isNaN(temperatura) && (parseInt(temperatura) >= -30 && parseInt(temperatura) <= 30);
}