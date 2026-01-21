"use client";

import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-950 px-6 py-32 text-zinc-100"
    >
      <h2 className="mb-6 text-center text-4xl font-bold">Vamos conversar?</h2>

      <p className="mb-16 text-center text-zinc-400">
        Tem um projeto em mente ou precisa de ajuda com um sistema ou site?
        Entre em contato.
      </p>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5517988103154"
          target="_blank"
          className="flex items-center justify-center gap-3
                     rounded-2xl border border-white/10
                     bg-white/5 p-6 backdrop-blur
                     transition hover:scale-105 hover:bg-white/10"
        >
          <SiWhatsapp size={26} />
          <span>WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href="mailto:caique7k@gmail.com"
          className="flex items-center justify-center gap-3
                     rounded-2xl border border-white/10
                     bg-white/5 p-6 backdrop-blur
                     transition hover:scale-105 hover:bg-white/10"
        >
          <SiGmail size={26} />
          <span>Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Caique7k"
          target="_blank"
          className="flex items-center justify-center gap-3
                     rounded-2xl border border-white/10
                     bg-white/5 p-6 backdrop-blur
                     transition hover:scale-105 hover:bg-white/10"
        >
          <SiGithub size={26} />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/caique-alves-6a4339371/"
          target="_blank"
          className="flex items-center justify-center gap-3
                     rounded-2xl border border-white/10
                     bg-white/5 p-6 backdrop-blur
                     transition hover:scale-105 hover:bg-white/10"
        >
          <SiLinkedin size={26} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
