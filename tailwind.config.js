/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark_green : '#00474B',
        light_green: 'hsl(185, 41%, 84%)',
        hover_green : '#A0E7DF',
        input_green: '#F3F8FB',
        text_green : ' hsl(184, 14%, 56%)',
        dark_grayish_cyan: 'hsl(186, 14%, 43%)',
        clicked_green: '#24C3AD',
        reset_bg:'#0D686D',
      },
      letterSpacing:{
        custom:'0.5rem'
      }
    },
  },
  plugins: [],
}

