function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return("No se puede dividir por cero");
    }
    return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

console.log("suma de 7 + 3 = " + sumar(7, 3));
console.log("resta de 7 - 3 = " + restar(7, 3));
console.log("multiplicación de 7 * 3 = " + multiplicar(7, 3));
console.log("división de 7 / 3 = " + dividir(7, 3));
console.log("división de 7 / 0 = " + dividir(7, 0));
console.log("promedio de 7, 8 y 9 = " + calcularPromedio(7, 8, 9));