/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numeroUno ;
var numeroDos;
var resultado;
function obtenerNumeros(){
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
}

function sumar()
{
    obtenerNumeros();	
    resultado = numeroUno + numeroDos;
    alert("El resultado es: " + resultado);
}

function restar()
{
    obtenerNumeros();
    resultado = numeroUno - numeroDos;
    alert("El resultado es: " + resultado);
}

function multiplicar()
{ 
    obtenerNumeros();
    resultado = numeroUno * numeroDos;
    alert("El resultado es: " + resultado);
}

function dividir()
{
    obtenerNumeros();
    resultado = numeroUno / numeroDos;
    alert("El resultado es: " + resultado);
}

