import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#0FEE0F" },
          secondary: { value: "#EE0F0F" },
          red: {
            value: "#ee0000",
            strong: { value: "#ff0000" },
            week: { value: "#dd0000" },
          },
          orange: { value: "#df4d20" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
        spacing: {
          s: { value: "8px" },
          m: { value: "16px" },
          l: { value: "24px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
