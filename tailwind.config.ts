import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f5cd61",
          light: "#ffe082",
          dark: "#d4a942",
        },
        secondary: {
          DEFAULT: "#76c8bb",
          light: "#a7e3d8",
          dark: "#55a69a",
        },
        accent: {
          pink: "#f5a2a2",
          purple: "#9b8fc9",
        },
        dark: "#333333",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
export default config;
