import React, { FC } from 'react'
import { Container } from './styles'

const ContentWrap: FC = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export { ContentWrap }
