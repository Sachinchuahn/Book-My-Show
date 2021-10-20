module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors:{
            sachin:
              {
  50: '#ffe2ec',
  100: '#ffb3c5',
  200: '#fc839f',
  300: '#f95278',
  400: '#f62252',
  500: '#dd0939',
  600: '#ad032c',
  700: '#7c001e',
  800: '#4d0012',
  900: '#200005',
},
navCol:{
  50: '#e4f5ff',
  100: '#bdddf4',
  200: '#94c6ea',
  300: '#6bafe2',
  400: '#4698da',
  500: '#307fc1',
  600: '#246296',
  700: '#18466c',
  800: '#0b2a42',
  900: '#000f1a',
}
      
   }
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
