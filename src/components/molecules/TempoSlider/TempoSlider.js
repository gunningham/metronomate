import React, { useState, useEffect } from 'react'
import { DEFAULT_TEMPO, MIN_TEMPO, MAX_TEMPO, STEP_TEMPO, SPACE_KEY_CODE } from '@constants'
import styles from './TempoSlider.scss'

const TempoSlider = ({ onChange, defaultTempo }) => {
  const [tempo, setTempo] = useState(DEFAULT_TEMPO)

  const handleRangeInputChange = event => {
    const value = parseInt(event.target.value)
    setTempo(value)
    onChange(value)
  }

  const handleKeyDown = (event) => {
    if (event.keyCode !== SPACE_KEY_CODE) return
    event.preventDefault()

    setTempo(prevTempo => {
      if (prevTempo === MAX_TEMPO) setTempo(MIN_TEMPO)
      else setTempo(prevTempo + STEP_TEMPO)
    })
  }

  // Inform parent of the tempo value onChange
  useEffect(() => onChange(tempo), [tempo])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor='tempo'>{tempo} BPM</label>
      <input
        type='range'
        value={tempo}
        onChange={handleRangeInputChange}
        name='tempo'
        min={MIN_TEMPO}
        max={MAX_TEMPO}
        step={STEP_TEMPO}
        className={styles.slider}
      />
    </div>
  )
}

export default TempoSlider
