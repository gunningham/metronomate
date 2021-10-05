import styled from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  @media (${(props) => props.theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${(props) => props.theme.media.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
