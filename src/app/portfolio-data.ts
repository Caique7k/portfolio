import type { IconType } from "react-icons";
import {
  FaCodeBranch,
  FaDatabase,
  FaHeadset,
  FaServer,
  FaShieldHalved,
  FaTerminal,
  FaWaveSquare,
} from "react-icons/fa6";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

export type StackItem = {
  name: string;
  icon: IconType;
};

export type QuickStat = {
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

export type CapabilityGroup = {
  title: string;
  icon: IconType;
  description: string;
  tags: string[];
};

export type SecurityPractice = {
  title: string;
  icon: IconType;
  description: string;
  checklist: string[];
};

export type Project = {
  title: string;
  category: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  summary: string;
  outcome: {
    value: string;
    label: string;
    note: string;
  };
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const quickStats: QuickStat[] = [
  {
    value: "2021 -> hoje",
    label: "atuando com backend em sistemas usados no mundo real",
  },
  {
    value: "JWT + RBAC",
    label: "autenticação e controle de acesso aplicados em APIs",
  },
  {
    value: "REST + WebSocket",
    label: "integrações síncronas e fluxos em tempo real",
  },
];

export const coreStack: StackItem[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "WebSocket", icon: SiSocketdotio },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

export const heroSnippet = [
  "request -> validate(dto)",
  "auth -> issueJWT()",
  "guard -> enforceRBAC()",
  "service -> applyBusinessRules()",
  "db -> runParameterizedQuery()",
  "logs -> trackOperationalEvents()",
];

export const experienceTimeline: Experience[] = [
  {
    company: "COMPUTEC",
    role: "Técnico de Suporte / Desenvolvedor Backend",
    period: "08/2022 - Atualmente",
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

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "APIs e arquitetura de serviços",
    icon: FaServer,
    description:
      "Construção de APIs organizadas em módulos, com responsabilidades bem definidas, regras de negócio claras e foco em manutenção contínua.",
    tags: ["REST", "NestJS", "Módulos", "Integrações"],
  },
  {
    title: "Autenticação e autorização",
    icon: FaShieldHalved,
    description:
      "Uso de JWT, RBAC e proteção de rotas para reduzir exposição indevida de recursos e manter o acesso compatível com o papel de cada usuário.",
    tags: ["JWT", "RBAC", "Guards", "Controle de acesso"],
  },
  {
    title: "Dados e SQL",
    icon: FaDatabase,
    description:
      "Modelagem relacional, normalização, consultas otimizadas e leitura crítica de performance para APIs que dependem de consistência de dados.",
    tags: ["PostgreSQL", "Joins", "Índices", "Otimização"],
  },
  {
    title: "Tempo real e integrações",
    icon: FaWaveSquare,
    description:
      "Desenvolvimento de fluxos com WebSocket e comunicação entre sistemas quando a operação precisa reagir rápido e manter sincronismo.",
    tags: ["WebSocket", "Eventos", "Mensageria", "Sincronização"],
  },
  {
    title: "Operação e suporte",
    icon: FaHeadset,
    description:
      "Diagnóstico de falhas, análise de ambiente e suporte técnico como parte da responsabilidade por sistemas em produção.",
    tags: ["Suporte", "Redes", "Hardware", "Continuidade"],
  },
  {
    title: "Fluxo de entrega",
    icon: FaCodeBranch,
    description:
      "Versionamento com Git, organização de mudanças e evolução incremental para reduzir risco e facilitar manutenção.",
    tags: ["Git", "Branches", "Refactor", "Colaboração"],
  },
];

export const securityPractices: SecurityPractice[] = [
  {
    title: "Validação na borda",
    icon: FaTerminal,
    description:
      "Payloads são tratados como entrada não confiável. A validação antecipada ajuda a proteger regras de negócio e dados persistidos.",
    checklist: [
      "Campos obrigatórios e formatos consistentes",
      "Tratamento explícito de erros de entrada",
      "Respostas previsíveis para clientes e integrações",
    ],
  },
  {
    title: "Autorização por contexto",
    icon: FaShieldHalved,
    description:
      "Autenticar não basta. O controle de acesso precisa respeitar perfis, permissões e limites de cada operação.",
    checklist: [
      "JWT com rotas protegidas",
      "RBAC para separar responsabilidades",
      "Princípio do menor privilégio possível",
    ],
  },
  {
    title: "Persistência segura",
    icon: FaDatabase,
    description:
      "Modelagem relacional e consultas bem construídas reduzem inconsistências, retrabalho e pontos frágeis na camada de dados.",
    checklist: [
      "Queries parametrizadas",
      "Modelagem orientada ao domínio",
      "Otimização de SQL e leitura de gargalos",
    ],
  },
  {
    title: "Operação observável",
    icon: FaServer,
    description:
      "Backend seguro também precisa ser rastreável. Logs úteis e diagnóstico rápido ajudam a responder melhor a incidentes e falhas.",
    checklist: [
      "Tratamento de exceções sem vazar detalhes sensíveis",
      "Logs orientados a troubleshooting",
      "Foco em estabilidade e continuidade do serviço",
    ],
  },
];

export const systemPrinciples = [
  "Segurança entra na arquitetura desde a rota até a persistência, não apenas no deploy.",
  "Validação de entrada, autenticação e autorização fazem parte do fluxo base de qualquer API séria.",
  "Banco relacional bem modelado evita gambiarras futuras e melhora a previsibilidade da operação.",
  "Suporte técnico e análise de falhas reforçam uma visão mais completa de backend em produção.",
];

export const projects: Project[] = [
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
    outcome: {
      value: "NestJS + PostgreSQL",
      label: "camada backend organizada para crescer sem perder clareza",
      note: "Projeto em que arquitetura, domínio e legibilidade caminham juntos para reduzir retrabalho.",
    },
    highlights: [
      "Estrutura de serviços orientada a módulos e responsabilidades claras.",
      "Modelagem relacional para suportar evolução de regras de negócio.",
      "Integração entre operação, dados e experiência de uso em um fluxo coeso.",
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
      "Painel operacional para ambiente de saúde com atualização contínua e foco em leitura instantânea, reduzindo atrito em uma rotina crítica.",
    outcome: {
      value: "WebSocket em produção",
      label: "fluxo em tempo real para atendimento e triagem",
      note: "Projeto aplicado em cenário real, onde legibilidade e consistência impactam diretamente a operação.",
    },
    highlights: [
      "Atualização ao vivo para consultórios e áreas de triagem.",
      "Backend preparado para eventos e comunicação contínua.",
      "Uso prático em operação real com exigência de estabilidade.",
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
      "Projeto conectado ao ecossistema e-SUS, com integração entre sistemas e tradução de requisitos operacionais em fluxos claros de uso.",
    outcome: {
      value: "Integração real",
      label: "dados e regras conectados a um contexto público",
      note: "Entrega que reforça experiência com integrações, domínio operacional e valor prático do backend.",
    },
    highlights: [
      "Integração com o sistema e-SUS em um caso com uso público.",
      "Organização do fluxo para reduzir ruído na operação.",
      "Capacidade de transformar requisito complexo em produto utilizável.",
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
      "Produto com operação simples na superfície e organização multitenant por trás, pensado para suportar cadastro, edição e publicação em ambiente real.",
    outcome: {
      value: "CRUD multitenant",
      label: "backend orientado a manutenção e crescimento do produto",
      note: "Solução publicada em produção com fluxo administrativo e separação por tenant.",
    },
    highlights: [
      "Separação por tenant com foco em organização do domínio.",
      "Fluxo administrativo para cadastro e manutenção contínua.",
      "Experiência profissional em produto com uso real por clientes.",
    ],
    stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "Multi-tenant"],
    links: [
      {
        label: "Site",
        href: "https://www.cardapiorapido.com.br/",
      },
    ],
  },
];

export const repoHighlights = [
  {
    name: "unipass",
    description:
      "Projeto com foco em domínio, organização de fluxo e base pronta para evoluir backend e produto juntos.",
    href: "https://github.com/Caique7k/unipass.git",
  },
  {
    name: "painel-esus",
    description:
      "Integração com contexto público e boa referência de comunicação entre sistema e operação real.",
    href: "https://github.com/Caique7k/painel-esus.git",
  },
  {
    name: "SyncDesk",
    description:
      "Estudo em C# para reforçar lógica, orientação a objetos e repertório além do ecossistema Node.js.",
    href: "https://github.com/Caique7k/SyncDesk.git",
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
    label: "GitHub",
    value: "github.com/Caique7k",
    href: "https://github.com/Caique7k",
    note: "repositórios, histórico de estudo e projetos",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caique7k",
    href: "https://www.linkedin.com/in/caique7k/",
    note: "trajetória profissional e networking",
  },
];
