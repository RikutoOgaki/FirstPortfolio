import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Name from '@/components/NameBlock'
import Profile from '@/components/ProfileBlock'
import Skill from '@/components/SkillBlock'
import Work from '@/components/WorksBlock'

export default function portfolio() {
  return (
    <>
      <Header />
      <main>
        <Name />
        <Profile />
        <Skill />
        <Work />
      </main>
      <Footer />
      <Text
        as={'p'}
        color={'#fff'}
        textAlign={'center'}
        marginTop={'4rem'}
      >&copy;RikutoOgaki</Text>
    </>
  )
}