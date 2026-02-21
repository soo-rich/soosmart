import { FormationsSection } from "@/components/sections/FormationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations",
  description: "Certifications Cisco CCNA/CCNP/CCIE, Microsoft MCSE, CompTIA — Formations IT professionnelles",
};

export default function FormationsPage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";

  return (
    <>
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-green/8 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-neon-green/30 text-neon-green font-mono text-xs uppercase tracking-wider mb-6">
            {isFr ? "Expertise certifiée" : "Certified expertise"}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6">
            {isFr ? "Nos Formations" : "Our Training"}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {isFr
              ? "Des formations professionnelles certifiantes en réseau, cybersécurité et systèmes Microsoft — reconnues mondialement."
              : "Professional certified training in networking, cybersecurity and Microsoft systems — globally recognized."}
          </p>
        </div>
      </div>

      {/* Formations grid with filter */}
      <FormationsSection locale={locale} />

      {/* CTA section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            {isFr ? "Besoin d'une formation sur mesure ?" : "Need a custom training?"}
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            {isFr
              ? "Nous concevons des programmes de formation adaptés à vos équipes et à vos besoins spécifiques."
              : "We design training programs tailored to your teams and specific needs."}
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-dark-900 rounded-xl font-display font-bold hover:bg-cyan-400 transition-all shadow-glow-cyan"
          >
            {isFr ? "Demander un devis" : "Request a quote"}
          </a>
        </div>
      </section>
    </>
  );
}
