/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8047F8",
        "base-title": "#272221",
        "base-text": "#574F4D",
        "base-subtitle": "#403937",
        "base-card": "#F3F2F2",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        yellow: "#DBAC2C",
        "yellow-dark": "#C47F17",
        "yellow-light": "#F1E9C9",
        purple: "#8047F8",
        "purple-light": "#EBE5F9",
        "purple-dark": "#4B2995",
        "grey-200": "#FAFAFA",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ['"Baloo 2"'],
      },
      fontSize: {
        s: "0.625rem",
        "title-xs": "1.125rem",
        "title-l": "2rem",
        "title-s": "1.25rem",
        "regular-s": "0.875rem",
      },
      borderRadius: {
        "4xl": "2.25rem",
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
