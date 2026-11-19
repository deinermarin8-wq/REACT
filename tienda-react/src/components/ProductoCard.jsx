function ProductoCard({ producto }) {
  const disponible = producto.stock > 0;

  return (
    <article className="producto-card">
      <h2>{producto.nombre}</h2>
      <p>Categoría: {producto.categoria}</p>
      <p className="producto-precio">
        Precio: ${producto.precio.toLocaleString('es-CO')}
      </p>
      <p>Stock: {producto.stock}</p>
      <strong className={disponible ? 'estado disponible' : 'estado agotado'}>
        {disponible ? 'Disponible' : 'Agotado'}
      </strong>
    </article>
  );
}

export default ProductoCard;
