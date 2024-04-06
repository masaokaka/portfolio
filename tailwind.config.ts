import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        appear: 'appear 1s ease 4s', // 2s 1 forwards
      },
      colors: {
        primary: '#e39025',
        // primaryDark: '#312d25',
        secondary: '#bac7e5',
        // secondaryDark: '#25262a',
      },
      textColor: {
        primary: '#333333',
        primaryDark: '#ffffff',
        error: '#dc2626',
      },
      fontFamily: {
        default: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundColor: {
        base: '#e8e9e6',
        baseContrast: '#ffffff',
        baseDark: '#23272E',
        baseDarkContrast: '#2D333B',
        error: '#fecaca',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

// ['#bac7e5', '#f2a51e', '#e39025', '#8d7051', '#7b7e74'];
