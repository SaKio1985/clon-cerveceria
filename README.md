# Cervecería Gilber's - Clon Educativo

**⚠️ AVISO IMPORTANTE / DISCLAIMER ⚠️**

Este es un proyecto puramente educativo y no comercial, desarrollado con el único propósito de aprender y demostrar habilidades en desarrollo web con Vue.js y Tailwind CSS.

**Este sitio NO es la página web oficial de la cervecería "La Cerve" y no tiene ninguna afiliación con ella.**

- **Marca y Logo:** El nombre "La Cerve", el logo (`logo.avif`) y cualquier otro material de marca son propiedad de la cervecería original. Su uso en este proyecto es únicamente para fines de demostración y simulación de un caso de uso real.
- **Sin Fines de Lucro:** Este proyecto no genera ningún tipo de ingreso y no está destinado a competir ni a suplantar a la empresa original.
- **Propósito Educativo:** El objetivo es simular el desarrollo de un sitio web real para una cervecería, utilizando tecnologías modernas de desarrollo frontend.
- **Enlace al original:** Para visitar la web oficial de la cervecería, por favor, dirígete a [lacerve.es](https://lacerve.es).

Si tienes alguna consulta sobre este proyecto educativo, puedes contactarme en [sakio@tuta.io].

---

## 🍺 Sobre el Proyecto

Este es un sitio web moderno y responsivo para una cervecería, desarrollado como proyecto de aprendizaje utilizando las siguientes tecnologías:

### 🛠️ Tecnologías Utilizadas

- **Vue 3** - Framework de JavaScript progresivo
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Composition API** - API moderna de Vue 3 con `<script setup>`

### ✨ Características

- 🎨 Diseño moderno y atractivo con efectos de vidrio (glassmorphism)
- 📱 Completamente responsivo para todos los dispositivos
- 🚀 Navegación suave y animaciones elegantes
- 🍺 Gradientes temáticos inspirados en cerveza
- 🔧 Componentes Vue reutilizables
- ⚡ Optimizado con Vite para desarrollo rápido

### 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── BotonComponent.vue      # Componente de botón reutilizable con slots
│   ├── FooterComponent.vue     # Pie de página
│   ├── HelloWorld.vue          # Componente de ejemplo de Vite
│   └── NavbarComponent.vue     # Barra de navegación (en desarrollo)
├── assets/
│   └── logo.avif                 # Logo de la cervecería
├── App.vue                     # Componente principal
├── main.js                     # Punto de entrada de la aplicación
└── style.css                   # Estilos globales con Tailwind CSS
```

### 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**

   ```bash
   git clone [url-del-repositorio]
   cd cerveceria-gilbers
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

### 🎯 Componentes Destacados

#### BotonComponent.vue

Componente de botón flexible que:

- Puede funcionar como `<button>` o `<a>` según las props
- Utiliza slots para iconos personalizables
- Incluye estilos con efectos hover
- Maneja automáticamente atributos de seguridad para enlaces externos

#### FooterComponent.vue

Pie de página simple con:

- Año dinámico actualizado automáticamente
- Enlaces de navegación
- Estilos consistentes con el tema

### 🎨 Estilos Personalizados

El proyecto incluye clases CSS personalizadas:

- `.glass-effect` - Efecto de vidrio con blur
- `.beer-gradient` - Gradiente temático de cerveza
- `.hero-gradient` - Gradiente para secciones hero
- `.card-hover` - Efectos de hover para tarjetas

### 📚 Recursos de Aprendizaje

- [Documentación de Vue 3](https://vuejs.org/)
- [Guía de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Script Setup de Vue 3](https://vuejs.org/api/sfc-script-setup.html)

### 🤝 Contribuciones

Este es un proyecto educativo, pero las sugerencias y mejoras son bienvenidas para fines de aprendizaje.

### 📄 Licencia

Este proyecto es solo para fines educativos. No se permite su uso comercial.

---

_Desarrollado con ❤️ para aprender Vue.js y desarrollo web moderno_
