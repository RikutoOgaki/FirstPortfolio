import {Box,Text,Flex, border} from '@chakra-ui/react'
import Link from 'next/link'
import { NextComponentType } from 'next';

export default function Header(){
    return(
        <>
            <Flex w={"100%"} h={"70px"} bg={"#1a4472"} justifyContent={"flex-end"} paddingRight={"40px"}>
                <Text w={"20rem"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>TOP</Link>
                </Text>
                <Text  w={"20rem"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>TOP</Link>
                </Text>
                <Text w={"20rem"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>TOP</Link>
                </Text>
            </Flex>
        </>
    )
}