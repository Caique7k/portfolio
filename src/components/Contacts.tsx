export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold">Vamos conversar?</h2>

      <p className="mt-4 text-gray-600">Me chama que eu respondo rápido.</p>

      <div className="mt-6 flex justify-center gap-6">
        <a href="mailto:seuemail@email.com" className="underline">
          Email
        </a>
        <a href="https://wa.me/55SEUNUMERO" className="underline">
          WhatsApp
        </a>
        <a href="https://linkedin.com/in/seuperfil" className="underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
