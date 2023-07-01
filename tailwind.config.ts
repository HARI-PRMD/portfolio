import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Playfair Display"],
      body: ["Source Sans 3"],
    },
  },
  plugins: [],
} satisfies Config;
