import React from 'react'
import Head from 'next/head'
import { NavBar } from '../src/components/navBar/navBar'
import { Inter } from '@next/font/google'
import { CharacterList } from '../src/components/character-list/character-list'
import { Main } from '../src/components/main/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <Main className="mx-3 mt-3">
        <NavBar />
        <CharacterList />
      </Main>
    </> 
  )
}