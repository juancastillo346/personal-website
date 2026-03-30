import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif'],
        mono: ['SF Mono', 'IBM Plex Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        paper: '#ecf3ff',
        ink: '#0c162c',
        muted: '#54678a',
        accent: '#436ed6',
        surface: '#f8fbff',
      },
      textShadow: {
        glow: '0 0 20px rgba(67, 110, 214, 0.2)',
      },
      boxShadow: {
        paper: '0 20px 50px rgba(18, 39, 81, 0.12)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 20px rgba(67, 110, 214, 0.2)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

export default config 
