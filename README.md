# Portafolio Profesional y Módulo de Detección de Sátira

Arquitectura frontend desarrollada como portafolio personal y entorno de presentación para proyectos de ingeniería de software, integrando como caso de estudio principal un módulo analítico de detección de sátira en español.

## Arquitectura y Tecnologías

El sistema está construido sobre una arquitectura SPA (Single Page Application) priorizando el rendimiento, la modularidad y la experiencia de usuario.

- **Framework Core**: React 18 con TypeScript para tipado estático estricto y componentes funcionales.
- **Build System**: Vite, configurado para optimización de dependencias y tiempos de carga reducidos.
- **Estilos y Maquetación**: CSS Vanilla con enfoque en diseño modular, variables CSS para consistencia de UI, `CSS Grid` y `Flexbox` para layouts asimétricos y responsivos.
- **Optimización de Activos**: Implementación de formatos `.webp` y políticas de diseño con `object-fit: cover` para garantizar estandarización y eficiencia en la entrega de recursos visuales.

## Características Técnicas

- **Componentización Desacoplada**: La interfaz se divide en módulos independientes (`Cabecera`, `Inicio`, `Proyectos`, `Servicios`, `Contacto`), permitiendo una escalabilidad fluida en la agregación de futuros proyectos.
- **Gestión de Estado y Modales**: Control de estado local mediante hooks de React (`useState`, `useEffect`) para la interacción asíncrona con la galería de proyectos y visualización estructurada de metadatos.
- **Integración del Caso de Estudio (Sátira)**: El portafolio expone una arquitectura conceptual que acompaña a un modelo BETO (BERT adaptado al español) con extracción de características lingüísticas mediante spaCy y NLTK. Esto sirve como demostración técnica de la integración entre interfaces web modernas y sistemas backend de PLN (Procesamiento de Lenguaje Natural).

## Entorno y Despliegue

El proyecto está diseñado y configurado para un despliegue continuo en infraestructuras Edge (como Vercel), aprovechando el empaquetado optimizado de Vite.
