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
      primary: "#254357", // Deep blue primary color
  accent: {
    DEFAULT: "#FF8C00", // Complementary orange accent
    hover: "#E07D00", // Darker shade for hover effect
  },
  tint: "#FFF5EB", // Light cream tint
  darkblue: "#001F3F", // Dark navy blue
},
dropShadow: {
  primary: "0 20px 40px rgba(37, 67, 87, 0.1)", // Shadow for the deep blue
  secondary: "0px 30px 40px rgba(244, 125, 103, 0.2)", // Shadow for secondary color
  tertiary: "0 20px 40px rgba(0, 31, 63, 0.3)",
// primary: "#1A237E", // Dark blue primary color
//   accent: {
//     DEFAULT: "#FF5722", // Deep orange accent color
//     hover: "#E64A19", // Darker shade for hover effect
//   },
//   tint: "#FAFAFA", // Off-white tint
//   darkblue: "#121212", // Dark grayish background
// },
// dropShadow: {
//   primary: "0 20px 40px rgba(26, 35, 126, 0.1)", // Shadow for dark blue
//   secondary: "0px 30px 40px rgba(255, 87, 34, 0.2)", // Shadow for deep orange accent
//   tertiary: "0 20px 40px rgba(18, 18, 18, 0.3)",
      },
      backgroundImage: {
        // hero: "url('/images/hero/scene.svg')",
         hero: "url('/images/truck.png')",
        faq: "url('/images/faq/bg.svg')",
        footer: "url('/images/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
