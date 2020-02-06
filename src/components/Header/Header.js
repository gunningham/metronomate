import React from 'react'
import Logo from '../../resources/svgs/logo.svg'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
)

export default Header
