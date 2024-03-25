/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "410px",
    },
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 14%)",
      "very-dark-blue": "hsl(216, 12%, 14%)",
      "lighter-dark-blue": "hsl(213, 19%, 20%)",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "star-icon": 'url("assets/icon-star.svg")',
      },
      backgroundSize: {
        "star-icon-size": "40%",
      },
      height: {
        "card-mobile": "360px",
        "card-desktop": "410px",
      },
      width: {
        "card-desktop": "410px",
      },
    },
  },
  plugins: [],
};
