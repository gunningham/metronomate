import React, { useState, useEffect, useRef } from 'react'
import TitleLogo from '../../resources/svgs/hero-logo.svg'
import queryString from 'query-string'
import ReactHowler from 'react-howler'
import Button from '../Button'
import ButtonList from '../ButtonList'
import TempoSlider from '../TempoSlider'
import Header from '../Header'
import FullPageWrap from '../FullPageWrap'
import { DEFAULT_TEMPO } from '../../constants'
import { fetchEntries } from '../../services/contentful'
import styles from './App.scss'

const App = () => {
  const [activeBeat, setActiveBeat] = useState({})
  const [genre, setGenre] = useState('rock')
  const [beats, setBeats] = useState([])
  const howlerRef = useRef(null)

  const onTempoChange = tempo => {
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
    const genreFromUrl = queryString.parse(window.location.search).genre || ''

    if (genreFromUrl !== genre) setGenre(genreFromUrl)
    if (!beats.length) getBeats()
  })

  const handleBeatButtonClick = beat => {
    if (beat.id === activeBeat.id) return setActiveBeat({})
    setActiveBeat(beat)
  }

  const handleGenreButtonClick = beat => {
    if (beat.id === activeBeat.id) return setActiveBeat({})
    setGenre(beat)
  }

  const genres = [{ name: 'Rock' }, { name: 'Classic' }, { name: 'Indie' }]

  return (
    <div className={styles.wrap}>
      <Header />
      <FullPageWrap name='section-1' isTop>
        <TitleLogo className={styles.titleLogo} />
        <Button linkTo='section-2' text='F*ck yeah' />
      </FullPageWrap>
      <FullPageWrap name='section-2' isBottom>
        <h1>Pick a genre</h1>
        <ButtonList buttons={genres} activeButtonId={activeBeat.id} onButtonClick={handleGenreButtonClick} />
        <ButtonList buttons={beats} activeButtonId={activeBeat.id} onButtonClick={handleBeatButtonClick} />
        <ReactHowler src={activeBeat.url || 'default'} format={['wav']} ref={howlerRef} loop />
        <TempoSlider onChange={onTempoChange} />
      </FullPageWrap>
    </div>
  )
}

export default App
