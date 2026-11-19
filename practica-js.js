const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Periféricos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Periféricos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'RAM 12 GB', precio: 600000, categoria: 'Memorias', stock: 10 },
  { id: 5, nombre: 'Disco SSD', precio: 400000, categoria: 'Almacenamiento', stock: 2 },
  { id: 6, nombre: 'Disco HDD', precio: 300000, categoria: 'Almacenamiento', stock: 0 },
  { id: 7, nombre: 'Placa de video', precio: 1200000, categoria: 'Tarjetas gráficas', stock: 1 },
  { id: 8, nombre: 'Fuente de poder', precio: 250000, categoria: 'Componentes', stock: 4 },
  { id: 9, nombre: 'Manos libres', precio: 90000, categoria: 'Periféricos', stock: 0 },
  { id: 10, nombre: 'Auriculares', precio: 150000, categoria: 'Periféricos', stock: 6 }
];

// 12.1 Template literals
console.log('\n--- 12.1 Template literals ---');
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

// 12.2 Desestructuración
console.log('\n--- 12.2 Desestructuración ---');
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

// 12.3 Spread: crear una copia sin modificar el producto original.
const productoActualizado = {
  ...productos[0],
  stock: 8
};

// 12.4 Operador ternario
console.log('\n--- 12.4 Operador ternario ---');
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

// Reto: cambiar precio y stock en una copia y mostrar su estado.
console.log('\n--- Tarea Reto 8 ---');
const copiaProducto = {
  ...productos[2], // El monitor tiene stock original de 3.
  precio: 420000,
  stock: 4
};

console.log(
  `El producto ${copiaProducto.nombre} ahora tiene un precio de $${copiaProducto.precio} y está ${copiaProducto.stock > 0 ? 'Disponible' : 'Agotado'}`
);
console.log('Producto original sin cambios:', productos[2]);

// Busca por ID. Devuelve undefined si no encuentra coincidencias.
function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log('\n--- Búsqueda de producto ---');
console.log(buscarProducto(3));
