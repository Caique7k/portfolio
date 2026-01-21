import { projects } from "@/data/Projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-50">
      <h2 className="mb-12 text-center text-3xl font-bold">Projetos</h2>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-gray-600">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                className="text-sm font-medium underline"
              >
                GitHub
              </a>
              <a href={project.demo} className="text-sm font-medium underline">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
