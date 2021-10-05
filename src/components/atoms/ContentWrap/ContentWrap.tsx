import React from 'react'
import { Container } from './styles'

type PropTypes = {
  children: React.ReactNode;
}

const ContentWrap = ({ children }: PropTypes) => (
  <Container>
    {children}
  </Container>
)

export { ContentWrap }
