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
        base: '#ced1e6',
        baseContrast: '#ffffff',
        baseDark: '#1E1E1E',
        baseDarkContrast: '#4e4e4e',
      },
      textColor: {
        // primary: '#112dbe',
        // secondary: '#ffffff',
      },
      transitionDuration: {
        default: '500ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

// ['#bac7e5', '#f2a51e', '#e39025', '#8d7051', '#7b7e74'];
