
function mostrar()
{
    //Pedimos el ancho
    var ancho = parseInt(prompt("Ingrese el ancho: "));
    //Validamos el ingreso del usuario.
    while(!IsAPositiveNumber(ancho)){
        ancho = parseInt(prompt("Ingrese el ancho: "));
    }
    //Pedimos el largo
    var largo = parseInt(prompt("Ingrese el largo: "));
    //Validamos el ingreso del usuario.
    while(!IsAPositiveNumber(largo)){
        largo = parseInt(prompt("Ingrese el largo: "));
    }
    //Calculamos el perimetro
    var perimetro = 2*largo + 2*ancho;

    alert("El perimetro es: "+ perimetro)
}

function IsAPositiveNumber(number){
    return (!isNaN(number) && parseInt(number) > 0);
}