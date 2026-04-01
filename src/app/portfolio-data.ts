import type { IconType } from "react-icons";
import {
  SiCss3,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaCode, FaDatabase } from "react-icons/fa6";

export type Project = {
  title: string;
  category: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  summary: string;
  metric: {
    value: string;
    label: string;
    note: string;
  };
  details: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export type CapabilityGroup = {
  title: string;
  icon: IconType;
  description: string;
  tags: string[];
};

export type ProcessCard = {
  title: string;
  description: string;
  tags: string[];
};

export const coreLanguages = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "C#", icon: FaCode },
  { name: "SQL", icon: FaDatabase },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
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
      "Sistema com dashboard, fluxos centralizados e uma interface desenhada para reduzir atrito na rotina. O projeto destaca organização visual, leitura rápida de dados e integração entre operação e produto.",
    metric: {
      value: "32%",
      label: "potencial estimado de redução em erros operacionais",
      note: "Estimativa de produto baseada em centralização de fluxo, validações e menos retrabalho manual.",
    },
    details: [
      "Dashboard com visão direta da operação e pontos críticos.",
      "Estrutura orientada a React, Node.js, NestJS e dados organizados.",
      "Experiência mais limpa para reduzir passos desnecessários no uso diário.",
    ],
    stack: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
    links: [
      { label: "Repositorio", href: "https://github.com/Caique7k/unipass.git" },
    ],
  },
  {
    title: "Painel de Chamadas Santa Casa",
    category: "Saude em tempo real",
    media: {
      type: "image",
      src: "/painel-chamadas.png",
      alt: "Painel de chamadas da Santa Casa de Misericordia de Guaira",
    },
    summary:
      "Sistema em operação na Santa Casa de Misericórdia de Guaíra/SP, focado em filas, legibilidade e fluxo contínuo de atendimento em ambiente real de saúde.",
    metric: {
      value: "45%",
      label: "menos tempo de atendimento",
      note: "Resultado informado com redução superior a 70% nos casos de pacientes não atendidos.",
    },
    details: [
      "Atualização em tempo real para consultórios e triagem.",
      "Layout pensado para leitura instantânea em telas grandes.",
      "Produto aplicado em um contexto em que a clareza afeta diretamente a operação.",
    ],
    stack: ["Python", "FastAPI", "WebSocket", "React", "PostgreSQL"],
    links: [],
  },
  {
    title: "Painel e-SUS com LaborWaze",
    category: "Integracao e visibilidade",
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/C7DnWuI7jQk?start=4",
      alt: "Video do painel integrado ao e-SUS",
    },
    summary:
      "Projeto conectado ao ecossistema do e-SUS, desenvolvido com a LaborWaze. Aqui o destaque está na integração com sistema real, organização de fluxo e valor público da entrega.",
    metric: {
      value: "15k+",
      label: "visualizações do vídeo",
      note: "Vídeo do projeto usado como prova social e demonstração pública da solução.",
    },
    details: [
      "Integração com o sistema e-SUS.",
      "Case com boa tração de visibilidade e demonstração real do produto.",
      "Mostra capacidade de transformar requisito operacional em interface clara.",
    ],
    stack: ["Next.js", "NestJS", "JavaScript", "PostgreSQL", "e-SUS"],
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/Caique7k/painel-esus.git",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=C7DnWuI7jQk&t=4s",
      },
    ],
  },
  {
    title: "SyncDesk",
    category: "Estudos em C#",
    media: {
      type: "image",
      src: "/unipass-cover.svg",
      alt: "Capa conceitual do projeto SyncDesk",
    },
    summary:
      "Projeto de estudos que reforça base de orientação a objetos, lógica de negócio e capacidade de transitar entre stacks com profundidade, não apenas superficialidade.",
    metric: {
      value: "C#",
      label: "foco em lógica, POO e desktop",
      note: "Estudo prático para expandir repertório além do ecossistema JavaScript.",
    },
    details: [
      "Trabalho com estruturas de dados, formulários e organização de regras.",
      "Bom ponto para mostrar aprendizado contínuo e autonomia técnica.",
      "Ajuda a comunicar versatilidade sem perder profundidade.",
    ],
    stack: ["C#", "Windows Forms", "PostgreSQL", "POO"],
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/Caique7k/SyncDesk.git",
      },
    ],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Fundamentos de software",
    icon: FaCode,
    description:
      "Base em lógica de programação, estruturas de dados, funções, condicionais e organização de código com foco em clareza.",
    tags: ["Lógica", "POO", "Funções", "Estruturas"],
  },
  {
    title: "APIs e integração",
    icon: SiFastapi,
    description:
      "Construção e consumo de APIs REST com validação, tratamento de erros, autenticação básica, CORS e HTTPS.",
    tags: ["REST", "HTTP", "Validação", "Integrações"],
  },
  {
    title: "Dados e SQL",
    icon: SiPostgresql,
    description:
      "Modelagem relacional, joins, agregações, consultas eficientes e cuidado com normalização e índices.",
    tags: ["PostgreSQL", "MySQL", "JOIN", "Performance"],
  },
  {
    title: "Front-end web",
    icon: SiReact,
    description:
      "HTML semantico, CSS responsivo, JavaScript moderno e React para interfaces objetivas e bem estruturadas.",
    tags: ["React", "HTML", "CSS", "Responsividade"],
  },
  {
    title: "Back-end e serviços",
    icon: SiNestjs,
    description:
      "Node.js, NestJS e FastAPI para regras de negócio, middlewares, módulos e comunicação síncrona e assíncrona.",
    tags: ["Node.js", "NestJS", "FastAPI", "Middlewares"],
  },
  {
    title: "Qualidade e colaboração",
    icon: SiGit,
    description:
      "Git bem organizado, branches, PRs, rebase, resolução de conflitos e contato com testes usando Jest.",
    tags: ["Git", "Jest", "PRs", "Code Review"],
  },
];

export const processCards: ProcessCard[] = [
  {
    title: "Como eu versiono",
    description:
      "Histórico de código como parte do produto: commits semânticos, branches menores e revisão mais tranquila.",
    tags: ["feat", "fix", "docs", "refactor", "chore"],
  },
  {
    title: "Como eu estruturo",
    description:
      "Organizo interfaces, APIs e dados para facilitar manutenção, leitura e evolução do sistema sem gerar fragilidade.",
    tags: ["Componentização", "Módulos", "SQL", "Validação"],
  },
  {
    title: "Como eu entrego",
    description:
      "Trabalho com clareza de escopo, critério de aceitação, aprendizado contínuo e colaboração com produto e operação.",
    tags: ["Scrum", "Kanban", "Comunicação", "Ownership"],
  },
];

export const repoHighlights = [
  {
    name: "unipass",
    description:
      "Produto próprio com interface mais refinada, dados e operação em um único fluxo.",
    href: "https://github.com/Caique7k/unipass.git",
  },
  {
    name: "painel-esus",
    description:
      "Integração com o e-SUS e demonstração de produto conectado a contexto real.",
    href: "https://github.com/Caique7k/painel-esus.git",
  },
  {
    name: "SyncDesk",
    description:
      "Projeto de estudos em C# para reforçar base de software e orientação a objetos.",
    href: "https://github.com/Caique7k/SyncDesk.git",
  },
];

export const contactLinks = [
  {
    label: "WhatsApp",
    value: "+55 17 98810-3154",
    href: "https://wa.me/5517988103154",
  },
  {
    label: "Email",
    value: "caique7k@gmail.com",
    href: "mailto:caique7k@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Caique7k",
    href: "https://github.com/Caique7k",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/caique7k",
    href: "https://www.linkedin.com/in/caique7k/",
  },
];
