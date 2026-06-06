function Alerta({ tipo, mensaje }) {
  const estilos = {
    info:    { background: '#dbeafe', color: '#1e40af', border: '1px solid #93c5fd' },
    exito:   { background: '#dcfce7', color: '#166534', border: '1px solid #86efac' },
    error:   { background: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' },
    warning: { background: '#fef9c3', color: '#854d0e', border: '1px solid #fde047' },
  }

  const iconos = { info: 'ℹ️', exito: '✅', error: '❌', warning: '⚠️' }

  return (
    <div style={{ ...estilos[tipo], padding: '10px 16px', borderRadius: '8px', marginBottom: '8px' }}>
      {iconos[tipo]} {mensaje}
    </div>
  )
}

export default Alerta
