import React, { FC } from 'react'
import { Element } from 'react-scroll'
import { BgShape, Section } from './styles'

type PropTypes = {
  name: string;
  showBackground?: boolean;
}

const FullPageWrap: FC<PropTypes> = ({ name, showBackground, children }) => (
  <Element name={name}>
    <Section>
      {showBackground && <BgShape />}
      {children}
    </Section>
  </Element>
)

export { FullPageWrap }
