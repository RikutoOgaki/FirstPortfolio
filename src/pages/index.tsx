import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'

export default function Home(){
    return(
        <div>
            <Header/>
            <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"600px"}>
              <Text color={"#000"} fontWeight={"bold"} fontSize={"60px"}>Rikuto Ogaki</Text>
            </Flex>
        </div>
    )
}