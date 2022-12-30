import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { NavBar } from '../src/components/navBar/navBar'
import { Inter } from '@next/font/google'
import { CharacterList } from '../src/components/character-list/character-list'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <CharacterList />
      </main>
    </> 
  )
}