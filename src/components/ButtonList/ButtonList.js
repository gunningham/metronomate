import React from 'react'
import Button from '../Button'
import styles from './ButtonList.scss'

const ButtonList = ({ buttons, activeButtonId, onButtonClick }) => (
  <div className={styles.buttons}>
    {buttons.map(button => (
      <Button
        key={button.id}
        isActive={button.id === activeButtonId}
        text={button.text}
        onClick={() => onButtonClick(button)}
      />
    ))}
  </div>
)

export default ButtonList
