import {Box,Flex,Text} from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Style from '@/styles/index.module.css'

export default function Home(){
return(
<Box bg={"#1a4472"}>
  <Header />
  <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"70rem"}>
    <Text as={'h1'} color={"#fff"} fontWeight={"bold"} fontSize={"6vw"}>Rikuto Ogaki</Text>
  </Flex>

  <Box as='main' marginTop={"18rem"}>
    <Box as='div' marginLeft={"9rem"}>
      <Box as='section'>
        <Box as='span' color={"#fff"} fontSize={"1vw"}>おおがき りくと</Box>
        <Text as={"p"} color={"#fff"} fontSize={"5vw"}>大垣 陸斗</Text>
        <Text as={"p"} color={"#fff"} fontSize={"1vw"} marginBottom={"2rem"}>
          2003年5月31日生まれ<br />
          ECCコンピュータ専門学校 Webデザインコース<br />
          25年卒
        </Text>
      </Box>
      <Box as='section'>
        <Text as={"p"} color={"#fff"} fontSize={"1vw"}>
          ようこそ。私のポートフォリオへ。<br />
          私の名前は大垣陸斗といいます。<br />
          現在、ECCコンピュータ専門学校のWebデザインコースでWebのことについて勉強しています。<br />
          フロントエンドをメインにやっていますが、バックエンドにも興味がありやりたいと考えています。<br />
          ゆくゆくはデザインエンジニアとして活躍していきたいと考えています。
        </Text>
      </Box>
    </Box>
    <Flex justifyContent={'flex-end'}>
      <Box as='div' marginRight={'9rem'}>
        <Text as={'h2'} color={'#fff'} fontSize={'2vw'}>what I use & am language</Text>
        <Box>
          <Text as={'h3'} color={'#fff'} fontSize={'1vw'} marginTop={'2rem'}>メイン使用技術</Text>
          <ul className={Style.flex}>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                className={Style.language} />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                className={Style.language} />
            </li>
          </ul>
        </Box>
        <Flex>
          <Box>
            <Text as={'h3'} color={'#fff'} fontSize={'1vw'} marginTop={'2rem'}>学びたい技術</Text>
            <ul className={Style.flex}>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  className={Style.language} />
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
                  className={Style.language} />
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg"
                  className={Style.language} />
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  className={Style.language} />
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                  className={Style.language} />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                  className={Style.language} />
              </li>
            </ul>
          </Box>
        </Flex>
      </Box>
    </Flex>
    <Box as='div'>
      <Flex justifyContent={'center'}>
        <Box as='section' textAlign={'center'}>
          <Box as='figure'>
            <Box as='img' src=''></Box>
          </Box>
          <Text as={'h3'} color={'#fff'}>Woodist</Text>
          <Text as={'p'} color={'#fff'}>キャンプができるカフェ</Text>
        </Box>
        <Box as='section' textAlign={'center'}>
          <Box as='figure'>
            <Box as='img'></Box>
          </Box>
          <Text as={'h3'} color={'#fff'}>ぐらっぷ！</Text>
          <Text as={'p'} color={'#fff'}>グループワークを補助するアプリ</Text>
        </Box>
        <Box as='section' textAlign={'center'}>
          <Box as='figure'>
            <Box as='img'></Box>
          </Box>
          <Text as={'h3'} color={'#fff'}>おてつだいズ</Text>
          <Text as={'p'} color={'#fff'}>子供にお手伝いをしてもらうアプリ</Text>
        </Box>
      </Flex>
    </Box>
  </Box>
  <Footer />
</Box>
)
}