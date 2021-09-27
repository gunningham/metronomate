import React from 'react'
import ButtonList from '@molecules/ButtonList'
import TempoSlider from '@molecules/TempoSlider'
import ReactHowler from 'react-howler'

const BeatPicker = ({ beats, activeBeat, onButtonClick, howlerRef, onTempoChange }) => (
  <>
    <h1>Pick a beat</h1>
    <ButtonList buttons={beats} activeButtonId={activeBeat.id} onButtonClick={onButtonClick} />
    {activeBeat.url && (
      <ReactHowler src={activeBeat.url} format={['wav']} ref={howlerRef} loop />
    )}
    <TempoSlider onChange={onTempoChange} />
  </>
)

export default BeatPicker
