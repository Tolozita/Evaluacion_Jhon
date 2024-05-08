export function Ingresar_Numeros(NumerosL) {
    let VectorNum = [];
    for (let i = 0; i < NumerosL; i++) {
        let Numeros = prompt("Ingrese el numero " + (i + 1));
        VectorNum.push(Number(Numeros)); // Convertir el valor ingresado a número antes de almacenarlo en el vector
    }
    return VectorNum; // Retorna el vector con los números ingresados
}

export function Operaciones(VectorNum) {
    let operacion = prompt("Ingrese la Operacion a Realizar\n(1.Suma)\n(2.Contar Numeros Primos)\n(3.Contar Numeros Pares)\n(4.Calcular Promedio de los Numeros Primos)\n(5.Calcular Promedio de los Numeros Pares");

    if (operacion == 1 || operacion.toLowerCase() === "suma") { // Utilizamos toLowerCase() para permitir que el usuario escriba "suma" en minúsculas
        let suma = 0;
        for (let i = 0; i < VectorNum.length; i++) {
            suma += VectorNum[i]; // Utilizamos VectorNum 
        }
        alert("La suma de los números es: " + suma); // Concatenamos la suma con el mensaje de alerta
    }
    if (operacion == 2 || operacion.toLowerCase() === "Contar Numeros Primos") { // Permitimos que el usuario escriba "primos" en minúsculas
        let cantidadPrimos = 0;
        for (let i = 0; i < VectorNum.length; i++) {
            if (esPrimo(VectorNum[i])) { // Llamamos a la función esPrimo para verificar si el número es primo
                cantidadPrimos++;
            }
        }
        alert("La cantidad de números primos en el vector es: " + cantidadPrimos);
    }

    if (operacion == 3 || operacion.toLowerCase() === "Contar Numeros Pares") { // Permitimos que el usuario escriba "pares" en minúsculas
        let cantidadPares = 0;
        for (let i = 0; i < VectorNum.length; i++) {
            if (VectorNum[i] % 2 === 0) { // Verificamos si el número es par
                cantidadPares++;
            }
        }
        alert("La cantidad de números pares en el vector es: " + cantidadPares);
    }

    if (operacion == 4 || operacion.toLowerCase() === "Calcular Promedio de los Numeros Primos") { // Permitimos que el usuario escriba "promedio de numeros primos" en minúsculas
        let sumaPrimos = 0;
        let cantidadPrimos = 0;
        for (let i = 0; i < VectorNum.length; i++) {
            if (esPrimo(VectorNum[i])) { // Llamamos a la función esPrimo para verificar si el número es primo
                sumaPrimos += VectorNum[i];
                cantidadPrimos++;
            }
        }
        if (cantidadPrimos === 0) {
            alert("No hay números primos en el vector para calcular el promedio.");
        } else {
            let promedioPrimos = sumaPrimos / cantidadPrimos;
            alert("El promedio de los números primos en el vector es: " + promedioPrimos);
        }
    }



    if (operacion == 5 || operacion.toLowerCase() === "Calcular Promedio de los Numeros Pares") { // Permitimos que el usuario escriba "promedio de numeros pares" en minúsculas
        let sumaPares = 0;
        let cantidadPares = 0;
        for (let i = 0; i < VectorNum.length; i++) {
            if (VectorNum[i] % 2 === 0) { // Verificamos si el número es par
                sumaPares += VectorNum[i];
                cantidadPares++;
            }
        }
        if (cantidadPares === 0) {
            alert("No hay números pares en el vector para calcular el promedio.");
        } else {
            let promedioPares = sumaPares / cantidadPares;
            alert("El promedio de los números pares en el vector es: " + promedioPares);
        }
    }


    
    // Función para verificar si un número es primo
    function esPrimo(num) {
        if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
        if (num <= 3) return true; // 2 y 3 son primos
    
        // Verificamos si el número es divisible por cualquier número entre 2 y su raíz cuadrada
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // Si es divisible, no es primo
        }
    
        return true; // Si no es divisible por ningún número, es primo
    }

}

