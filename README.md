# 🧩 Ejemplos de Props en React

Este proyecto contiene ejemplos prácticos y sencillos para comprender cómo utilizar **Props** (propiedades) en React, desarrollados sobre Vite.

## 📋 Lista de Ejemplos

En este repositorio encontrarás los siguientes ejemplos detallados:

1. **Ejemplo 1: Diferentes tipos de datos como props ([TarjetaProducto](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/TarjetaProducto.jsx))**
   - Muestra cómo pasar datos de tipo *string*, *number*, *boolean*, *array* y *objeto* desde un componente padre a un componente hijo para personalizar la visualización de un producto.

2. **Ejemplo 2: Pasar una función como prop ([BotonAccion](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/BotonAccion.jsx))**
   - Ilustra cómo pasar funciones o callbacks como props. Permite que el componente hijo ejecute una acción sin conocer su lógica interna (la cual es definida y controlada por el padre).

3. **Ejemplo 3: Valores por defecto en props ([Avatar](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/Avatar.jsx))**
   - Enseña cómo definir y utilizar valores predeterminados (default props) cuando no se suministran ciertos valores desde el padre (como el tamaño o el color de fondo).

4. **Ejemplo 4: La prop especial `children` ([Caja](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/Caja.jsx))**
   - Explica el uso de la propiedad especial `children` para anidar y envolver componentes u otros elementos HTML dentro de un componente contenedor.

5. **Ejemplo 5: Renderizado condicional basado en props ([Alerta](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/Alerta.jsx))**
   - Demuestra cómo alterar dinámicamente la apariencia y el estilo de un componente (en este caso una alerta de éxito, error, info o advertencia) dependiendo del valor de una prop (`tipo`).

6. **Ejemplo 6: Spread de props ([InputPersonalizado](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/InputPersonalizado.jsx))**
   - Presenta cómo propagar de forma masiva y limpia múltiples propiedades nativas de HTML hacia elementos internos mediante la sintaxis del operador de propagación (`...props`).

7. **Ejemplo 7: Composición de componentes ([ListaUsuarios](file:///Users/sebastiansperandio/Work/CURSOS/REACT/EXAMPLES/PROPS-EXAMPLES/src/components/ListaUsuarios.jsx))**
   - Enseña cómo construir componentes más complejos combinando otros componentes (como renderizar una lista dinámica de usuarios reutilizando el componente `Avatar` y gestionando clics en cada uno).

---

## ⚙️ Cómo poner en funcionamiento este proyecto en local

Sigue estos sencillos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Crea una carpeta en tu máquina** en la ubicación que prefieras.
2. **Abre tu terminal** y clona este repositorio usando Git:
   ```bash
   git clone git@github.com:sebastiansperandio/ejemplos-props.git
   ```
   *(O bien, utiliza la URL HTTPS si no tienes configurado SSH):*
   ```bash
   git clone https://github.com/sebastiansperandio/ejemplos-props.git
   ```
3. **Accede al directorio** del proyecto clonado:
   ```bash
   cd ejemplos-props
   ```
   *(Nota: Asegúrate de estar en la carpeta raíz del proyecto que contiene el archivo `package.json`).*
4. **Instala Node.js**: Asegúrate de tener instalada la última versión estable (LTS) de Node.js. Puedes comprobar tu versión con:
   ```bash
   node -v
   ```
5. **Instala las dependencias** del proyecto:
   ```bash
   npm install
   ```
6. **Inicia el servidor de desarrollo** local:
   ```bash
   npm run dev
   ```
7. Abre tu navegador en la dirección indicada por la consola (generalmente `http://localhost:5173`) para interactuar con los ejemplos.
