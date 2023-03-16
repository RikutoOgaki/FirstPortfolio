import { Box, Text, Flex } from '@chakra-ui/react'
import Header from './Header'

export default function WoodistPage() {
    <>
        <Header />
        <Box
            w={'100%'}
            h={'95vh'}
        >
            <Box>
                <Text
                    as={'h2'}
                    color={'#fff'}
                >work title : Woodist</Text>
            </Box>
            <Flex>
                <Box as='section'>

                </Box>
                <figure>
                    <Box
                        as='img'
                        src='/img/woodist.png'
                    ></Box>
                </figure>
            </Flex>
        </Box>
    </>
}