function mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);

    if(edad>=13 && edad <=17){
        alert("Es adolescente.");
    }else{
        alert("No es adolescente.");
    }
}