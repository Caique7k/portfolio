export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-bold">Caique</span>

        <ul className="flex gap-6 text-sm text-gray-600">
          <li>
            <a href="#projects" className="hover:text-black">
              Projetos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
