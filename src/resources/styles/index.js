import { createGlobalStyle } from 'styled-components'

export const Theme = {
  colours: {
    primary: '#6dd6da',
    secondary: '#a2abb5',
    tertiary: '#817f82',
    text: '#ffffff'
  },
  queries: {
    mobileOnly: '(max-width: 599px)',
    tabletPortrait: '(min-width: 600px)',
    tabletLandscape: '(min-width: 900px)',
    desktop: '(min-width: 1200px)'
  }
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.colours.secondary};
    font-family: 'Montserrat', sans-serif;
  }

  button, p, b, h1, h2, h3 {
    color: ${props => props.theme.colours.text};
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 2.2rem;
  }

  h2 {
    font-size: 3rem;
    letter-spacing: 8rem;
  }

  h3 {
    font-size: 2rem;
    letter-spacing: .2rem;
  }
`
