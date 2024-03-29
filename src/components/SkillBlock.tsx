import { Box, Center, Flex, Text, Icon } from '@chakra-ui/react'
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiVite,
    SiNpm,
    SiChakraui,

    SiNextdotjs,
    SiVuedotjs,
    SiPostgresql,
    SiPhp,

    SiVisualstudiocode,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeindesign,
    SiAdobexd,
    SiNotion,
    SiSlack
} from 'react-icons/si'

export default function SkillBlock() {

    const iconArray = {
        useicon: [
            SiHtml5,
            SiCss3,
            SiSass,
            SiJavascript,
            SiTypescript,
            SiReact,
            SiVite,
            SiNpm,
            SiChakraui,
        ],
        studyicon: [
            SiNextdotjs,
            SiVuedotjs,
            SiPostgresql,
            SiPhp,
        ],
        usingicon: [
            SiVisualstudiocode,
            SiFigma,
            SiAdobeillustrator,
            SiAdobephotoshop,
            SiAdobepremierepro,
            SiAdobeindesign,
            SiAdobexd,
            SiNotion,
            SiSlack
        ]
    }

    return (
        <>
            <Box
                as='section'>
                <Flex
                    flexDir={'column'}
                    alignItems={'flex-end'}
                    marginRight={'5%'}
                    marginLeft={'5%'}
                    marginTop={'30rem'}>
                    <Text
                        as={'h2'}
                        color={'#fff'}
                        fontSize={'1.6rem'}>- My skill -</Text>
                    <Text
                        as={'p'}
                        fontSize={'4.8rem'}
                        color={'#fff'}
                        textAlign={'end'}>What I use & am learning</Text>
                    <Text
                        as={'p'}
                        w={'10%'}
                        borderBottom={'1px solid #fff'}
                        margin={'2rem 0 2rem 0'}></Text>
                    <Flex
                        flexDir={'column'}
                        alignItems={'flex-end'}>
                        <Text
                            as={'p'}
                            color={'#fff'}
                            fontSize={'1.6rem'}>メインで使用している技術</Text>
                        <Flex
                            justifyContent={'flex-end'}
                            margin={'2rem 0 2rem 0'}
                            flexWrap={'wrap'}
                        >
                            {iconArray.useicon.map((item, v) =>
                                <Box
                                    key={v}
                                    color={'#fff'}
                                    marginRight={'2rem'}>
                                    <Icon
                                        as={item}
                                        fontSize={'3.2rem'} />
                                </Box>
                            )}
                        </Flex>
                        <Text
                            as={'p'}
                            color={'#fff'}
                            fontSize={'1.6rem'}>学んでいる（学びたい）技術</Text>
                        <Flex
                            justifyContent={'flex-end'}
                            margin={'2rem 0 2rem 0'}
                            flexWrap={'wrap'}
                        >
                            {iconArray.studyicon.map((item, v) =>
                                <Box
                                    key={v}
                                    color={'#fff'}
                                    marginRight={'2rem'}>
                                    <Icon
                                        as={item}
                                        fontSize={'3.2rem'} />
                                </Box>
                            )}
                        </Flex>
                        <Text
                            as={'p'}
                            color={'#fff'}
                            fontSize={'1.6rem'}>使用ツール</Text>
                        <Flex
                            justifyContent={'flex-end'}
                            margin={'2rem 0 2rem 0'}
                            flexWrap={'wrap'}
                        >
                            {iconArray.usingicon.map((item, v) =>
                                <Box
                                    key={v}
                                    color={'#fff'}
                                    marginRight={'2rem'}>
                                    <Icon
                                        as={item}
                                        fontSize={'3.2rem'} />
                                </Box>
                            )}
                        </Flex>
                    </Flex>
                    <Text
                        as={'p'}
                        color={'#fff'}
                        fontSize={'1.4rem'}
                        marginTop={'2rem'}
                        lineHeight={'1.6'}>
                        私は今ある自分の技術力で、デザインから開発までを行う場合は、<br />
                        Xdでデザインを行い、React(next.js) + TypeScriptで開発すると思います。<br />
                        バックエンドでは、Postgresqlを少し勉強しているので勉強を兼ねて使用すると思います
                    </Text>
                </Flex>
            </Box>
        </>
    )
}