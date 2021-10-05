import React from 'react'
import { ButtonList } from '@molecules'
import { Heading } from './styles'

type Genre = {
  id: string;
  text: string;
}

type PropTypes = {
  genres: Genre[];
  activeGenreId: string;
  onButtonClick: (id: string) => void;
}

const GenrePicker = ({ genres, activeGenreId, onButtonClick }: PropTypes) => (
  <>
    <Heading>Pick a genre</Heading>
    <ButtonList buttons={genres} activeButtonId={activeGenreId} onButtonClick={onButtonClick} />
  </>
)

export { GenrePicker }
