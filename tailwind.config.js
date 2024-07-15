/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "pain":"#3D4966"
      }
    },
    screens:{
      ...{
        xs: "0px",
        mb: "350px",
        sm: "600px",
        md: "900px",
        lg: "1280px",
        xl: "1920px",
      },
    }
  },
  plugins: [],
};
