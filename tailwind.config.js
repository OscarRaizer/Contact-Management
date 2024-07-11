/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                customYellow: '#E6BD56',
                customWhite: '#FFDFC7',
                customGreen: '#71B99C',
                customRed: '#BB471A',
                customBlue: '#4280EC',
            },
        },
    },
    plugins: [],
}
