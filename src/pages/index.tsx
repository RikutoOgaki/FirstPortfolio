import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'

export default function Home(){
    return(
        <Box bg={"#1a4472"}>
            <Header/>
            <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"600px"}>
              <Text color={"#fff"} fontWeight={"bold"} fontSize={"90px"}>Rikuto Ogaki</Text>
            </Flex>
          <Box as='main' marginTop={"180px"}>
            <Box as='div'>
              <Box as='span' color={"#fff"}>おおがき りくと</Box>
              <Text as={"h1"} color={"#fff"} fontSize={"6rem"}>大垣 陸斗</Text>
                <Text as={"p"} color={"#fff"}>
                  2003年5月31日生まれ<br/>
                  ECCコンピュータ専門学校 Webデザインコース<br/>
                  25年卒
                </Text>
                <Text as={"p"} color={"#fff"}>
                  ようこそ。私のポートフォリオへ。<br/>
                  私の名前は大垣陸斗といいます。現在、ECCコンピュータ専門学校のWebデザインコースでWebのことについて勉強しています。<br/>
                </Text>
            </Box>
          </Box>
        </Box>
    )
}