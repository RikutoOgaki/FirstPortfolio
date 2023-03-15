import { Box, Flex, Text, Center, Button } from '@chakra-ui/react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export default function NameBlock() {
    return (
        <>
            <Flex flexDir={'column'} w={'100%'} h={'95vh'} justifyContent={'center'} alignItems={'center'}>
                <Text as={'p'} fontSize={'2.4rem'} color={'#fff'}>Hello</Text>
                <Text as={'p'} fontSize={'5.6rem'} color={'#fff'}>Rikuto Ogaki</Text>
                <Text as={'p'} fontSize={'1.6rem'} color={'#fff'}>Web Front Enjineer</Text>
                <Flex w={'25%'} justifyContent={'space-around'} marginTop={'2rem'}>
                    <Link href={'https://github.com/RikutoOgaki'}>
                        <Text color={'#fff'} fontSize={'2rem'} margin={'.1rem'}><BsGithub /></Text>
                    </Link>
                    <Link href={'/'}>
                        <Text color={'#fff'} fontSize={'2rem'} margin={'.1rem'}><BsInstagram /></Text>
                    </Link>
                    <Link href={'/'}>
                        <Text color={'#fff'} fontSize={'2rem'} margin={'.1rem'}><BsTwitter /></Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}