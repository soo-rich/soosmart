"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800 disabled:opacity-50 disabled:cursor-not-allowed select-none overflow-hidden";

    const variants = {
      primary:
        "bg-cyan-500 text-dark-900 hover:bg-cyan-400 active:bg-cyan-600 shadow-glow-cyan hover:shadow-glow-cyan",
      secondary:
        "glass-card border border-glass text-cyan-500 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-glow-sm",
      ghost:
        "text-slate-400 hover:text-white hover:bg-white/5",
      danger:
        "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-sm rounded-xl",
      lg: "px-8 py-4 text-base rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </span>
        )}
        <span className={cn(loading && "opacity-0")}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
