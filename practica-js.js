const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Ram-12GB', precio: 600000, categoria: 'Memorias', stock: 10 },
{ id: 5, nombre: 'Disco-SSD', precio: 400000, categoria: 'Almacenamiento', stock: 2 },
{ id: 6, nombre: 'Disco-HDD', precio: 300000, categoria: 'Almacenamiento', stock: 0 },
{ id: 7, nombre: 'Placa de video', precio: 1200000, categoria: 'Tarjetas graficas', stock: 1 },
{ id: 8, nombre: 'Fuente de poder', precio: 250000, categoria: 'Componentes', stock: 4 },
{ id: 9, nombre: 'Manos libres', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 10, nombre: 'Auriculares', precio: 150000, categoria: 'Perifericos', stock: 6 }
];
const hayAgotados = productos.some(producto => producto.stock === 0);
const preciosValidos = productos.every(producto => producto.precio > 0);
const valorInventario = productos.reduce(
(total, producto) => total + producto.precio * producto.stock,
0
);
console.log("¿Existe algún producto agotado?", hayAgotados);
console.log("¿Existe algún producto con precio mayor a $1.000.000?", productos.some(producto => producto.precio > 1000000));
console.log("¿Todos los productos tienen precio mayor que cero?", preciosValidos);
console.log("¿Todos los productos tienen stock mayor o igual que cero?", productos.every(producto => producto.stock >= 0));
console.log("Calcular el valor total del inventario:", valorInventario);