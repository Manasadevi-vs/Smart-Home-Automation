import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1)" 
          },
          "50%": { 
            opacity: "0.85",
            filter: "brightness(1.35)" 
          },
        },
        "fan-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "light-flicker": {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1)" 
          },
          "10%": { 
            opacity: "0.9",
            filter: "brightness(1.1)" 
          },
          "20%": { 
            opacity: "1",
            filter: "brightness(1.05)" 
          },
          "30%": { 
            opacity: "0.98",
            filter: "brightness(1.25)" 
          },
          "40%": { 
            opacity: "0.95",
            filter: "brightness(1.1)" 
          },
          "50%": { 
            opacity: "1",
            filter: "brightness(1.2)" 
          },
          "60%": { 
            opacity: "0.97",
            filter: "brightness(1.15)" 
          },
          "70%": { 
            opacity: "0.99",
            filter: "brightness(1.05)" 
          },
          "80%": { 
            opacity: "0.96",
            filter: "brightness(1.3)" 
          },
          "90%": { 
            opacity: "0.98",
            filter: "brightness(1.1)" 
          },
        },
        "bounce-gentle": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-8%)" 
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10%)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 1.5s ease-in-out infinite",
        "fan-spin-slow": "fan-spin 5s linear infinite",
        "fan-spin-medium": "fan-spin 3s linear infinite",
        "fan-spin-fast": "fan-spin 1s linear infinite",
        "light-flicker": "light-flicker 4s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
