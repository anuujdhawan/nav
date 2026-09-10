import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-grey': '#2C353F',
        'medium-dark-grey': '#585a5e',
        'muted-brown-grey': '#436175',
        'light-brown-grey': '#B5AE9E',
        'very-light-beige': '#f5f5dc',
        'accent-orange-red': '#F73718',
        primary: {
          50: '#f5f5dc',
          100: '#B5AE9E',
          200: '#585a5e',
          300: '#436175',
          400: '#2C353F',
          500: '#2C353F',
          600: '#2C353F',
          700: '#2C353F',
          800: '#2C353F',
          900: '#2C353F',
        },
        gray: {
          50: '#f5f5dc',
          100: '#B5AE9E',
          200: '#585a5e',
          300: '#436175',
          400: '#2C353F',
          500: '#2C353F',
          600: '#2C353F',
          700: '#2C353F',
          800: '#2C353F',
          900: '#2C353F',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
