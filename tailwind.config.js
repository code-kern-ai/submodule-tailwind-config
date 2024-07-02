import colors from 'tailwindcss/colors';

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './submodules/**/*.{js,ts,jsx,tsx}',
        // Path to Tremor module
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '2rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['2rem', { lineHeight: '2.5rem' }],
            '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
            '5xl': ['3rem', { lineHeight: '3.5rem' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1.1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        extend: {
            colors: {
                tremor: {
                    brand: {
                        faint: colors.blue[50],
                        muted: colors.blue[200],
                        subtle: colors.blue[400],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[700],
                        inverted: colors.white,
                    },
                    background: {
                        muted: colors.gray[50],
                        subtle: colors.gray[100],
                        DEFAULT: colors.white,
                        emphasis: colors.gray[700],
                    },
                    border: {
                        DEFAULT: colors.gray[200],
                    },
                    ring: {
                        DEFAULT: colors.gray[200],
                    },
                    content: {
                        subtle: colors.gray[400],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[700],
                        strong: colors.gray[900],
                        inverted: colors.white,
                    },
                },
                kernindigo: {
                    DEFAULT: "#0C052E",
                    dark: "#06023b",
                    darker: "#4F46E5",
                    "darker-1": "#312E81",
                    light: "#EEF2FF",
                    "dark-1": "#0000F5",
                    "dark-2": "#4338CA",
                },
                kernpurple: {
                    DEFAULT: "#ae28ae"
                },
            },
            boxShadow: {
                // light
                'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'tremor-card':
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'tremor-dropdown':
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },
            borderRadius: {
                '4xl': '2rem',
                'tremor-small': '0.375rem',
                'tremor-default': '0.5rem',
                'tremor-full': '9999px',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Lexend', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
                'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
                'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
                'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
            },
            maxWidth: {
                '2xl': '40rem',
            },
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        },
        screens: {
            "xs": "450px",
            'small': { 'raw': '(max-height: 1200px)' },
            ...defaultTheme.screens,
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@headlessui/tailwindcss'),
        plugin(function ({ addVariant }) {
            addVariant('disabled-within', `&:has(input:is(:disabled),button:is(:disabled),textarea:is(:disabled))`)
        })
    ],
    safelist: [
        // new safelist logic https://tailwindcss.com/docs/content-configuration#using-regular-expressions
        { pattern: /(text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(500|600|700|800)/ },
        { pattern: /(border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(300|400|500|800)/ },
        { pattern: /(bg)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|500)/, variants: ['hover'] },
        { pattern: /(from)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(500)/ },
        { pattern: /(to)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(300)/ },
        // patterns for submodules
        { pattern: /(border)-(gray)-(200|800)/, },
        { pattern: /(bg)-(neutral)-(800)/, },
        { pattern: /(bg)-(gray)-(700)/, },
        // added for tremor library
        { pattern: /(fill)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|300|400|500|900)/ },
        { pattern: /(stroke)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(300|400|500)/ },
        {
            pattern: /(max-w-).+/,
            variants: ['sm'],
        },
    ],
}
