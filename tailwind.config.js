/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#123D32',
          50: '#F0F6F3',
          100: '#DDEBE4',
          200: '#BAD9CB',
          300: '#8EBFA9',
          400: '#5BA083',
          500: '#2E765B',
          600: '#1F5A44',
          700: '#123D32',
          800: '#0C2A22',
          900: '#071A15',
        },
        nature: {
          DEFAULT: '#2E765B',
          light: '#429373',
          dark: '#1d523e',
        },
        accent: {
          DEFAULT: '#F59E45',
          light: '#F8B66E',
          dark: '#D97E25',
          hover: '#E58A2F',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F5F8F5',
          subtle: '#EEF3EE',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#202C27',
          light: '#4A5B53',
          muted: '#71857C',
          faint: '#9EAEA7',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          hover: '#20ba5a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(18, 61, 50, 0.08), 0 2px 6px -1px rgba(18, 61, 50, 0.04)',
        'card-hover': '0 16px 36px -4px rgba(18, 61, 50, 0.16), 0 6px 12px -2px rgba(18, 61, 50, 0.08)',
        'search': '0 12px 40px -4px rgba(18, 61, 50, 0.18)',
        'elevated': '0 20px 50px -10px rgba(18, 61, 50, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

