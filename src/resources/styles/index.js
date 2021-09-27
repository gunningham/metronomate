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
  body {
    background: ${props => props.theme.colours.secondary};
    font-family: 'Montserrat', sans-serif;
  }

  button, p, b, h1, h2, h3 {
    color: ${props => props.theme.colours.text};
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 54pt;
    letter-spacing: 22.5px;
  }

  h2 {
    font-size: 31pt;
    letter-spacing: 7.8px;
  }

  h3 {
    font-size: 20pt;
    letter-spacing: 2px;
  }
`
