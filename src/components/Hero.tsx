export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold md:text-6xl">Desenvolvedor Web</h1>

      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Crio sites e sistemas simples, rápidos e funcionais para pequenos
        negócios e profissionais autônomos.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Ver projetos
        </a>

        <a
          href="#contact"
          className="rounded-xl border px-6 py-3 hover:bg-gray-100"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
