import { ContactForm } from "@/components/sections/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez SOOSMART GROUP pour vos projets réseaux, cybersécurité et formations IT.",
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";

  return (
    <>
      {/* Page header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            {isFr ? "Contactez-nous" : "Get in touch"}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6">
            {isFr ? "Démarrons votre projet" : "Let's start your project"}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {isFr
              ? "Un projet, une question ? Notre équipe vous répond sous 24h."
              : "A project, a question? Our team will respond within 24h."}
          </p>
        </div>
      </div>

      {/* Contact form */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
