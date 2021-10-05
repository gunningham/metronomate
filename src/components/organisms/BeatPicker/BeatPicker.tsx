import React, { RefObject } from 'react'
import { ButtonList, TempoSlider } from '@molecules'
import ReactHowler from 'react-howler'
import { Heading } from './styles'

type Beat = {
  id: string;
  url: string;
  text: string;
}

type PropTypes = {
  beats: Beat[];
  activeBeatId: string;
  onButtonClick: (id: string) => void;
  onTempoChange: (tempo: number) => void;
  howlerRef: RefObject<ReactHowler>;
}


const BeatPicker = ({ beats, activeBeatId, onButtonClick, howlerRef, onTempoChange }: PropTypes) => {
  const activeBeat = beats.find(beat => beat.id === activeBeatId) || {} as Beat

  return (
    <>
      <Heading>Pick a beat</Heading>
      <ButtonList buttons={beats} activeButtonId={activeBeatId} onButtonClick={onButtonClick} />
      {activeBeat.url && (
        <ReactHowler src={activeBeat.url} format={['wav']} ref={howlerRef} loop />
      )}
      <TempoSlider onChange={onTempoChange} />
    </>
  )
}

export { BeatPicker }
