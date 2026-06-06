function BotonAccion({ etiqueta, color, onClick }) {


	return (
		<button
			style={{ backgroundColor: color, color: '#fff', margin: '4px', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
			onClick={onClick}
		>
			{etiqueta}
		</button>
	)
}

export default BotonAccion
/* SINO PASARAMOS LA FUNCION COMO PROP EL BOTON SOLO SERVIRIA PARA UNA COSA,  */
/* Pro ejemplo este boton que no recibe como prop una funcion, solo sirve para guardar. */
/* Si querriamos uno que elimine, necesitariamos otro componente */
/* 
function BotonAccion({ etiqueta }) {
  return (
	<button onClick={() => alert('Guardar')}>
	  {etiqueta}
	</button>
  )
}

*/

/* SIN EMBARGO, pasando una funcion como props, el componente padre es el que decide que hace el boton */
/* 
<BotonAccion etiqueta="Guardar"   onClick={() => guardarDatos()} />
<BotonAccion etiqueta="Eliminar"  onClick={() => eliminarItem(id)} />
<BotonAccion etiqueta="Compartir" onClick={() => abrirModal()} />
*/
/* La idea central es: BotonAccion sabe cómo verse y que es clickeable, pero no sabe qué debe pasar cuando se hace click — eso es responsabilidad del padre */