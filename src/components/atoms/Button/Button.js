import React from 'react'
import { Link } from 'react-scroll'
import styles from './Button.scss'

const Button = ({ text, onClick, isActive, linkTo }) => {
  const classNames = `${styles.outer} ${isActive ? styles.active : ''}`

  return (
    <div className={classNames}>
      <button className={styles.button} onClick={onClick}>
        {linkTo ? <Link smooth duration={300} to='section-2'>{text}</Link> : text}
      </button>
    </div>
  )
}

export default Button
