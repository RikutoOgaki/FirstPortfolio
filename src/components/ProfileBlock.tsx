import { Box, Flex, Center, Button, Text } from '@chakra-ui/react'

export default function ProfileBlock() {
    return (
        <>
            <Box
                as='section'>
                <Flex
                    flexDir={'column'}
                    justifyContent={'flex-start'}
                    marginLeft={'5%'}
                    marginRight={'5%'}
                    marginTop={'10rem'}>
                    <Text
                        as={'h2'}
                        color={'#fff'}
                        marginBottom={'2rem'}
                        fontSize={'1.6rem'}>- About me -</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'2rem'}>おおがき りくと</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'5.6rem'}>大垣 陸斗</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'1.8rem'}>2003年 5月31日生まれ</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'1.8rem'}>ECCコンピューター専門学校 Webデザインコース</Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'1.8rem'}>25年卒</Text>
                    <Text
                        as={'p'}
                        w={'10%'}
                        borderBottom={'1px solid #fff'}
                        margin={'2rem 0 2rem 0'}></Text>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'1.4rem'}>
                        ようこそ！私のポートフォリオへ！
                        名前は大垣陸斗と言います。<br />現在ECCコンピューター専門学校でWebについて勉強しており、<br />
                        特にフロントエンドの技術について興味関心があり日々そこに力を入れて勉強しています。<br />
                        また、バックエンドの方も興味があり、そちらも勉強していきたいと考えています。
                    </Text>
                </Flex>
            </Box>
        </>
    )
}