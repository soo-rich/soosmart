"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, XCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(3, "Sujet requis"),
  message: z.string().min(20, "Message trop court (min 20 caractères)"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  locale: string;
}

export function ContactForm({ locale }: ContactFormProps) {
  const isFr = locale === "fr";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (error?: boolean) =>
    cn(
      "w-full px-4 py-3 rounded-xl bg-dark-700 border text-white placeholder-slate-600 text-sm transition-all duration-200 outline-none",
      "focus:border-cyan-500/50 focus:bg-dark-600 focus:shadow-glow-sm",
      error
        ? "border-red-500/40 bg-red-500/5"
        : "border-white/10 hover:border-white/20"
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Contact info */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h3 className="font-display font-bold text-white text-2xl mb-3">
            {isFr ? "Parlons de votre projet" : "Let's talk about your project"}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {isFr
              ? "Notre équipe d'experts est disponible pour répondre à vos questions et vous accompagner."
              : "Our team of experts is available to answer your questions and support you."}
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "contact@soosmart.group",
              href: "mailto:contact@soosmart.group",
            },
            {
              Icon: Phone,
              label: "Téléphone",
              value: "+225 00 00 00 00 00",
              href: "tel:+22500000000",
            },
            {
              Icon: MapPin,
              label: "Adresse",
              value: "Abidjan, Côte d'Ivoire",
              href: undefined,
            },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} className="text-white text-sm hover:text-cyan-400 transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-white text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack visual */}
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
            {isFr ? "Nos certifications" : "Our certifications"}
          </p>
          <div className="flex flex-wrap gap-2">
            {["Cisco CCNP", "MCSE", "CompTIA", "Fortinet NSE", "Azure"].map((cert) => (
              <span
                key={cert}
                className="px-2.5 py-1 rounded-lg border border-cyan-500/20 text-cyan-400 text-xs font-mono bg-cyan-500/5"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("name")}
                placeholder={isFr ? "Nom complet *" : "Full name *"}
                className={inputClass(!!errors.name)}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Email *"
                type="email"
                className={inputClass(!!errors.email)}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              {...register("company")}
              placeholder={isFr ? "Entreprise" : "Company"}
              className={inputClass()}
            />
            <input
              {...register("phone")}
              placeholder={isFr ? "Téléphone" : "Phone"}
              className={inputClass()}
            />
          </div>

          <div>
            <input
              {...register("subject")}
              placeholder={isFr ? "Sujet *" : "Subject *"}
              className={inputClass(!!errors.subject)}
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              rows={5}
              placeholder={isFr ? "Décrivez votre projet... *" : "Describe your project... *"}
              className={cn(inputClass(!!errors.message), "resize-none")}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            loading={status === "loading"}
          >
            <Send className="w-4 h-4" />
            {isFr ? "Envoyer le message" : "Send message"}
          </Button>

          {/* Feedback */}
          {status === "success" && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-neon-green/10 border border-neon-green/20 text-neon-green">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">
                {isFr ? "Message envoyé avec succès !" : "Message sent successfully!"}
              </span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">
                {isFr ? "Erreur. Veuillez réessayer." : "Error. Please try again."}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
