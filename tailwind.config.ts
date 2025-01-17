import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0045b7',
        'secondary-blue': 'var(--secondary-blue)',
        'primary-darkblue': '#00378d',
        'primary-yellow': '#f8d42c',
        'secondary-yellow': 'var(--secondary-yellow)',
        'primary-gray': '#242424',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
