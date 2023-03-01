import { ChakraProvider } from '@chakra-ui/provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return 
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
}
export default App