import React from 'react'
import LogoPath from '@resources/svgs/logo.svg'
import InstaIcon from '@resources/svgs/instagra-icon.svg'
import { HeaderEl } from './styles'

const Header = () => (
  <HeaderEl>
    <img src={LogoPath} alt='Metronomate' />
    <img src={InstaIcon} alt='Instagram' />
  </HeaderEl>
)

export { Header }
