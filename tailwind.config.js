/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      spacing: {
        px: "1px",
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        2.5: "0.625rem", // 10px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        32: "8rem", // 128px
        40: "10rem", // 160px
        48: "12rem", // 192px
        56: "14rem", // 224px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },
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
