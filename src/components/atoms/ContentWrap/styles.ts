import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colours.primary};
  padding: 8rem 4rem 4rem;
  width: 75vw;
  text-align: center;
  clip-path: polygon(0 10%, 100% 0%, 98% 100%, 0% 100%);
`
