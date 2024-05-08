export function ValidarTarjeta_Filtro1(numtarjet) {
    // let numtarjet = prompt("Ingrese el numero de la Tarjeta de crédito");

    // Expresión regular para validar que numtarjet contenga solo números dese el inicio hasta el final 
    let regex = /^[0-9]+$/;

    // Almacena el resultado de regex.test() en una variable
    let Tarjet_f1 = regex.test(numtarjet);

    if (Tarjet_f1) {
        // Si la tarjeta pasa la validación básica
        if(numtarjet.length > 16) {
            alert("El número de caracteres permitidos es 16.");
        } else if (numtarjet.length === 15 && (numtarjet.startsWith("34") || numtarjet.startsWith("37"))) {
            alert("Tarjeta American Express Aceptada");
        } else if ((numtarjet.length === 14 && (numtarjet.startsWith("300") || numtarjet.startsWith("301") || numtarjet.startsWith("302") || numtarjet.startsWith("303") || numtarjet.startsWith("304") || numtarjet.startsWith("305") || (numtarjet.startsWith("36") || numtarjet.startsWith("38"))))) {
            alert("Tarjeta Diners Club Aceptada");
        } else if (numtarjet.length === 16 && numtarjet.startsWith("6011")) {
            alert("Tarjeta Discover Aceptada");
        } else if (numtarjet.length === 16 && (numtarjet.startsWith("51") || numtarjet.startsWith("52") || numtarjet.startsWith("53") || numtarjet.startsWith("54") || numtarjet.startsWith("55"))) {
            alert("Tarjeta Mastercard Aceptada");
        } else if (numtarjet.length === 16 && numtarjet.startsWith("4")) {
            alert("Tarjeta Visa Aceptada");
        } else {
            alert("El número de la tarjeta no coincide con ninguna tarjeta válida.");
        }
    } 
    else {
        // Si no son todos números, mostrar un mensaje de error
        alert("Por favor, ingresa solo números positivos.");
    }
}
