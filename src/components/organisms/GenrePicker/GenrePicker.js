import React from 'react'
import ButtonList from '@molecules/ButtonList'
import { Heading } from './styles'

const GenrePicker = ({ genres, activeGenre, onButtonClick }) => (
  <>
    <Heading>Pick a genre</Heading>
    <ButtonList buttons={genres} activeButtonId={activeGenre.id} onButtonClick={onButtonClick} />
  </>
)

export default GenrePicker
