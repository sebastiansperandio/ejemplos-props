import Avatar from './Avatar'

function ListaUsuarios({ usuarios, onSeleccionar }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {usuarios.map((u) => (
        <li
          key={u.id}
          style={{ padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }}
          onClick={() => onSeleccionar(u)}
        >
          <Avatar nombre={u.nombre} tamaño={36} colorFondo={u.color} />
          <strong>{u.nombre}</strong> — {u.rol}
        </li>
      ))}
    </ul>
  )
}

export default ListaUsuarios
