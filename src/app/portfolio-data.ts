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

export const tracks: Record<PortfolioMode, Track> = {
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
    stack: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "WebSocket", icon: SiSocketdotio },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
    ],
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
        label: "explorando cloud security, blue team e segurança no ciclo de entrega",
      },
    ],
    stack: [
      { name: "Linux", icon: SiLinux },
      { name: "Networking", icon: FaNetworkWired },
      { name: "Python", icon: SiPython },
      { name: "AppSec", icon: FaShieldHalved },
      { name: "Pentest", icon: FaTerminal },
      { name: "Cloud Security", icon: FaLayerGroup },
      { name: "DevSecOps", icon: SiGit },
      { name: "Secure Backend", icon: SiNestjs },
    ],
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

export const experienceTimeline: Experience[] = [
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

export const contactLinks = [
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
