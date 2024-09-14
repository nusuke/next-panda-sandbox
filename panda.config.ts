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
            value: "#FF0000",
            hoge: { value: "#00ff00" },
            fuga: { value: "#dd0000" },
          },
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
