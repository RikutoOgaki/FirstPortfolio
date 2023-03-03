import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home(){
    return(
        <Box bg={"#1a4472"}>
          <Header/>
          <Box as='main' marginTop={"180px"}>
            <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"70rem"}>
              <Text color={"#fff"} fontWeight={"bold"} fontSize={"90px"}>Rikuto Ogaki</Text>
            </Flex>
            <Box as='div' marginLeft={"90px"}>
              <Box as='section' >
                <Box as='span' color={"#fff"} fontSize={"1.6rem"}>おおがき りくと</Box>
                <Text as={"p"} color={"#fff"} fontSize={"7rem"}>大垣 陸斗</Text>
                <Text as={"p"} color={"#fff"} fontSize={"1.8rem"} marginBottom={"2rem"}>
                  2003年5月31日生まれ<br/>
                  ECCコンピュータ専門学校 Webデザインコース<br/>
                  25年卒
                </Text>
              </Box>
              <Box as='section'>
                <Text as={"p"} color={"#fff"} fontSize={"1.8rem"}>
                  ようこそ。私のポートフォリオへ。<br/>
                  私の名前は大垣陸斗といいます。<br/>現在、ECCコンピュータ専門学校のWebデザインコースでWebのことについて勉強しています。<br/>
                </Text>
              </Box>
            </Box>
          </Box>
          <Footer/>
        </Box>
    )
}