/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loading: "loading 1s linear infinite",
      },
    },
  },
  plugins: [],
};
