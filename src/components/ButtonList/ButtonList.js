import React from 'react'
import Button from '../Button'
import styles from './ButtonList.scss'

const ButtonList = ({ buttons, activeButtonId, onButtonClick }) => (
  <div className={styles.buttons}>
    {buttons.map(beat => (
      <Button
        key={beat.id}
        isActive={beat.id === activeButtonId}
        text={beat.text}
        onClick={() => onButtonClick(beat)}
      />
    ))}
  </div>
)

export default ButtonList
