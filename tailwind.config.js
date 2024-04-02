/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#46A358",
        "input-color": "#f8f8f8",
        "gray-thin-placeholder": "#a5a5a5",
        "text-color": "#3d3d3d",
        "background-shadow": "rgba(0, 0, 0, 0.4)",
      },
      screens: {
        sm: "768px",
        md: "820px",
        mtd: "1000px",
        lg: "1200px",
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
      },
      keyframes: {
        fromBottomToTop: {
          from: {
            bottom: "-100px",
          },
          to: {
            bottom: "0",
          },
        },
        fromRightToLeft: {
          from: {
            transform: "translateX(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        fromBottomToTop: "fromBottomToTop 0.5s ease-out",
        fromRightToLeft: "fromRightToLeft 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
