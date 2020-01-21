import React from 'react'
import styles from './Button.scss'

const Button = ({ text, onClick, isActive }) => {
  const classNames = `${styles.button} ${isActive ? styles.active : ''}`

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
