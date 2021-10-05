import React from 'react'
import { Element } from 'react-scroll'
import { BgShape, Section } from './styles'

type PropTypes = {
  name: string;
  showBackground?: boolean;
  children: React.ReactNode;
}

const FullPageWrap = ({ name, showBackground, children }: PropTypes) => (
  <Element name={name}>
    <Section>
      {showBackground && <BgShape />}
      {children}
    </Section>
  </Element>
)

export { FullPageWrap }
