import React from 'react'
import { ThemeProvider } from 'styled-components'
import Homepage from '@pages/Homepage'
import { Theme, GlobalStyle } from '@resources/styles'

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Homepage />
  </ThemeProvider>
)

export default App
