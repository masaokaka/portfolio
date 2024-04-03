import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
      transitionDuration: {
        default: '500ms',
      },
      backgroundColor: {
        base: '#e8e9e6',
        baseContrast: '#ffffff',
        baseDark: '#1E1E1E',
        baseDarkContrast: '#4e4e4e',
        error: '#fecaca',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

// ['#bac7e5', '#f2a51e', '#e39025', '#8d7051', '#7b7e74'];
