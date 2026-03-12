import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "dark-gray": "#111111",
        "mid-gray": "#1a1a1a",
        "light-gray": "#333333",
        "text-muted": "#888888",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        "cinematic": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      gridTemplateColumns: {
        "portfolio-desktop": "repeat(3, 1fr)",
        "portfolio-tablet": "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};

export default config;
