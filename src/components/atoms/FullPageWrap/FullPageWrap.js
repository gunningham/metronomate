import React from 'react'
import { Element } from 'react-scroll'
import styles from './FullPageWrap.scss'

const FullPageWrap = ({ name, isTop, isBottom, children }) => (
  <Element name={name} className={styles.section}>
    {isTop && <div className={styles.top} />}
    {isBottom && <div className={styles.bottom} />}
    {children}
  </Element>
)

export default FullPageWrap
