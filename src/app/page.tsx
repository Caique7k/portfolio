"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaMoon, FaSun } from "react-icons/fa6";
import {
  capabilityGroups,
  contactLinks,
  coreLanguages,
  processCards,
  type Project,
  projects,
  repoHighlights,
} from "./portfolio-data";

type Theme = "light" | "dark";

function ProjectMedia({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const frameClass = featured
    ? "aspect-[4/3] sm:aspect-[16/10] lg:min-h-[340px]"
    : "aspect-[4/3] sm:aspect-[16/10]";

  return (
    <div
      className={`overflow-hidden rounded-[1.7rem] border border-[var(--border)] bg-[var(--panel-strong)] ${frameClass}`}
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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem(
      "portfolio-theme",
    ) as Theme | null;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return storedTheme ?? (systemDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8">
        <header className="sticky top-3 z-20 rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)]/95 px-4 py-3 backdrop-blur sm:top-4 sm:rounded-full sm:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
                CA
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  Portfolio
                </p>
                <p className="text-sm font-medium">Caique da Silva Alves</p>
              </div>
            </div>

            <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 text-sm text-[var(--muted)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:pb-0">
              <a
                href="#projetos"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Projetos
              </a>
              <a
                href="#base-tecnica"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Base técnica
              </a>
              <a
                href="#processo"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Processo
              </a>
              <a
                href="#github"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                GitHub
              </a>
              <a
                href="#contato"
                className="shrink-0 rounded-full px-3 py-2 transition hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
              >
                Contato
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 font-medium text-[var(--foreground)] transition hover:bg-[var(--panel-strong)]"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                {theme === "dark" ? "Claro" : "Escuro"}
              </button>
            </div>
          </div>
        </header>

        <section className="grid gap-8 border-b border-[var(--border)] py-10 sm:gap-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              Desenvolvedor full stack
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.07em] sm:mt-5 sm:text-6xl lg:text-7xl">
              Sistemas, interfaces e APIs com foco em clareza, lógica e uso
              real.
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Olá! me chamo Caique. Meu trabalho hoje gira em torno de produtos
              digitais que precisam funcionar de verdade: interfaces em React,
              serviços com Node e FastAPI, integrações, modelagem de dados e uma
              base de código que consiga evoluir sem virar bagunça.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projetos"
                className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--panel-strong)]"
              >
                Ver projetos
              </a>
              <a
                href="https://github.com/Caique7k"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-center text-sm font-medium transition hover:bg-[var(--panel)]"
              >
                GitHub
              </a>
              <a
                href="/Curr%C3%ADculo%20Caique%20da%20Silva%20Alves.pdf"
                download
                className="rounded-full border border-[var(--border)] px-6 py-3 text-center text-sm font-medium transition hover:bg-[var(--panel)]"
              >
                Baixar CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {coreLanguages.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  <Icon className="text-sm" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:self-start">
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)] sm:max-w-[320px]">
              <Image
                src="/fotoperfil.jpg"
                alt="Foto de Caique da Silva Alves"
                width={1000}
                height={1200}
                priority
                className="aspect-square w-full object-cover object-[center_18%]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Foco
                </p>
                <p className="mt-2 text-sm font-medium leading-6">
                  Web, APIs, integrações e operação real
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Stack
                </p>
                <p className="mt-2 text-sm font-medium leading-6">
                  React, Python, Node, SQL, Git
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Entrega
                </p>
                <p className="mt-2 text-sm font-medium leading-6">
                  Produtos limpos, legíveis e orientados ao uso
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              Projetos selecionados
            </p>
          </div>

          <article className="mt-8 grid gap-5 rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] sm:mt-10 sm:gap-6 sm:p-5 lg:grid-cols-[1.06fr_0.94fr] lg:rounded-[2.2rem] lg:p-6">
            <ProjectMedia project={featuredProject} featured />

            <div className="flex flex-col justify-between rounded-[1.5rem] bg-[var(--panel-strong)] p-4 sm:p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  {featuredProject.category}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:mt-4 sm:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {featuredProject.summary}
                </p>

                <div className="mt-6 rounded-[1.4rem] bg-[var(--panel)] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    {featuredProject.metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
                    {featuredProject.metric.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {featuredProject.metric.note}
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  {featuredProject.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {featuredProject.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm font-medium transition hover:bg-[var(--background)]"
                    >
                      {link.label}
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] bg-[var(--panel-strong)] p-4">
                    <p className="text-3xl font-semibold tracking-[-0.05em]">
                      {project.metric.value}
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      {project.metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {project.metric.note}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {project.details.slice(0, 2).map((detail) => (
                      <p
                        key={detail}
                        className="rounded-[1.1rem] bg-[var(--panel-strong)] px-4 py-3 text-sm leading-6 text-[var(--muted)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em]"
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
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-medium transition hover:bg-[var(--panel-strong)]"
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

        <section
          id="base-tecnica"
          className="border-t border-[var(--border)] py-12 sm:py-16"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              Base técnica
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilityGroups.map(
              ({ title, icon: Icon, description, tags }) => (
                <article
                  key={title}
                  className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--panel-strong)] text-[20px]">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--panel-strong)] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section
          id="processo"
          className="border-t border-[var(--border)] py-12 sm:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[var(--accent)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/62">
                Processo
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                Código limpo também depende de processo limpo.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/80">
                Git, organização de módulos, clareza de escopo, testes quando
                fazem sentido e uma preocupação constante com legibilidade. Isso
                tudo faz parte do portfólio tanto quanto o visual dos projetos.
              </p>
            </div>

            <div className="grid gap-5">
              {processCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {card.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="border-t border-[var(--border)] py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                GitHub
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                Repositórios que ajudam a contar a história do meu código.
              </h2>
            </div>

            <div className="grid gap-4">
              {repoHighlights.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:bg-[var(--panel-strong)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xl font-semibold tracking-[-0.03em]">
                        {repo.name}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        {repo.description}
                      </p>
                    </div>
                    <FaArrowUpRightFromSquare className="shrink-0 text-sm" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-[var(--border)] py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
              Contato
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Se fizer sentido para o projeto, vamos conversar.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:bg-[var(--panel-strong)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-medium leading-7">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
