import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from './FullPageWrap.scss'

const FullPageWrap = ({ name, children }) => (
  <Element name={name} className={styles.section}>
    {children}
  </Element>
)

export default FullPageWrap
