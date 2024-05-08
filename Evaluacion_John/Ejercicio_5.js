// Módulo Calculadora
class Calculadora {
    // Método para sumar dos números
    suma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos operandos deben ser números');
        }
        return num1 + num2;
    }

    // Método para restar dos números
    resta(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos operandos deben ser números');
        }
        return num1 - num2;
    }

    // Método para multiplicar dos números
    multiplicacion(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos operandos deben ser números');
        }
        return num1 * num2;
    }

    // Método para dividir dos números
    division(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos operandos deben ser números');
        }
        if (num2 === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return num1 / num2;
    }
}

// Exportar la clase Calculadora
export default Calculadora;