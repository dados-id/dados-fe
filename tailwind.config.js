/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            hauora: ["Hauora Sans", "sans-serif"],
        },
        screens: {
            mobile: "360px",
            tablet: "768px",
            desktop: "994px",
            wide: "1537px",
        },
        extend: {},
    },
    plugins: [],
}
