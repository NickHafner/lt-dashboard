import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    gray: {
        800: '#0d1117'
    }
  }
  
const config: ThemeConfig = {
    initialColorMode: 'dark'
}

export const theme = extendTheme({ colors, config })
