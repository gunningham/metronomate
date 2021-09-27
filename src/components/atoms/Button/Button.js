import React from 'react'
import { Link } from 'react-scroll'

import { Container, Btn } from './styles'

const Button = ({ text, onClick, isActive, linkTo }) => (
  <Container isActive>
    <Btn onClick={onClick}>
      {linkTo ? <Link smooth duration={300} to='section-2'>{text}</Link> : text}
    </Btn>
  </Container>
)

export default Button
