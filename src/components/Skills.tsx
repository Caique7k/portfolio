const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">Skills</h2>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border px-5 py-2 text-sm transition hover:bg-black hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
