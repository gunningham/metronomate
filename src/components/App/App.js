import React, { useState, useEffect, useRef } from 'react'
import TitleLogo from '../../resources/svgs/hero-logo.svg'
import Button from '../Button'
import ContentWrap from '../ContentWrap'
import Header from '../Header'
import FullPageWrap from '../FullPageWrap'
import Loader from '../Loader'
import BeatPicker from '../BeatPicker'
import GenrePicker from '../GenrePicker'
import { DEFAULT_TEMPO } from '../../constants'
import { fetchEntries } from '../../services/contentful'
import styles from './App.scss'

const App = () => {
  const [activeBeat, setActiveBeat] = useState({})
  const [activeGenre, setActiveGenre] = useState({})
  const [beats, setBeats] = useState([])
  const howlerRef = useRef(null)

  const handleTempoChange = tempo => {
    if (!activeBeat.id) return
    howlerRef.current.howler.rate(tempo / DEFAULT_TEMPO)
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
    if (!beats.length) getBeats()
  })

  const handleBeatButtonClick = beat => {
    if (beat.id === activeBeat.id) return setActiveBeat({})
    setActiveBeat(beat)
  }

  const handleGenreButtonClick = genre => {
    if (genre === activeGenre) return setActiveGenre(null)
    setActiveGenre(genre)
  }

  const genres = [{ text: 'Rock', id: 'rock' }, { text: 'Classic', id: 'classic' }, { text: 'Indie', id: 'indie' }]

  if (!beats.length) return <Loader />

  return (
    <div className={styles.wrap}>
      <Header />
      <FullPageWrap name='section-1' isTop>
        <TitleLogo className={styles.titleLogo} />
        <Button linkTo='section-2' text='Fuck yeah' />
      </FullPageWrap>
      <FullPageWrap name='section-2' isBottom>
        <ContentWrap>
          {activeGenre.id
            ? <BeatPicker beats={beats} activeBeat={activeBeat} onButtonClick={handleBeatButtonClick} howlerRef={howlerRef} onTempoChange={handleTempoChange} />
            : <GenrePicker genres={genres} activeGenre={activeGenre} onButtonClick={handleGenreButtonClick} />
          }
        </ContentWrap>
      </FullPageWrap>
    </div>
  )
}

export default App
