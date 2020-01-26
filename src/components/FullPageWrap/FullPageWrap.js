import React from 'react'
import styles from './FullPageWrap.scss'

const FullPageWrap = ({ children }) => (
  <section className={styles.section}>
    {children}
  </section>
)

export default FullPageWrap
