# Mate Bienestar - Landing Page

Una Landing Page moderna y de alta conversión diseñada para productos de Yerba Mate funcional y oportunidades de Network Marketing. Desarrollada con **React**, **TypeScript** y **Tailwind CSS**.

![Mate Bienestar Preview](https://i.postimg.cc/28R8hW9D/20251208-2231-Herbal-Tea-Serenity-simple-compose-01kbzxxvg2ekvs5erbmm415gr6.png)

## 🚀 Características

- **Diseño Responsivo:** Se adapta perfectamente a móviles, tablets y escritorio.
- **Arquitectura Limpia:** Componentes modulares y tipado estático con TypeScript.
- **Backend Simulado (Serverless):**
  - Utiliza `localStorage` para persistencia de datos.
  - Simula latencia de red y llamadas asíncronas.
- **Panel de Administración:**
  - Acceso oculto mediante candado en el footer.
  - Visualización de leads/prospectos en tiempo real.
  - Gestión de eliminaciones.
- **Formulario de Captación:** Validación de datos y feedback visual al usuario.

## 🛠️ Tecnologías

- [React](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Lógica tipada
- [Vite](https://vitejs.dev/) - Empaquetador y servidor de desarrollo rápido
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utilitarios
- [Lucide React](https://lucide.dev/) - Iconografía moderna

## 📦 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/mate-bienestar.git
   cd mate-bienestar
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🔐 Acceso al Panel de Administración

El sistema incluye un "Backoffice" simulado para ver los leads que se registran en el formulario.

1. Ve al pie de página (Footer).
2. Busca el pequeño icono de candado (🔒) al lado del texto de copyright.
3. Haz clic para abrir el panel y ver los datos guardados.

## ☁️ Despliegue en Vercel

Este proyecto está configurado para desplegarse automáticamente en Vercel:

1. Sube este código a tu GitHub.
2. Ve a [Vercel](https://vercel.com) e importa el repositorio.
3. Vercel detectará automáticamente `Vite` y desplegará el sitio en segundos.
4. ¡Listo!

## 📄 Licencia

Este proyecto es de uso libre para propósitos educativos o comerciales.
