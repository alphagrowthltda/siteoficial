/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#f97316', light: '#fb923c', dark: '#ea6c0a' },
        ag: {
          bg:    '#080808',
          bg2:   '#0f0f0f',
          bg3:   '#161616',
          card:  '#111111',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body:    ['"Syne"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'marquee':      'marquee 35s linear infinite',
        'marquee-rev':  'marquee-rev 35s linear infinite',
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
        'spin-slow':    'spin 25s linear infinite',
        'border-spin':  'border-spin 4s linear infinite',
      },
      keyframes: {
        float:        { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        marquee:      { '0%': { transform: 'translateX(0%)' },      '100%': { transform: 'translateX(-50%)' } },
        'marquee-rev':{ '0%': { transform: 'translateX(-50%)' },    '100%': { transform: 'translateX(0%)' } },
        'glow-pulse':  { '0%,100%': { opacity: '.4' }, '50%': { opacity: '1' } },
        'border-spin': { '0%': { '--angle': '0deg' }, '100%': { '--angle': '360deg' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
