/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px", // iPhone SE breakpoint
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      heading: ["var(--font-Playfair-Display)"],
      body: ["var(--font-Source-Sans-3)"],
    },
    extend: {
      boxShadow: {
        default: "2px 4px 32px rgba(255, 255, 255, 0.4)",
        solid: "8px 8px 0px #FFFFFF",
        "black-solid": "8px 8px 0px #000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
