import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import Logo from '../../resources/svgs/logo.svg'
import TitleLogo from '../../resources/svgs/hero-logo.svg'
import queryString from 'query-string'
import ReactHowler from 'react-howler'
import Button from '../Button'
import TempoSlider from '../TempoSlider'
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

  return (
    <div className={styles.wrap}>
      <Logo />
      <FullPageWrap name='section-1'>
        <TitleLogo />
        <Link smooth duration={300} to='section-2'>Click to pick a genre</Link>
      </FullPageWrap>
      <FullPageWrap name='section-2'>
        <div className={styles.buttons}>
          {beats.map(beat => (
            <Button
              key={beat.id}
              isActive={beat.id === activeBeat.id}
              text={beat.text}
              onClick={() => handleBeatButtonClick(beat)}
            />
          ))}
        </div>
        <ReactHowler src={activeBeat.url || 'default'} format={['wav']} ref={howlerRef} loop />
        <TempoSlider onChange={onTempoChange} />
      </FullPageWrap>
    </div>
  )
}

export default App
