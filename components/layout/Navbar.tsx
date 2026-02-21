"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", labelFr: "Accueil", labelEn: "Home" },
  { href: "/services", labelFr: "Services", labelEn: "Services" },
  { href: "/formations", labelFr: "Formations", labelEn: "Training" },
  { href: "/realisations", labelFr: "Réalisations", labelEn: "Projects" },
  { href: "/a-propos", labelFr: "À Propos", labelEn: "About" },
  { href: "/contact", labelFr: "Contact", labelEn: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLabel = (link: (typeof navLinks)[0]) =>
    locale === "fr" ? link.labelFr : link.labelEn;

  const isActive = (href: string) => {
    const localizedPath = pathname.replace(`/${locale}`, "") || "/";
    return localizedPath === href;
  };

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    window.location.href = `/${newLocale}${currentPath}`;
    setLangOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dark-800/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors" />
                <div className="absolute inset-1 rounded-md border border-cyan-500/50 flex items-center justify-center">
                  <span className="font-mono font-bold text-cyan-400 text-sm">SS</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none">
                  SOOSMART
                </span>
                <span className="block font-mono text-cyan-500 text-xs tracking-[0.2em] uppercase">
                  GROUP
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href === "/" ? "" : link.href}`}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive(link.href)
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {getLabel(link)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase font-mono">{locale}</span>
                  <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 glass-card rounded-xl p-1 min-w-[120px] border border-white/5">
                    {["fr", "en"].map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLocale(l)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          l === locale
                            ? "text-cyan-400 bg-cyan-500/10"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {l === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() => (window.location.href = `/${locale}/contact`)}
              >
                {locale === "fr" ? "Démarrer un projet" : "Start a project"}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-dark-800 border-l border-white/5 p-6 pt-20">
            <ul className="space-y-1 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href === "/" ? "" : link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive(link.href)
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {getLabel(link)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/5 pt-6 space-y-3">
              <div className="flex gap-2">
                {["fr", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={cn(
                      "flex-1 py-2 rounded-lg text-sm font-mono border transition-all",
                      l === locale
                        ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                        : "border-white/10 text-slate-400 hover:border-white/20"
                    )}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  window.location.href = `/${locale}/contact`;
                  setMobileOpen(false);
                }}
              >
                {locale === "fr" ? "Démarrer un projet" : "Start a project"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
