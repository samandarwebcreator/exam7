/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#46A358",
        "input-color": "#f8f8f8",
        "gray-thin-placeholder": "#a5a5a5",
      },
      screens: {
        sm: "768px",
        md: "820px",
        lg: "1024px",
        xl: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
        },
      },
      boxShadow: {
        "custom-shadow": "0 10px 20px 0 rgba(70, 163, 88, 0.3)",
        "footer-routes-shadow": "0px 0px 7px 4px rgba(92, 85, 85, 0.08);",
        "scaner-button-shadow": "0px 0px 12px 1px rgba(92, 85, 85, 0.6);",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(to right, #46A358 45%, #46A358 100%)",
      },
      width: {
        full: "100%",
        // "size-full": "100%",
      },
    },
  },
  plugins: [],
};
