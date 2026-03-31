# 🚀 VicWithGG Portfolio

Portafolio personal de **Francisco Victorico Aguirre Jiménez** - Diseñador UX/UI y Desarrollador Web especializado en crear experiencias digitales de alta calidad.

![Astro](https://img.shields.io/badge/Astro-5.5-BC52EE?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Características

- ⚡ **Astro 5.5** - Framework web moderno y ultrarrápido
- 🎨 **Tailwind CSS** - Estilos utilitarios con diseño personalizado
- 📱 **Responsive** - Adaptable a todos los dispositivos
- 🌙 **Tema oscuro** - Diseño elegante con paleta de colores cuidadosa
- 🎭 **Animaciones** - Transiciones suaves y efectos de revelado
- 🔍 **SEO optimizado** - Meta tags, Open Graph, Schema.org
- ♿ **Accesible** - Cumple con estándares de accesibilidad
- 📊 **Datos separados** - Fácil mantenimiento y actualización

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - El framework web para sitios de contenido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con tipos
- [MDX](https://mdxjs.com/) - Markdown con componentes JSX

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/             # Componentes base (Button, Icon, Label, Card)
│   │   └── sections/       # Componentes de sección (Hero, Projects, etc.)
│   ├── data/               # Datos separados (JSON/TS)
│   ├── layouts/            # Layouts de Astro
│   ├── pages/              # Páginas
│   ├── styles/             # Estilos globales
│   ├── scripts/            # Scripts de cliente
│   ├── types/              # Tipos TypeScript
│   └── utils/              # Utilidades
├── public/                 # Assets estáticos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind
└── package.json            # Dependencias
```

## 🚀 Instalación

### Requisitos previos

- Node.js 20.0.0 o superior
- npm 10.0.0 o superior

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/vicwithgg/vicwithgg-portfolio.git
cd vicwithgg-portfolio
```

1. **Instalar dependencias**

```bash
npm install
```

1. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

1. **Abrir en el navegador**

Visita [http://localhost:4321](http://localhost:4321)

## 📜 Scripts disponibles

| Comando              | Descripción                         |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Inicia servidor de desarrollo       |
| `npm run build`      | Compila para producción             |
| `npm run preview`    | Previsualiza el build de producción |
| `npm run lint`       | Ejecuta ESLint                      |
| `npm run format`     | Formatea código con Prettier        |
| `npm run type-check` | Verifica tipos de TypeScript        |

## 📝 Personalización

### Actualizar información personal

Edita los archivos en `/src/data/`:

- `personal.ts` - Información personal y configuración del sitio
- `projects.ts` - Proyectos del portafolio
- `experience.ts` - Experiencia laboral
- `skills.ts` - Habilidades técnicas
- `certificates.ts` - Certificados
- `education.ts` - Educación
- `social.ts` - Redes sociales y contacto

### Modificar estilos

Los tokens de diseño están en:

- `tailwind.config.mjs` - Configuración de Tailwind
- `src/styles/global.css` - Estilos globales y variables CSS
- `src/styles/animations.css` - Animaciones personalizadas

### Agregar nuevos proyectos

En `src/data/projects.ts`, añade un nuevo objeto al array:

```typescript
{
  id: 'mi-proyecto',
  name: 'Mi Proyecto',
  sector: 'Web App • React',
  description: 'Descripción del proyecto...',
  thumbnail: '/images/projects/mi-proyecto.jpg',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  links: {
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
}
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Selecciona el framework "Astro"
3. ¡Listo! Se desplegará automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Directorio de publicación: `dist`

### GitHub Pages

1. Habilita GitHub Actions
2. Usa el workflow incluido en `.github/workflows/deploy.yml`

## 🔧 Configuración avanzada

### Variables de entorno

Crea un archivo `.env`:

```env
PUBLIC_SITE_URL=https://vicwithgg.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Optimización de imágenes

Las imágenes se optimizan automáticamente con el componente `<Image />` de Astro:

```astro
---
import { Image } from "astro:assets";
import myImage from "../assets/image.jpg";
---

<Image src={myImage} alt="Descripción" width={800} height={600} />
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

## 👤 Autor

**Francisco Victorico Aguirre Jiménez**

- Website: [vicwithgg.com](https://vicwithgg.com)
- LinkedIn: [@vicwithgg](https://linkedin.com/in/vicwithgg)
- GitHub: [@vicwithgg](https://github.com/vicwithgg)
- Email: <contacto@vicwithgg.com>

---

<p align="center">
  Hecho con ❤️ y ☕ en Oaxaca, México
</p>
