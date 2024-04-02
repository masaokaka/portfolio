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
        base: '#EFF0F7',
        baseDark: '#1E1E1E',
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
