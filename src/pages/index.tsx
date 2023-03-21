import Head from 'next/head'
import { Box, Center, Flex, Text, } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Name from '@/components/NameBlock'
import Profile from '@/components/ProfileBlock'
import Skill from '@/components/SkillBlock'
import Work from '@/components/WorksBlock'

export default function portfolio() {
  return (
    <>
      <Box>
        <Head>
          <title>Rikuto Ogaki portfolio</title>
          <meta name="description" content="Rikuto Ogaki portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <Name />
          <Profile />
          <Skill />
          <Work />
        </main>
        <Footer />
      </Box>
    </>
  )
}