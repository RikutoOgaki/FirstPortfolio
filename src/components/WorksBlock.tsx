import { Box, Flex, Center, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function WorksBlock() {
    return (
        <>
            <Box
                as='section'>
                <Flex
                    justifyContent={'space-around'}>
                    <Box
                        textAlign={'center'}
                        w={'30%'}>
                        <Link href={'/'}>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}>Woodist</Text>
                            <Text
                                as={'p'}
                                color={'#fff'}>１年前記制作</Text>
                        </Link>
                    </Box>
                    <Box
                        textAlign={'center'}
                        w={'30%'}>
                        <Link href={'/'}>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}>ぐらっぷ！</Text>
                            <Text
                                as={'p'}
                                color={'#fff'}>１年後期制作</Text>
                        </Link>
                    </Box>
                    <Box
                        textAlign={'center'}
                        w={'30%'}>
                        <Link href={'/'}>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}>おてつだいズ</Text>
                            <Text
                                as={'p'}
                                color={'#fff'}>１年後期チーム制作</Text>
                        </Link>
                    </Box>
                </Flex>
                <Flex
                    justifyContent={'center'}>
                    <Button
                        color={'#fff'}
                        w={'10%'}
                        h={'20%'}
                        border={'1px solid #fff'}
                        borderRadius={'.5rem'}
                    >show more</Button>
                </Flex>
            </Box>
        </>
    )
}