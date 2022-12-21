import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from '../components/header/header'
import { Inter } from '@next/font/google'
import { Article } from '../components/Article/Article'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Article />
      </main>
    </> 
  )
}