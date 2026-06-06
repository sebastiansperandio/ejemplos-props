function TarjetaProducto({ nombre, precio, disponible, categorias, detalle }) {
	return (
		<div className="card">
			<h3>{nombre}</h3>
			<p>Precio: <strong>${precio}</strong></p>

			<p>Estado: {disponible ? '✅ Disponible' : '❌ Sin stock'}</p>

			<p>Categorías: {categorias.join(', ')}</p>

			<p>Origen: {detalle.pais} — Marca: {detalle.marca}</p>
		</div>
	)
}

export default TarjetaProducto
