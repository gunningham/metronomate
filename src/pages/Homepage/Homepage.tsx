import React, { useState, useEffect, useRef, FC } from 'react'
import ReactHowler from 'react-howler'
import { fetchEntries } from '@services'
import { DEFAULT_TEMPO } from '@constants'
import { Button, ContentWrap, FullPageWrap, Loader } from '@atoms'
import { Header } from '@molecules'
import { BeatPicker, GenrePicker } from '@organisms'
import TitleLogoImage from '@resources/svgs/hero-logo.svg'

import { Wrap, TitleLogo } from './styles'

type Beat = {
  id: string;
  url: string;
  text: string;
}

const Homepage: FC = () => {
  const [activeBeatId, setActiveBeatId] = useState<string>('')
  const [activeGenreId, setActiveGenreId] = useState<string>('')
  const [beats, setBeats] = useState<Beat[]>([] as Beat[])
  const howlerRef = useRef<ReactHowler>(null)

  const handleTempoChange = (tempo: number): void => {
    if (activeBeatId) {
      howlerRef?.current?.howler.rate(tempo / DEFAULT_TEMPO)
    }
  }

  const getBeats = async (): Promise<void> => {
    const entries = await fetchEntries('sounds')

    const formattedBeats = entries.map((beat) => ({
      text: beat.fields.title,
      id: beat.sys.id,
      url: beat.fields.sound.fields.file.url
    }))

    setBeats(formattedBeats)
  }

  useEffect((): void => {
    if (!beats.length) getBeats()
  })

  const handleBeatButtonClick = (id: string): void => {
    if (id === activeBeatId) setActiveBeatId('')
    else setActiveBeatId(id)
  }

  const handleGenreButtonClick = (id: string): void => {
    if (id === activeGenreId) setActiveGenreId('')
    else setActiveGenreId(id)
  }

  const genres = [{ text: 'Rock', id: 'rock' }, { text: 'Classic', id: 'classic' }, { text: 'Indie', id: 'indie' }]

  if (!beats.length) return <Loader />

  return (
    <Wrap>
      <Header />
      <FullPageWrap name='section-1' showBackground>
        <TitleLogo src={TitleLogoImage} />
        <Button linkTo='section-2' text='F*ck yeah' />
      </FullPageWrap>
      <FullPageWrap name='section-2'>
        <ContentWrap>
          {activeGenreId
            ? <BeatPicker beats={beats} activeBeatId={activeBeatId} onButtonClick={handleBeatButtonClick} howlerRef={howlerRef} onTempoChange={handleTempoChange} />
            : <GenrePicker genres={genres} activeGenreId={activeGenreId} onButtonClick={handleGenreButtonClick} />
          }
        </ContentWrap>
      </FullPageWrap>
    </Wrap>
  )
}

export { Homepage }
