# Personal Portfolio - Clemente Henríquez

Portfolio personal construido con React + TypeScript + Vite, deployado en GitHub Pages.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 7
- **Routing**: React Router DOM v7
- **Styling**: TailwindCSS v3
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El servidor de desarrollo se abrirá en `http://localhost:3000`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Bio.tsx           # Sección bio/hero
│   ├── Contact.tsx       # Contacto y footer
│   ├── Experience.tsx    # Experiencia laboral y teaching
│   ├── Header.tsx        # Navegación principal
│   ├── Projects.tsx      # Proyectos destacados
│   ├── ScrollToTop.tsx   # Utilidad de scroll
│   └── ThemeToggle.tsx   # Toggle dark/light mode
├── pages/
│   └── TeachingPage.tsx  # Página de teaching con slides
├── App.tsx               # Componente principal
├── main.tsx             # Entry point
└── index.css            # Estilos globales

public/
├── favicon.svg          # Favicon (🦕)
└── 5174883538514850246.jpg  # Foto de perfil
```

## 🌐 Deploy a GitHub Pages

Este proyecto está configurado para GitHub Pages con HashRouter.

### Proceso de Deploy:

1. **Build el proyecto**:
   ```bash
   npm run build
   ```

2. **Copiar archivos al root** (GitHub Pages sirve desde el root):
   ```bash
   cp dist/index.html ./index.html
   cp -r dist/assets/* ./assets/
   ```

3. **Commit y push**:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```

## 🎨 Características

- ✅ Diseño responsive
- ✅ Dark mode
- ✅ Navegación con React Router
- ✅ Página separada para teaching materials
- ✅ Sección de proyectos
- ✅ Links a redes sociales (GitHub, LinkedIn, HuggingFace)

## 📝 Notas

- El proyecto usa `base: './'` en vite.config.ts para GitHub Pages
- La navegación usa HashRouter para compatibilidad con GitHub Pages
- Los builds se sirven desde el directorio root, no desde `dist/`

## 🐛 Troubleshooting

Si los cambios no aparecen después del build:

```bash
# Limpiar caché y rebuild
rm -rf dist node_modules/.vite
npm run build
```

## 📄 License

Personal portfolio - Clemente Henríquez © 2025
