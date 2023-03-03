/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./public/**/*.{html,js}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        customColorPalette: {
            colors: {
                primary: '#548C88',
                secondary: '#9F6D4A',
                gray: '#535F63',
                action: '#B14215',
            },
            steps: 50,
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                copy: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                md: '.925rem',
                '7xl': '5rem',
            },
            lineHeight: {
                narrow: '1.1',
            },
            letterSpacing: {
                wide: '.025em',
                wider: '.035em',
                widest: '.05em',
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
            maxWidth: {
                xxxs: '10rem',
                xxs: '15rem',
                xs: '20rem',
                '8xl': '88rem',
            },
            zIndex: {
                '-1': '-1',
            },
        },
    },
    variants: {
        lineClamp: ['responsive', 'hover'],
        extend: {},
    },
    plugins: [
        require('@markusantonwolf/tailwind-css-plugin-custom-color-palette'),
        require('@tailwindcss/line-clamp'),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.absolute-center': {
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                    width: '100%',
                    objectPosition: 'center',
                },
                '.top-center': {
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: '60%',
                    top: '60%',
                    width: '100%',
                    objectPosition: 'center',
                },
                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.inline-flex-center': {
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.break-hyphen': {
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                },
                '.no-break-hyphen': {
                    wordBreak: 'normal',
                    hyphens: 'none',
                },
                '.onpage-ancor': {
                    position: 'absolute',
                    top: '-4rem',
                },
                '.hyphens': {
                    hyphens: 'auto',
                },
                '.hyphens-none': {
                    hyphens: 'manual',
                },
                '.ta-page-overflow': {
                    overflow: 'var(--ta-page-overflow)',
                },
            };
            addUtilities(newUtilities, {
                respectPrefix: true,
                respectImportant: true,
                variants: ['responsive'],
            });
        }),
    ],
};
