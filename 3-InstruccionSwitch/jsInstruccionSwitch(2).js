function mostrar() {
    /*Meses del año:
    Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre */
    var mesDelAño = document.getElementById("mes").value;
    //alert(mesDelAño);

    switch (mesDelAño){
        case "Enero": 
        case "Febrero": 
        case "Marzo": 
        case "Abril": 
        case "Mayo": 
        case "Junio" :{
            alert("Aun falta para el invierno!");
            break;
        }
        case "Julio": 
        case "Agosto" :{
            alert("Abrigate que hace frio..!");
            break;
        }
        case "Septiembre": 
        case "Octubre": 
        case "Noviembre": 
        case "Diciembre" :{
            alert("Ya pasamos el invierno..!");
            break;
        }
    }
}