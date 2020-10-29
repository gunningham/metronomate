import React from 'react'
import styles from './ContentWrap.scss'

const ContentWrap = ({ children }) => (
  <div className={styles.wrap}>
    {children}
  </div>
)

export default ContentWrap
