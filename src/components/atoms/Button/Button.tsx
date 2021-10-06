import React, { FC } from 'react'
import { Link } from 'react-scroll'

import { Container, Btn } from './styles'

type PropTypes = {
  text: string;
  isActive?: boolean;
  linkTo?: string;
  onClick?: () => void;
};

const Button: FC<PropTypes> = ({ text, onClick, isActive, linkTo }) => (
  <Container isActive={isActive}>
    <Btn onClick={onClick}>
      {linkTo ? <Link smooth duration={300} to="section-2">{text}</Link> : text}
    </Btn>
  </Container>
);

export { Button };
