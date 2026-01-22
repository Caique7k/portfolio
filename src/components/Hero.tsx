"use client";

import Image from "next/image";
import FuturisticBackground from "./FuturisticBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-zinc-950 text-white overflow-hidden">
      {/* FUNDO */}
      <FuturisticBackground />

      {/* CONTEÚDO */}
      <div className="relative z-10 grid max-w-6xl gap-12 px-6 md:grid-cols-2 items-center">
        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold md:text-6xl">
            Desenvolvedor Fullstack
          </h1>

          <p className="mt-4 max-w-md text-zinc-400">
            Desenvolvedor Fullstack e cofundador da LaborWaze. Atuo no
            desenvolvimento de sites e sistemas modernos, focados em
            performance, usabilidade e soluções reais para negócios.
          </p>

          <div className="mt-8 flex max-w-xl flex-nowrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-3 text-black transition 
hover:bg-zinc-200"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-5 py-3 transition 
hover:bg-white/5"
            >
              Contato
            </a>
            <a
              href="/Currículo Caique da Silva Alves.pdf"
              download
              className="rounded-xl border border-white/20 px-5 py-3 transition hover:bg-white/5"
            >
              Download CV
            </a>
            <a
              href="#skills"
              className="rounded-xl border border-white/20 px-5 py-3 transition hover:bg-white/5"
            >
              Ver skills
            </a>
          </div>
        </div>

        {/* FOTO (COLORIDA) */}
        <div className="flex justify-center">
          <div
            className="relative h-64 w-64 overflow-hidden rounded-2xl 
border border-white/10 
shadow-[0_0_60px_rgba(120,140,160,0.25)]"
          >
            <Image
              src="/fotoperfil.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
