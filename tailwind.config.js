/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7f4',
          100: '#F4E7E1',
          200: '#e9cfc3',
          300: '#deb7a5',
          400: '#d39f87',
          500: '#FF9B45',
          600: '#D5451B',
          700: '#b8391a',
          800: '#9b2e18',
          900: '#521C0D',
        },
        wood: {
          500: '#d2691e',
          700: '#8b4513',
          800: '#654321',
        },
        accent: {
          500: '#FF9B45',
          600: '#D5451B',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};