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
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Primary #2563EB
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          500: '#10B981', // Secondary Green
          600: '#059669',
        },
        industrial: {
          bg: '#F8FAFC',
          dark: '#111827',
          cardDark: '#1F2937',
          borderDark: '#374151',
          cardLight: '#FFFFFF',
          borderLight: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
