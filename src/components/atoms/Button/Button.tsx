import React from 'react'
import { Link } from 'react-scroll'

import { Container, Btn } from './styles'

type PropTypes = {
  text: string;
  isActive?: boolean;
  linkTo?: string;
  onClick?: () => void;
};

const Button = ({
  text, onClick, isActive, linkTo,
}: PropTypes) => (
  <Container isActive={isActive}>
    <Btn onClick={onClick}>
      {linkTo ? <Link smooth duration={300} to="section-2">{text}</Link> : text}
    </Btn>
  </Container>
);

export { Button };
