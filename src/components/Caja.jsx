function Caja({ titulo, borderColor, children }) {
	return (
		<div className="card" style={{ border: borderColor }}>
			<h4 style={{ color: '#6366f1', marginBottom: '8px' }}>{titulo}</h4>
			{children}
		</div>
	)
}

export default Caja
