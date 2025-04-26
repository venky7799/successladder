/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          blue: {
            500: '#4A90E2',
            600: '#357ABD',
          },
        },
      },
    },
    plugins: [],
  };
  