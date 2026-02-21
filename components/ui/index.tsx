import { cn } from "@/lib/utils";

// ===== BADGE =====
interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "green" | "white" | "dark";
  className?: string;
}

export function Badge({ children, variant = "cyan", className }: BadgeProps) {
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    green: "bg-neon-green/10 text-neon-green border-neon-green/20",
    white: "bg-white/5 text-white/70 border-white/10",
    dark: "bg-dark-600 text-slate-400 border-dark-500",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-medium tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// ===== CARD =====
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "green" | "none";
}

export function Card({ children, className, hover = true, glow = "none" }: CardProps) {
  const glowStyles = {
    cyan: "hover:border-cyan-500/30 hover:shadow-glow-sm",
    green: "hover:border-neon-green/30",
    none: "",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-1",
        hover && glow !== "none" && glowStyles[glow],
        className
      )}
    >
      {children}
    </div>
  );
}

// ===== SECTION HEADER =====
interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Badge variant="cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ===== DIVIDER =====
export function GlowDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center my-2", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
      <div className="relative w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-glow-sm" />
    </div>
  );
}

// ===== STAT CARD =====
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatCard({ value, suffix = "", label, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-display font-bold text-4xl md:text-5xl text-gradient-cyan mb-1">
        {value}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </div>
  );
}
