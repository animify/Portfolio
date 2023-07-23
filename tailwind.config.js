/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      teal: colors.teal,
      blue: colors.blue,
      pink: colors.pink,
      sky: colors.sky,
      red: colors.red,
      indigo: colors.indigo,
      purple: colors.purple,
      orange: colors.orange,
      yellow: colors.yellow,
      amber: colors.amber,
      gray: {
        950: "#1D1D1C",
        900: "#282826",
        850: "#343431",
        800: "#40403C",
        750: "#4C4C46",
        740: "#585851",
        700: "#64645B",
        650: "#707065",
        600: "#7C7C6F",
        550: "#898979",
        500: "#959583",
        450: "#9E9E8E",
        400: "#A8A899",
        350: "#B1B1A4",
        300: "#BBBBAF",
        250: "#C4C4BA",
        200: "#CECEC5",
        150: "#D7D7D0",
        100: "#E0E0DB",
        50: "#EAEAE6",
        25: "#f5f3f0",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        header: ["var(--font-mona-sans)"],
        mono: ["var(--font-mono)", "var(--font-inter)"],
      },
      transitionProperty: {
        top: "top",
        height: "height",
        width: "width",
        borderWidth: "border-width",
        margin: "margin",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0,.8,.64,1.24)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      boxShadow: {
        menu: "rgb(0 0 0 / 10%) 0px 0.5px 2px, rgb(0 0 0 / 5%) 0px 8px 40px",
        thumbnail:
          "rgb(0 0 0 / 10%) 0px 0.5px 2px, rgb(0 0 0 / 5%) 0px 6px 12px",
        test: "0px 0px 0px 1px #ffffff12 inset, 0px 2px 16px 12px #00000020, 0px 1px 8px 0px #00000040",
        highlightWhite: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        highlightBlack: "inset 0 1px 0 0 rgba(0, 0, 0, 0.05)",
        outline: "inset 0 0 0 1px var(--tw-shadow-color)",
        changelog: "0 0 0 1px #00000012, 0px 2px 6px #00000008",
        button: "0 0 0 1px #00000012, 0px 1px 4px #00000008",
        uploadButton: "rgba(12, 16, 20, 0.06) 0px 1px 2px 0px",
        island:
          "rgba(12, 16, 20, 0.05) 0px 0px 0px 1px, rgba(12, 16, 20, 0.1) 0px 1px 3px 0px",
      },
      fontSize: {
        xs: ["0.6875em", { lineHeight: "1.4" }],
        sm: ["0.875em", { lineHeight: "1.4" }],
        base: ["15px", { lineHeight: "1.5" }],
        lg: ["1.1em", { lineHeight: "1.4" }],
        xl: ["1.2em", { lineHeight: "1.6" }],
        "2xl": ["1.25em", { lineHeight: "1.4" }],
        "3xl": ["1.5em", { lineHeight: "1.3" }],
        "4xl": ["1.75em", { lineHeight: "1.24" }],
        "5xl": ["2.25em", { lineHeight: "1.2" }],
        "6xl": ["2.5em", { lineHeight: "1.2" }],
      },

      keyframes: {
        // Dropdown menu
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Navigation menu
        "enter-from-right": {
          "0%": { transform: "translateX(200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "exit-to-right": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(200px)", opacity: 0 },
        },
        "exit-to-left": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-200px)", opacity: 0 },
        },
        "scale-in-content": {
          "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
        },
        "scale-out-content": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
          "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },

        bounceZero: {
          "0%, 100%": {
            transform: "none",
          },
          "50%": {
            transform: `translateY(-10%)`,
          },
        },
      },
      animation: {
        // Dropdown menu
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        "fade-in": "fade-in 0.2s ease",
        "fade-out": "fade-out 0.2s ease",
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right":
          "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom":
          "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
        bounceZero:
          "bounceZero 1.2s cubic-bezier(.59,1.38,.82,.97) infinite forwards",
      },
    },
  },
  extend: {
    boxShadow: {
      slider: "0 0 0 5px rgba(0, 0, 0, 0.3)",
    },
    keyframes: {
      // Dropdown menu
      "scale-in": {
        "0%": { opacity: 0, transform: "scale(0)" },
        "100%": { opacity: 1, transform: "scale(1)" },
      },
      "slide-down": {
        "0%": { opacity: 0, transform: "translateY(-10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "slide-up": {
        "0%": { opacity: 0, transform: "translateY(10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      // Tooltip
      "slide-up-fade": {
        "0%": { opacity: 0, transform: "translateY(2px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "slide-right-fade": {
        "0%": { opacity: 0, transform: "translateX(-2px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      "slide-down-fade": {
        "0%": { opacity: 0, transform: "translateY(-2px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "slide-left-fade": {
        "0%": { opacity: 0, transform: "translateX(2px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      // Navigation menu
      "enter-from-right": {
        "0%": { transform: "translateX(200px)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      "enter-from-left": {
        "0%": { transform: "translateX(-200px)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      "exit-to-right": {
        "0%": { transform: "translateX(0)", opacity: 1 },
        "100%": { transform: "translateX(200px)", opacity: 0 },
      },
      "exit-to-left": {
        "0%": { transform: "translateX(0)", opacity: 1 },
        "100%": { transform: "translateX(-200px)", opacity: 0 },
      },
      "scale-in-content": {
        "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
        "100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
      },
      "scale-out-content": {
        "0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
        "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
      },
      "fade-in": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      "fade-out": {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      // Toast
      "toast-hide": {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      "toast-slide-in-right": {
        "0%": { transform: `translateX(calc(100% + 1rem))` },
        "100%": { transform: "translateX(0)" },
      },
      "toast-slide-in-bottom": {
        "0%": { transform: `translateY(calc(100% + 1rem))` },
        "100%": { transform: "translateY(0)" },
      },
      "toast-swipe-out": {
        "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        "100%": {
          transform: `translateX(calc(100% + 1rem))`,
        },
      },
    },
    animation: {
      // Dropdown menu
      "scale-in": "scale-in 0.2s ease-in-out",
      "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      // Tooltip
      "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      "slide-right-fade": "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      // Navigation menu
      "enter-from-right": "enter-from-right 0.25s ease",
      "enter-from-left": "enter-from-left 0.25s ease",
      "exit-to-right": "exit-to-right 0.25s ease",
      "exit-to-left": "exit-to-left 0.25s ease",
      "scale-in-content": "scale-in-content 0.2s ease",
      "scale-out-content": "scale-out-content 0.2s ease",
      "fade-in": "fade-in 0.2s ease",
      "fade-out": "fade-out 0.2s ease",
      // Toast
      "toast-hide": "toast-hide 100ms ease-in forwards",
      "toast-slide-in-right":
        "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      "toast-slide-in-bottom":
        "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
    },
  },
  plugins: [
    require("./variantPlugin"),

    require("tailwindcss-radix")({
      variantPrefix: false,
    }),
  ],
};
