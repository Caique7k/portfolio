export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8 text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm">
          © {new Date().getFullYear()} Caique da Silva Alves
        </span>

        <span className="text-sm">Desenvolvedor FullStack • Freelancer</span>
      </div>
    </footer>
  );
}
