/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#143f83",
        "secondary-color": "#143F83",
        "black-color": "#222132",
      },
    },
  },
  plugins: [],
};

