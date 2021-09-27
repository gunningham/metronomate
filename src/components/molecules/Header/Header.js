import React from 'react'
import Logo from '@resources/svgs/logo.svg'
import InstaIcon from '@resources/svgs/instagra-icon.svg'
import { HeaderEl } from './styles'

const Header = () => (
  <HeaderEl>
    <Logo />
    <InstaIcon />
  </HeaderEl>
)

export default Header
