/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        AboutBG: "url('./src/assets/AboutBG.png')",
        AboutBG2: "url('./src/assets/AboutBG2.png')",
        BlueBG: "url('./src/assets/blue-background.jpg')",
        mbl: "url('./src/assets/mbl2.jpg')",
        web: "url('./src/assets/web.jpg')",
        blockchain: "url('./src/assets/blockchain.jpg')",
        lead: "url('./src/assets/lead.jpg')",
        ARVR: "url('./src/assets/AR-VR.jpg')",
        industriesBG: "url('./src/assets/industriesBG.jpg')",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
