import { Box, Flex, Center, Text, Button } from '@chakra-ui/react'
import { TbExternalLink } from 'react-icons/tb'
import Link from 'next/link'

export default function WorksBlock() {
    return (
        <>
            <Box
                as='section'>
                <Flex
                    flexDir={'column'}
                    justifyContent={'flex-start'}
                    marginLeft={'5%'}
                    marginRight={'5%'}
                    marginTop={'30rem'}
                >
                    <Text
                        as={'h2'}
                        color={'#fff'}
                        fontSize={'4.8rem'}
                        textAlign={'center'}
                        marginBottom={'2rem'}
                    >My works</Text>
                    <Text
                        as={'p'}
                        w={'20%'}
                        borderBottom={'1px solid #fff'}
                        margin={'0 auto 5rem'}></Text>
                </Flex>
                <Flex
                    flexDir={'column'}
                    gap={'10rem'}
                    w={'100%'}
                    flexWrap={'wrap'}
                    justifyContent={'space-around'}
                    margin={'0 auto'}
                >
                    <Box
                        textAlign={'center'}
                        margin={'0 auto'}
                        padding={'2rem'}
                    >
                        <Flex flexWrap={'wrap'} gap={'2rem'}>
                            <Box>
                                <Text
                                    as={'p'}
                                    fontSize={'1.6rem'}
                                    marginBottom={'2rem'}
                                    color={'#fff'}
                                    textAlign={'start'}
                                >Woodist</Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    普段体験できない非現実を感じるカフェ
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    ビルがかなり立ち並び、インターネットも普及してきた今<br />あまり自然に触れる機会が少ないと感じコンセプトに自然とコーヒーをかけ合わせました。<br />
                                    自然の中にあり、外でバーベーキューや自然の中でコーヒーミルを使って豆を引いたりと<br />普段できないようなことをすることができます。<br />
                                    インターネットが普及してきているので、<br />お子さんがあまり外に出なくてもここに来ればバーベーキューができたりするので子供のいい刺激になるような<br />
                                    家族だけならず、来店した人全員が楽しい思いをしてもらいたいと考えたカフェです。
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                    fontWeight={'bold'}
                                >
                                    使用技術 : HTML CSS
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    期間 : 1年前期 個人制作
                                </Text>
                                <Link href={'https://click.ecc.ac.jp/ecc/rogaki/woodist/web/temp.html'}>
                                    <Box
                                        as={'p'}
                                        display={'flex'}
                                        color={'#fff'}
                                        marginTop={'2rem'}
                                        textAlign={'start'}
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        サイトはこちら<TbExternalLink fontSize={'1.3em'} />
                                    </Box>
                                </Link>
                            </Box>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/woodist.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    alt="otetudaizu" />
                            </figure>
                        </Flex>
                    </Box>
                    <Box
                        textAlign={'center'}
                        padding={'2rem'}
                        margin={'0 auto'}
                    >
                        <Flex flexWrap={'wrap'} gap={'2rem'}>
                            <Box>
                                <Text
                                    as={'p'}
                                    fontSize={'1.6rem'}
                                    marginBottom={'2rem'}
                                    color={'#fff'}
                                    textAlign={'start'}
                                >ぐらっぷ！</Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    自立心や人間性成長を目的としたサービス
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    自立心や仕事ができない人には自分の気持ちをうまく伝えられなかったり、モチベーションがなかったりします。<br />
                                    そこでそれらのことに力をつけるにはグループワークをするのが１番効果的だというサイトを見つけ、<br />小学生の頃からグループワークで力をつけていれば<br />
                                    中学高校でも勉強に対してモチベーションができ、<br />大人になっても自分のしたいこと、自分の意見を言えることで仕事に対して熱心な人材になると考えました。<br />
                                    「ぐらっぷ！」はグループワークと wrapの包むをかけ合わせて「ぐらっぷ!」というサービスにしました。
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                    fontWeight={'bold'}
                                >
                                    使用技術 : HTML SCSS JavaScript
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    期間 : 1年後期 個人制作
                                </Text>
                                <Link href={'https://gurappu.vercel.app/'}>
                                    <Flex
                                        as={'p'}
                                        color={'#fff'}
                                        marginTop={'2rem'}
                                        textAlign={'start'}
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        サイトはこちら<TbExternalLink fontSize={'1.3em'} />
                                    </Flex>
                                </Link>
                            </Box>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/gurappu.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    alt="otetudaizu" />
                            </figure>
                        </Flex>
                    </Box>
                    <Box
                        textAlign={'center'}
                        padding={'2rem'}
                        margin={'0 auto'}
                    >
                        <Flex flexWrap={'wrap'} gap={'2rem'}>
                            <Box>
                                <Text
                                    as={'p'}
                                    fontSize={'1.6rem'}
                                    marginBottom={'2rem'}
                                    color={'#fff'}
                                    textAlign={'start'}
                                >おてつだいズ</Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    将来、子供に自立してほしいという目的で作られたサービス
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    子供のお手伝いを補助し、失敗を防ぐ。親の負担を減らす。などの目的で作られました。<br />
                                    こちらのサービスはお母さん、お父さんとお子さんの画面が別れており、お母さんがお手伝いの内容を設定し、<br />
                                    お子さんがそれを確認し、お手伝いをこなすという一連の流れになっています。お子さんに飽きさせないために、<br />「動物園」という機能があり
                                    動物たちを集めたり、着せ替えしたりできます。<br />お手伝いと動物園をかけ合わせ、おてつだいズとつけ、最後のズは動物園のzooからきています。
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                    fontWeight={'bold'}
                                >
                                    使用技術 : React TypeScript Firebase chakra-UI
                                </Text>
                                <Text
                                    as={'p'}
                                    color={'#fff'}
                                    marginTop={'2rem'}
                                    textAlign={'start'}
                                >
                                    期間 : 1年後期 チーム制作<br />
                                    今回私はLPを手掛けました。
                                </Text>
                                <Link href={'https://tea-m.vercel.app/'}>
                                    <Flex
                                        as={'p'}
                                        color={'#fff'}
                                        marginTop={'2rem'}
                                        textAlign={'start'}
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        LPはこちら<TbExternalLink fontSize={'1.3em'} />
                                    </Flex>
                                </Link>
                            </Box>
                            <figure>
                                <Box
                                    as='img'
                                    src="/img/otetudaizu.png"
                                    w={'35rem'}
                                    h={'25rem'}
                                    alt="otetudaizu" />
                            </figure>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}