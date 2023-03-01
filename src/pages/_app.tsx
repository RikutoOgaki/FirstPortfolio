import { ChakraProvider } from '@chakra-ui/provider'
import type { AppProps } from 'next/app'
import '@/styles/template.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}