import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#000000',
          surface: '#0a0a0a',
          card: '#161617',
          gray: {
            50: '#f5f5f7',
            100: '#e8e8ed',
            200: '#d2d2d7',
            300: '#a1a1a6',
            400: '#86868b',
            500: '#6e6e73',
            600: '#424245',
            700: '#1d1d1f',
          },
          blue: '#2997ff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-xl': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      borderRadius: {
        '2xl': '1.375rem',
        '3xl': '1.75rem',
        'apple': '1.375rem',
        'apple-lg': '1.75rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'card-dark': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.4)',
        'card-light': '0 1px 0 0 rgba(255,255,255,0.6) inset, 0 8px 32px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
export default config
