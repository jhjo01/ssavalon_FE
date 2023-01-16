/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        // override
        fontSize: {
            "2xs": "0.625rem",
            xs: "0.75rem",
            sm: "0.8125rem",
            base: "1rem",
            lg: "1.25rem",
            xl: "1.5625rem",
            "2xl": "1.9375rem",
            "3xl": "2.4375rem",
            "4xl": "3.0625rem",
            "5xl": "3.8125rem",
        },
        fontFamily: {
            inter: "Inter",
            alatsi: "Alatsi",
        },
        borderRadius: {
            none: "0",
            xs: "0.1875rem",
            sm: "0.25rem",
            default: "0.3125rem",
            lg: "0.32637521624565125rem",
            xl: "0.375rem",
            "2xl": "0.5rem",
            "3xl": "0.5625rem",
            "4xl": "0.625rem",
            "5xl": "0.75rem",
            "6xl": "1.125rem",
            "7xl": "2.5rem",
            "8xl": "3.125rem",
            "9xl": "5.625rem",
            full: "9999px",
        },

        // extend
        extend: {
            colors: {
                darkblue: {
                    50: "#fbfdff",
                    100: "#eef7ff",
                    200: "#e0eefc",
                    300: "#cfe3f7",
                    400: "#acc3da",
                    500: "#8ba4bd",
                    600: "#6e87a0",
                    700: "#536b82",
                    800: "#3c5065",
                    900: "#273748",
                },
            },
        },
    },

    plugins: [],
};
