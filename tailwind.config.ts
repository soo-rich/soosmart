import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        cyan: {
          DEFAULT: "#00E5FF",
          50: "#E0FBFF",
          100: "#B3F5FF",
          200: "#80EEFF",
          300: "#4DE7FF",
          400: "#26E1FF",
          500: "#00E5FF",
          600: "#00B8D4",
          700: "#0088A3",
          800: "#006172",
          900: "#003A44",
        },
        neon: {
          green: "#39FF14",
          cyan: "#00E5FF",
          blue: "#1B6FFF",
        },
        dark: {
          900: "#050810",
          800: "#080C14",
          700: "#0D1420",
          600: "#121A2A",
          500: "#1A2340",
          400: "#243050",
          300: "#2E3D66",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "7xl": ["4.5rem", { lineHeight: "1.05" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.15) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(57,255,20,0.04) 100%)",
        "glow-cyan":
          "radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%)",
        "glow-green":
          "radial-gradient(circle, rgba(57,255,20,0.2) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.1)",
        "glow-green": "0 0 20px rgba(57,255,20,0.3), 0 0 60px rgba(57,255,20,0.1)",
        "glow-sm": "0 0 10px rgba(0,229,255,0.2)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.4)",
      },
      borderColor: {
        glass: "rgba(255,255,255,0.08)",
        "cyan-glow": "rgba(0,229,255,0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "grid-move": "grid-move 20s linear infinite",
        "typing": "typing 3.5s steps(40, end), blink .75s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#00E5FF" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
