/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/img/svgexport-4.svg')",
        "hero_img":"url('/public/img/svgexport-5.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
