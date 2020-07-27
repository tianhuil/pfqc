import 'normalize.css'
import '../public/styles.css'
import { ThemeProvider } from 'styled-components'
import { theme, Theme } from '../components/style'

// Declare theme to be Theme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
