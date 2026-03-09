# 🚀 Análisis Técnico: Portafolio VicWithGG

Este proyecto es una aplicación web de alto rendimiento construida con Astro, diseñada bajo un enfoque modular, basado en datos y con una interfaz moderna y responsiva.

## 🛠️ Tecnologías Principales

- Framework: Astro (<https://astro.build/>) (v4+)
- Estilos: Tailwind CSS (<https://tailwindcss.com/>)
- Tipado: TypeScript
- Iconografía: Componentes Astro de SVGs optimizados.
- Fuentes: @fontsource-variable (Inter y Onest).

## 📂 Estructura de la Carpeta src/

La arquitectura sigue el patrón de diseño de Astro, separando la lógica de datos, los componentes reutilizables y las páginas estáticas.

1. assets/ (Recursos Estáticos y Lógica de Cliente)

- `css/main.css`: Configura Tailwind CSS. Define variables de marca (CSS Variables) para colores primarios y el esquema de color adaptativo (Light/Dark mode). Incluye animaciones personalizadas como rising y setting para el toggle de tema.
- `js/main.js`: Contiene la lógica interactiva del lado del cliente. Implementa:
- Sticky Header: Cambia estilos al hacer scroll.
- Dark Mode: Sincronización con localStorage y preferencias del sistema.
- Back to Top: Visibilidad vinculada a la posición del scroll.
- Throttling: Optimización de rendimiento para eventos de scroll.

1. collections/ (Capa de Datos JSON)
   El portafolio es data-driven. El contenido no está "hardcodeado" en el HTML, sino que se inyecta desde archivos JSON, lo que facilita el mantenimiento:

- projects.json, experiences.json, stack.json, certificates.json, education.json.
- Permite que los componentes de Astro mapeen estos arreglos para generar la interfaz dinámicamente.

  1. components/ (Componentes de Interfaz)
     Organizados por responsabilidad:

- `icons/`: Una extensa librería de iconos (React, Astro, Tailwind, Figma, etc.) encapsulados como componentes Astro para manipulación directa de clases CSS.
- `sections/`: Bloques principales de la página:

  - About.astro: Biografía y contacto.
  - Experience.astro: Línea de tiempo laboral.
  - Projects.astro: Grid de proyectos con etiquetas tecnológicas.
  - Stack.astro: Visualización de habilidades agrupadas por categorías.
  - `home/`: Componentes específicos para la página de aterrizaje (Separadores, resúmenes).
  - `shared/`: Utilidades globales como BackToTop.astro y SectionContainer.astro (que asegura un ancho máximo consistente).
  - Atómicos: Button.astro, Card.astro, Badge.astro.

  1. layouts/ (Plantillas de Estructura)

  - `Layout.astro`: El contenedor principal. Gestiona el SEO (vía MainHead.astro), los scripts globales, la Navbar y el Footer.
  - `section.astro`: Un layout especializado para secciones que implementa un ScrollSpy (vía IntersectionObserver) para resaltar automáticamente el enlace activo en la navegación mientras el usuario se desplaza.

  1. pages/ (Rutas)

  - `index.astro`: Punto de entrada principal. Orquesta todas las secciones del portafolio dentro del Layout, definiendo el orden y los metadatos SEO específicos de la Home.

  1. utils/ (Utilidades)

  - `navigation.ts`: Centraliza los enlaces de la barra de navegación y las redes sociales.
  - `ui.ts`: Maneja configuraciones menores de la interfaz (como strings de idiomas).

  ***

  ⚙️ Características Técnicas Destacadas

  🌑 Dark Mode Avanzado
  Implementado mediante una clase .dark en el <html>. Se evita el "flash" de contenido blanco mediante un script is:inline en el MainHead que verifica el tema antes de que se renderice el body.

  📊 SEO y Metadatos
  El componente MainHead.astro centraliza la lógica de Open Graph, Twitter Cards y datos estructurados en formato JSON-LD, asegurando que el portafolio sea indexable y se comparta profesionalmente en redes sociales.  
  El componente MainHead.astro centraliza la lógica de Open Graph, Twitter Cards y datos estructurados en formato JSON-LD, asegurando que el portafolio sea indexable y se comparta profesionalmente en redes sociales.

  ⚡ Rendimiento (Performance)
  ⚡ Rendimiento (Performance)

  - Uso de Astro Assets para la optimización de imágenes (.webp).
  - Carga de fuentes variables para reducir peticiones HTTP.
  - Mínimo uso de JavaScript en el cliente, priorizando el renderizado estático.
  - Carga de fuentes variables para reducir peticiones HTTP.
  - Mínimo uso de JavaScript en el cliente, priorizando el renderizado estático.

  - Mínimo uso de JavaScript en el cliente, priorizando el renderizado estático.

  ***

  Estado del Proyecto: Producción / Optimizado.
