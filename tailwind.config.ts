import type { Config } from 'tailwindcss';

const customizedScreens = {
  xs: '375px',
  sm: '600px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1440px',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { height: '0px' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        'slide-up': {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0px' },
        },
        'show-overlay': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'hide-overlay': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'show-content': {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        'hide-content': {
          '0%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease',
        'slide-up': 'slide-up 0.3s ease',
        'show-overlay': 'show-overlay 0.15s ease',
        'hide-overlay': 'hide-overlay 0.15s ease',
        'show-content': 'show-content 0.15s ease',
        'hide-content': 'hide-content 0.15s ease',
      },
      scale: {
        flip: '-1',
      },
      minHeight: {
        '100vh': '100vh',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
    },
    screens: {
      ...customizedScreens,
    },
    maxWidth: {
      ...[...Array(1201)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...customizedScreens,
      none: 'none',
    },
    minWidth: {
      ...[...Array(1201)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...customizedScreens,
      none: 'none',
    },
    maxHeight: {
      ...[...Array(1201)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
    },
    minHeight: {
      ...[...Array(1201)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
    },
    borderRadius: {
      ...[...Array(32)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      '100vh': '100vh',
    },
    fontSize: {
      ...[...Array(101)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}vw`] = `${i}vw`;
        return m;
      }, {}),
    },
    padding: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...[...Array(5)].reduce((m, _, i) => {
        m[`${i}em`] = `${i}em`;
        return m;
      }, {}),
    },
    margin: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(1001)].reduce((m, _, i) => {
        m[`minus-${i}`] = `-${i}px`;
        return m;
      }, {}),
      auto: 'auto',
    },
    width: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      auto: 'auto',
      fit: 'fit-content',
    },
    height: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}vh`] = `${i}vh`;
        return m;
      }, {}),
      fit: 'fit-content',
    },
    lineHeight: {
      ...[...Array(101)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      '1em': '1em',
    },
    zIndex: {
      ...[...Array(10001)].reduce((m, _, i) => {
        m[i] = `${i}`;
        return m;
      }, {}),
      'minus-1': '-1',
      auto: 'auto',
    },
    translate: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(1001)].reduce((m, _, i) => {
        m[`minus-${i}`] = `-${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`minus-${i}p`] = `-${i}%`;
        return m;
      }, {}),
    },
    inset: {
      ...[...Array(1001)].reduce((m, _, i) => {
        m[i] = `${i}px`;
        return m;
      }, {}),
      ...[...Array(1001)].reduce((m, _, i) => {
        m[`minus-${i}`] = `-${i}px`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`${i}p`] = `${i}%`;
        return m;
      }, {}),
      ...[...Array(101)].reduce((m, _, i) => {
        m[`minus-${i}p`] = `-${i}%`;
        return m;
      }, {}),
      auto: 'auto',
    },
  },
  plugins: [],
};
export default config;
