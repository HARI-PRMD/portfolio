import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Playfair Display"],
      body: ["Source Sans 3"],
    },
    extend: {
      boxShadow: {
        default: "2px 4px 32px rgba(255, 255, 255, 0.4)",
        "white-solid": "8px 8px 0px #FFFFFF",
        "black-solid": "8px 8px 0px #000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
