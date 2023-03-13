import { Box, Text, Flex, border, Container, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NextComponentType } from 'next';

export default function Header() {
    return (
        <>
            <header>
                <Flex w={'100vw'} justifyContent={'center'}>
                    <Container maxW={'container.xl'} position={'absolute'} top={'0'} zIndex={'1'}>
                        <nav>
                            <Flex justifyContent={'flex-end'}>
                                <HStack color={'#fff'} >
                                    <Link href={'/'}>top</Link>
                                    <Link href={'/'}>top</Link>
                                    <Link href={'/'}>top</Link>
                                </HStack>
                            </Flex>
                        </nav>
                    </Container>
                </Flex>
            </header>
        </>
    )
}