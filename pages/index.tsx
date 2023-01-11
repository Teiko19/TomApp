import React, { useState } from 'react';
import Head from 'next/head';
import { NavBar } from '../src/components/navBar/navBar';
import { Inter } from '@next/font/google';
import { CharacterList } from '../src/components/character-list/character-list';
import { Layout } from '../src/components/Layout/Layout';
import { SearchCharacter } from '../src/components/search/search';
import { DEFAULT_FILTERS } from '../src/constants/filters';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [Filters, setFilters] = useState(DEFAULT_FILTERS);

  return (
    <>
      <Head>
        <title>TomApp</title>
      </Head>
      <Layout>
        <NavBar />
        <SearchCharacter
          filters={ Filters }
          setFilters={ setFilters }
        />
        <CharacterList 
          filter={ Filters }
        />
      </Layout>
    </>
  )
}