import React from 'react'
import styles from './Button.scss'

const Button = ({ text, onClick, isActive }) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onMouseDown={onClick}>
      {text}
    </button>
  )
}

export default Button
