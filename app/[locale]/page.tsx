import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { RealisationsSection } from "@/components/sections/RealisationsSection";
import { realisations } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Network, Award } from "lucide-react";
import { Badge } from "@/components/ui/index";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";

  const whyUs = [
    {
      icon: Shield,
      titleFr: "Certifications reconnues",
      titleEn: "Recognized certifications",
      descFr: "Cisco CCNP, MCSE, CompTIA et plus — la garantie d'un niveau d'expertise éprouvé.",
      descEn: "Cisco CCNP, MCSE, CompTIA and more — the guarantee of proven expertise.",
    },
    {
      icon: Network,
      titleFr: "Approche sur mesure",
      titleEn: "Tailored approach",
      descFr: "Chaque infrastructure est unique. Nos solutions sont adaptées à votre contexte précis.",
      descEn: "Every infrastructure is unique. Our solutions are adapted to your specific context.",
    },
    {
      icon: Award,
      titleFr: "Support continu",
      titleEn: "Continuous support",
      descFr: "Accompagnement de A à Z : conception, déploiement, formation et maintenance.",
      descEn: "End-to-end support: design, deployment, training and maintenance.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection locale={locale} />

      {/* Why us */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700/30 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {isFr ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {isFr ? item.descFr : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <ServicesSection locale={locale} preview />

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-dark-700/50 to-neon-green/5" />
        <div className="absolute inset-0 hex-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {isFr ? "Prêt à sécuriser votre réseau ?" : "Ready to secure your network?"}
            </Badge>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            {isFr ? "Démarrons votre projet" : "Let's start your project"}
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            {isFr
              ? "Contactez notre équipe pour un audit gratuit de votre infrastructure réseau et cybersécurité."
              : "Contact our team for a free audit of your network and cybersecurity infrastructure."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-dark-900 rounded-xl font-display font-bold text-sm hover:bg-cyan-400 transition-all shadow-glow-cyan"
            >
              {isFr ? "Audit gratuit" : "Free audit"}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/formations`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card border border-white/10 text-white rounded-xl font-display font-semibold text-sm hover:border-cyan-500/30 transition-all"
            >
              {isFr ? "Voir les formations" : "View training"}
            </Link>
          </div>
        </div>
      </section>

      {/* Formations preview */}
      <FormationsSection locale={locale} preview />

      {/* Realisations preview */}
      <RealisationsSection locale={locale} realisations={realisations} preview />

      {/* Partners / Certifications bar */}
      <section className="py-12 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 text-xs font-mono uppercase tracking-[0.3em] mb-8">
            {isFr ? "Certifications & Partenaires technologiques" : "Certifications & Technology partners"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["CISCO", "MICROSOFT", "COMPTIA", "FORTINET", "VMWARE", "AZURE"].map((partner) => (
              <span
                key={partner}
                className="font-display font-bold text-slate-600 text-sm md:text-base tracking-widest hover:text-slate-400 transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
