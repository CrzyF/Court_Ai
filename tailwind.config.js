/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "ellipse-9x":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)",
          "ellipse-10x":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7b1e845e5e371594385e612c622869353a4556b8.webp)",
          "ellipse-11x":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/cdc4d16c120ed756fb3092432729af31acee932a.webp)",
        "ellipse-12x":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)",
      },
    },
  },
  plugins: [],
}
