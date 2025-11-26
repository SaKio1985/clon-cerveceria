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

Este es un sitio web moderno y completamente funcional para una cervecería, desarrollado como proyecto de aprendizaje. Incluye un sistema completo de navegación, catálogo de productos, carrito de compras y galería de imágenes.

### 🛠️ Tecnologías Utilizadas

#### Core

- **Vue 3** (v3.5.25) - Framework de JavaScript progresivo con Composition API
- **Vite** (v7.2.4) - Herramienta de construcción ultrarrápida
- **Tailwind CSS** (v4.1.17) - Framework de CSS utilitario moderno

#### Gestión de Estado y Navegación

- **Vue Router** (v4.6.3) - Enrutamiento oficial de Vue
- **Pinia** (v3.0.4) - Store de gestión de estado para Vue 3

#### Librerías Adicionales

- **vue-easy-lightbox** (v1.19.0) - Galería de imágenes con lightbox

#### Herramientas de Desarrollo

- **ESLint** (v9.39.1) - Linter de JavaScript
- **Prettier** (v3.6.2) - Formateador de código
- **PostCSS** & **Autoprefixer** - Procesamiento de CSS

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz atractiva con efectos de glassmorphism y gradientes temáticos
- 📱 **Totalmente Responsivo**: Optimizado para móviles, tablets y escritorio
- � **Carrito de Compras**: Sistema completo de gestión de carrito con Pinia
- 🍺 **Catálogo de Productos**: Múltiples categorías (barriles, botellas, temporada, comida)
- 🖼️ **Galería de Imágenes**: Lightbox interactivo para visualizar productos
- 🧭 **Navegación Fluida**: Vue Router con rutas anidadas y navegación suave
- ⚡ **Rendimiento Optimizado**: Carga rápida con Vite y componentes optimizados
- 🎯 **Componentes Reutilizables**: Arquitectura modular y mantenible

### 📁 Estructura del Proyecto

```
clon-cerveceria/
├── src/
│   ├── components/
│   │   ├── BotonComponent.vue      # Botón reutilizable con slots
│   │   ├── FooterComponent.vue     # Pie de página con enlaces
│   │   └── NavbarComponent.vue     # Barra de navegación responsive
│   ├── views/
│   │   ├── HomePage.vue            # Página de inicio
│   │   ├── CartaPage.vue           # Página principal de la carta
│   │   ├── CartaBarrilesPage.vue   # Catálogo de barriles
│   │   ├── CartaBotellasPage.vue   # Catálogo de botellas
│   │   ├── CartaTemporadaPage.vue  # Cervezas de temporada
│   │   ├── CartaParaComerPage.vue  # Menú de comida
│   │   ├── SobreNosotros.vue       # Página sobre la cervecería
│   │   ├── CarritoPage.vue         # Página del carrito de compras
│   │   └── CartPage.vue            # Vista alternativa del carrito
│   ├── router/
│   │   └── index.js                # Configuración de rutas
│   ├── stores/
│   │   └── cart.js                 # Store de Pinia para el carrito
│   ├── assets/                     # Imágenes y recursos estáticos
│   ├── App.vue                     # Componente raíz
│   └── main.js                     # Punto de entrada
├── public/                         # Archivos públicos estáticos
├── index.html                      # HTML principal
├── tailwind.config.js              # Configuración de Tailwind
├── vite.config.js                  # Configuración de Vite
└── package.json                    # Dependencias del proyecto
```

### 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/SaKio1985/clon-cerveceria.git
   cd clon-cerveceria
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o con pnpm
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

### 🗺️ Rutas de la Aplicación

| Ruta                | Componente         | Descripción                              |
| ------------------- | ------------------ | ---------------------------------------- |
| `/`                 | HomePage           | Página de inicio con hero y presentación |
| `/carta`            | CartaPage          | Página principal del menú                |
| `/carta/barriles`   | CartaBarrilesPage  | Catálogo de cervezas en barril           |
| `/carta/botellas`   | CartaBotellasPage  | Catálogo de cervezas en botella          |
| `/carta/temporada`  | CartaTemporadaPage | Cervezas de temporada                    |
| `/carta/para-comer` | CartaParaComerPage | Menú de comida                           |
| `/sobre-nosotros`   | SobreNosotros      | Información sobre la cervecería          |
| `/carrito`          | CarritoPage        | Carrito de compras                       |

### 🎯 Componentes Destacados

#### NavbarComponent.vue

Barra de navegación completa con:

- Menú responsive con hamburguesa en móvil
- Navegación anidada para "La Carta"
- Indicador de items en el carrito
- Efectos de glassmorphism
- Transiciones suaves

#### BotonComponent.vue

Componente de botón versátil que:

- Funciona como `<button>` o `<a>` según las props
- Soporta slots para iconos personalizables
- Incluye estados hover y active
- Maneja automáticamente atributos de seguridad (`rel="noopener noreferrer"`)

#### FooterComponent.vue

Pie de página profesional con:

- Año dinámico actualizado automáticamente
- Enlaces de navegación organizados
- Información de contacto
- Diseño responsive

### 🛒 Gestión del Carrito (Pinia Store)

El proyecto utiliza Pinia para gestionar el estado del carrito de compras:

```javascript
// Ejemplo de uso del store
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
cartStore.addItem(producto);
cartStore.removeItem(productoId);
cartStore.clearCart();
```

### 🎨 Estilos y Diseño

#### Paleta de Colores

- Gradientes temáticos de cerveza (ámbar, dorado)
- Modo oscuro con tonos cálidos
- Efectos de glassmorphism para tarjetas y navegación

#### Clases CSS Personalizadas

- `.glass-effect` - Efecto de vidrio con backdrop-filter
- `.beer-gradient` - Gradiente temático de cerveza
- `.hero-gradient` - Gradiente para secciones hero
- `.card-hover` - Efectos de hover para tarjetas de productos

#### Tipografía

- Fuentes optimizadas para legibilidad
- Jerarquía visual clara
- Responsive typography

### � Responsive Design

El sitio está optimizado para:

- 📱 **Móviles**: < 640px
- 📱 **Tablets**: 640px - 1024px
- 💻 **Desktop**: > 1024px

### 🧪 Calidad del Código

- **ESLint**: Configurado con reglas de Vue y mejores prácticas
- **Prettier**: Formateo consistente del código
- **Composition API**: Uso de `<script setup>` para código más limpio
- **Modularidad**: Componentes reutilizables y bien organizados

### �📚 Recursos de Aprendizaje

- [Documentación de Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia - Store de Vue](https://pinia.vuejs.org/)
- [Guía de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

### 🎓 Conceptos Aprendidos

Este proyecto demuestra:

- ✅ Arquitectura de aplicaciones Vue 3 modernas
- ✅ Gestión de estado con Pinia
- ✅ Enrutamiento con Vue Router (rutas anidadas)
- ✅ Componentes reutilizables con props y slots
- ✅ Composition API y `<script setup>`
- ✅ Integración de librerías de terceros
- ✅ Diseño responsive con Tailwind CSS
- ✅ Optimización de rendimiento con Vite
- ✅ Mejores prácticas de desarrollo frontend

### 🤝 Contribuciones

Este es un proyecto educativo, pero las sugerencias y mejoras son bienvenidas para fines de aprendizaje. Si encuentras algún bug o tienes ideas para mejorar el proyecto, no dudes en abrir un issue o pull request.

### 📄 Licencia

Este proyecto es solo para fines educativos. No se permite su uso comercial.

**Nota sobre derechos de autor:** Todo el material de marca (nombre, logo, imágenes) pertenece a la cervecería original y se utiliza únicamente con fines educativos y de demostración.

---

**Desarrollado con ❤️ para aprender Vue.js, Pinia, Vue Router y desarrollo web moderno**

_Proyecto educativo por [SaKio1985](https://github.com/SaKio1985)_
