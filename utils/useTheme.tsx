
const colorSchemes = ['light', 'dark']
const MEDIA = '(prefers-color-scheme: dark)'
const isServer = typeof window === 'undefined'
const defaultContext: UseThemeProps = { setTheme: _ => {}, themes: [] }

export const useTheme = () => useContext(ThemeContext) ?? defaultContext

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
    const context = useContext(ThemeContext)
  
    // Ignore nested context providers, just passthrough children
    if (context) return <Fragment>{props.children}</Fragment>
    return <Theme {...props} />
  }
  