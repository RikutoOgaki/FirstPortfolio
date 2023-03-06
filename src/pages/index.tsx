import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home(){
    return(
        <Box bg={"#1a4472"}>
          <Header/>
          <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"70rem"}>
            <Text as={'h1'} color={"#fff"} fontWeight={"bold"} fontSize={"6vw"}>Rikuto Ogaki</Text>
          </Flex>
          <Box as='main' marginTop={"180px"}>
            <Box as='div' marginLeft={"90px"}>
              <Box as='section'>
                <Box as='span' color={"#fff"} fontSize={"1vw"}>おおがき りくと</Box>
                <Text as={"p"} color={"#fff"} fontSize={"5vw"}>大垣 陸斗</Text>
                <Text as={"p"} color={"#fff"} fontSize={"1vw"} marginBottom={"2rem"}>
                  2003年5月31日生まれ<br/>
                  ECCコンピュータ専門学校 Webデザインコース<br/>
                  25年卒
                </Text>
              </Box>
              <Box as='section'>
                <Text as={"p"} color={"#fff"} fontSize={"1vw"}>
                  ようこそ。私のポートフォリオへ。<br/>
                  私の名前は大垣陸斗といいます。<br/>
                  現在、ECCコンピュータ専門学校のWebデザインコースでWebのことについて勉強しています。<br/>
                  フロントエンドをメインにやっていますが、バックエンドにも興味がありやりたいと考えています。<br/>
                  ゆくゆくはデザインエンジニアとして活躍していきたいと考えています。
                </Text>
              </Box>
            </Box>
            <Flex justifyContent={'flex-end'}>
              <Box as='div'>
                <Text as={'h2'} color={'#fff'} fontSize={'2vw'}>what I use & am language</Text>
                <Flex></Flex>
              </Box>
            </Flex>
          </Box>
          <Footer/>
        </Box>
    )
}