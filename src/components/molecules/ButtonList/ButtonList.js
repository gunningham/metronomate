import React from 'react'
import Button from '@atoms/Button'
import { Wrap } from './styles'

const ButtonList = ({ buttons, activeButtonId, onButtonClick }) => (
  <Wrap>
    {buttons.map(button => (
      <Button
        key={button.id}
        isActive={button.id === activeButtonId}
        text={button.text}
        onClick={() => onButtonClick(button)}
      />
    ))}
  </Wrap>
)

export default ButtonList
