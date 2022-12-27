import React from 'react'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ulNav}>
        <li className={styles.liNav}><a href="">Inicio</a></li>
        <li className={styles.liNav}><a href="">Chucknorrys</a></li>
        <li className={styles.liNav}><a href="">...</a></li>
      </ul>
    </nav>
  )
};