/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                forestGreen: "#94DA22",
                elegantZinc: "#52525b",
                hardZinc: "#3f3f46",
            },
        },
    },
    plugins: [],
};
