import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF9F6",
        sand: "#F3EDE5",
        line: "#EBE4DA",
        ink: "#1B1B1B",
        muted: "#7C7369",
        copper: "#B87350",
        ok: { bg: "#E4F3E8", fg: "#2E7D4F" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;