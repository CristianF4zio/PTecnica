
## Decisiones de Diseño

### 1. **Estructura Modular de Componentes**
   Para facilitar el mantenimiento y la escalabilidad, la aplicación está construida con un enfoque modular. Cada componente tiene su propia responsabilidad, y se agrupan de manera lógica en carpetas como **components** y **pages**.

   - **Componentes**: Los componentes reutilizables (como el encabezado y el pie de página) se encuentran en la carpeta `/components`. Estos se pueden importar y reutilizar en varias páginas o secciones.
   - **Páginas**: Las páginas de la aplicación (como la página de inicio y la página de contacto) se encuentran en la carpeta `/pages`, lo que facilita la navegación y el enrutamiento.

### 2. **Uso de CSS Tradicional**
   Se ha utilizado **CSS tradicional** para los estilos del proyecto. El enfoque de estilo es móvil primero y adaptativo, utilizando reglas de media queries para hacer el diseño responsivo.

   - **Estilo Responsivo**: Se han usado **media queries** para crear un diseño adaptable a pantallas de distintos tamaños (móviles, tabletas y escritorios).
   - **Personalización de Estilos**: Todos los estilos están definidos en el archivo `main.css`, donde se organiza el diseño general, los colores, los tamaños de fuente y los márgenes de forma coherente a lo largo del sitio.

### 3. **Navegación y Interactividad**
   - **Encabezado y Pie de Página**: El encabezado contiene la barra de navegación con enlaces a las páginas principales. El pie de página tiene información adicional, como contacto y enlaces sociales.
   - **Interactividad**: Se han utilizado interacciones sencillas con JavaScript, como efectos hover en los botones de navegación y formularios.

### 4. **Gestión del Contenido**
   - **Imágenes y Logotipos**: Los logotipos y las imágenes utilizadas en la aplicación se encuentran en la carpeta `/assets`. Las imágenes están optimizadas para tamaños adecuados, asegurando tiempos de carga rápidos.
   - **Fuentes**: Se utiliza la fuente **Outfit** para dar una apariencia moderna y legible al sitio, con un enfoque en la claridad y la simplicidad.

### 5. **Optimización para SEO**
   - **Estructura semántica**: El sitio utiliza etiquetas HTML semánticas como `<header>`, `<main>`, `<footer>`, y `<article>` para mejorar la accesibilidad y optimización en motores de búsqueda (SEO).
   - **Metaetiquetas**: Se han configurado adecuadamente las metaetiquetas en el archivo HTML para mejorar la visibilidad del sitio en los motores de búsqueda.

### 6. **Desempeño y Accesibilidad**
   - **Imágenes Responsivas**: Las imágenes se ajustan automáticamente según el tamaño de la pantalla para evitar cargas innecesarias en dispositivos con pantallas más pequeñas.
   - **Accesibilidad**: Se ha prestado atención a la accesibilidad, incluyendo un diseño con contraste adecuado, fuentes legibles, y el uso correcto de etiquetas ARIA para asegurar una experiencia inclusiva.

### 7. **Decisiones Técnicas**
   - **JavaScript**: Se ha utilizado **JavaScript** para crear componentes dinámicos y mejorar la interacción de la página con el usuario. La interacción incluye formularios de contacto y navegación entre páginas.
   - **Rendimiento**: Para asegurar un buen rendimiento, se ha optimizado la carga de imágenes y recursos mediante técnicas como el **lazy loading** y la reducción del tamaño de los archivos.

## Cómo Ejecutar el Proyecto
#   P r u e b a - - - I m p a c t a  
 