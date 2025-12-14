import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Arcane Mystic Theme Colors
        void: {
          DEFAULT: "#0a0514",
          deep: "#050208",
          light: "#13092d",
        },
        mystic: {
          DEFAULT: "#13092d",
          dark: "#0a0514",
          light: "#1e1b2e",
        },
        arcane: {
          cyan: "#00f3ff",
          "cyan-dim": "#00a8b3",
          purple: "#9d4edd",
          "purple-dim": "#7b2cbf",
          gold: "#ffd700",
          "gold-dim": "#b8860b",
        },
        crystal: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          border: "rgba(157, 78, 221, 0.3)",
          glow: "rgba(0, 243, 255, 0.2)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        medieval: ["var(--font-medievalsharp)", "cursive"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-cinzel)", "serif"],
      },
      spacing: {
        "content": "var(--content-width)",
      },
      maxWidth: {
        "content": "var(--content-width)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Arcane theme animations
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(157, 78, 221, 0.3)",
            borderColor: "rgba(0, 243, 255, 0.5)"
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(0, 243, 255, 0.8), 0 0 30px rgba(157, 78, 221, 0.5)",
            borderColor: "rgba(0, 243, 255, 0.8)"
          },
        },
        "text-glow-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(157, 78, 221, 0.3)"
          },
          "50%": { 
            textShadow: "0 0 10px rgba(0, 243, 255, 0.8), 0 0 20px rgba(157, 78, 221, 0.5), 0 0 30px rgba(0, 243, 255, 0.3)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rune-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "energy-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "spin-slow": "spin-slow 3s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        shimmer: "shimmer 2s linear infinite",
        // Arcane animations
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "text-glow": "text-glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rune-rotate": "rune-rotate 20s linear infinite",
        "energy-flow": "energy-flow 8s ease infinite",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-arcane": "linear-gradient(135deg, #13092d 0%, #0a0514 50%, #1e1b2e 100%)",
        "gradient-glow": "linear-gradient(135deg, rgba(0, 243, 255, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%)",
        "gradient-crystal": "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        "arcane": "0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(157, 78, 221, 0.2)",
        "arcane-sm": "0 0 10px rgba(0, 243, 255, 0.2), 0 0 20px rgba(157, 78, 221, 0.1)",
        "arcane-lg": "0 0 30px rgba(0, 243, 255, 0.4), 0 0 60px rgba(157, 78, 221, 0.3)",
        "crystal": "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
