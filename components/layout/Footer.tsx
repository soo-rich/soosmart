import Link from "next/link";
import { useLocale } from "next-intl";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services#network", labelFr: "Réseaux & Télécoms", labelEn: "Networks & Telecom" },
    { href: "/services#security", labelFr: "Cybersécurité", labelEn: "Cybersecurity" },
    { href: "/services#voip", labelFr: "Voix sur IP", labelEn: "Voice over IP" },
    { href: "/services#cloud", labelFr: "Cloud & Virtualisation", labelEn: "Cloud & Virtualization" },
    { href: "/services#support", labelFr: "Support Technique", labelEn: "Technical Support" },
  ],
  formations: [
    { href: "/formations#cisco", labelFr: "Formations Cisco", labelEn: "Cisco Training" },
    { href: "/formations#microsoft", labelFr: "Formations Microsoft", labelEn: "Microsoft Training" },
    { href: "/formations#comptia", labelFr: "Formations CompTIA", labelEn: "CompTIA Training" },
    { href: "/formations#bureautique", labelFr: "Bureautique", labelEn: "Office Suite" },
  ],
};

export function Footer() {
  const locale = useLocale();
  const isFr = locale === "fr";

  return (
    <footer className="relative border-t border-white/5 bg-dark-900/50">
      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg border border-cyan-500/40 flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-sm">SS</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">SOOSMART</span>
                <span className="font-mono text-cyan-500 text-xs tracking-[0.2em] uppercase">GROUP</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              {isFr
                ? "Construire les réseaux de demain, sécuriser votre futur."
                : "Building tomorrow's networks, securing your future."}
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {isFr ? link.labelFr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {isFr ? "Formations" : "Training"}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.formations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {isFr ? link.labelFr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@soosmart.group"
                  className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  contact@soosmart.group
                </a>
              </li>
              <li>
                <a
                  href="tel:+22500000000"
                  className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  +225 00 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} SOOSMART GROUP.{" "}
            {isFr ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/contact`} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              {isFr ? "Politique de confidentialité" : "Privacy Policy"}
            </Link>
            <span className="text-slate-700">·</span>
            <Link href={`/${locale}/admin`} className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
