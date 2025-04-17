/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                forestGreen: "#94DA22",
                sunsetOrange: "#FC6441",
                goldenYellow: "#FAB832",
                elegantBlack: "#101828",
                softWhite: "#F2F2F2",
                charcoalGrey: "#475467",
            },
        },
    },
    plugins: [],
};
