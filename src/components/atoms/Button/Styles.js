import styled, { css } from 'styled-components'

export const Container = styled.div`
  clip-path: polygon(0 10%, 100% 0%, 98% 100%, 0% 100%);
  padding: 6px;
  border: none;
  transition: background-color .1s ease;
  background-color: ${props => props.theme.colours.tertiary};

  &:hover, ${props => props.isActive && css`
    cursor: pointer;
    background-color: ${props => props.theme.colours.tertiary};
  `}
`

export const Btn = styled.button`
  font-size: 30px;
  padding: 32px 46px;
  border: none;
  clip-path: polygon(0 10%, 100% 0%, 98% 100%, 0% 100%);
  text-transform: uppercase;
  letter-spacing: 8px;
  background: ${props => props.theme.colours.secondary};

  &:focus {
    outline: none;
  }
`
