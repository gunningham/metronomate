import React from 'react'
import Logo from '../../resources/svgs/logo.svg'
import InstaIcon from '../../resources/svgs/instagra-icon.svg'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <InstaIcon />
  </header>
)

export default Header
