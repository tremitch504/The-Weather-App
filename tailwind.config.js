/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'unsplashBlue': 'url("https://images.unsplash.com/photo-1588420343618-6141b3784bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=2012&q=80")'
      }
    },
    fontFamily: {
      'serif': ['Libre Baskerville', 'serif']
    },
    colors: {
      'white': '#FFFFFF',
      'red': 'red',
      'orange': 'orange',
      'purple': 'purple',
      'blue': 'blue',
      'black': 'black',
      'transparent': 'transparent'
    }
  },
  plugins: [],
}

