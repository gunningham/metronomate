import React from 'react'
import { Link } from 'react-scroll'
import styles from './Button.scss'

const Button = ({ text, onClick, isActive, linkTo }) => {
  const classNames = `${styles.button} ${isActive ? styles.active : ''}`

  return (
    <button className={classNames} onClick={onClick}>
      {!linkTo && text}
      {linkTo && <Link smooth duration={300} to='section-2'>{text}</Link>}
    </button>
  )
}

export default Button
