import { FC } from 'react'
import { Box, Center, Flex, Text, VStack, HStack, } from '@chakra-ui/react'


export default function Block1() {
	return (
		<Box w={'100vw'} h={'100vh'}>
			<Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
				<VStack spacing={6}>
					<VStack spacing={-4}>
						<Text fontSize={'2vw'} color={'#fff'}>
							hello
						</Text>
						<Text fontSize={'5vw'} color={'#fff'}>
							Rikuto Ogaki
						</Text>
						<Text fontSize={'1vw'} color={'#fff'}>
							web front-end developer & design
						</Text>
					</VStack>
				</VStack>
			</Flex>
		</Box>
	)
}