import {FC} from 'react'
import {Box,Center,Flex,Text,VStack,HStack,} from '@chakra-ui/react'


export default function Block1(){
    return(
        <Box w={'100vw'} h={'100vh'}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
            <VStack>
						<Text fontSize={'lg'}>
							hello
						</Text>
						<Text fontSize={{base:"4xl",md:"7xl" }} color={'#fff'}>
							Rikuto Ogaki
						</Text>
						<Text fontSize={'xl'}>
							web front-end developer & design
						</Text>
					
				</VStack>
            </Flex>
        </Box>
    )
}