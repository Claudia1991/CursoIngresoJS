function mostrar() {
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre": {
            alert("Este mes tiene 30 días.");
            break;
        }
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        case "Julio": {
            alert("Este mes tiene 31 días.");
            break;
        }
        case "Febrero":{
            alert("Este mes tiene 28 días.");
            break;
        }
    }
}