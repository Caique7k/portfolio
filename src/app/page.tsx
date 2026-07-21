"use client";

import Image from "next/image";
import {
  type PointerEvent,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaServer,
  FaShieldHalved,
  FaTerminal,
} from "react-icons/fa6";
import {
  portfolioContent,
  type Language,
  type PortfolioMode,
  type Project,
} from "./portfolio-data";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

const modeOptions: {
  mode: PortfolioMode;
  icon: typeof FaServer;
}[] = [
  { mode: "backend", icon: FaServer },
  { mode: "security", icon: FaShieldHalved },
];

const languageOptions: { language: Language; label: string }[] = [
  { language: "pt", label: "PT" },
  { language: "en", label: "EN" },
];

type ModeLabels = Record<PortfolioMode, { label: string; shortLabel: string }>;

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en";
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return isLanguage(storedLanguage) ? storedLanguage : "pt";
}

function getServerLanguageSnapshot(): Language {
  return "pt";
}

function subscribeToLanguageChange(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const listener = () => callback();

  window.addEventListener("storage", listener);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, listener);

  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, listener);
  };
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();

  event.currentTarget.style.setProperty(
    "--pointer-x",
    `${event.clientX - rect.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--pointer-y",
    `${event.clientY - rect.top}px`,
  );
}

function SectionHeader({
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
      <p className="text-xs font-semibold uppercase text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ModeSwitch({
  mode,
  setMode,
  labels,
  compact = false,
}: {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  labels: ModeLabels;
  compact?: boolean;
}) {
  return (
    <div
      className={`mode-switch inline-grid grid-cols-2 border border-[var(--line)] bg-[var(--control)] p-1 ${
        compact ? "w-auto" : "w-full max-w-md"
      } rounded-lg`}
    >
      {modeOptions.map(({ mode: optionMode, icon: Icon }) => {
        const active = optionMode === mode;
        const optionLabel = compact
          ? labels[optionMode].shortLabel
          : labels[optionMode].label;

        return (
          <button
            key={optionMode}
            type="button"
            aria-pressed={active}
            onClick={() => setMode(optionMode)}
            className={`mode-button flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium transition ${
              active
                ? "bg-[var(--active-bg)] text-[var(--active-text)] shadow-[var(--button-shadow)]"
                : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Icon className="text-sm" />
            <span>{optionLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
  ariaLabel,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  ariaLabel: string;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className="mode-switch inline-grid grid-cols-2 border border-[var(--line)] bg-[var(--control)] p-1 rounded-lg"
    >
      {languageOptions.map((option) => {
        const active = option.language === language;

        return (
          <button
            key={option.language}
            type="button"
            aria-pressed={active}
            onClick={() => setLanguage(option.language)}
            className={`mode-button flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium transition ${
              active
                ? "bg-[var(--active-bg)] text-[var(--active-text)] shadow-[var(--button-shadow)]"
                : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function TerminalPanel({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div
      className="interactive-surface border border-[var(--terminal-line)] bg-[var(--terminal)] text-[var(--terminal-text)] rounded-lg"
      onPointerMove={setPointerGlow}
    >
      <div className="flex items-center justify-between border-b border-[var(--terminal-line)] px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium uppercase">
          <FaTerminal className="text-[var(--accent)]" />
          {title}
        </div>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-sm bg-[#ff6b6b]" />
          <span className="h-2 w-2 rounded-sm bg-[#f4ce52]" />
          <span className="h-2 w-2 rounded-sm bg-[#7dffb2]" />
        </div>
      </div>
      <div className="grid gap-2 p-4 font-mono text-xs leading-6 sm:text-sm">
        {lines.map((line, index) => (
          <div
            key={line}
            className="terminal-row grid grid-cols-[2rem_1fr] gap-3 rounded-md px-2 py-1"
          >
            <span className="text-[var(--terminal-muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileCard({
  mode,
  title,
  photoAlt,
}: {
  mode: PortfolioMode;
  title: string;
  photoAlt: string;
}) {
  const badge = mode === "backend" ? "backend" : "appsec";

  return (
    <article
      className="interactive-surface profile-card border border-[var(--line)] bg-[var(--surface-elevated)] p-3 rounded-lg"
      onPointerMove={setPointerGlow}
    >
      <div className="flex items-center justify-between border-b border-[var(--line)] px-2 pb-3">
        <div>
          <p className="text-xs font-semibold uppercase text-[var(--accent)]">
            {title}
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
            Caique da Silva Alves
          </p>
        </div>
        <span className="border border-[var(--line)] bg-[var(--surface-muted)] px-2.5 py-1 font-mono text-xs text-[var(--muted)] rounded-md">
          {badge}
        </span>
      </div>

      <div className="mt-3 overflow-hidden border border-[var(--line)] bg-[var(--surface-muted)] rounded-md">
        <Image
          src="/foto-perfil.png"
          alt={photoAlt}
          width={900}
          height={1200}
          priority
          className="aspect-[4/5] w-full object-cover object-[center_top]"
        />
      </div>
    </article>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (!project.media) {
    return null;
  }

  return (
    <div className="project-media aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--surface-muted)]">
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
        <Image
          src={project.media.src}
          alt={project.media.alt}
          width={1400}
          height={900}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasMedia = Boolean(project.media);

  return (
    <article
      className={`interactive-surface group overflow-hidden border border-[var(--line)] bg-[var(--surface-elevated)] rounded-lg ${
        featured && hasMedia ? "lg:grid lg:grid-cols-[1.08fr_0.92fr]" : ""
      }`}
      onPointerMove={setPointerGlow}
    >
      <ProjectMedia project={project} />

      <div className="flex h-full flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase text-[var(--accent)]">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {project.summary}
        </p>

        <p className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-sm leading-7 text-[var(--foreground)]">
          {project.outcome}
        </p>

        <ul className="mt-5 grid gap-2 text-sm leading-6 text-[var(--muted)]">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-[var(--line)] bg-[var(--surface-muted)] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)] rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="action-link inline-flex min-h-10 items-center gap-2 border border-[var(--line)] px-3 text-sm font-medium transition rounded-md"
              >
                {link.label}
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [mode, setMode] = useState<PortfolioMode>("backend");
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getStoredLanguage,
    getServerLanguageSnapshot,
  );
  const content = portfolioContent[language];
  const { ui } = content;
  const track = content.tracks[mode];
  const [featuredProject, ...secondaryProjects] = track.projects;
  const modeLabels = useMemo(
    () => ({
      backend: {
        label: content.tracks.backend.label,
        shortLabel: content.tracks.backend.shortLabel,
      },
      security: {
        label: content.tracks.security.label,
        shortLabel: content.tracks.security.shortLabel,
      },
    }),
    [content.tracks.backend.label, content.tracks.backend.shortLabel, content.tracks.security.label, content.tracks.security.shortLabel],
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  function handleLanguageChange(nextLanguage: Language) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }

  const activeNavigation = useMemo(
    () => [
      { label: ui.navExperience, href: "#experiencia" },
      {
        label: track.mode === "backend" ? ui.navStack : ui.navTrail,
        href: "#stack",
      },
      {
        label: track.mode === "backend" ? ui.navProjects : ui.navLab,
        href: "#projetos",
      },
      { label: ui.navContact, href: "#contato" },
    ],
    [track.mode, ui.navContact, ui.navExperience, ui.navLab, ui.navProjects, ui.navStack, ui.navTrail],
  );

  return (
    <main
      className={`portfolio-root theme-${mode} min-h-screen bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-500`}
    >
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-[var(--line)] bg-[var(--surface-elevated)] font-mono text-sm font-semibold text-[var(--accent)] rounded-lg">
              CA
            </span>
            <span>
              <span className="block text-sm font-semibold">
                Caique da Silva Alves
              </span>
              <span className="block text-xs text-[var(--muted)]">
                {track.eyebrow}
              </span>
            </span>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <nav className="flex gap-1 overflow-x-auto text-sm text-[var(--muted)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {activeNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 px-3 py-2 transition hover:text-[var(--foreground)] rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2">
              <ModeSwitch
                mode={mode}
                setMode={setMode}
                labels={modeLabels}
                compact
              />
              <LanguageSwitch
                language={language}
                setLanguage={handleLanguageChange}
                ariaLabel={ui.languageLabel}
              />
            </div>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" aria-hidden />

        <div
          key={mode}
          className="mode-panel relative mx-auto grid min-h-[78svh] max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[var(--accent)]">
              {track.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Caique da Silva Alves
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-[var(--foreground)] sm:text-2xl sm:leading-10">
              {track.headline}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {track.description}
            </p>

            <div className="mt-8">
              <ModeSwitch
                mode={mode}
                setMode={setMode}
                labels={modeLabels}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="action-primary inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold transition rounded-md"
              >
                {ui.viewNow}
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href={track.githubHref}
                target="_blank"
                rel="noreferrer"
                className="action-secondary inline-flex min-h-11 items-center gap-2 border border-[var(--line)] bg-[var(--surface-elevated)] px-4 text-sm font-semibold transition rounded-md"
              >
                <FaGithub />
                {track.githubLabel}
              </a>
              <a
                href="/Curr%C3%ADculo%20Caique%20da%20Silva%20Alves.pdf"
                download
                className="action-secondary inline-flex min-h-11 items-center gap-2 border border-[var(--line)] px-4 text-sm font-semibold transition rounded-md"
              >
                <FaDownload />
                {ui.cv}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {track.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="interactive-surface border border-[var(--line)] bg-[var(--surface-elevated)]/88 p-4 backdrop-blur rounded-lg"
                  onPointerMove={setPointerGlow}
                >
                  <p className="font-mono text-sm font-semibold text-[var(--accent)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:ml-auto">
            <ProfileCard
              mode={mode}
              title={ui.profileCard}
              photoAlt={ui.profilePhotoAlt}
            />
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <SectionHeader
            eyebrow={ui.experienceEyebrow}
            title={ui.experienceTitle}
            description={ui.experienceDescription}
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.experienceTimeline.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="interactive-surface border border-[var(--line)] bg-[var(--surface-elevated)] p-5 rounded-lg"
                onPointerMove={setPointerGlow}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--accent)]">
                      {job.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                      {job.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {job.summary}
                </p>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <SectionHeader
            eyebrow={track.capabilitiesEyebrow}
            title={track.capabilitiesTitle}
            description={track.capabilitiesDescription}
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div
              className="interactive-surface border border-[var(--line)] bg-[var(--surface-elevated)] p-5 rounded-lg"
              onPointerMove={setPointerGlow}
            >
              <p className="text-xs font-semibold uppercase text-[var(--accent)]">
                {ui.toolsLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {track.stack.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="stack-chip inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--surface-elevated)] px-3 py-2 text-sm text-[var(--foreground)] rounded-md"
                  >
                    <Icon className="text-sm text-[var(--accent)]" />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <TerminalPanel title={track.terminalTitle} lines={track.terminalLines} />
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {track.capabilities.map(({ title, icon: Icon, description, tags }) => (
              <article
                key={title}
                className="interactive-surface group border border-[var(--line)] bg-[var(--surface-elevated)] p-5 rounded-lg"
                onPointerMove={setPointerGlow}
              >
                <div className="grid h-11 w-11 place-items-center border border-[var(--line)] bg-[var(--surface-muted)] text-lg text-[var(--accent)] transition group-hover:-translate-y-0.5 rounded-md">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--line)] bg-[var(--surface-muted)] px-2.5 py-1.5 text-xs text-[var(--muted)] rounded-md"
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

      <section id="projetos" className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow={track.projectsEyebrow}
              title={track.projectsTitle}
              description={track.projectsDescription}
            />
            <a
              href={track.sourceHref}
              target="_blank"
              rel="noreferrer"
              className="action-secondary inline-flex min-h-11 w-fit items-center gap-2 border border-[var(--line)] bg-[var(--surface-elevated)] px-4 text-sm font-semibold transition rounded-md"
            >
              <FaGithub />
              {track.sourceLabel}
            </a>
          </div>

          <div className="mt-10">
            <ProjectCard project={featuredProject} featured />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[var(--accent)]">
                {ui.contactEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
                {track.contactTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {track.contactDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:caique7k@gmail.com"
                  className="action-primary inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold transition rounded-md"
                >
                  <FaEnvelope />
                  {ui.email}
                </a>
                <a
                  href={track.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="action-secondary inline-flex min-h-11 items-center gap-2 border border-[var(--line)] px-4 text-sm font-semibold transition rounded-md"
                >
                  <FaGithub />
                  {ui.github}
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.contactLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="interactive-surface border border-[var(--line)] bg-[var(--surface-elevated)] p-5 transition rounded-lg"
                  onPointerMove={setPointerGlow}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center border border-[var(--line)] bg-[var(--surface-muted)] text-[var(--accent)] rounded-md">
                      <FaBriefcase className="text-sm" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase text-[var(--accent)]">
                        {item.label}
                      </span>
                      <span className="mt-2 block break-words text-sm font-semibold text-[var(--foreground)]">
                        {item.value}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
                        {item.note}
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
