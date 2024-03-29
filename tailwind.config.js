/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1200',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

