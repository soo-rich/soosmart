"use client";

import { useState } from "react";
import { formations } from "@/lib/data";
import { SectionHeader, Badge } from "@/components/ui/index";
import { Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", labelFr: "Toutes", labelEn: "All" },
  { id: "cisco", labelFr: "Cisco", labelEn: "Cisco" },
  { id: "microsoft", labelFr: "Microsoft", labelEn: "Microsoft" },
  { id: "comptia", labelFr: "CompTIA", labelEn: "CompTIA" },
  { id: "bureautique", labelFr: "Bureautique", labelEn: "Office Suite" },
];

const LEVEL_COLORS: Record<string, string> = {
  "Fondamental": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  "Associate": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Professional": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Expert": "bg-neon-green/10 text-neon-green border-neon-green/20",
  "Tous niveaux": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

interface FormationsSectionProps {
  locale: string;
  preview?: boolean;
}

export function FormationsSection({ locale, preview = false }: FormationsSectionProps) {
  const isFr = locale === "fr";
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = formations.filter(
    (f) => activeCategory === "all" || f.category === activeCategory
  );
  const displayed = preview ? filtered.slice(0, 6) : filtered;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isFr ? "Expertise certifiée" : "Certified expertise"}
          title={isFr ? "Nos Formations" : "Our Training"}
          subtitle={
            isFr
              ? "Certifications reconnues mondialement — Cisco, Microsoft, CompTIA"
              : "Globally recognized certifications — Cisco, Microsoft, CompTIA"
          }
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
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

        {/* Formation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((formation) => (
            <div
              key={formation.id}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="px-3 py-2 rounded-xl font-mono font-bold text-sm"
                  style={{
                    background: `${formation.color}15`,
                    color: formation.color,
                    border: `1px solid ${formation.color}30`,
                  }}
                >
                  {formation.badge}
                </div>
                <span
                  className={cn(
                    "px-2.5 py-1 rounded-lg border text-xs font-medium",
                    LEVEL_COLORS[formation.level] || LEVEL_COLORS["Associate"]
                  )}
                >
                  {formation.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">
                {isFr ? formation.titleFr : formation.titleEn}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {isFr ? formation.descFr : formation.descEn}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-mono">{formation.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span className="uppercase font-mono text-xs">
                    {formation.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
