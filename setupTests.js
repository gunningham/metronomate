import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './src/resources/styles'
import '@testing-library/jest-dom'

global.renderWithTheme = (tree) => {
  return render(<ThemeProvider theme={Theme}>{tree}</ThemeProvider>)
}
