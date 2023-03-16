import { Box, Text, Flex, Center } from '@chakra-ui/react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <Box
                as='footer'
                w={'100%'}
                h={'30rem'}
                marginTop={'30rem'}
            >
                <Flex flexDir={'column'} textAlign={'center'} gap={'4rem'}>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'2.4rem'}
                    >email</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'2.4rem'}
                    >orikutobaske.gmail.com</Text>
                    <Text
                        as={'p'}
                        textAlign={'center'}
                        color={'#fff'}
                        fontSize={'2.4rem'}
                    >social</Text>
                </Flex>
                <Flex
                    justifyContent={'space-around'}
                    w={'30%'}
                    margin={'5rem auto'}
                >
                    <Link href={'https://github.com/RikutoOgaki'}>
                        <Text color={'#fff'} fontSize={'2rem'}>
                            <BsGithub />
                        </Text>
                    </Link>
                    <Link href={'https://www.instagram.com/rikut0_0531/'}>
                        <Text color={'#fff'} fontSize={'2rem'}>
                            <BsInstagram />
                        </Text>
                    </Link>
                    <Link href={'https://twitter.com/Rikuto_Ogaki'}>
                        <Text color={'#fff'} fontSize={'2rem'}>
                            <BsTwitter />
                        </Text>
                    </Link>
                </Flex>
                <Text
                    as={'p'}
                    color={'#fff'}
                    textAlign={'center'}
                    marginTop={'4rem'}
                >&copy;RikutoOgaki portfolio</Text>
            </Box>
        </>
    )
}