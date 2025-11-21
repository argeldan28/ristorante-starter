module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EE",
        bosco: "#0B3D2E",
        oro: "#C6A15A",
        antracite: "#222222",
        grigio: "#BDB6AE",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        ui: ["Inter", "Roboto", "system-ui", "sans-serif"],
      },
      transitionDuration: {
        120: "120ms",
        200: "200ms"
      }
    },
  },
  plugins: [],
}
