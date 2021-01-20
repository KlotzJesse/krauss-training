module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
       fadein: {
         '0%': { opacity: 0 },
         '100%': { opacity: 1 },
       }
      },
      animation: {
        fadein: 'fadein 1s',
       }
    } 
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
