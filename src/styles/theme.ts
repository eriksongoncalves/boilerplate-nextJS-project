export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
    breakpoints: {
      small: '576px',
      medium: '768px',
      large: '992px',
      xlarge: '1200px'
    }
  },
  spacings: {
    xsmall: '0.5rem',
    small: '1rem',
    medium: '2rem',
    large: '4rem',
    xlarge: '8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      semiBold: 600
    },
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      xxmedium: '2rem',
      large: '2.2rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      xxxlarge: '3.4rem'
    }
  },
  colors: {
    primary: '#06092B',
    secondary: '',
    white: '#ffffff',
    black: '#000000'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    slow: '0.7s ease-in-out',
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
