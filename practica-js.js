const cuadrado = numero => numero * numero;

const esMayorEdad = edad => edad >= 18;

const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("El numero al cuadrado de 5 es: " + cuadrado(5));
console.log("¿Es mayor de edad?: " + esMayorEdad(20));
console.log("¿Es mayor de edad?: " + esMayorEdad(15));
console.log("Nombre completo: " + nombreCompleto("Juan", "Pérez"));