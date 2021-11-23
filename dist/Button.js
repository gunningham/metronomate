import React from 'react';
import { Link } from 'react-scroll';
import { Container, Btn } from './styles';
const Button = ({ text, onClick, isActive, linkTo }) => (React.createElement(Container, { isActive: isActive },
    React.createElement(Btn, { onClick: onClick }, linkTo ? React.createElement(Link, { smooth: true, duration: 300, to: "section-2" }, text) : text)));
export { Button };
