"use client";

import Link from "next/link";
import {
  Network, ShieldCheck, Phone, Headphones, Cloud, BarChart3, ArrowRight
} from "lucide-react";
import { Card, SectionHeader } from "@/components/ui/index";
import { services } from "@/lib/data";

const iconMap = {
  Network, ShieldCheck, Phone, Headphones, Cloud, BarChart3,
};

interface ServicesSectionProps {
  locale: string;
  preview?: boolean;
}

export function ServicesSection({ locale, preview = false }: ServicesSectionProps) {
  const isFr = locale === "fr";
  const displayedServices = preview ? services.slice(0, 6) : services;

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-700/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge={isFr ? "Ce que nous faisons" : "What we do"}
          title={isFr ? "Nos Services" : "Our Services"}
          subtitle={
            isFr
              ? "Des solutions complètes pour concevoir, sécuriser et maintenir votre infrastructure IT"
              : "Complete solutions to design, secure and maintain your IT infrastructure"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isGreen = service.color === "green";

            return (
              <Card
                key={service.id}
                glow={isGreen ? "green" : "cyan"}
                className="group relative overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${
                    isGreen ? "bg-neon-green" : "bg-cyan-500"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 ${
                    isGreen
                      ? "bg-neon-green/10 border-neon-green/20 group-hover:border-neon-green/40"
                      : "bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isGreen ? "text-neon-green" : "text-cyan-400"}`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  {isFr ? service.titleFr : service.titleEn}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {isFr ? service.descFr : service.descEn}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 rounded-lg bg-dark-600 border border-white/5 text-slate-500 text-xs font-mono"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
            >
              {isFr ? "Voir tous nos services" : "View all services"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
