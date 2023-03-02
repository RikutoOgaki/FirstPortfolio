import {Box,Text,Flex} from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextComponentType } from 'next';

export default function Header(){
    return(
        <>
            <Flex w={"100%"} h={"70px"} bg={"#1a4472"} justifyContent={"flex-end"} paddingRight={"40px"}>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"200px"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"2rem"}>TOP</Text>
                </NextLink>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"200px"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"2rem"}>TOP</Text>
                </NextLink>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"200px"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"2rem"}>TOP</Text>
                </NextLink>
            </Flex>
        </>
    )
}