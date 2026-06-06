import './App.css'
import TarjetaProducto from './components/TarjetaProducto'
import BotonAccion from './components/BotonAccion'
import Avatar from './components/Avatar'
import Caja from './components/Caja'
import Alerta from './components/Alerta'
import InputPersonalizado from './components/InputPersonalizado'
import ListaUsuarios from './components/ListaUsuarios'

const usuarios = [
	{ id: 1, nombre: 'Ana García', rol: 'Frontend Dev', color: '#ec4899' },
	{ id: 2, nombre: 'Carlos López', rol: 'Backend Dev', color: '#f97316' },
	{ id: 3, nombre: 'María Torres', rol: 'UX Designer', color: '#14b8a6' },
]

function App() {

	function handleAccion(accion) {
		alert(`Ejecutaste: ${accion}`)
	}

	function handleSeleccionarUsuario(usuario) {
		alert(`Seleccionaste a: ${usuario.nombre} (${usuario.rol})`)
	}

	return (
		<main style={{ maxWidth: '700px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
			<h1>🧩 Ejemplos de Props en React</h1>

			{/* ── Ejemplo 1 ── */}
			<section>
				<h2>Ejemplo 1 — Diferentes tipos de datos como props</h2>
				<p style={{ color: '#555' }}>
					Se puede pasar <em>string</em>, <em>number</em>, <em>boolean</em>, <em>array</em> y <em>objeto</em> como props.
				</p>
				<TarjetaProducto
					nombre="Teclado Mecánico RGB"
					precio={129.99}
					disponible={true}
					categorias={['Periféricos', 'Gaming', 'Oficina']}
					detalle={{ pais: 'China', marca: 'Keychron' }}
				/>
				<TarjetaProducto
					nombre="Mouse Inalámbrico"
					precio={49.99}
					disponible={false}
					categorias={['Periféricos']}
					detalle={{ pais: 'Japón', marca: 'Logitech' }}
				/>
			</section>

			<hr />

			{/* ── Ejemplo 2 ── */}
			<section>
				<h2>Ejemplo 2 — Pasar una función como prop</h2>
				<p style={{ color: '#555' }}>
					El componente hijo no sabe qué hace <code>onClick</code>; eso lo decide el padre.
				</p>
				<BotonAccion etiqueta="Guardar" color="#22c55e" onClick={() => handleAccion('Guardar')} />
				<BotonAccion etiqueta="Eliminar" color="#ef4444" onClick={() => handleAccion('Eliminar')} />
				<BotonAccion etiqueta="Compartir" color="#3b82f6" onClick={() => handleAccion('Compartir')} />
			</section>

			<hr />

			{/* ── Ejemplo 3 ── */}
			<section>
				<h2>Ejemplo 3 — Valores por defecto en props</h2>
				<p style={{ color: '#555' }}>
					Si no se pasa <code>tamaño</code> o <code>colorFondo</code>, el componente usa valores por defecto.
				</p>
				<Avatar nombre="Juan Pérez" />
				<Avatar nombre="Laura Martínez" tamaño={80} colorFondo="#f97316" />
				<Avatar nombre="Roberto Silva" tamaño={50} colorFondo="#14b8a6" />
			</section>

			<hr />

			{/* ── Ejemplo 4 ── */}
			<section>
				<h2>Ejemplo 4 — La prop especial "children"</h2>
				<p style={{ color: '#555' }}>
					<code>children</code> es el contenido que ponemos <em>entre</em> las etiquetas del componente.
				</p>
				<Caja titulo="Información del sistema" borderColor="2px solid #16f93cff">
					<Avatar nombre="Laura Martínez" tamaño={80} colorFondo="#f97316" />
				</Caja>
				<Caja titulo="Aviso importante" borderColor="2px solid #ef4444">
					<Alerta tipo="info" mensaje="El proceso puede tardar unos minutos." />
				</Caja>
			</section>

			<hr />

			{/* ── Ejemplo 5 ── */}
			<section>
				<h2>Ejemplo 5 — Rendering condicional basado en props</h2>
				<p style={{ color: '#555' }}>
					El mismo componente <code>&lt;Alerta&gt;</code> cambia su aspecto según el valor de <code>tipo</code>.
				</p>
				<Alerta tipo="info" mensaje="El proceso puede tardar unos minutos." />
				<Alerta tipo="exito" mensaje="Los cambios fueron guardados correctamente." />
				<Alerta tipo="error" mensaje="Ocurrió un error al procesar la solicitud." />
				<Alerta tipo="warning" mensaje="Estás a punto de eliminar datos permanentemente." />
			</section>

			<hr />

			{/* ── Ejemplo 6 ── */}
			<section>
				<h2>Ejemplo 6 — Spread de props</h2>
				<p style={{ color: '#555' }}>
					Con <code>...inputProps</code> podemos reenviar props al elemento nativo sin listarlas una por una.
				</p>
				<InputPersonalizado label="Nombre" type="text" placeholder="Ingresá tu nombre" />
				<InputPersonalizado label="Email" type="email" placeholder="correo@ejemplo.com" />
				<InputPersonalizado label="Contraseña" type="password" placeholder="••••••••" />
			</section>

			<hr />

			{/* ── Ejemplo 7 ── */}
			<section>
				<h2>Ejemplo 7 — Composición de componentes</h2>
				<p style={{ color: '#555' }}>
					<code>ListaUsuarios</code> recibe un array y un callback; él se encarga de renderizar cada ítem usando <code>Avatar</code>.
				</p>
				<ListaUsuarios usuarios={usuarios} onSeleccionar={handleSeleccionarUsuario} />
			</section>
		</main>
	)
}

export default App
