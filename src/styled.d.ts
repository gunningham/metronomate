import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
    };

    media: {
      mobile: string;
      mobileMax: string;
      tablet: string;
      tabletMax: string;
      desktop: string;
      desktopMax: string;
      desktopLarge: string;
    };
  }
}