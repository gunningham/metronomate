import React from 'react'
import ButtonList from '../ButtonList'

const GenrePicker = ({ genres, activeGenre, onButtonClick }) => (
  <>
    <h1>Pick a genre</h1>
    <ButtonList buttons={genres} activeButtonId={activeGenre.id} onButtonClick={onButtonClick} />
  </>
)

export default GenrePicker
