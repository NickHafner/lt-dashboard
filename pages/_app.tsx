import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { theme } from './chakraTheme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextPageWithLayout } from '../types/api'
import SupabaseClient from '../utils/supabaseClient'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  console.log(SupabaseClient.auth.session())

  return (<QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  </QueryClientProvider>)
}

export default MyApp
