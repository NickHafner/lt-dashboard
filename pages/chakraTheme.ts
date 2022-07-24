import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
  brand: {
    gray: {
      200: '#BFBFBF',
      400: '#24292f',
      700: '#21262d'
    }
  },
  gray: {
    800: '#0d1117'
  }
};

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

export const theme = extendTheme({ colors, config });
