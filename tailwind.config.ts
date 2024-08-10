import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.56rem',
      '2xl': '1.93rem',
      '3xl': '2.4rem',
      '4xl': '3rem',
      '5xl': '3.2rem',
    }
  },
  variants: {},
  plugins: [
  ],
};
export default config;
