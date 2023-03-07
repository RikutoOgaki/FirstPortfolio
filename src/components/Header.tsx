import {Box,Text,Flex, border} from '@chakra-ui/react'
import Link from 'next/link'
import { NextComponentType } from 'next';

export default function Header(){
    return(
        <>
            <Flex w={"100%"} h={"70px"} bg={"#1a4472"} justifyContent={'center'}>
                <Text w={"25%"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>TOP</Link>
                </Text>
                <Text  w={"25%"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>about</Link>
                </Text>
                <Text w={"25%"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={'1vw'}>
                    <Link href={"/"}>skill</Link>
                </Text>
                <Text w={"25%"} color={"#fff"} lineHeight={"4"} fontWeight={"bold"} textAlign={"center"} fontSize={"1vw"}>
                    <Link href={"/"}>skill</Link>
                </Text>
            </Flex>
        </>
    )
}