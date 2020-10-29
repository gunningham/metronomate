import React from 'react'
import { ThemeProvider } from 'styled-components'
import Homepage from '@pages/Homepage'
import { Theme } from '@resources/styles'

const App = () => (
  <ThemeProvider theme={Theme}>
    <Homepage />
  </ThemeProvider>
)

export default App
