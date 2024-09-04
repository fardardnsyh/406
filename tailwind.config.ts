import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        tertiary: "hsl(var(--tertiary))",
      },
      textColor: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
      },
      fontSize: {
        base: "1.4rem",
        lg: "1.6rem",
        xl: "1.8rem",
        "2xl": "2.4rem",
        "4xl": "3.75rem",
        "5xl": "4rem",
      },
      screens: {
        md: "820px",
        lg: "1040px",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-in-out",
      },
    },
  },
  plugins: [],
}
export default config
