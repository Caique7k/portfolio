import { projects } from "@/data/Projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-zinc-950 px-6 py-32 text-zinc-100"
    >
      <h2 className="mb-16 text-center text-4xl font-bold">Projetos</h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-2xl
                       border border-white/10 bg-white/5 p-6
                       backdrop-blur transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-sm text-zinc-400">{project.description}</p>

            {/* TECHS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10
                             bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* NOTE (projeto profissional) */}
            {project.note && (
              <p className="mt-4 text-xs italic text-zinc-400">
                {project.note}
              </p>
            )}
            {/* AÇÕES */}
            <div className="mt-6 flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="rounded-lg bg-white px-4 py-2
                 text-sm text-black transition hover:bg-zinc-200"
                >
                  Ver site
                </a>
              )}

              {!project.note && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="rounded-lg border border-white/20 px-4 py-2
                 text-sm transition hover:bg-white/5"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
