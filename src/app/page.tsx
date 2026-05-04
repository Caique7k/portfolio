import Image from "next/image";
import { FaArrowRight, FaArrowUpRightFromSquare, FaTerminal } from "react-icons/fa6";
import {
  capabilityGroups,
  contactLinks,
  coreStack,
  experienceTimeline,
  heroSnippet,
  projects,
  quickStats,
  repoHighlights,
  securityPractices,
  systemPrinciples,
  type Project,
} from "./portfolio-data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ProjectMedia({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const frameClass = featured
    ? "aspect-[4/3] sm:aspect-[16/10] lg:min-h-[360px]"
    : "aspect-[4/3] sm:aspect-[16/10]";

  return (
    <div
      className={`overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--panel-strong)] ${frameClass}`}
    >
      {project.media.type === "video" ? (
        <iframe
          src={project.media.src}
          title={project.media.alt}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
          <Image
            src={project.media.src}
            alt={project.media.alt}
            width={1600}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(77,176,136,0.22),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(55,101,150,0.18),_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8">
        <header className="sticky top-4 z-30 rounded-[1.7rem] border border-[var(--border)] bg-[var(--panel)]/92 px-4 py-4 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] font-mono text-sm text-[var(--accent)]">
                CA
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  Backend Portfolio
                </p>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  Caique da Silva Alves
                </p>
              </div>
            </div>

            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 text-sm text-[var(--muted)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:flex-wrap xl:justify-end xl:overflow-visible xl:pb-0">
              <a
                href="#experiencia"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Experiência
              </a>
              <a
                href="#stack"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Stack
              </a>
              <a
                href="#seguranca"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Segurança
              </a>
              <a
                href="#projetos"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Contato
              </a>
              <a
                href="https://github.com/Caique7k"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-2 font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            </div>
          </div>
        </header>

        <section
          id="inicio"
          className="grid gap-10 border-b border-[var(--border)] py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              Desenvolvedor Backend
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              APIs seguras, modelagem relacional e backend pensado para operar
              bem no mundo real.
            </h1>
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[var(--muted)] sm:text-lg">
              Meu foco está em construir e manter serviços com Node.js, NestJS
              e PostgreSQL, trabalhando autenticação, regras de negócio,
              integrações e estabilidade operacional. Gosto de backend enxuto,
              legível e preparado para crescer sem perder segurança.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#041016] transition hover:brightness-105"
              >
                Ver projetos
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="/Curr%C3%ADculo%20Caique%20da%20Silva%20Alves.pdf"
                download
                className="rounded-full border border-[var(--border)] px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--panel)]"
              >
                Baixar CV
              </a>
              <a
                href="#contato"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--panel)]"
              >
                Falar comigo
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickStats.map((item) => (
                <article
                  key={item.value}
                  className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)]"
                >
                  <p className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--accent)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {coreStack.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  <Icon className="text-[13px] text-[var(--accent)]" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:pl-8">
            <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
                    profile.card
                  </p>
                  <p className="mt-1 text-sm font-medium">Caique da Silva Alves</p>
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  backend
                </span>
              </div>
              <div className="p-4">
                <div className="overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel-strong)]">
                  <Image
                    src="/foto-perfil.png"
                    alt="Foto de Caique da Silva Alves"
                    width={1200}
                    height={1400}
                    priority
                    className="aspect-[4/4.7] w-full object-cover object-center"
                  />
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                <FaTerminal className="text-sm" />
                secure-backend.ts
              </div>
              <div className="mt-4 rounded-[1.4rem] border border-[var(--border)] bg-[var(--panel-strong)] p-4 font-mono text-sm leading-7 text-[var(--foreground)]">
                {heroSnippet.map((line, index) => (
                  <div key={line} className="flex gap-3">
                    <span className="text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section
          id="experiencia"
          className="border-b border-[var(--border)] py-12 sm:py-16"
        >
          <SectionHeading
            eyebrow="Experiência"
            title="Backend construído com contexto real de operação."
            description="Minha trajetória combina desenvolvimento de APIs, modelagem de dados, autenticação e suporte técnico. Isso me ajuda a pensar backend não só como código, mas como serviço que precisa continuar funcionando bem depois da entrega."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {experienceTimeline.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                      {job.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {job.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {job.period}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {job.summary}
                </p>

                <div className="mt-6 grid gap-3">
                  {job.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-4 text-sm leading-6 text-[var(--muted)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="border-b border-[var(--border)] py-12 sm:py-16">
          <SectionHeading
            eyebrow="Stack"
            title="Base técnica orientada a APIs, dados e manutenção."
            description="Prefiro soluções limpas e previsíveis, com responsabilidade bem separada entre rotas, serviços, autenticação e persistência. O objetivo é facilitar evolução sem transformar o backend em um ponto frágil do sistema."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityGroups.map(({ title, icon: Icon, description, tags }) => (
              <article
                key={title}
                className="rounded-[1.9rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] text-[20px] text-[var(--accent)]">
                  <Icon />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="seguranca"
          className="border-b border-[var(--border)] py-12 sm:py-16"
        >
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,_rgba(126,224,184,0.14),_rgba(12,21,30,0.95))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Segurança
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl">
                Desenvolvimento backend seguro começa em decisões simples, bem
                repetidas.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                O tipo de backend que eu gosto de construir combina validação,
                controle de acesso, modelagem consistente e atenção ao
                comportamento em produção. Segurança, para mim, é prática
                diária de implementação.
              </p>

              <div className="mt-8 grid gap-3">
                {systemPrinciples.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(7,16,24,0.48)] px-4 py-4 text-sm leading-6 text-[var(--foreground)]/88"
                  >
                    {principle}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {securityPractices.map(
                ({ title, icon: Icon, description, checklist }) => (
                  <article
                    key={title}
                    className="rounded-[1.9rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] text-[20px] text-[var(--accent)]">
                      <Icon />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {description}
                    </p>
                    <div className="mt-5 grid gap-3">
                      {checklist.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="projetos" className="border-b border-[var(--border)] py-12 sm:py-16">
          <SectionHeading
            eyebrow="Projetos"
            title="Sistemas que mostram backend em prática."
            description="Selecionei trabalhos que representam bem meu foco atual: integração, dados relacionais, tempo real e organização de serviços para cenários com uso real."
          />

          <article className="mt-10 grid gap-6 rounded-[2.2rem] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
            <ProjectMedia project={featuredProject} featured />

            <div className="flex flex-col justify-between rounded-[1.7rem] border border-[var(--border)] bg-[var(--panel-strong)] p-5 sm:p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  {featuredProject.category}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {featuredProject.summary}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-5">
                  <p className="font-mono text-lg uppercase tracking-[0.18em] text-[var(--accent)]">
                    {featuredProject.outcome.value}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                    {featuredProject.outcome.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {featuredProject.outcome.note}
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  {featuredProject.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[rgba(7,16,24,0.62)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {featuredProject.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {featuredProject.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {link.label}
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)]"
              >
                <div className="border-b border-[var(--border)] bg-[var(--panel-strong)] p-3">
                  <ProjectMedia project={project} />
                </div>

                <div className="space-y-5 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                    <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                      {project.outcome.value}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                      {project.outcome.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {project.outcome.note}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {project.highlights.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--panel-strong)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          {link.label}
                          <FaArrowUpRightFromSquare className="text-xs" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="border-b border-[var(--border)] py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="GitHub"
              title="Repositórios que reforçam minha base técnica."
              description="Além dos projetos em produção, mantenho estudos e repositórios que ajudam a mostrar meu repertório em backend, integração e organização de código."
            />

            <div className="grid gap-4">
              {repoHighlights.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] transition hover:border-[var(--accent)] hover:bg-[var(--panel-strong)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                        {repo.name}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {repo.description}
                      </p>
                    </div>
                    <FaArrowUpRightFromSquare className="mt-1 shrink-0 text-sm text-[var(--foreground)]" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-12 sm:py-16">
          <div className="rounded-[2.2rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
                Contato
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-5xl">
                Se o projeto precisa de backend sólido, segurança aplicada e
                cuidado com operação, vamos conversar.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                Estou disponível para falar sobre desenvolvimento de APIs,
                manutenção de sistemas, integrações, tempo real e evolução de
                produtos que precisam funcionar com consistência.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-[var(--accent)] hover:-translate-y-0.5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-medium leading-7 text-[var(--foreground)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.note}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
