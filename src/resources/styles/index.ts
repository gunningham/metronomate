import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const WIDTHS = {
  DESKTOP_LARGE: 1440,
  DESKTOP_MIN: 992,
  TABLET_WIDTH: 769,
  MOBILE_MAX: 460
}

export const Theme: DefaultTheme = {
  colours: {
    primary: '#6dd6da',
    secondary: '#a2abb5',
    tertiary: '#817f82',
    text: '#ffffff'
  },
  media: {
    mobile: `min-width: ${WIDTHS.MOBILE_MAX}px`,
    mobileMax: `max-width: ${WIDTHS.MOBILE_MAX}px`,
    tablet: `min-width: ${WIDTHS.TABLET_WIDTH}px`,
    tabletMax: `max-width: ${WIDTHS.TABLET_WIDTH}px`,
    desktop: `min-width: ${WIDTHS.DESKTOP_MIN}px`,
    desktopMax: `max-width: ${WIDTHS.DESKTOP_MIN}px`,
    desktopLarge: `min-width: ${WIDTHS.DESKTOP_LARGE}px`
  }
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 42.5%;

    @media (${(props) => props.theme.media.tablet}) {
      font-size: 52.5%;
    }

    @media (${(props) => props.theme.media.desktop}) {
      font-size: 62.5%;
    }
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
