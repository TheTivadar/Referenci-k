/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'sarga': '#e9c664',
        'szurke': '#212121',
        'sotetszurke': '#1a1a1a',
        'kozepszurke':'#202020',
        'vilagosszurke':'#282828'
      }
    },
  },
  plugins: [],
}

