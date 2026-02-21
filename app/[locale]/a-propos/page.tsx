import { Shield, Target, Users, CheckCircle2, Zap, Lock } from "lucide-react";
import { SectionHeader, Badge, Card } from "@/components/ui/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "SOOSMART GROUP — Intégrateur NTIC expert en réseaux et cybersécurité.",
};

const values = [
  { icon: Shield, labelFr: "Sécurité", labelEn: "Security", descFr: "La sécurité au cœur de chaque décision technique.", descEn: "Security at the heart of every technical decision." },
  { icon: Target, labelFr: "Précision", labelEn: "Precision", descFr: "Des solutions architecturées avec rigueur et méthode.", descEn: "Solutions architected with rigor and method." },
  { icon: Users, labelFr: "Partenariat", labelEn: "Partnership", descFr: "Un engagement durable au service de votre succès.", descEn: "A lasting commitment to your success." },
  { icon: Zap, labelFr: "Innovation", labelEn: "Innovation", descFr: "Toujours en veille sur les technologies émergentes.", descEn: "Always monitoring emerging technologies." },
];

const certifications = [
  { name: "Cisco CCNA", desc: "Network Associate" },
  { name: "Cisco CCNP", desc: "Network Professional" },
  { name: "MCSE", desc: "Microsoft Certified" },
  { name: "CompTIA A+", desc: "IT Technician" },
  { name: "CompTIA Network+", desc: "Network Expert" },
  { name: "CompTIA Security+", desc: "Security Specialist" },
];

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";

  return (
    <>
      {/* Hero header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <Badge variant="cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {isFr ? "À propos de nous" : "About us"}
                </Badge>
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
                {isFr ? "Experts NTIC " : "NTIC Experts "}
                <span className="text-gradient-cyan">{isFr ? "certifiés" : "certified"}</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {isFr
                  ? "SOOSMART GROUP est un intégrateur de solutions NTIC avec une équipe dynamique et hautement expérimentée. Notre objectif : construire des réseaux de haute performance et sécurité avec des technologies de pointe."
                  : "SOOSMART GROUP is an NTIC solutions integrator with a dynamic and highly experienced team. Our goal: to build high-performance and secure networks with cutting-edge technologies."}
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.slice(0, 4).map((cert) => (
                  <span
                    key={cert.name}
                    className="px-3 py-1.5 glass-card rounded-lg border border-cyan-500/20 text-cyan-400 font-mono text-xs"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", labelFr: "Projets réalisés", labelEn: "Projects completed" },
                { value: "40+", labelFr: "Clients satisfaits", labelEn: "Satisfied clients" },
                { value: "15+", labelFr: "Certifications", labelEn: "Certifications" },
                { value: "5+", labelFr: "Années d'expertise", labelEn: "Years expertise" },
              ].map((stat) => (
                <div key={stat.value} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                  <div className="font-display font-extrabold text-4xl text-gradient-cyan mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {isFr ? stat.labelFr : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card glow="cyan" className="cyber-border">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">
                {isFr ? "Notre Mission" : "Our Mission"}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {isFr
                  ? "Fournir des solutions NTIC de haute qualité qui permettent aux entreprises de fonctionner avec efficacité, sécurité et sérénité. Nous nous engageons à être un partenaire technologique de confiance sur le long terme."
                  : "Provide high-quality NTIC solutions that enable companies to operate with efficiency, security and peace of mind. We are committed to being a trusted long-term technology partner."}
              </p>
            </Card>
            <Card glow="green" className="cyber-border">
              <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-neon-green" />
              </div>
              <h2 className="font-display font-bold text-white text-2xl mb-4">
                {isFr ? "Notre Vision" : "Our Vision"}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {isFr
                  ? "Devenir le partenaire technologique de référence en Afrique, reconnu pour l'excellence de nos solutions réseau et cybersécurité, et pour la qualité de nos programmes de certification."
                  : "Become the reference technology partner in Africa, recognized for the excellence of our network and cybersecurity solutions, and for the quality of our certification programs."}
              </p>
            </Card>
          </div>

          {/* Values */}
          <SectionHeader
            badge={isFr ? "Ce qui nous guide" : "What guides us"}
            title={isFr ? "Nos Valeurs" : "Our Values"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.labelFr} className="glass-card rounded-2xl p-6 border border-white/5 text-center group hover:border-cyan-500/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {isFr ? value.labelFr : value.labelEn}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {isFr ? value.descFr : value.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-white text-2xl mb-8 text-center">
            {isFr ? "Nos Certifications" : "Our Certifications"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass-card rounded-xl p-4 border border-white/5 text-center hover:border-cyan-500/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="font-mono font-bold text-cyan-400 text-sm">{cert.name}</div>
                <div className="text-slate-600 text-xs mt-1">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
