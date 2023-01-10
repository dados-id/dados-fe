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
        colors: {
            mariana: "#05153E",
            "ultra-marine": "#1153FC",
            cobalt: "#5581F1",
            whipcream: "#FFFEEB",
            cloud: "#FFFFF6",
            danger: "#F93F3F",
            warning: "#EAE21D",
            success: "#62EF81",
            black: "#000000",
            white: "#FFFFFF",
            grey: {
                800: "#636363",
                600: "#909090",
                400: "#D6D6D6",
                200: "#E5E5E5",
            },
            violet: {
                DEFAULT: "#9511FC",
                light: "#AC55F1",
            },
        },
        extend: {
            backgroundImage: {
                "blue-gradient":
                    "linear-gradient(180deg, #1153FC 0%, #3F6FEB 100%);",
                "cream-gradient":
                    "linear-gradient(180deg, #FFFEEB 0%, #FEFDE8 100%);",
            },
        },
    },
    plugins: [],
}
