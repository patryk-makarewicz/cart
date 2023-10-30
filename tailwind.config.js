/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        appPrimary: '#0369a1', //sky-700 (appBlue)

        appBlack: '#1f2937', //gray-800
        appBlue: '#0369a1', //sky-700
        appBlueDark: '#1d4ed8', //blue-700
        appGray: '#6b7280', //gray-500
        appGrayLight: '#e5e7eb', //gray-200
        appWarning: '#C52A1A'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s'
      }
    }
  },
  plugins: []
};
