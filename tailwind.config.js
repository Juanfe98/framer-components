/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2933",
        secondary: "#4B5563",
        accent: "#F9FAFB",
        background: "#111827",
        "text-primary": "#F3F4F6",
        "text-secondary": "#FFFFFF",
        gray: {
          95: "hsl(0, 0%, 95%)", // Very light gray
          75: "hsl(0, 0%, 75%)", // Light gray
          50: "hsl(0, 0%, 50%)", // Medium gray
          20: "hsl(0, 0%, 20%)", // Dark gray
          15: "hsl(0, 0%, 15%)", // Darker gray
          10: "hsl(0, 0%, 10%)", // Almost black
        },
        blue: {
          40: "#5b9aff", // Light blue
          70: "#194b9f", // Medium blue
          80: "#0f326c", // Dark blue
          DEFAULT: "#2779ff", // Default blue when no shade is specified
        },
      },
    },
  },
  plugins: [],
};
