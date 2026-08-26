export const person = {
  name: 'Jhonatan Tacuri',
  role: 'Desarrollador junior — apps móviles, APIs REST y cómputo paralelo',
  eyebrow: 'Ingeniero en Ciencias de la Computación',
  location: 'Cuenca, Ecuador',
  email: 'tacurijhonatan81@gmail.com',
  phone: '+593 99 001 5448',
  linkedin: 'linkedin.com/in/jhonatan-tacuri',
  linkedinUrl: 'https://linkedin.com/in/jhonatan-tacuri',
  github: 'github.com/jhonatanT04',
  githubUrl: 'https://github.com/jhonatanT04',
  cvUrl: '/CV_Jhonatan_Tacuri.pdf',
  summary:
    'Construyo interfaces en Flutter y servicios backend en FastAPI y Spring Boot. Cuando el rendimiento importa, bajo de nivel hasta CUDA: optimizar un kernel es tan parte del oficio como diseñar una pantalla.',
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
    'Desarrollé pantallas y funcionalidades de una aplicación móvil en Flutter, participando desde el diseño de los mockups hasta la implementación de la interfaz final.',
    'Revisé y di mantenimiento al backend en Python con FastAPI, verificando el comportamiento de los endpoints REST y su integración con la app móvil.',
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
    tag: 'Proyecto personal · 2026–actualidad',
    name: 'Gestión Mecánica — sistema para taller automotriz',
    description:
      'Solución de tres componentes — aplicación móvil, panel web y API REST — para digitalizar la gestión de clientes, vehículos y órdenes de trabajo de un taller mecánico. API en Python con FastAPI, autenticación por token y pruebas unitarias sobre los endpoints con unittest y TestClient.',
    stack: ['Flutter', 'React', 'FastAPI'],
    meta: 'En desarrollo activo',
    href: 'https://github.com/jhonatanT04/GestionMecanica',
  },
] as const

export const skills = [
  {
    label: 'Lenguajes',
    items: ['Python', 'Java', 'Dart', 'JavaScript', 'SQL', 'C/CUDA'],
  },
  {
    label: 'Frameworks y librerías',
    items: [
      'Spring Boot',
      'Spring WebFlux',
      'FastAPI',
      'Flutter (Riverpod)',
      'React',
      'Angular',
      'TensorFlow',
      'Keras',
      'MPI',
      'PyCUDA',
    ],
  },
  {
    label: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'Supabase'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Maven', 'Linux', 'VS Code'],
  },
] as const

export const education = {
  school: 'Universidad Politécnica Salesiana',
  degree: 'Ingeniería en Ciencias de la Computación',
  location: 'Cuenca, Ecuador',
  start: 'Sep 2022',
  end: '2026',
  detail:
    'Estudios culminados; trabajo de titulación presentado y aprobado (título en trámite). Promedio general: 83/100.',
  highlights:
    'Computación Paralela y GPU, Bases de Datos, Minería de Datos, Redes, Seguridad de la Información e Inteligencia Artificial.',
  extra: 'Miembro del grupo ASU "Recicla UPS".',
} as const

export const certifications = [
  { name: 'Gemini para desarrolladores de aplicaciones', issuer: 'Google Cloud', year: '2026' },
  { name: 'Build Generative AI Agents with Vertex AI and Flutter', issuer: 'Google Cloud', year: '2025' },
  { name: 'Crea, entrena e implementa modelos de AA con Keras en Google Cloud', issuer: 'Google Cloud', year: '2025' },
] as const

export const languages = 'Español nativo · inglés intermedio-avanzado (lectura técnica y documentación)'

export const competencies =
  'Trabajo en equipo multidisciplinario, comunicación técnica, atención al detalle.'

export const nav = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
] as const
