import React from 'react'
import { Element } from 'react-scroll'
import TopBackground from '../../resources/svgs/top-bg.svg'
import styles from './FullPageWrap.scss'

const FullPageWrap = ({ name, isTop, isBottom, children }) => (
  <Element name={name} className={styles.section}>
    {isTop && <TopBackground className={styles.top} />}
    {children}
  </Element>
)

export default FullPageWrap
