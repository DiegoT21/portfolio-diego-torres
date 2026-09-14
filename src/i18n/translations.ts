import type { Project, SkillGroup } from '../data/portfolio'

export type Locale = 'es' | 'en'

export type ServiceItem = { title: string; description: string }
export type ProcessStep = { step: string; title: string; description: string }

export type LocaleContent = {
  meta: { title: string; lang: string }
  profile: {
    role: string
    location: string
    tagline: string
    highlight?: string
  }
  ui: {
    available: string
    greeting: string
    viewProjects: string
    contact: string
    contactCta: string
    scrollHint: string
    aboutSection: string
    aboutTitle: string
    projectsSection: string
    projectsTitle: string
    projectsSubtitle: string
    confidentialNote: string
    servicesSection: string
    servicesTitle: string
    servicesSubtitle: string
    processTitle: string
    skillsSection: string
    skillsTitle: string
    contactSection: string
    contactTitle: string
    contactSubtitle: string
    writeGmail: string
    gmailSubject: string
    footerBuilt: string
    footerTag: string
    openMenu: string
    closeMenu: string
    switchToEn: string
    switchToEs: string
    themeLight: string
    themeDark: string
    themeSystem: string
    footerA11y: string
    expandImage: string
    closeLightbox: string
    previousImage: string
    nextImage: string
    easterEggTitle: string
    easterEggMessage: string
    downloadCv: string
  }
  about: string[]
  services: ServiceItem[]
  process: ProcessStep[]
  projects: Project[]
  skillGroups: SkillGroup[]
  navLinks: { href: string; label: string }[]
  cv: { href: string; fileName: string }
}

const projectLinks = {
  smarthabit: 'https://github.com/fundestddelgado/PA12-SMARTHABIT-PROYECTO-FINAL',
  smarthabitDemo: 'https://smart-habit-dashboard.vercel.app/',
  github: 'https://github.com/DiegoT21',
}

export const translations: Record<Locale, LocaleContent> = {
  es: {
    meta: { title: 'Diego Torres · Desarrollador Full Stack', lang: 'es' },
    profile: {
      role: 'Desarrollador Full Stack',
      location: 'Ciudad de Panamá, Panamá',
      tagline:
        'Construyo productos web, soluciones con IA y aplicaciones con enfoque en experiencia de usuario, integración de APIs y despliegue en la nube.',
      highlight: '',
    },
    ui: {
      available: 'Disponible para oportunidades',
      greeting: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      contactCta: 'Contactar',
      scrollHint: 'Scroll para explorar',
      aboutSection: '01 — Sobre mí',
      aboutTitle: 'Código, producto y entrega',
      servicesSection: '02 — Servicios',
      servicesTitle: 'Cómo puedo ayudarte',
      servicesSubtitle: 'Desde una landing hasta un producto full stack con IA, APIs y despliegue en la nube.',
      processTitle: 'Mi proceso de trabajo',
      projectsSection: '03 — Proyectos',
      projectsTitle: 'Trabajo seleccionado',
      projectsSubtitle:
        'Desde proyectos premiados con IA hasta plataformas web en producción y productos privados bajo confidencialidad.',
      confidentialNote: 'Sin detalles públicos del producto',
      skillsSection: '04 — Habilidades',
      skillsTitle: 'Stack y herramientas',
      contactSection: '05 — Contacto',
      contactTitle: '¿Hablamos de tu próximo proyecto?',
      contactSubtitle:
        'Abierto a colaboraciones, prácticas profesionales y proyectos donde pueda aportar en frontend, backend o integración full stack.',
      writeGmail: 'Escribir en Gmail',
      gmailSubject: 'Contacto desde portafolio',
      footerBuilt: 'Hecho con React + Vite.',
      footerTag: 'Full stack',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      switchToEn: 'Cambiar a inglés',
      switchToEs: 'Cambiar a español',
      themeLight: 'Modo claro',
      themeDark: 'Modo oscuro',
      themeSystem: 'Tema del sistema',
      footerA11y: 'Diseñado con accesibilidad en mente.',
      expandImage: 'Ampliar imagen',
      closeLightbox: 'Cerrar',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      easterEggTitle: 'Modo desarrollador activado',
      easterEggMessage: 'npm run hire-diego — Gracias por explorar mi portafolio!',
      downloadCv: 'Descargar CV',
    },
    about: [
      'Desarrollador full stack con experiencia construyendo plataformas web, modelos de IA y dashboards de datos desde cero: frontend reactivo, APIs REST, machine learning e integraciones en la nube.',
      'Diseño, desarrollo y presento mis proyectos de punta a punta. SmartHabit IA — mi solución de predicción de consumo con inteligencia artificial — ganó el premio al mejor proyecto en Samsung Innovations Campus 2025.',
      'Actualmente combino proyectos académicos con productos privados en fase de lanzamiento, siempre respetando confidencialidad cuando el contexto lo requiere.',
    ],
    services: [
      { title: 'Sitios y dashboards web', description: 'Landing pages, paneles admin y flujos responsive con React, Astro y Tailwind.' },
      { title: 'APIs e integraciones', description: 'Backend REST, autenticación, WebSockets, cloud y servicios externos.' },
      { title: 'IA y datos', description: 'Modelos predictivos, pipelines de datos, visualización y dashboards analíticos.' },
      { title: 'Apps y despliegue', description: 'APK Flutter, builds, Docker, CI básico y publicación en Vercel o Railway.' },
    ],
    process: [
      { step: '01', title: 'Idea', description: 'Entiendo el problema, el usuario y el alcance del MVP.' },
      { step: '02', title: 'Diseño', description: 'Defino flujos, estructura y una UI clara antes de codear.' },
      { step: '03', title: 'Desarrollo', description: 'Construyo frontend, backend e integraciones con código mantenible.' },
      { step: '04', title: 'Deploy', description: 'Pruebas, optimización y despliegue listo para producción.' },
    ],
    projects: [
      {
        id: 'smarthabit',
        title: 'SmartHabit IA',
        subtitle: 'Predicción de consumo con inteligencia artificial',
        description:
          'Proyecto individual: concebí la idea, diseñé la solución, desarrollé el modelo, el pipeline de datos, las alertas, el dashboard y lo presenté en Samsung Innovations Campus 2025, donde gané el premio al mejor proyecto.',
        highlights: [
          'Modelo LSTM multihorizonte (1h, 6h, 12h, 24h) para energía, agua y costo',
          'Pipeline de datos con Pandas y dataset AMPDS; métricas MAE y MAPE',
          'Estimación de ahorro y alertas inteligentes por patrones de consumo',
          'Dashboard interactivo con Chart.js: predicciones, analítica y alertas',
        ],
        stack: ['Python', 'TensorFlow', 'Pandas', 'JavaScript', 'Chart.js', 'HTML/CSS'],
        badge: 'Proyecto individual · SIC 2025',
        award: 'Mejor proyecto · Samsung Innovations Campus 2025',
        metrics: [
          { value: '#1', label: 'Samsung Campus 2025' },
          { value: '4', label: 'Horizontes LSTM' },
          { value: 'Live', label: 'Demo en Vercel' },
        ],
        featured: true,
        links: [
          { label: 'Ver demo en vivo', href: projectLinks.smarthabitDemo },
          { label: 'Repositorio', href: projectLinks.smarthabit },
        ],
        images: [
          {
            src: '/projects/smarthabit/dashboard.png',
            alt: 'Panel de predicciones de SmartHabit IA',
            caption: 'Dashboard',
          },
          {
            src: '/projects/smarthabit/ahorro.png',
            alt: 'Estimación de ahorro en SmartHabit IA',
            caption: 'Ahorro',
          },
          {
            src: '/projects/smarthabit/analisis.png',
            alt: 'Análisis avanzado de consumo en SmartHabit IA',
            caption: 'Análisis',
          },
        ],
      },
      {
        id: 'rent-tools',
        title: 'Rent Tools',
        subtitle: 'Marketplace de alquiler de herramientas',
        description:
          'Plataforma web para publicar, solicitar y administrar rentas de equipos técnicos. Proyecto académico orientado a usabilidad y transparencia en el mercado de alquileres.',
        highlights: [
          'Verificación de identidad con documento y selfie',
          'Flujo de reservas responsive con calendario y notificaciones',
          'Gestión de inventario y estado de disponibilidad en tiempo real',
          'Integración con APIs REST y almacenamiento en AWS S3',
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'Docker', 'AWS S3', 'REST API'],
        badge: 'Proyecto académico · UTP',
        metrics: [
          { value: '3', label: 'Flujos principales' },
          { value: 'UTP', label: 'Proyecto academico' },
          { value: 'AWS', label: 'REST + S3' },
        ],
        links: [{ label: 'GitHub', href: projectLinks.github }],
        images: [
          {
            src: '/projects/rent-tools/landing.png',
            alt: 'Página principal de Rent Tools',
            caption: 'Landing',
          },
          {
            src: '/projects/rent-tools/login.png',
            alt: 'Inicio de sesión en Rent Tools',
            caption: 'Login',
          },
          {
            src: '/projects/rent-tools/registration.png',
            alt: 'Verificación de identidad en el registro de Rent Tools',
            caption: 'Registro',
          },
        ],
      },
      {
        id: 'private-platform',
        title: 'Plataforma administrativa',
        subtitle: 'Proyecto privado · Pre-lanzamiento',
        description:
          'Sistema full stack bajo confidencialidad: panel web, backend en la nube y aplicación para dispositivos dedicados con sincronización en tiempo real.',
        highlights: [
          'Dashboard web con componentes reutilizables y flujos administrativos',
          'API REST con autenticación, despliegue cloud y manejo de errores',
          'App embebida con actualizaciones remotas y sync vía WebSockets',
          'Pipelines de build, ramas de desarrollo y entornos locales dockerizados',
        ],
        stack: ['React', 'Astro', 'Django REST', 'Flutter', 'WebSockets', 'Railway', 'Vercel'],
        badge: 'Confidencial / NDA',
        confidential: true,
        metrics: [
          { value: '3', label: 'Capas full stack' },
          { value: 'Live', label: 'Sync WebSocket' },
          { value: 'NDA', label: 'Pre-lanzamiento' },
        ],
        images: [
          {
            src: '/projects/admin-platform/dashboard.png',
            alt: 'Panel administrativo de plataforma privada',
            caption: 'Dashboard',
          },
          {
            src: '/projects/admin-platform/brands.png',
            alt: 'Gestión de marcas en plataforma administrativa',
            caption: 'Marcas',
          },
          {
            src: '/projects/admin-platform/device-customization.png',
            alt: 'Personalización visual de dispositivos',
            caption: 'Dispositivos',
          },
        ],
      },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS', 'Responsive UI'] },
      { title: 'Backend', items: ['Node.js', 'Django REST', 'APIs REST', 'PostgreSQL', 'JWT', 'WebSockets'] },
      { title: 'Data & IA', items: ['Python', 'TensorFlow/Keras', 'Pandas', 'LSTM', 'Claude / Gemini', 'Analítica'] },
      { title: 'Infra & mobile', items: ['Docker', 'GitHub', 'AWS', 'Electron / Tauri', 'Flutter', 'Railway', 'Vercel'] },
    ],
    navLinks: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#contacto', label: 'Contacto' },
    ],
    cv: { href: '/cv/cv-es.pdf', fileName: 'Diego-Torres-CV-ES.pdf' },
  },
  en: {
    meta: { title: 'Diego Torres · Full Stack Developer', lang: 'en' },
    profile: {
      role: 'Full Stack Developer',
      location: 'Panama City, Panama',
      tagline:
        'I build web products, AI-powered solutions, and applications focused on user experience, API integration, and cloud deployment.',
      highlight: '',
    },
    ui: {
      available: 'Open to opportunities',
      greeting: "Hi, I'm",
      viewProjects: 'View projects',
      contact: 'Contact',
      contactCta: 'Get in touch',
      scrollHint: 'Scroll to explore',
      aboutSection: '01 — About me',
      aboutTitle: 'Code, product, and delivery',
      servicesSection: '02 — Services',
      servicesTitle: 'How I can help',
      servicesSubtitle: 'From a landing page to a full stack AI product with APIs and cloud deployment.',
      processTitle: 'My workflow',
      projectsSection: '03 — Projects',
      projectsTitle: 'Selected work',
      projectsSubtitle:
        'From award-winning AI projects to production web platforms and confidential pre-launch products.',
      confidentialNote: 'No public product details',
      skillsSection: '04 — Skills',
      skillsTitle: 'Stack and tools',
      contactSection: '05 — Contact',
      contactTitle: "Let's talk about your next project",
      contactSubtitle:
        'Open to collaborations, internships, and projects where I can contribute across frontend, backend, or full stack integration.',
      writeGmail: 'Write on Gmail',
      gmailSubject: 'Contact from portfolio',
      footerBuilt: 'Built with React + Vite.',
      footerTag: 'Full stack',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchToEn: 'Switch to English',
      switchToEs: 'Switch to Spanish',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      themeSystem: 'System theme',
      footerA11y: 'Designed with accessibility in mind.',
      expandImage: 'Expand image',
      closeLightbox: 'Close',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      easterEggTitle: 'Developer mode unlocked',
      easterEggMessage: 'npm run hire-diego — Thanks for exploring my portfolio!',
      downloadCv: 'Download resume',
    },
    about: [
      'Full stack developer experienced in building web platforms, AI models, and data dashboards from scratch: reactive frontends, REST APIs, machine learning, and cloud integrations.',
      'I design, build, and present my projects end to end. SmartHabit IA — my AI-powered consumption forecasting solution — won best project at Samsung Innovations Campus 2025.',
      'I currently combine academic projects with private pre-launch products, always respecting confidentiality when required.',
    ],
    services: [
      { title: 'Websites & dashboards', description: 'Landing pages, admin panels, and responsive flows with React, Astro, and Tailwind.' },
      { title: 'APIs & integrations', description: 'REST backends, auth, WebSockets, cloud, and third-party services.' },
      { title: 'AI & data', description: 'Predictive models, data pipelines, visualization, and analytics dashboards.' },
      { title: 'Apps & deployment', description: 'Flutter APKs, builds, Docker, basic CI, and Vercel or Railway releases.' },
    ],
    process: [
      { step: '01', title: 'Idea', description: 'I understand the problem, user, and MVP scope.' },
      { step: '02', title: 'Design', description: 'I define flows, structure, and a clear UI before coding.' },
      { step: '03', title: 'Build', description: 'I ship frontend, backend, and integrations with maintainable code.' },
      { step: '04', title: 'Deploy', description: 'Testing, optimization, and production-ready release.' },
    ],
    projects: [
      {
        id: 'smarthabit',
        title: 'SmartHabit IA',
        subtitle: 'AI-powered consumption forecasting',
        description:
          'Solo project: I conceived the idea, designed the solution, built the model, data pipeline, alerts, dashboard, and presented it at Samsung Innovations Campus 2025, where it won best project.',
        highlights: [
          'Multi-horizon LSTM model (1h, 6h, 12h, 24h) for energy, water, and cost',
          'Data pipeline with Pandas and AMPDS dataset; MAE and MAPE metrics',
          'Savings estimation and smart alerts based on consumption patterns',
          'Interactive Chart.js dashboard: forecasts, analytics, and alerts',
        ],
        stack: ['Python', 'TensorFlow', 'Pandas', 'JavaScript', 'Chart.js', 'HTML/CSS'],
        badge: 'Solo project · SIC 2025',
        award: 'Best project · Samsung Innovations Campus 2025',
        metrics: [
          { value: '#1', label: 'Samsung Campus 2025' },
          { value: '4', label: 'LSTM horizons' },
          { value: 'Live', label: 'Vercel demo' },
        ],
        featured: true,
        links: [
          { label: 'Live demo', href: projectLinks.smarthabitDemo },
          { label: 'Repository', href: projectLinks.smarthabit },
        ],
        images: [
          {
            src: '/projects/smarthabit/dashboard.png',
            alt: 'SmartHabit IA predictions dashboard',
            caption: 'Dashboard',
          },
          {
            src: '/projects/smarthabit/ahorro.png',
            alt: 'SmartHabit IA savings estimation screen',
            caption: 'Savings',
          },
          {
            src: '/projects/smarthabit/analisis.png',
            alt: 'SmartHabit IA advanced consumption analytics',
            caption: 'Analytics',
          },
        ],
      },
      {
        id: 'rent-tools',
        title: 'Rent Tools',
        subtitle: 'Tool rental marketplace',
        description:
          'Web platform to list, request, and manage technical equipment rentals. Academic project focused on usability and transparency in the rental market.',
        highlights: [
          'Identity verification with ID document and selfie',
          'Responsive booking flow with calendar and notifications',
          'Inventory management and real-time availability status',
          'Integration with REST APIs and AWS S3 storage',
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'Docker', 'AWS S3', 'REST API'],
        badge: 'Academic project · UTP',
        metrics: [
          { value: '3', label: 'Core flows' },
          { value: 'UTP', label: 'Academic project' },
          { value: 'AWS', label: 'REST + S3' },
        ],
        links: [{ label: 'GitHub', href: projectLinks.github }],
        images: [
          {
            src: '/projects/rent-tools/landing.png',
            alt: 'Rent Tools landing page',
            caption: 'Landing',
          },
          {
            src: '/projects/rent-tools/login.png',
            alt: 'Rent Tools login screen',
            caption: 'Login',
          },
          {
            src: '/projects/rent-tools/registration.png',
            alt: 'Identity verification during Rent Tools registration',
            caption: 'Registration',
          },
        ],
      },
      {
        id: 'private-platform',
        title: 'Admin platform',
        subtitle: 'Private project · Pre-launch',
        description:
          'Confidential full stack system: web panel, cloud backend, and dedicated-device app with real-time synchronization.',
        highlights: [
          'Web dashboard with reusable components and admin workflows',
          'REST API with authentication, cloud deployment, and error handling',
          'Embedded app with remote updates and WebSocket sync',
          'Build pipelines, development branches, and local Docker environments',
        ],
        stack: ['React', 'Astro', 'Django REST', 'Flutter', 'WebSockets', 'Railway', 'Vercel'],
        badge: 'Confidential / NDA',
        confidential: true,
        metrics: [
          { value: '3', label: 'Full stack layers' },
          { value: 'Live', label: 'WebSocket sync' },
          { value: 'NDA', label: 'Pre-launch' },
        ],
        images: [
          {
            src: '/projects/admin-platform/dashboard.png',
            alt: 'Private admin platform dashboard',
            caption: 'Dashboard',
          },
          {
            src: '/projects/admin-platform/brands.png',
            alt: 'Brand management in admin platform',
            caption: 'Brands',
          },
          {
            src: '/projects/admin-platform/device-customization.png',
            alt: 'Visual customization for dedicated devices',
            caption: 'Devices',
          },
        ],
      },
    ],
    skillGroups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS', 'Responsive UI'] },
      { title: 'Backend', items: ['Node.js', 'Django REST', 'REST APIs', 'PostgreSQL', 'JWT', 'WebSockets'] },
      { title: 'Data & AI', items: ['Python', 'TensorFlow/Keras', 'Pandas', 'LSTM', 'Claude / Gemini', 'Analytics'] },
      { title: 'Infra & mobile', items: ['Docker', 'GitHub', 'AWS', 'Electron / Tauri', 'Flutter', 'Railway', 'Vercel'] },
    ],
    navLinks: [
      { href: '#inicio', label: 'Home' },
      { href: '#sobre-mi', label: 'About' },
      { href: '#servicios', label: 'Services' },
      { href: '#proyectos', label: 'Projects' },
      { href: '#habilidades', label: 'Skills' },
      { href: '#contacto', label: 'Contact' },
    ],
    cv: { href: '/cv/cv-en.pdf', fileName: 'Diego-Torres-CV-EN.pdf' },
  },
}