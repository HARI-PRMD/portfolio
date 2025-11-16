/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

type ThemeFn = (path: string) => string;

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
      typography: (theme: ThemeFn) => {
        const baseHeading = {
          fontFamily: "var(--font-Playfair-Display)",
          fontWeight: "500",
          letterSpacing: "0.04em",
        };

        return {
          DEFAULT: {
            css: {
              maxWidth: "none",
              color: theme("colors.neutral.800"),
              fontFamily: "var(--font-Source-Sans-3)",
              h1: {
                ...baseHeading,
                color: theme("colors.neutral.900"),
                fontSize: "2.5rem",
                lineHeight: "1.2",
                marginTop: theme("spacing.8"),
                marginBottom: theme("spacing.4"),
              },
              h2: {
                ...baseHeading,
                color: theme("colors.neutral.900"),
                fontSize: "2rem",
                lineHeight: "1.3",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.3"),
              },
              h3: {
                ...baseHeading,
                color: theme("colors.neutral.900"),
                fontSize: "1.5rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.3"),
              },
              p: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                fontSize: "1.05rem",
                lineHeight: "1.8",
              },
              a: {
                color: theme("colors.neutral.900"),
                textDecoration: "none",
                borderBottom: `1px solid ${theme("colors.neutral.400")}`,
                paddingBottom: "0.125rem",
                transition: "color 150ms ease, border-color 150ms ease",
                "&:hover": {
                  color: theme("colors.neutral.700"),
                  borderColor: theme("colors.neutral.500"),
                },
              },
              ul: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                paddingLeft: theme("spacing.6"),
              },
              ol: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                paddingLeft: theme("spacing.6"),
              },
              li: {
                marginTop: theme("spacing.1"),
                marginBottom: theme("spacing.1"),
              },
              strong: {
                color: theme("colors.neutral.900"),
                fontWeight: "600",
              },
              code: {
                color: theme("colors.neutral.900"),
                backgroundColor: theme("colors.neutral.100"),
                padding: "0.1rem 0.35rem",
                borderRadius: "0.25rem",
                fontWeight: "400",
              },
              pre: {
                backgroundColor: theme("colors.neutral.900"),
                color: theme("colors.white"),
                borderRadius: theme("borderRadius.lg"),
                padding: theme("spacing.5"),
              },
              hr: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                borderColor: theme("colors.neutral.200"),
              },
            },
          },
          invert: {
            css: {
              maxWidth: "none",
              color: "rgb(255 255 255 / 0.82)",
              fontFamily: "var(--font-Source-Sans-3)",
              h1: {
                ...baseHeading,
                color: "#fff",
                fontSize: "2.5rem",
                lineHeight: "1.2",
                marginTop: theme("spacing.8"),
                marginBottom: theme("spacing.4"),
              },
              h2: {
                ...baseHeading,
                color: "#fff",
                fontSize: "2rem",
                lineHeight: "1.3",
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.3"),
              },
              h3: {
                ...baseHeading,
                color: "#fff",
                fontSize: "1.5rem",
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.3"),
              },
              p: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                fontSize: "1.05rem",
                lineHeight: "1.75",
              },
              a: {
                color: "#fff",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.4)",
                paddingBottom: "0.125rem",
                transition: "color 150ms ease, border-color 150ms ease",
                "&:hover": {
                  color: "rgb(255 255 255 / 0.9)",
                  borderColor: "rgba(255,255,255,0.7)",
                },
              },
              ul: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                paddingLeft: theme("spacing.6"),
              },
              ol: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
                paddingLeft: theme("spacing.6"),
              },
              li: {
                marginTop: theme("spacing.1"),
                marginBottom: theme("spacing.1"),
              },
              strong: {
                color: "rgb(255 255 255 / 0.95)",
                fontWeight: "600",
              },
              code: {
                color: "rgb(255 255 255 / 0.95)",
                backgroundColor: "rgb(255 255 255 / 0.08)",
                padding: "0.1rem 0.35rem",
                borderRadius: "0.25rem",
                fontWeight: "400",
              },
              pre: {
                backgroundColor: "rgb(15 15 15 / 0.7)",
                color: "#fff",
                borderRadius: theme("borderRadius.lg"),
                padding: theme("spacing.5"),
              },
              hr: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                borderColor: "rgba(255,255,255,0.2)",
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }), typography],
} satisfies Config;
