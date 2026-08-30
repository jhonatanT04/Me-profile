export const person = {
  name: 'Jhonatan Tacuri',
  role: 'Desarrollador junior — APIs REST en Java y Python, interfaces en React, Angular y Flutter',
  eyebrow: 'Ingeniero en Ciencias de la Computación',
  location: 'Cuenca, Ecuador',
  email: 'tacurijhonatan81@gmail.com',
  phone: '+593 99 001 5448',
  linkedin: 'linkedin.com/in/jhonatan-tacuri',
  linkedinUrl: 'https://linkedin.com/in/jhonatan-tacuri',
  github: 'github.com/jhonatanT04',
  githubUrl: 'https://github.com/jhonatanT04',
  cvUrl: `${import.meta.env.BASE_URL}Jhonatan_Tacuri_CV.pdf`,
  summary:
    'Construyo APIs REST en Java y Python con autenticación JWT y control de acceso, e interfaces en React, Angular y Flutter. Tengo experiencia de pasantía y sistemas propios sobre PostgreSQL.',
} as const

export const stats = [
  {
    value: '83/100',
    label: 'Promedio acumulado',
    detail: 'Ingeniería en Ciencias de la Computación',
  },
  {
    value: '3',
    label: 'Certificaciones',
    detail: 'Google Cloud, 2025',
  },
  {
    value: '4',
    label: 'Meses de pasantía',
    detail: 'Apoloin S.A.S., desarrollo de software',
  },
] as const

export const experience = {
  company: 'Apoloin S.A.S.',
  role: 'Pasante de desarrollo de software',
  location: 'Cuenca, Ecuador',
  start: 'Oct 2025',
  end: 'Ene 2026',
  bullets: [
    'Desarrollé pantallas de una aplicación móvil en Flutter, desde el diseño de los mockups hasta la interfaz final y su conexión con la API.',
    'Diagnostiqué y revisé endpoints REST de un backend en Python con FastAPI, validando contratos de datos e integración con el cliente Flutter.',
  ],
} as const

export const projects = [
  {
    tag: 'Desarrollo del un servidor MCP · 2026',
    name: 'Servidor MCP para trazabilidad semántica',
    description:
      'Servidor MCP que conecta código fuente, documentación oficial e historial de GitHub para responder preguntas de trazabilidad sobre bases de código heredadas. Cliente asíncrono de la API de GitHub con httpx y modelos Pydantic, resolviendo redirecciones HTTP 301 y validación de esquemas. Problema validado con entrevistas bajo la metodología MOM Test, delimitando el usuario objetivo a desarrolladores senior que heredan proyectos.',
    stack: ['Python', 'httpx', 'Pydantic', 'MCP'],
    meta: 'Trabajo de titulación',
    href: "https://github.com/jhonatanT04/ProyectoTitulacion-Trazabilidad-sem-ntica-en-GitHub-mediante-un-servidor-MCP",
  },
  {
    tag: 'Computación en GPU · 2026',
    name: 'UPSGlam 3.0 — app social de procesamiento de imágenes',
    description:
      'Arquitectura de microservicios (PyCUDA + Spring WebFlux + Supabase + Flutter) orquestada con Docker Compose sobre imágenes base nvidia/cuda. Frontend móvil en Flutter con Riverpod y sealed classes de Dart 3, incluyendo el módulo completo de autenticación. Filtros de convolución optimizados en CUDA usando memoria global, compartida y constante; con cuFFT y tiling overlap-add alcancé hasta 1.479× de aceleración sobre CPU en imágenes de ~200 megapíxeles.',
    stack: ['Flutter', 'Riverpod', 'Spring WebFlux', 'PyCUDA', 'Docker'],
    meta: 'Proyecto de la asignatura',
    href: "https://github.com/jhonatanT04/UPSGlam-3.0",
  },
  {
    tag: 'Proyecto personal · 2026',
    name: 'Gestión Mecánica — sistema para taller automotriz',
    description:
      'API REST en Spring Boot sobre 8 entidades de dominio, con Spring Security + JWT, tres roles y migraciones Flyway sobre PostgreSQL en Supabase. El flujo del taller está modelado como una máquina de estados de cinco pasos, con descuento automático de stock al añadir repuestos a una orden y reversión con registro de movimiento al eliminarlos. Dashboard web en React con TypeScript, Vite y Tailwind CSS que consume la API real en los módulos de clientes, órdenes, inventario y usuarios, con vistas restringidas por rol. App móvil de recepción en Flutter con escaneo de placa por OCR desde la cámara para registrar cliente, vehículo y orden inicial.',
    stack: ['Spring Boot', 'React', 'Flutter', 'Supabase', 'JWT'],
    meta: 'Proyecto personal',
    href: 'https://github.com/jhonatanT04/GestionMecanica',
  },
] as const

export const skills = [
  {
    label: 'Lenguajes',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL', 'C/CUDA'],
  },
  {
    label: 'Frameworks y librerías',
    items: ['Spring Boot', 'Spring WebFlux', 'Spring Security', 'FastAPI', 'React', 'Angular', 'Flutter', 'PyCUDA'],
  },
  {
    label: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Flyway'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker Compose', 'Maven', 'npm', 'Linux', 'VS Code'],
  },
] as const

export const education = {
  school: 'Universidad Politécnica Salesiana',
  degree: 'Ingeniería en Ciencias de la Computación',
  location: 'Cuenca, Ecuador',
  start: 'Sep 2022',
  end: '2026',
  detail: 'Estudios culminados; trabajo de titulación aprobado (título en trámite). Promedio general: 83/100.',
  highlights:
    'Bases de Datos, Redes, Seguridad de la Información, Inteligencia Artificial, Minería de Datos, Computación Paralela y GPU.',
} as const

export const certifications = [
  { name: 'Gemini para desarrolladores de aplicaciones', issuer: 'Google Cloud', year: '2025' },
  { name: 'Build Generative AI Agents with Vertex AI and Flutter', issuer: 'Google Cloud', year: '2025' },
  { name: 'Modelos de AA con Keras', issuer: 'Google Cloud', year: '2025' },
] as const

export const languages = 'Español nativo · Inglés B2'

export const competencies =
  'Trabajo en equipo multidisciplinario, comunicación técnica, atención al detalle.'

export const nav = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
] as const
