"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Network, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/index";
import { stats } from "@/lib/data";

const WORDS_FR = ["Réseaux", "Cybersécurité", "VoIP", "Cloud", "Infrastructure"];
const WORDS_EN = ["Networks", "Cybersecurity", "VoIP", "Cloud", "Infrastructure"];

interface HeroSectionProps {
  locale: string;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isFr = locale === "fr";
  const words = isFr ? WORDS_FR : WORDS_EN;
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const statsData = [
    { value: 50, suffix: "+", label: isFr ? "Projets réalisés" : "Projects completed" },
    { value: 40, suffix: "+", label: isFr ? "Clients satisfaits" : "Satisfied clients" },
    { value: 15, suffix: "+", label: isFr ? "Certifications" : "Certifications" },
    { value: 5, suffix: "+", label: isFr ? "Ans d'expertise" : "Years expertise" },
  ];

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-drift opacity-40" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-30" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scan" />
      </div>

      {/* Floating tech badges */}
      <div className="absolute top-1/3 right-8 lg:right-16 hidden lg:flex flex-col gap-3 animate-float" style={{ animationDelay: "1s" }}>
        {["CCNA", "CCNP", "MCSE", "Security+"].map((cert, i) => (
          <span
            key={cert}
            className="px-3 py-1.5 glass-card rounded-lg border border-cyan-500/20 text-cyan-400 font-mono text-xs"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {cert}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="cyan">
            <Shield className="w-3 h-3" />
            {isFr ? "Intégrateur NTIC Certifié" : "Certified NTIC Integrator"}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 leading-none tracking-tight">
          <span className="block">{isFr ? "Expert en" : "Expert in"}</span>
          <span className="block h-[1.1em] text-gradient-cyan">
            {displayed}
            <span className="inline-block w-0.5 h-[0.85em] bg-cyan-400 ml-1 animate-blink align-middle" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {isFr
            ? "SOOSMART GROUP conçoit et sécurise les infrastructures réseau critiques des entreprises. Certifiés Cisco, Microsoft & CompTIA."
            : "SOOSMART GROUP designs and secures critical enterprise network infrastructures. Certified by Cisco, Microsoft & CompTIA."}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = `/${locale}/services`)}
          >
            <Network className="w-4 h-4" />
            {isFr ? "Nos Services" : "Our Services"}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = `/${locale}/realisations`)}
          >
            {isFr ? "Voir nos réalisations" : "View our projects"}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient-cyan mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-slate-500 text-xs md:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-mono text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/20" />
    </section>
  );
}
