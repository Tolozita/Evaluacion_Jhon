// Función para encontrar la palabra más larga entre las ingresadas
const encontrarPalabraMasLarga = (...palabras) => {
    let palabraMasLarga = "";
    palabras.forEach(palabra => {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    });
    return palabraMasLarga;
};

// Función principal para solicitar palabras y encontrar la más larga
export const main = () => {
    let cantidadPalabras = parseInt(prompt("Ingrese la cantidad de palabras a ingresar: "));
    let palabras = [];
    
    for (let i = 0; i < cantidadPalabras; i++) {
        let palabra = prompt(`Ingrese la palabra ${i + 1}: `);
        palabras.push(palabra);
    }
    
    // Llamar a la función para encontrar la palabra más larga
    let palabraMasLarga = encontrarPalabraMasLarga(...palabras);
    
    // Mostrar la palabra más larga
    console.log(`La palabra más larga ingresada es: ${palabraMasLarga}`);
};