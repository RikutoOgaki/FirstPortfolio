import { Box, Flex, Text, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <Flex w={'100%'} h={'5vh'} justifyContent={'space-around'}>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} marginTop={'2vh'}>Top</Text>
                    </Link>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} marginTop={'2vh'}>About</Text>
                    </Link>
                    <Link href={'/'}>
                        <Text as={'p'} color={'#fff'} fontSize={'1.6rem'} marginTop={'2vh'}>Works</Text>
                    </Link>
                </Flex>
            </header>
        </>
    )
}