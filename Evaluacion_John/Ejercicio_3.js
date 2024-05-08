// Función para ordenar números de mayor a menor
const ordenarNumeros = (...numeros) => {
    return numeros.sort((a, b) => b - a);
};

// Función principal para solicitar números y mostrarlos en una tabla por consola
export const main = () => {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a ingresar: "));
    let numeros = [];
    
    for (let i = 0; i < cantidadNumeros; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
        numeros.push(numero);
    }
    
    // Llamar a la función para ordenar los números
    let numerosOrdenados = ordenarNumeros(...numeros);
    
    // Mostrar los números ordenados en una tabla
    console.log("Números ordenados de mayor a menor:");
    console.table(numerosOrdenados.map((numero, index) => ({ Numero: numero, Orden: index + 1 })));
};