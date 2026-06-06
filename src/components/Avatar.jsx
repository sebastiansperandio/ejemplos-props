function Avatar({ nombre, tamaño = 64, colorFondo = '#6366f1' }) {
	const iniciales = nombre
		.split(' ')
		.map((p) => p[0])
		.join('')
		.toUpperCase()

	return (
		<div
			style={{
				width: tamaño,
				height: tamaño,
				borderRadius: '50%',
				backgroundColor: colorFondo,
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
				fontWeight: 'bold',
				fontSize: tamaño / 2.8,
				margin: '8px',
			}}
		>
			{iniciales}
		</div>
	)
}

export default Avatar
