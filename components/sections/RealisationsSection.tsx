"use client";

import { useState } from "react";
import { ExternalLink, Network, ShieldCheck, Phone, Cloud, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/index";
import { cn } from "@/lib/utils";

const CATEGORIES_FILTER = [
  { id: "all", labelFr: "Tous", labelEn: "All" },
  { id: "network", labelFr: "Réseau", labelEn: "Network" },
  { id: "security", labelFr: "Sécurité", labelEn: "Security" },
  { id: "voip", labelFr: "VoIP", labelEn: "VoIP" },
  { id: "cloud", labelFr: "Cloud", labelEn: "Cloud" },
  { id: "formation", labelFr: "Formation", labelEn: "Training" },
];

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  network: Network,
  security: ShieldCheck,
  voip: Phone,
  cloud: Cloud,
  formation: GraduationCap,
};

const CATEGORY_COLORS: Record<string, string> = {
  network: "#00E5FF",
  security: "#39FF14",
  voip: "#00E5FF",
  cloud: "#1B6FFF",
  formation: "#39FF14",
};

interface Realisation {
  id: string;
  titleFr: string;
  titleEn: string;
  category: string;
  client: string;
  descFr: string;
  descEn: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

interface RealisationsSectionProps {
  locale: string;
  realisations: Realisation[];
  preview?: boolean;
}

export function RealisationsSection({ locale, realisations, preview = false }: RealisationsSectionProps) {
  const isFr = locale === "fr";
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = realisations.filter(
    (r) => activeCategory === "all" || r.category === activeCategory
  );
  const displayed = preview ? realisations.filter((r) => r.featured).slice(0, 3) : filtered;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isFr ? "Notre portfolio" : "Our portfolio"}
          title={isFr ? "Nos Réalisations" : "Our Projects"}
          subtitle={
            isFr
              ? "Projets concrets que nous avons livrés avec excellence"
              : "Concrete projects we have delivered with excellence"
          }
        />

        {/* Category filter — only on full page */}
        {!preview && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES_FILTER.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400"
                    : "border-white/10 text-slate-500 hover:text-white hover:border-white/20 glass-card"
                )}
              >
                {isFr ? cat.labelFr : cat.labelEn}
              </button>
            ))}
          </div>
        )}

        {/* Cards */}
        <div className={cn("grid gap-6", preview ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
          {displayed.map((real) => {
            const Icon = CATEGORY_ICONS[real.category] || Network;
            const color = CATEGORY_COLORS[real.category] || "#00E5FF";

            return (
              <div
                key={real.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card header */}
                <div
                  className="p-5 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${color}15 0%, transparent 60%)` }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{ background: `${color}15`, borderColor: `${color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-600">{real.year}</span>
                      {real.featured && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-mono border"
                          style={{ color, borderColor: `${color}30`, background: `${color}10` }}
                        >
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mt-3 leading-snug">
                    {isFr ? real.titleFr : real.titleEn}
                  </h3>
                  <p className="text-slate-500 text-xs font-mono mt-1">{real.client}</p>
                </div>

                {/* Card body */}
                <div className="p-5 pt-4 border-t border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {isFr ? real.descFr : real.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {real.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-dark-600 border border-white/5 text-slate-500 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
