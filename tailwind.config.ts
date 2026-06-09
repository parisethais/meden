import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#2D2B6B",
          950: "#15142F",
        },
        sage: {
          DEFAULT: "#7A9E7E",
          dim: "#6B8E70",
        },
        bone: {
          DEFAULT: "#F5F0E8",
          warm: "#EFE8DC",
        },
        midnight: "#15142F",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial scale, refined for readability at desktop widths
        "display-xl": ["clamp(44px, 6.2vw, 96px)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(36px, 4.8vw, 72px)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(30px, 3.8vw, 56px)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "headline": ["clamp(22px, 2.4vw, 36px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "label": ["11px", { lineHeight: "1", letterSpacing: "0.25em" }],
      },
      letterSpacing: {
        label: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
