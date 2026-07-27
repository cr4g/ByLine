/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0d17',
        panel: 'rgba(255,255,255,0.045)',
        violet: '#7C5CFC',
        cyan: '#22D3EE',
        good: '#34D399',
        bad: '#FB7185',
        amber: '#F5B942',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '18px',
      },
    },
  },
  plugins: [],
};
