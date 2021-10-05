import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Homepage } from '@pages';
import { Theme, GlobalStyle } from '../resources/styles/index';

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Homepage />
  </ThemeProvider>
);

export default App;
