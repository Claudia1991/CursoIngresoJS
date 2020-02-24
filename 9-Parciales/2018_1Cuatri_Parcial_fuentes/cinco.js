function mostrar() {
    /**
     * pedir el ingreso de un planeta del sistema solar
    Si es la tierra mostrar "acá vivimos".
    Si está más cerca del sol, "acá hace más calor".
    Si está más lejos del sol, "acá hace más frio".
    Si no es un planeta valido informarlo.
    Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
    Mercurio.
    Venus.
    Tierra.
    Marte.
    Júpiter.
    Saturno.
    Urano.
    Neptuno.
     */
    //Declaracion de variables e ingreso de datos.
    var planetaIngresado = prompt("Ingrese un planeta del sistema solar: ");
    switch (planetaIngresado) {
        case "Mercurio":
        case "Venus":
            alert("Aca hace mas calor.");
            break;
        case "Tierra":
            alert("Aca vivimos.");
            break;
        case "Marte":
        case "Júpiter":
        case "Saturno":
        case "Urano":
        case "Neptuno":
            alert("Aca hace mas frio.");
            break;
        default:
            alert("No es un planeta valido.");
            break;
    }
}