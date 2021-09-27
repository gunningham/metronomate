import React from 'react'
import { Element } from 'react-scroll'
import { BgShape, Section } from './styles'

const FullPageWrap = ({ name, showBackground, children }) => (
  <Element name={name}>
    <Section>
      {showBackground && <BgShape />}
      {children}
    </Section>
  </Element>
)

export default FullPageWrap
