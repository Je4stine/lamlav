
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('tailwindcss-animated')
  ],
  animation: {
    scroll: 'scroll 10s linear infinite',
  },
  keyframes: {
    scroll: {
      '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(-100%)' },
    },
  },
}