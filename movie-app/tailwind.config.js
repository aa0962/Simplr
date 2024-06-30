// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

//added by aryan

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        secondary: '#1a1a1a',
        accent: '#f5c518',
        background: '#ffffff',
        darkBackground: '#141414',
        card: '#f5f5f5',
        darkCard: '#222222',
        textLight: '#1a1a1a',
        textDark: '#e5e5e5',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
