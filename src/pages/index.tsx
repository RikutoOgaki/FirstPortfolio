import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Name from '@/components/NameBlock'
import Profile from '@/components/ProfileBlock'

export default function portfolio() {
  return (
    <>
      <Header />
      <Name />
      <Profile />
      <Footer />
    </>
  )
}