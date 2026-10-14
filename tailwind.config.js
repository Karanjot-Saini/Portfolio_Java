/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712', // Pure deep void
          900: '#070D1A', // Base dark navy
          850: '#0B1325', // Section dark navy
          800: '#0F1B33', // Card surface
          750: '#142343', // Raised surface
          700: '#1E2F54', // Border soft
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          DEFAULT: '#00D2FF',
          500: '#00D2FF', // Electric blue accent
          600: '#0284c7',
          glow: 'rgba(0, 210, 255, 0.25)',
        },
        navy: {
          900: '#0A1128',
          800: '#101B3B',
          700: '#1C2E5D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'electric-sm': '0 0 15px -3px rgba(0, 210, 255, 0.2)',
        'electric-md': '0 0 25px -4px rgba(0, 210, 255, 0.3)',
        'electric-lg': '0 0 40px -5px rgba(0, 210, 255, 0.35)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
