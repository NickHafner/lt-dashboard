import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ThemeProvider } from 'next-theme'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  return     <ThemeProvider
  attribute="class"
  defaultTheme="system"
  value={{
    dark: darkTheme.className,
    light: "light",
  }}
>
  <Component {...pageProps} />
</ThemeProvider>
}

export default MyApp
