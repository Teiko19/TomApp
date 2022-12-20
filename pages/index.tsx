import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from '../components/header/header'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
    </> 
  )
}
  