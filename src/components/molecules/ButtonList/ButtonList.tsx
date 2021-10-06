import React, { FC } from 'react'
import { Button } from '@atoms'
import { Wrap } from './styles'

type ButtonType = {
  id: string;
  text: string;
}

type PropTypes = {
  buttons: ButtonType[];
  activeButtonId: string;
  onButtonClick: (id: string) => void
}

const ButtonList: FC<PropTypes> = ({ buttons, activeButtonId, onButtonClick }) => (
  <Wrap>
    {buttons.map(button => (
      <Button
        key={button.id}
        isActive={button.id === activeButtonId}
        text={button.text}
        onClick={() => onButtonClick(button.id)}
      />
    ))}
  </Wrap>
)

export { ButtonList }
