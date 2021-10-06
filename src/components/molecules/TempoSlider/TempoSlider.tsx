import React, { useState, useEffect, FC } from 'react'
import { DEFAULT_TEMPO, MIN_TEMPO, MAX_TEMPO, STEP_TEMPO, SPACE_KEY_CODE } from '@constants'
import { Wrap, Label, RangeInput } from './styles'

type PropTypes = {
  onChange: (value: number) => void;
}

const TempoSlider: FC<PropTypes> = ({ onChange }) => {
  const [tempo, setTempo] = useState<number>(DEFAULT_TEMPO)

  const handleRangeInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value, 0)
    setTempo(value)
    onChange(value)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code !== SPACE_KEY_CODE) return
      event.preventDefault()
  
      if (tempo === MAX_TEMPO) setTempo(MIN_TEMPO)
      else setTempo(tempo + STEP_TEMPO)
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onChange, tempo])

  return (
    <Wrap>
      <Label htmlFor='tempo'>{tempo} BPM</Label>
      <RangeInput
        type='range'
        value={tempo}
        onChange={handleRangeInputChange}
        name='tempo'
        min={MIN_TEMPO}
        max={MAX_TEMPO}
        step={STEP_TEMPO}
      />
    </Wrap>
  )
}

export { TempoSlider }
