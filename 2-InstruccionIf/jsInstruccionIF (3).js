function mostrar()
{
    var edad = parseInt(document.getElementById("edad").value);

    if( edad >=18){
        alert("Es mayor de edad");
    }else{
        alert("Es menor de edad");
    }
}