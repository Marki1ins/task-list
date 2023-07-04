/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparentWebkit: "transparent",
      },
    },
    colors: {
      "dark-700": "#374151",
      "dark-800": "#1F2937",
      "dark-900": "#111827",

      crimson: "#DC143C",
      grey: "#6B7280",
      light: "#EEEEEE",
      pink: "#EC4899",
      purple: "#8B5CF6",
      transparent: "transparent",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
