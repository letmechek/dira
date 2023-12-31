module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: "DM Serif Display",
      body: "Rubik",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1120px",
    },
    extend: {
      colors: {
      primary: "#254357", 
  accent: {
    DEFAULT: "#FF8C00", 
    hover: "#E07D00", 
  },
  tint: "#FFF5EB", 
  darkblue: "#001F3F", 
},
dropShadow: {
  primary: "0 20px 40px rgba(37, 67, 87, 0.1)", 
  secondary: "0px 30px 40px rgba(244, 125, 103, 0.2)", 
  tertiary: "0 20px 40px rgba(0, 31, 63, 0.3)",
      },
      backgroundImage: {
         hero: "url('/images/truck.png')",
        faq: "url('/images/faq/bg.svg')",
        footer: "url('/images/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
