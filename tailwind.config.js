/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f6ff", // Lightest blue, great for backgrounds
          100: "#e0eeff", // Light blue, for hover states
          200: "#bad9ff", // Soft blue, for secondary elements
          300: "#7eb6ff", // Medium light blue
          400: "#4891ff", // Bright blue
          500: "#1a6dff", // Primary blue
          600: "#0050e0", // Darker blue for hover states
          700: "#0040b8", // Deep blue for text
          800: "#003494", // Very dark blue
          900: "#002670", // Darkest blue
        },
        neutral: {
          50: "#f8fafc", // Nearly white
          100: "#f1f5f9", // Very light gray
          800: "#1e293b", // Dark gray for text
          900: "#0f172a", // Nearly black
        },
        accent: {
          100: "#fef3c7", // Light yellow for highlights
          200: "#fde68a", // Muted yellow
          500: "#f59e0b", // Orange/yellow for CTAs
        },
      },
      zIndex: {
        9999: "9999",
      },
      transform: {
        gpu: "translateZ(0)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "slide-down": "slideDown 0.7s ease-out forwards",
        "width-grow": "widthGrow 0.7s ease-out forwards",
        pulse: "pulse 1s ease-in-out infinite",
        "stroke-draw": "strokeDraw 1.5s ease-out forwards",
        "fill-text": "fillText 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-100%) skewX(-12deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) skewX(-12deg)",
            opacity: "1",
          },
        },
        widthGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
        },
        strokeDraw: {
          "0%": {
            strokeDashoffset: "500",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
        fillText: {
          "0%": {
            fillOpacity: "0",
          },
          "100%": {
            fillOpacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
