import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '85%': { transform: 'translate(0, 0)' },
          '95%': { transform: 'translate(10px, -20px)' }
        }
      },
      animation: {
        'bounce': 'bounce 5s infinite'
      },
    }
  },
  variants: {},
  plugins: [],
};
export default config;
