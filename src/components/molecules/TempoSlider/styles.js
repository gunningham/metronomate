import styled from 'styled-components'

export const Wrap = styled.div`
  padding: 1.8rem;
  text-align: center;
`
export const Label = styled.label`
  margin-bottom: 4rem;
  margin-top: 8rem;
  display: block;
  font-size: 8rem;
  color: ${props => props.theme.colours.text};
`

export const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 80%;
  background: transparent;
  margin: 0;
  position: relative;
  height: .5rem;
  background: ${props => props.theme.colours.tertiary};

  &::before, &::after {
    content: '';
    height: 2.6rem;
    width: 2.6rem;
    background: ${props => props.theme.colours.secondary};
    position: absolute;
    top: 0;
    border-radius: 50%;
    box-shadow: 0 .4rem 0 ${props => props.theme.colours.tertiary};
  }

  &::before {
    left: 0;
    transform: translate(-50%, -48%);
  }

  &::after {
    right: 0;
    transform: translate(50%, -48%);
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
  }

  &::-webkit-slider-thumb{
    height: 4rem;
    width: 4rem;
    background-repeat: no-repeat;
    background-image: url(https://uploads-ssl.webflow.com/5d114684c693cf4db4a9af8b/5d1dfb60bbf60237755902f2_Asset%2039.svg);
    background-color: $secondary-colour;
    box-shadow: 0 .4rem 0 ${props => props.theme.colours.tertiary};;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    z-index: 2;
    position: relative;
  }
`
