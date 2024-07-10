/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                customYellow: '#E6BD56',
                customWhite: '#FFDFC7',
            },
        },
    },
    plugins: [],
}
