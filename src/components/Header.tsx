import {Box,Text,Flex} from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextComponentType } from 'next';

export default function Header(){
    return(
        <>
            <Flex w={"100%"} h={"40px"} bg={"#000"} justifyContent={"flex-end"}>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"150px"} color={"#fff"} lineHeight={"2.5"}>TOP</Text>
                </NextLink>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"150px"} color={"#fff"} lineHeight={"2.5"}>TOP</Text>
                </NextLink>
                <NextLink href={"/"}>
                    <Text as={"p"} w={"150px"} color={"#fff"} lineHeight={"2.5"}>TOP</Text>
                </NextLink>
            </Flex>
        </>
    )
}