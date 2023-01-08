import React, { useState } from 'react'
import Head from 'next/head'
import { NavBar } from '../src/components/navBar/navBar'
import { Inter } from '@next/font/google'
import { CharacterList } from '../src/components/character-list/character-list'
import { Layout } from '../src/components/main/main'
import { SearchCharacter } from '../src/components/search/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [statusFilter, setStatusFilter] = useState("");

  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <Layout>
        <NavBar />
        <SearchCharacter
          status={ statusFilter }
          setStatus={ setStatusFilter }
        />
        <CharacterList status={ statusFilter }/>
      </Layout>
    </>
  )
}