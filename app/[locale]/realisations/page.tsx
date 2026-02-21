"use client";

import { useAdminStore } from "@/lib/store";
import { RealisationsSection } from "@/components/sections/RealisationsSection";

export default function RealisationsPage({ params: { locale } }: { params: { locale: string } }) {
  const isFr = locale === "fr";
  const { realisations } = useAdminStore();

  return (
    <>
      {/* Page header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-green/8 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            {isFr ? "Notre portfolio" : "Our portfolio"}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6">
            {isFr ? "Nos Réalisations" : "Our Projects"}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {isFr
              ? "Des projets concrets qui attestent de notre expertise en infrastructures réseau et cybersécurité."
              : "Concrete projects that attest to our expertise in network infrastructure and cybersecurity."}
          </p>
        </div>
      </div>

      <RealisationsSection locale={locale} realisations={realisations} />
    </>
  );
}
