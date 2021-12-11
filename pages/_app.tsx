import type { AppProps } from 'next/app'

import 'normalize.css'
import React from 'react'
import '../public/styles.css'

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
