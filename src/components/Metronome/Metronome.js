import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Howl } from 'howler'
import Button from '../Button'
import TempoSlider from '../TempoSlider'
import { DEFAULT_TEMPO } from '../../constants'
import { fetchEntries } from '../../services/contentful'
import styles from './Metronome.scss'

const Metronome = () => {
  const [activeBeatUrl, setActiveBeatUrl] = useState('')
  const [genre, setGenre] = useState('rock')
  const [beats, setBeats] = useState([])
  const howl = new Howl({ src: [activeBeatUrl], loop: true })

  const onTempoChange = tempo => {
    if (activeBeatUrl) audioInput.current.playbackRate = tempo / DEFAULT_TEMPO
  }

  const getBeats = async () => {
    const entries = await fetchEntries('sounds')

    const formattedBeats = entries.map(beat => ({
      text: beat.fields.title,
      id: beat.sys.id,
      url: beat.fields.sound.fields.file.url
    }))

    setBeats(formattedBeats)
  }

  useEffect(() => {
    const genreFromUrl = queryString.parse(window.location.search).genre || ''

    if (genreFromUrl !== genre) setGenre(genreFromUrl)
    if (!beats.length) getBeats()
  })

  const handleBeatChange = url => {
    if (activeBeatUrl) howl.stop()
    howl.src = [url]
    howl.play()
    setActiveBeatUrl(url)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.buttons}>
        {beats.map(beat => (
          <Button
            key={beat.id}
            isActive={activeBeatUrl === beat.url}
            text={beat.text}
            onClick={() => handleBeatChange(beat.url)}
          />
        ))}
      </div>
      <TempoSlider onChange={onTempoChange} />
    </div>
  )
}

export default Metronome
