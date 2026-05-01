import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "var(--bg)",
        "sand-soft": "var(--bg-soft)",
        ink: "var(--text)",
        muted: "var(--muted)",
        brand: "var(--brand)",
        "brand-deep": "var(--brand-deep)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
      },
      boxShadow: {
        glow: "0 18px 55px rgba(93, 58, 34, 0.12)",
        "glow-strong": "0 26px 60px rgba(90, 67, 50, 0.18)",
      },
      borderRadius: {
        xl2: "30px",
        lg2: "22px",
        md2: "16px",
      },
      fontFamily: {
        sans: ["Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      animation: {
        rise: "rise 0.7s ease forwards",
      },
      keyframes: {
        rise: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
