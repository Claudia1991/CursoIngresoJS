/**
 * Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra (validar que sea una letra sin caracteres especiales ni ñ. 
No distinguir mayúsculas de minúsculas. Ayuda: Utilizar tabla ASCII.), 
y un número entre -10 y 10 (validar que sea un número en ese rango) 
hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La resta de los números impares.
b) La suma de los números pares.
c) La cantidad de ceros.
d) El promedio de todos los números negativos ingresados.
e) La multiplicación de todos los números positivos.
f) El número y la letra del máximo.
g) El número y la letra del mínimo.
h) La cantidad de vocales.

!!! Cero no es par, ni impar, ni positivo, ni negativo.!!!
 */
function mostrar() {
    //Declaracion de variables
    var restaNumerosImpares=0;
    var sumaNumerosPares=0;
    var cantidadDeCeros=0;
    var cantidadNumerosNegativos=0;
    var sumaNumerosNegativos=0;
    var multiplicacionNumerosPositivos=1;
    var cantidadVocales=0;
    var numeroMaximo;
    var letraMaximo;
    var numeroMinimo;
    var letraMinimo;
    var isFirstCharge=true;
    var respuesta = "";
}

function IsValidChar(char){
    return /^[a-zA-Z]+$/.test(char);
}

function IsVowel(char){
    return /^[a-e-i-o-u-A-E-I-O-U]+$/.test(char);
}
function IsValidNumber(number){
    return !isNaN(number) && parseInt(number)>=-10 && parseInt(number) <=10;  
}