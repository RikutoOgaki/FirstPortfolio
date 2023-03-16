import { Box, Flex, Center, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function WorksBlock() {
    return (
        <>
            <Box
                as='section'>
                <Flex
                    flexDir={'column'}
                    justifyContent={'flex-start'}
                    marginLeft={'5%'}
                    marginRight={'5%'}
                    marginTop={'30rem'}
                >
                    <Text
                        as={'h2'}
                        color={'#fff'}
                        fontSize={'4.8rem'}
                    >My works</Text>
                    <Text
                        as={'p'}
                        w={'10%'}
                        borderBottom={'1px solid #fff'}
                        margin={'2rem 0 2rem 0'}></Text>
                </Flex>
                <Flex
                    w={'100%'}
                    flexWrap={'wrap'}
                    justifyContent={'space-around'}
                    margin={'0 auto'}
                >
                    <Box
                        textAlign={'center'}
                        w={'30rem'}
                        marginTop={'3rem'}
                    >
                        <Link href={'/WoodistPage'}>
                            <Text
                                as={'p'}
                                fontSize={'1.6rem'}
                                marginBottom={'2rem'}
                                color={'#fff'}>Woodist</Text>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/woodist.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    margin={'0 auto'}
                                    alt="woodist" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}
                                marginTop={'2rem'}
                            >キャンプで現実を忘れるアウトドアカフェ</Text>
                        </Link>
                    </Box>
                    <Box
                        textAlign={'center'}
                        w={'30rem'}
                        marginTop={'3rem'}
                    >
                        <Link href={'https://gurappu.vercel.app/'}>
                            <Text
                                as={'p'}
                                fontSize={'1.6rem'}
                                marginBottom={'2rem'}
                                color={'#fff'}>ぐらっぷ！</Text>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/gurappu.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    margin={'0 auto'}
                                    alt="gurappu" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}
                                marginTop={'2rem'}
                            >学校で行われるグループワークを補助するアプリ</Text>
                        </Link>
                    </Box>
                    <Box
                        textAlign={'center'}
                        w={'30rem'}
                        marginTop={'3rem'}
                    >
                        <Link href={'https://tea-m.vercel.app/'}>
                            <Text
                                as={'p'}
                                fontSize={'1.6rem'}
                                marginBottom={'2rem'}
                                color={'#fff'}>おてつだいズ</Text>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/otetudaizu.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    margin={'0 auto'}
                                    alt="otetudaizu" />
                            </figure>
                            <Text
                                as={'p'}
                                color={'#fff'}
                                marginTop={'2rem'}
                            >子供のお手伝いをサポートするアプリ</Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}