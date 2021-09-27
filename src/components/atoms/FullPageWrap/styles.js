import styled from 'styled-components'

export const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
`

export const BgShape = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 84%, 85% 90%, 73% 70%, 20% 40%, 0 18%);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.colours.tertiary};
  z-index: -1;
`
