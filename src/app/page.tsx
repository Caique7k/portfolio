import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
