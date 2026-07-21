import type { IconType } from "react-icons";
import {
  FaCodeBranch,
  FaDatabase,
  FaFingerprint,
  FaGaugeHigh,
  FaKey,
  FaLayerGroup,
  FaNetworkWired,
  FaServer,
  FaShieldHalved,
  FaTerminal,
  FaWaveSquare,
} from "react-icons/fa6";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

export type PortfolioMode = "backend" | "security";
export type Language = "pt" | "en";

export type StackItem = {
  name: string;
  icon: IconType;
};

export type Metric = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Capability = {
  title: string;
  icon: IconType;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  category: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  summary: string;
  outcome: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export type Track = {
  mode: PortfolioMode;
  label: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  githubHref: string;
  githubLabel: string;
  sourceLabel: string;
  sourceHref: string;
  metrics: Metric[];
  stack: StackItem[];
  terminalTitle: string;
  terminalLines: string[];
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  capabilities: Capability[];
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  projects: Project[];
  contactTitle: string;
  contactDescription: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export type UiCopy = {
  navExperience: string;
  navStack: string;
  navTrail: string;
  navProjects: string;
  navLab: string;
  navContact: string;
  viewNow: string;
  cv: string;
  profileCard: string;
  profilePhotoAlt: string;
  experienceEyebrow: string;
  experienceTitle: string;
  experienceDescription: string;
  toolsLabel: string;
  contactEyebrow: string;
  email: string;
  github: string;
  languageLabel: string;
};

export type PortfolioContent = {
  ui: UiCopy;
  tracks: Record<PortfolioMode, Track>;
  experienceTimeline: Experience[];
  contactLinks: ContactLink[];
};

const backendStack: StackItem[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "WebSocket", icon: SiSocketdotio },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

const securityStack: StackItem[] = [
  { name: "Linux", icon: SiLinux },
  { name: "Networking", icon: FaNetworkWired },
  { name: "Python", icon: SiPython },
  { name: "AppSec", icon: FaShieldHalved },
  { name: "Pentest", icon: FaTerminal },
  { name: "Cloud Security", icon: FaLayerGroup },
  { name: "DevSecOps", icon: SiGit },
  { name: "Secure Backend", icon: SiNestjs },
];

const ptTracks: Record<PortfolioMode, Track> = {
  backend: {
    mode: "backend",
    label: "Backend",
    shortLabel: "Dev",
    eyebrow: "Desenvolvedor Backend",
    headline:
      "APIs, dados e integrações com base sólida para operar no mundo real.",
    description:
      "Atuo com Node.js, NestJS e PostgreSQL criando serviços organizados, autenticação, regras de negócio, integrações e fluxos em tempo real. Gosto de backend limpo, previsível e preparado para crescer sem perder segurança.",
    githubHref: "https://github.com/Caique7k",
    githubLabel: "GitHub backend",
    sourceLabel: "github.com/Caique7k",
    sourceHref: "https://github.com/Caique7k",
    metrics: [
      {
        value: "2021 -> hoje",
        label: "experiência com backend em sistemas usados em operação real",
      },
      {
        value: "NestJS + SQL",
        label: "APIs modulares, banco relacional e regras de domínio claras",
      },
      {
        value: "JWT + RBAC",
        label: "autenticação e autorização aplicadas como parte do desenho",
      },
    ],
    stack: backendStack,
    terminalTitle: "api-flow.ts",
    terminalLines: [
      "request -> validate(dto)",
      "auth -> issueJWT()",
      "guard -> enforceRBAC()",
      "service -> applyBusinessRules()",
      "db -> parameterizedQuery()",
      "logs -> trackOperationalEvents()",
    ],
    capabilitiesEyebrow: "Stack e atuação",
    capabilitiesTitle: "Backend pensado para clareza, manutenção e operação.",
    capabilitiesDescription:
      "A base técnica combina construção de APIs, modelagem relacional, segurança aplicada e leitura de produção. O objetivo é entregar serviços simples de evoluir e difíceis de quebrar sem perceber.",
    capabilities: [
      {
        title: "APIs e arquitetura",
        icon: FaServer,
        description:
          "Serviços organizados por módulo, com responsabilidades nítidas, regras de negócio claras e rotas fáceis de manter.",
        tags: ["REST", "NestJS", "Módulos", "Integrações"],
      },
      {
        title: "Autenticação e acesso",
        icon: FaShieldHalved,
        description:
          "JWT, guards e RBAC para proteger recursos e manter permissões alinhadas ao papel real de cada usuário.",
        tags: ["JWT", "RBAC", "Guards", "Menor privilégio"],
      },
      {
        title: "Dados e SQL",
        icon: FaDatabase,
        description:
          "Modelagem relacional, consultas parametrizadas, normalização e atenção a índices quando a performance importa.",
        tags: ["PostgreSQL", "Joins", "Índices", "Consistência"],
      },
      {
        title: "Tempo real",
        icon: FaWaveSquare,
        description:
          "Fluxos com WebSocket e eventos quando o produto precisa reagir rápido e manter telas sincronizadas.",
        tags: ["WebSocket", "Eventos", "Operação", "Sincronização"],
      },
      {
        title: "Entrega incremental",
        icon: FaCodeBranch,
        description:
          "Versionamento, leitura de impacto e evolução em etapas para reduzir risco durante manutenção e entrega.",
        tags: ["Git", "Refactor", "Deploy", "Colaboração"],
      },
      {
        title: "Operação e suporte",
        icon: FaGaugeHigh,
        description:
          "Diagnóstico de falhas, análise de ambiente e suporte técnico ajudam a pensar software depois que ele sai do código.",
        tags: ["Troubleshooting", "Logs", "Redes", "Continuidade"],
      },
    ],
    projectsEyebrow: "Projetos",
    projectsTitle: "Sistemas que mostram backend em prática.",
    projectsDescription:
      "Projetos selecionados por envolverem integração, dados relacionais, tempo real e organização de serviços em cenários com uso real.",
    projects: [
      {
        title: "UniPass",
        category: "Plataforma operacional",
        media: {
          type: "image",
          src: "/dashboard-unipass.jpg",
          alt: "Dashboard do projeto UniPass",
        },
        summary:
          "Sistema com fluxo centralizado e base pensada para organizar regras de negócio, integrações e leitura operacional em um mesmo produto.",
        outcome:
          "NestJS + PostgreSQL em uma camada backend organizada para crescer sem perder clareza.",
        highlights: [
          "Estrutura de serviços orientada a módulos.",
          "Modelagem relacional para evolução de regras de negócio.",
          "Integração entre operação, dados e experiência de uso.",
        ],
        stack: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
        links: [
          {
            label: "Repositório",
            href: "https://github.com/Caique7k/unipass.git",
          },
        ],
      },
      {
        title: "Painel de Chamadas Santa Casa",
        category: "Tempo real em saúde",
        media: {
          type: "image",
          src: "/painel-chamadas.png",
          alt: "Painel de chamadas da Santa Casa de Misericórdia de Guaíra",
        },
        summary:
          "Painel operacional para ambiente de saúde com atualização contínua e foco em leitura instantânea.",
        outcome:
          "WebSocket aplicado em cenário real, onde estabilidade e legibilidade afetam a rotina de atendimento.",
        highlights: [
          "Atualização ao vivo para consultórios e triagem.",
          "Backend preparado para eventos contínuos.",
          "Uso prático em operação com exigência de estabilidade.",
        ],
        stack: ["Python", "FastAPI", "WebSocket", "React", "PostgreSQL"],
        links: [],
      },
      {
        title: "Painel e-SUS com LaborWaze",
        category: "Integração com sistema público",
        media: {
          type: "video",
          src: "https://www.youtube.com/embed/C7DnWuI7jQk?start=4",
          alt: "Vídeo do painel integrado ao e-SUS",
        },
        summary:
          "Projeto conectado ao ecossistema e-SUS, com integração entre sistemas e tradução de requisitos operacionais em fluxos claros.",
        outcome:
          "Integração real entre domínio público, produto web e camada backend.",
        highlights: [
          "Integração com o sistema e-SUS.",
          "Organização de fluxo para reduzir ruído operacional.",
          "Transformação de requisito complexo em produto utilizável.",
        ],
        stack: ["Next.js", "NestJS", "JavaScript", "PostgreSQL", "e-SUS"],
        links: [
          {
            label: "Repositório",
            href: "https://github.com/Caique7k/painel-esus.git",
          },
          {
            label: "Vídeo",
            href: "https://www.youtube.com/watch?v=C7DnWuI7jQk&t=4s",
          },
        ],
      },
      {
        title: "Cardápio Rápido",
        category: "Produto em produção",
        media: {
          type: "image",
          src: "/cardapio.png",
          alt: "Imagem do projeto Cardápio Rápido",
        },
        summary:
          "Produto com operação simples na superfície e organização multitenant por trás, pensado para cadastro, edição e publicação em ambiente real.",
        outcome:
          "CRUD multitenant com fluxo administrativo e separação por cliente.",
        highlights: [
          "Separação por tenant com foco em domínio.",
          "Fluxo administrativo para manutenção contínua.",
          "Produto publicado com uso real por clientes.",
        ],
        stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Multi-tenant"],
        links: [
          {
            label: "Site",
            href: "https://www.cardapiorapido.com.br/",
          },
        ],
      },
    ],
    contactTitle: "Vamos conversar sobre backend que precisa funcionar bem.",
    contactDescription:
      "Estou disponível para APIs, integrações, manutenção de sistemas, dados relacionais e produtos que precisam de uma base técnica confiável.",
  },
  security: {
    mode: "security",
    label: "Cibersegurança",
    shortLabel: "Sec",
    eyebrow: "Cibersegurança e AppSec",
    headline:
      "Segurança ofensiva, pentest e AppSec com mentalidade de backend.",
    description:
      "Estou aprofundando estudos em cibersegurança para unir desenvolvimento e segurança: entender como sistemas quebram para construir APIs, fluxos e controles mais resistentes desde o início.",
    githubHref: "https://github.com/caiquedotsec",
    githubLabel: "GitHub segurança",
    sourceLabel: "github.com/caiquedotsec",
    sourceHref: "https://github.com/caiquedotsec",
    metrics: [
      {
        value: "OffSec",
        label: "foco atual em segurança ofensiva, pentest e AppSec",
      },
      {
        value: "Linux + Redes",
        label: "base prática para entender superfície, tráfego e ambiente",
      },
      {
        value: "DevSecOps",
        label:
          "explorando cloud security, blue team e segurança no ciclo de entrega",
      },
    ],
    stack: securityStack,
    terminalTitle: "whoami",
    terminalLines: [
      "alias -> caiquedotsec",
      "focus -> offensive_security",
      "specialty -> pentesting + appsec",
      "learning -> linux + networking + python",
      "exploring -> cloud_security + devsecops",
      "goal -> build_secure_systems",
    ],
    capabilitiesEyebrow: "Trilha de segurança",
    capabilitiesTitle: "Uma visão ofensiva aplicada ao ciclo de software.",
    capabilitiesDescription:
      "A área de segurança foi desenhada como um laboratório em evolução: fundamentos, prática controlada, AppSec e ponte direta com backend seguro.",
    capabilities: [
      {
        title: "Pentest e reconhecimento",
        icon: FaFingerprint,
        description:
          "Leitura de superfície, enumeração, entendimento de contexto e documentação clara antes de qualquer exploração.",
        tags: ["Recon", "Enumeração", "Escopo", "Evidências"],
      },
      {
        title: "AppSec para APIs",
        icon: FaKey,
        description:
          "Validação de entrada, autenticação, autorização, exposição de dados e falhas comuns em aplicações web e APIs.",
        tags: ["OWASP", "Auth", "RBAC", "APIs"],
      },
      {
        title: "Linux e redes",
        icon: FaNetworkWired,
        description:
          "Fundamentos de sistema operacional, serviços, portas, tráfego e diagnóstico para entender onde a aplicação vive.",
        tags: ["Linux", "TCP/IP", "Serviços", "Troubleshooting"],
      },
      {
        title: "Automação com Python",
        icon: SiPython,
        description:
          "Scripts para organizar estudos, validar hipóteses e acelerar tarefas repetitivas em laboratórios controlados.",
        tags: ["Python", "Scripts", "Parsing", "Labs"],
      },
      {
        title: "DevSecOps",
        icon: FaCodeBranch,
        description:
          "Exploração de segurança em pipeline, cloud e práticas que ajudam a encontrar problemas antes da produção.",
        tags: ["Pipeline", "Cloud", "Secrets", "Hardening"],
      },
      {
        title: "Blue Team como contexto",
        icon: FaShieldHalved,
        description:
          "Noções de defesa, logs, detecção e resposta para escrever achados úteis e pensar mitigação com mais precisão.",
        tags: ["Logs", "Detecção", "Mitigação", "Resposta"],
      },
    ],
    projectsEyebrow: "Laboratório",
    projectsTitle: "Estudos públicos e próximos passos em cibersegurança.",
    projectsDescription:
      "Como essa trilha está em construção, a seção mostra o que já está público e onde os estudos estão sendo concentrados agora.",
    projects: [
      {
        title: "caiquedotsec",
        category: "Perfil de segurança",
        summary:
          "Perfil dedicado a cibersegurança, com foco declarado em Offensive Security, Pentesting e Application Security.",
        outcome:
          "Base pública para concentrar estudos, anotações e futuros laboratórios de segurança.",
        highlights: [
          "Identidade técnica separada para segurança.",
          "Foco em AppSec sem abandonar a experiência backend.",
          "Mensagem central: entender sistemas para proteger informação.",
        ],
        stack: ["Offensive Security", "Pentesting", "AppSec", "Linux", "Python"],
        links: [
          {
            label: "Perfil",
            href: "https://github.com/caiquedotsec",
          },
        ],
      },
      {
        title: "Backend seguro por design",
        category: "AppSec aplicado",
        summary:
          "Estudo contínuo para levar mentalidade ofensiva para decisões de API: autenticação, autorização, validação e persistência.",
        outcome:
          "A experiência com NestJS e PostgreSQL vira vantagem para identificar e corrigir falhas comuns em aplicações.",
        highlights: [
          "Controle de acesso por contexto.",
          "Entrada tratada como não confiável.",
          "Queries e modelos pensados contra exposição indevida.",
        ],
        stack: ["OWASP", "JWT", "RBAC", "SQL", "Secure SDLC"],
        links: [
          {
            label: "GitHub backend",
            href: "https://github.com/Caique7k",
          },
        ],
      },
      {
        title: "Trilha Cisco Cybersecurity",
        category: "Fundamentos",
        summary:
          "Linha de aprendizado voltada a fundamentos de segurança, redes, Linux e conceitos que sustentam análise ofensiva e defensiva.",
        outcome:
          "Base técnica para evoluir em cloud security, DevSecOps e conceitos de Blue Team.",
        highlights: [
          "Fundamentos antes de ferramenta.",
          "Redes e Linux como base de investigação.",
          "Estudos conectados a cenários de aplicação web.",
        ],
        stack: ["Cisco", "Networking", "Linux", "Blue Team", "Cloud Security"],
        links: [],
      },
    ],
    contactTitle: "Vamos falar sobre segurança aplicada ao desenvolvimento.",
    contactDescription:
      "Procuro oportunidades e projetos onde backend, AppSec, pentest e segurança no ciclo de entrega possam caminhar juntos.",
  },
};

const enTracks: Record<PortfolioMode, Track> = {
  backend: {
    mode: "backend",
    label: "Backend",
    shortLabel: "Dev",
    eyebrow: "Backend Developer",
    headline:
      "APIs, data and integrations with a solid foundation for real-world operation.",
    description:
      "I work with Node.js, NestJS and PostgreSQL to build organized services, authentication, business rules, integrations and real-time flows. I like clean, predictable backend systems that can grow without losing security.",
    githubHref: "https://github.com/Caique7k",
    githubLabel: "Backend GitHub",
    sourceLabel: "github.com/Caique7k",
    sourceHref: "https://github.com/Caique7k",
    metrics: [
      {
        value: "2021 -> now",
        label: "backend experience in systems used in real operations",
      },
      {
        value: "NestJS + SQL",
        label: "modular APIs, relational databases and clear domain rules",
      },
      {
        value: "JWT + RBAC",
        label: "authentication and authorization designed into the system",
      },
    ],
    stack: backendStack,
    terminalTitle: "api-flow.ts",
    terminalLines: ptTracks.backend.terminalLines,
    capabilitiesEyebrow: "Stack and work",
    capabilitiesTitle: "Backend built for clarity, maintenance and operation.",
    capabilitiesDescription:
      "My technical base combines API development, relational modeling, applied security and production awareness. The goal is to deliver services that are easy to evolve and harder to break unnoticed.",
    capabilities: [
      {
        title: "APIs and architecture",
        icon: FaServer,
        description:
          "Services organized by module, with clear responsibilities, explicit business rules and routes that are easy to maintain.",
        tags: ["REST", "NestJS", "Modules", "Integrations"],
      },
      {
        title: "Authentication and access",
        icon: FaShieldHalved,
        description:
          "JWT, guards and RBAC to protect resources and keep permissions aligned with each user's real role.",
        tags: ["JWT", "RBAC", "Guards", "Least privilege"],
      },
      {
        title: "Data and SQL",
        icon: FaDatabase,
        description:
          "Relational modeling, parameterized queries, normalization and attention to indexes when performance matters.",
        tags: ["PostgreSQL", "Joins", "Indexes", "Consistency"],
      },
      {
        title: "Real-time flows",
        icon: FaWaveSquare,
        description:
          "WebSocket and event-driven flows when a product needs to react quickly and keep screens synchronized.",
        tags: ["WebSocket", "Events", "Operations", "Sync"],
      },
      {
        title: "Incremental delivery",
        icon: FaCodeBranch,
        description:
          "Version control, impact analysis and step-by-step evolution to reduce risk during maintenance and delivery.",
        tags: ["Git", "Refactor", "Deploy", "Collaboration"],
      },
      {
        title: "Operations and support",
        icon: FaGaugeHigh,
        description:
          "Failure diagnosis, environment analysis and technical support help me think about software after it leaves the codebase.",
        tags: ["Troubleshooting", "Logs", "Networks", "Continuity"],
      },
    ],
    projectsEyebrow: "Projects",
    projectsTitle: "Systems that show backend in practice.",
    projectsDescription:
      "Selected projects involving integrations, relational data, real-time behavior and service organization in real-use scenarios.",
    projects: [
      {
        title: "UniPass",
        category: "Operational platform",
        media: {
          type: "image",
          src: "/dashboard-unipass.jpg",
          alt: "UniPass project dashboard",
        },
        summary:
          "A centralized system designed to organize business rules, integrations and operational visibility in one product.",
        outcome:
          "NestJS + PostgreSQL in a backend layer structured to grow without losing clarity.",
        highlights: [
          "Service structure organized by modules.",
          "Relational modeling to support evolving business rules.",
          "Integration between operations, data and user experience.",
        ],
        stack: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
        links: [
          {
            label: "Repository",
            href: "https://github.com/Caique7k/unipass.git",
          },
        ],
      },
      {
        title: "Santa Casa Call Panel",
        category: "Real-time healthcare",
        media: {
          type: "image",
          src: "/painel-chamadas.png",
          alt: "Santa Casa de Misericórdia de Guaíra call panel",
        },
        summary:
          "An operational panel for a healthcare environment with continuous updates and instant readability.",
        outcome:
          "WebSocket applied in a real scenario where stability and readability affect the care routine.",
        highlights: [
          "Live updates for offices and triage areas.",
          "Backend prepared for continuous events.",
          "Practical use in operations with stability requirements.",
        ],
        stack: ["Python", "FastAPI", "WebSocket", "React", "PostgreSQL"],
        links: [],
      },
      {
        title: "e-SUS Panel with LaborWaze",
        category: "Public system integration",
        media: {
          type: "video",
          src: "https://www.youtube.com/embed/C7DnWuI7jQk?start=4",
          alt: "Video of the panel integrated with e-SUS",
        },
        summary:
          "A project connected to the e-SUS ecosystem, integrating systems and translating operational requirements into clear flows.",
        outcome:
          "Real integration between a public domain, a web product and a backend layer.",
        highlights: [
          "Integration with the e-SUS system.",
          "Flow organization to reduce operational noise.",
          "Turning a complex requirement into a usable product.",
        ],
        stack: ["Next.js", "NestJS", "JavaScript", "PostgreSQL", "e-SUS"],
        links: [
          {
            label: "Repository",
            href: "https://github.com/Caique7k/painel-esus.git",
          },
          {
            label: "Video",
            href: "https://www.youtube.com/watch?v=C7DnWuI7jQk&t=4s",
          },
        ],
      },
      {
        title: "Cardápio Rápido",
        category: "Production product",
        media: {
          type: "image",
          src: "/cardapio.png",
          alt: "Cardápio Rápido project image",
        },
        summary:
          "A product with a simple surface operation and multi-tenant organization underneath, built for real-world publishing and maintenance.",
        outcome:
          "Multi-tenant CRUD with an administrative flow and customer separation.",
        highlights: [
          "Tenant separation focused on domain organization.",
          "Administrative flow for continuous maintenance.",
          "Published product with real customer usage.",
        ],
        stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Multi-tenant"],
        links: [
          {
            label: "Website",
            href: "https://www.cardapiorapido.com.br/",
          },
        ],
      },
    ],
    contactTitle: "Let's talk about backend that needs to work reliably.",
    contactDescription:
      "I am available for APIs, integrations, system maintenance, relational data and products that need a dependable technical foundation.",
  },
  security: {
    mode: "security",
    label: "Cybersecurity",
    shortLabel: "Sec",
    eyebrow: "Cybersecurity and AppSec",
    headline: "Offensive security, pentesting and AppSec with a backend mindset.",
    description:
      "I am deepening my cybersecurity studies to connect development and security: understanding how systems break so I can build more resilient APIs, flows and controls from the start.",
    githubHref: "https://github.com/caiquedotsec",
    githubLabel: "Security GitHub",
    sourceLabel: "github.com/caiquedotsec",
    sourceHref: "https://github.com/caiquedotsec",
    metrics: [
      {
        value: "OffSec",
        label: "current focus on offensive security, pentesting and AppSec",
      },
      {
        value: "Linux + Networks",
        label: "practical base for understanding surface, traffic and environment",
      },
      {
        value: "DevSecOps",
        label: "exploring cloud security, blue team and security in delivery",
      },
    ],
    stack: securityStack,
    terminalTitle: "whoami",
    terminalLines: ptTracks.security.terminalLines,
    capabilitiesEyebrow: "Security track",
    capabilitiesTitle: "An offensive view applied to the software lifecycle.",
    capabilitiesDescription:
      "The security area is presented as an evolving lab: fundamentals, controlled practice, AppSec and a direct bridge to secure backend development.",
    capabilities: [
      {
        title: "Pentest and reconnaissance",
        icon: FaFingerprint,
        description:
          "Surface review, enumeration, context understanding and clear documentation before any exploitation.",
        tags: ["Recon", "Enumeration", "Scope", "Evidence"],
      },
      {
        title: "AppSec for APIs",
        icon: FaKey,
        description:
          "Input validation, authentication, authorization, data exposure and common flaws in web applications and APIs.",
        tags: ["OWASP", "Auth", "RBAC", "APIs"],
      },
      {
        title: "Linux and networking",
        icon: FaNetworkWired,
        description:
          "Operating system fundamentals, services, ports, traffic and diagnosis to understand where applications live.",
        tags: ["Linux", "TCP/IP", "Services", "Troubleshooting"],
      },
      {
        title: "Python automation",
        icon: SiPython,
        description:
          "Scripts to organize studies, validate hypotheses and speed up repetitive tasks in controlled labs.",
        tags: ["Python", "Scripts", "Parsing", "Labs"],
      },
      {
        title: "DevSecOps",
        icon: FaCodeBranch,
        description:
          "Exploring security in pipelines, cloud and practices that help catch issues before production.",
        tags: ["Pipeline", "Cloud", "Secrets", "Hardening"],
      },
      {
        title: "Blue Team as context",
        icon: FaShieldHalved,
        description:
          "Defensive notions, logs, detection and response to write useful findings and think mitigation more clearly.",
        tags: ["Logs", "Detection", "Mitigation", "Response"],
      },
    ],
    projectsEyebrow: "Lab",
    projectsTitle: "Public studies and next steps in cybersecurity.",
    projectsDescription:
      "Because this track is still being built, this section shows what is already public and where the current studies are concentrated.",
    projects: [
      {
        title: "caiquedotsec",
        category: "Security profile",
        summary:
          "A profile dedicated to cybersecurity, with a stated focus on Offensive Security, Pentesting and Application Security.",
        outcome:
          "A public base to centralize studies, notes and future security labs.",
        highlights: [
          "Separate technical identity for security.",
          "AppSec focus without leaving backend experience behind.",
          "Central message: understand systems to protect information.",
        ],
        stack: ["Offensive Security", "Pentesting", "AppSec", "Linux", "Python"],
        links: [
          {
            label: "Profile",
            href: "https://github.com/caiquedotsec",
          },
        ],
      },
      {
        title: "Secure backend by design",
        category: "Applied AppSec",
        summary:
          "Ongoing study to bring an offensive mindset into API decisions: authentication, authorization, validation and persistence.",
        outcome:
          "Experience with NestJS and PostgreSQL becomes an advantage for identifying and fixing common application flaws.",
        highlights: [
          "Context-based access control.",
          "Input treated as untrusted.",
          "Queries and models designed against improper exposure.",
        ],
        stack: ["OWASP", "JWT", "RBAC", "SQL", "Secure SDLC"],
        links: [
          {
            label: "Backend GitHub",
            href: "https://github.com/Caique7k",
          },
        ],
      },
      {
        title: "Cisco Cybersecurity Track",
        category: "Fundamentals",
        summary:
          "A learning path focused on security fundamentals, networks, Linux and concepts that support offensive and defensive analysis.",
        outcome:
          "Technical base to evolve in cloud security, DevSecOps and Blue Team concepts.",
        highlights: [
          "Fundamentals before tools.",
          "Networks and Linux as an investigation base.",
          "Studies connected to web application scenarios.",
        ],
        stack: ["Cisco", "Networking", "Linux", "Blue Team", "Cloud Security"],
        links: [],
      },
    ],
    contactTitle: "Let's talk about security applied to development.",
    contactDescription:
      "I am looking for opportunities and projects where backend, AppSec, pentesting and security in the delivery lifecycle can move together.",
  },
};

const ptExperienceTimeline: Experience[] = [
  {
    company: "Centro Estadual de Educação Tecnológica Paula Souza",
    role: "Auxiliar de Docente",
    period: "07/2026 - Atualmente",
    summary:
      "Atuação em apoio às atividades educacionais e práticas em ambiente de educação tecnológica, conectando suporte técnico, organização de laboratório e acompanhamento de alunos e docentes.",
    highlights: [
      "Apoio a docentes e alunos em atividades práticas ligadas à tecnologia.",
      "Organização e suporte em ambiente de laboratório para manter as aulas fluindo com estabilidade.",
      "Aplicação da experiência em suporte, redes e sistemas no contexto educacional.",
      "Contato direto com formação técnica, documentação e rotina de aprendizagem aplicada.",
    ],
  },
  {
    company: "COMPUTEC",
    role: "Técnico de Suporte / Desenvolvedor Backend",
    period: "08/2022 - 06/2026",
    summary:
      "Atuação em manutenção e evolução de sistemas com foco em APIs REST, segurança aplicada ao backend, banco relacional e continuidade operacional.",
    highlights: [
      "Desenvolvimento e manutenção de APIs REST com Node.js, NestJS e PostgreSQL.",
      "Implementação de autenticação com JWT e RBAC, além de validação de dados na camada de entrada.",
      "Construção de funcionalidades em tempo real com WebSocket e integração entre serviços.",
      "Suporte técnico a clientes com diagnóstico de hardware, redes e sistemas para manter a operação estável.",
    ],
  },
  {
    company: "Single Sistemas Ltda",
    role: "Desenvolvedor Backend",
    period: "02/2021 - 11/2021",
    summary:
      "Experiência em desenvolvimento de APIs REST, modelagem relacional e participação em sistemas web com regras de negócio reais.",
    highlights: [
      "Desenvolvimento de APIs REST com Node.js e PostgreSQL.",
      "Implementação de autenticação com JWT e validação de dados.",
      "Modelagem de banco de dados relacional com foco em consistência e organização do domínio.",
      "Integração entre sistemas e desenvolvimento de funcionalidades backend em ambiente profissional.",
    ],
  },
];

const enExperienceTimeline: Experience[] = [
  {
    company: "Centro Estadual de Educação Tecnológica Paula Souza",
    role: "Teaching Assistant",
    period: "07/2026 - Present",
    summary:
      "Supporting educational and hands-on activities in a technological education environment, connecting technical support, lab organization and assistance for students and teachers.",
    highlights: [
      "Support for teachers and students in technology-related practical activities.",
      "Lab organization and support to keep classes running with stability.",
      "Applying support, networking and systems experience in an educational context.",
      "Direct contact with technical training, documentation and applied learning routines.",
    ],
  },
  {
    company: "COMPUTEC",
    role: "Technical Support / Backend Developer",
    period: "08/2022 - 06/2026",
    summary:
      "Maintenance and evolution of systems with a focus on REST APIs, backend security, relational databases and operational continuity.",
    highlights: [
      "Development and maintenance of REST APIs with Node.js, NestJS and PostgreSQL.",
      "Implementation of JWT authentication and RBAC, plus input-layer data validation.",
      "Real-time features with WebSocket and service integrations.",
      "Technical support for clients, including hardware, network and system diagnosis to keep operations stable.",
    ],
  },
  {
    company: "Single Sistemas Ltda",
    role: "Backend Developer",
    period: "02/2021 - 11/2021",
    summary:
      "Experience developing REST APIs, relational modeling and working on web systems with real business rules.",
    highlights: [
      "REST API development with Node.js and PostgreSQL.",
      "JWT authentication and data validation implementation.",
      "Relational database modeling focused on consistency and domain organization.",
      "System integration and backend feature development in a professional environment.",
    ],
  },
];

const ptContactLinks: ContactLink[] = [
  {
    label: "WhatsApp",
    value: "+55 17 98810-3154",
    href: "https://wa.me/5517988103154",
    note: "contato rápido para oportunidades e freelas",
  },
  {
    label: "Email",
    value: "caique7k@gmail.com",
    href: "mailto:caique7k@gmail.com",
    note: "bom canal para propostas mais detalhadas",
  },
  {
    label: "GitHub Backend",
    value: "github.com/Caique7k",
    href: "https://github.com/Caique7k",
    note: "projetos, estudos e histórico de desenvolvimento",
  },
  {
    label: "GitHub Security",
    value: "github.com/caiquedotsec",
    href: "https://github.com/caiquedotsec",
    note: "perfil dedicado a segurança ofensiva e AppSec",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caique7k",
    href: "https://www.linkedin.com/in/caique7k/",
    note: "trajetória profissional e networking",
  },
];

const enContactLinks: ContactLink[] = [
  {
    label: "WhatsApp",
    value: "+55 17 98810-3154",
    href: "https://wa.me/5517988103154",
    note: "fast contact for opportunities and freelance work",
  },
  {
    label: "Email",
    value: "caique7k@gmail.com",
    href: "mailto:caique7k@gmail.com",
    note: "best channel for more detailed proposals",
  },
  {
    label: "Backend GitHub",
    value: "github.com/Caique7k",
    href: "https://github.com/Caique7k",
    note: "projects, studies and development history",
  },
  {
    label: "Security GitHub",
    value: "github.com/caiquedotsec",
    href: "https://github.com/caiquedotsec",
    note: "profile dedicated to offensive security and AppSec",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caique7k",
    href: "https://www.linkedin.com/in/caique7k/",
    note: "professional background and networking",
  },
];

export const portfolioContent: Record<Language, PortfolioContent> = {
  pt: {
    ui: {
      navExperience: "Experiência",
      navStack: "Stack",
      navTrail: "Trilha",
      navProjects: "Projetos",
      navLab: "Laboratório",
      navContact: "Contato",
      viewNow: "Ver agora",
      cv: "CV",
      profileCard: "profile.card",
      profilePhotoAlt: "Foto de Caique da Silva Alves",
      experienceEyebrow: "Experiência",
      experienceTitle:
        "Uma base backend que ajuda a pensar segurança com contexto.",
      experienceDescription:
        "A trajetória profissional combina desenvolvimento, suporte técnico, dados e operação. Essa mistura é útil tanto para construir serviços quanto para investigar onde eles podem falhar.",
      toolsLabel: "Ferramentas e base técnica",
      contactEyebrow: "Contato",
      email: "Email",
      github: "GitHub",
      languageLabel: "Idioma",
    },
    tracks: ptTracks,
    experienceTimeline: ptExperienceTimeline,
    contactLinks: ptContactLinks,
  },
  en: {
    ui: {
      navExperience: "Experience",
      navStack: "Stack",
      navTrail: "Track",
      navProjects: "Projects",
      navLab: "Lab",
      navContact: "Contact",
      viewNow: "View now",
      cv: "CV",
      profileCard: "profile.card",
      profilePhotoAlt: "Photo of Caique da Silva Alves",
      experienceEyebrow: "Experience",
      experienceTitle:
        "A backend foundation that helps me think about security with context.",
      experienceDescription:
        "My professional path combines development, technical support, data and operations. That mix helps me both build services and investigate where they can fail.",
      toolsLabel: "Tools and technical base",
      contactEyebrow: "Contact",
      email: "Email",
      github: "GitHub",
      languageLabel: "Language",
    },
    tracks: enTracks,
    experienceTimeline: enExperienceTimeline,
    contactLinks: enContactLinks,
  },
};
