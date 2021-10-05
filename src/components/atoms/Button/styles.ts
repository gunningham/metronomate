import styled, { css } from 'styled-components';

type ContainerProps = {
  isActive?: boolean;
};

export const Container = styled.div<ContainerProps>`
  clip-path: polygon(0 10%, 100% 0%, 98% 100%, 0% 100%);
  padding: .6rem;
  border: none;
  transition: background-color .1s ease;
  background-color: ${(props) => props.theme.colours.tertiary};
  
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colours.primary};
  }

  ${(props) => props.isActive && css`
    cursor: pointer;
    background-color: ${props.theme.colours.primary};
  `}
`;

export const Btn = styled.button`
  font-size: 3rem;
  padding: 3.2rem 4.6rem;
  border: none;
  clip-path: polygon(0 10%, 100% 0%, 98% 100%, 0% 100%);
  text-transform: uppercase;
  letter-spacing: .8rem;
  background: ${(props) => props.theme.colours.secondary};
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;
