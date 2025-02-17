/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  presets: [require("./tailwind-config/tailwind.preset")],
  plugins: ["prettier-plugin-tailwindcss"],
}

