const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-zinc-950 text-white">
      <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <button
            key={skill}
            className="rounded-full border border-white/20 px-5 py-2 text-sm
            transition hover:border-white hover:bg-white hover:text-black"
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}
