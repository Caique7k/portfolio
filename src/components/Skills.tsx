"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiNestjs,
  SiPython,
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "NestJS", icon: SiNestjs },
    { name: "Python", icon: SiPython },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
  ],
};

function SkillCard({ name, icon: Icon }: any) {
  return (
    <div
      className="group flex flex-col items-center justify-center
                 rounded-2xl border border-white/10
                 bg-white/5 p-6 backdrop-blur
                 transition hover:scale-105 hover:bg-white/10"
    >
      <Icon
        size={38}
        className="mb-3 text-zinc-300 transition group-hover:text-white"
      />
      <span className="text-sm text-zinc-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-zinc-950 px-6 py-32 text-zinc-100"
    >
      {/* TÍTULO */}
      <h2 className="mb-6 text-center text-4xl font-bold">
        Tecnologias que utilizo no dia a dia
      </h2>

      <p className="mb-20 text-center text-zinc-400">
        Ferramentas e tecnologias que uso para criar aplicações modernas,
        rápidas e funcionais.
      </p>

      {/* FRONTEND */}
      <div className="mx-auto mb-20 max-w-5xl">
        <h3 className="mb-6 text-xl font-semibold text-zinc-200">Frontend</h3>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.frontend.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* BACKEND */}
      <div className="mx-auto mb-20 max-w-5xl">
        <h3 className="mb-6 text-xl font-semibold text-zinc-200">Backend</h3>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.backend.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* FERRAMENTAS */}
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-6 text-xl font-semibold text-zinc-200">
          Ferramentas
        </h3>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.tools.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
