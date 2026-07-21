import imgSatira1 from '../activos/satira1.webp';
import imgSatira2 from '../activos/satira2.webp';
import imgSatira3 from '../activos/satira3.webp';
import imgSatira4 from '../activos/satira4.webp';
import imgSatira5 from '../activos/satira5.webp';

import imgOdontologico1 from '../activos/odontologico1.webp';
import imgOdontologico2 from '../activos/odontologico2.webp';
import imgOdontologico3 from '../activos/odontologico3.webp';
import imgOdontologico4 from '../activos/odontologico4.webp';
import imgOdontologico5 from '../activos/odontologico5.webp';
import imgOdontologico6 from '../activos/odontologico6.webp';

import imgRepositorio1 from '../activos/repositorio1.png';
import imgRepositorio3 from '../activos/repositorio3.png';
import imgRepositorio4 from '../activos/repositorio4.png';
import imgRepositorio5 from '../activos/repositorio5.png';
import imgRepositorio6 from '../activos/repositorio6.png';

export const informacionPersonal = {
  nombre: "Luis Balladares",
  cargo: "Ingeniero en Software",
  descripcion: "Ing. en Software con formación y experiencia en el desarrollo de aplicaciones Full-Stack y móviles, así como en el diseño y optimización de bases de datos. Mi enfoque se centra en crear soluciones tecnológicas eficientes, mantenibles y orientadas a resultados, garantizando calidad en cada etapa del desarrollo.",
  enlaces: {
    linkedin: "www.linkedin.com/in/luis-balladares",
    github: "https://github.com/luisknight24",
  }
};

export const habilidades = [
  {
    categoria: "Arquitectura Backend",
    descripcion: "Construcción de APIs y microservicios, manteniendo seguridad con tokens JWT y comunicación en tiempo real mediante WebSockets.",
    tecnologias: [".NET 6+", "ASP.NET Core", "C#", "Node.js", "Laravel", "Django", "Entity Framework"]
  },
  {
    categoria: "Desarrollo Frontend",
    descripcion: "Creación de interfaces interactivas, modulares y responsivas, orientadas a ofrecer una óptima experiencia de usuario en aplicaciones web modernas.",
    tecnologias: ["React", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    categoria: "Desarrollo Móvil",
    descripcion: "Creación de aplicaciones móviles fluidas con integración y despliegue nativo para entornos iOS y Android.",
    tecnologias: ["Flutter", "Android Studio", "iOS", "Desarrollo Multiplataforma"]
  },
  {
    categoria: "Bases de Datos",
    descripcion: "Diseño de esquemas relacionales eficientes y optimización de consultas estructuradas para sistemas de alto volumen transaccional.",
    tecnologias: ["SQL Server", "PostgreSQL", "Oracle Database", "Optimización de Consultas"]
  },
  {
    categoria: "Cloud y DevOps",
    descripcion: "Implementación de infraestructura en la nube, gestión de flujos de tráfico y virtualización de entornos de desarrollo y producción.",
    tecnologias: ["AWS", "Firebase", "Docker", "API Gateway"]
  },
  {
    categoria: "Herramientas y Testing",
    descripcion: "Uso de herramientas de control de versiones, maquetación de interfaces, pruebas unitarias y de estrés en APIs.",
    tecnologias: ["Git / GitHub", "Postman", "Swagger", "Figma", "Pruebas Unitarias"]
  },
  {
    categoria: "IA Generativa",
    descripcion: "Automatización de tareas repetitivas y maximización del rendimiento del código mediante la integración de herramientas de IA generativa en los flujos de desarrollo.",
    tecnologias: ["GitHub Copilot", "ClaudeCode", "Google AI Studio", "OpenAI Codex", "Antigravity"]
  }
];

export const proyectos = [
  {
    id: 1,
    titulo: "Detector de sátira orientado a textos en español",
    descripcion: "Un clasificador para la detección automática de textos satíricos en español que integra el modelo BETO (BERT adaptado al español) con 19 características lingüísticas (sintácticas, fraseológicas y semánticas) extraídas con spaCy/NLTK y optimizadas mediante un proceso de selección de características. Arquitectura desacoplada con API REST e interfaz SPA.",
    tecnologias: ["Python", "Angular", "Django", "PyTorch", "PLN"],
    enlaces: { codigo: "https://github.com/luisknight24/DeteccionSatira", demo: "https://deteccion-satira.vercel.app/" },
    imagen: imgSatira1,
    galeria: [
      imgSatira2,
      imgSatira3,
      imgSatira4,
      imgSatira5
    ]
  },
  {
    id: 2,
    titulo: "DentAgend: Administración de reservaciones odontológicas",
    descripcion: `Sistema integrado para la administración de reservaciones y fichas clínicas en consultorios odontológicos. Proporciona un espacio de trabajo unificado donde pacientes, odontólogos y administradores interactúan en tiempo real. Backend estructurado como API RESTful con C# y frontend dinámico en Angular.

Nota: También puedes crear una cuenta registrando un correo nuevo, en donde, se enviará un código de verificación (OTP) a la dirección de correo registrada.`,
    credenciales: {
      correo: "paciente@gmail.com",
      contrasena: "123456"
    },
    tecnologias: [".NET 6", "Angular 15", "C#", "SQL Server", "JWT", "EF Core"],
    enlaces: { codigo: "https://github.com/luisknight24/SistemaOdontologico", demo: "https://sistema-odontologico-seven.vercel.app/" },
    imagen: imgOdontologico1,
    galeria: [
      imgOdontologico2,
      imgOdontologico3,
      imgOdontologico4,
      imgOdontologico5,
      imgOdontologico6
    ]
  },
  {
    id: 3,
    titulo: "Repositorio Digital Multidisciplinario",
    descripcion: `Plataforma web para la gestión, búsqueda y visualización de producción académica y científica. Arquitectura frontend modular estructurada en Angular y respaldada por servicios RESTful seguros.

Las métricas globales y descripciones son renderizadas dinámicamente desde la nube. La plataforma también permite crear una cuenta para la publicación de proyectos, integrando un proceso de validación seguro mediante código OTP enviado al correo.`,
    tecnologias: ["Angular 16+", "TypeScript", "JWT", "Azure", "C#"],
    enlaces: { codigo: "https://github.com/luisknight24/repositorio2024", demo: "https://repositorio2024.vercel.app/" },
    imagen: imgRepositorio1,
    galeria: [
      imgRepositorio3,
      imgRepositorio4,
      imgRepositorio5,
      imgRepositorio6
    ]
  }
];

