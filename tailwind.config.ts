import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './public/icons/**/*.{svg}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      colors: {
        primary: {
          lightness: '#FBF4EC',
          DEFAULT: '#F8F0E7',
          dark: '#F4E7D9',
          darkness: '#DCCFC0',
          darkmore: '#B8AFA5', // não sei que nome dar
        },
        accent: {
          DEFAULT: "#2D9F6E",
          neutral: "#E8F8EF",
          dark: "#1F6F4B"
        },
        body: {
          dark: "#1F1F1F",
          DEFAULT: "#4E4E4E",
          light: "#787878",
          lightness: "#A3A3A3",
          neutral: "#DFDFDF"
        }
      }
    }
  },
  plugins: [],
}
export default config
