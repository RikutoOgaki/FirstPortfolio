import { Box, Flex, Text, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <Flex w={'100%'} h={'5vh'} justifyContent={'space-around'} position={'relative'}>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} position={'absolute'} top={'2vh'}>Top</Text>
                    </Link>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} position={'absolute'} top={'2vh'}>Top</Text>
                    </Link>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} position={'absolute'} top={'2vh'}>Top</Text>
                    </Link>
                </Flex>
            </header>
        </>
    )
}