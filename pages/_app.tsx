/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import 'normalize.css'
import '../public/styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
