import {Box} from '@chakra-ui/react'
import Header from '@/components/Header'

export default function num2(){
    return(
        <div>
            <Header/>
            <Box as='main' w={100} h={100} bg={'#fff'}></Box>
        </div>
    )
}