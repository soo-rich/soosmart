import { ServicesSection } from "@/components/sections/ServicesSection";
import { SectionHeader } from "@/components/ui/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Réseaux, Cybersécurité, VoIP, Cloud & Support — Solutions IT complètes par SOOSMART GROUP",
};

const process = [
  { stepFr: "Audit", stepEn: "Audit", descFr: "Analyse de votre infrastructure existante", descEn: "Analysis of your existing infrastructure" },
  { stepFr: "Conception", stepEn: "Design", descFr: "Élaboration de la solution optimale", descEn: "Development of the optimal solution" },
  { stepFr: "Déploiement", stepEn: "Deployment", descFr: "Mise en œuvre avec les meilleures pratiques", descEn: "Implementation with best practices" },
  { stepFr: "Support", stepEn: "Support", descFr: "Maintenance et assistance continue", descEn: "Ongoing maintenance and support" },
];

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";

  return (
    <>
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            {isFr ? "Ce que nous faisons" : "What we do"}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6">
            {isFr ? "Nos Services" : "Our Services"}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {isFr
              ? "Des solutions NTIC complètes pour concevoir, sécuriser et maintenir votre infrastructure IT d'entreprise."
              : "Complete NTIC solutions to design, secure and maintain your enterprise IT infrastructure."}
          </p>
        </div>
      </div>

      {/* Services grid */}
      <ServicesSection locale={locale} />

      {/* Process section */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={isFr ? "Notre méthode" : "Our method"}
            title={isFr ? "Comment nous travaillons" : "How we work"}
            subtitle={isFr
              ? "Une approche structurée pour garantir le succès de chaque projet."
              : "A structured approach to guarantee the success of every project."}
          />

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative w-20 h-20 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30 animate-pulse-slow" />
                    <div className="absolute inset-2 rounded-full bg-dark-800 border border-cyan-500/20 flex items-center justify-center">
                      <span className="font-mono font-bold text-cyan-400 text-xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {isFr ? step.stepFr : step.stepEn}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {isFr ? step.descFr : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
