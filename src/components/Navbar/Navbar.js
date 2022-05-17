import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles['navbar']}>
        <span>Logo</span>
        <span>User</span>
    </nav>
  )
}
