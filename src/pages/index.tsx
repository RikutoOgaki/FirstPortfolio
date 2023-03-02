import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'

export default function Home(){
    return(
        <Box bg={"#1a4472"}>
          <Box as='header'>
            <Header/>
            <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"600px"}>
              <Text color={"#fff"} fontWeight={"bold"} fontSize={"90px"}>Rikuto Ogaki</Text>
            </Flex>
          </Box>
          <Box as='main'>
            <Box as='div'>
              <Text as={"h1"} color={"#fff"} fontSize={"4.8em"}>大垣 陸斗</Text>
                <Text as={"p"} color={"#fff"}>
                  2003年5月31日生まれ<br/>
                  ECCコンピュータ専門学校 Webデザインコース<br/>
                  25年卒
                </Text>
                <Text as={"p"}>
                  
                </Text>
            </Box>
          </Box>
        </Box>
    )
}