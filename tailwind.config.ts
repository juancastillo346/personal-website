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
        sans: ['var(--font-inter)', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        'blue': '#000000',        // Pure black background
        'blue-light': '#1a1a1a',  // Subtle dark gray for cards
        'slate': '#f5f5f7',       // Apple's signature off-white
        'slate-light': '#ffffff', // Pure white
        'slate-lightest': '#fbfbfd',
        'accent': '#2997FF',      // Apple's signature blue
        'accent-gold': '#ffd700', // Premium accent
        'accent-silver': '#e6e6e6' // Secondary accent
      },
      textShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
      },
      boxShadow: {
        'apple': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'apple-hover': '0 8px 40px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
        },
        '.backdrop-blur-apple': {
          backdropFilter: 'blur(20px) saturate(180%)',
        }
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config 