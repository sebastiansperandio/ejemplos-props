function InputPersonalizado({ label, ...inputProps }) {
	return (
		<div style={{ marginBottom: '10px' }}>
			<label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>{label}</label>
			{/* Con "...inputProps" le pasamos todas las props restantes al <input> */}
			<input
				{...inputProps}
				style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #ccc', width: '260px' }}
			/>
		</div>
	)
}

export default InputPersonalizado
