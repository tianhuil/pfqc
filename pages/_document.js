/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import Document from 'next/document'
import createEmotionServer from 'create-emotion-server'
import { Html, Head, Main, NextScript } from 'next/document'
import createCache from '@emotion/cache'

export default class MyDocument extends Document {
  /***
   * From this https://github.com/vercel/next.js/blob/master/examples/with-emotion/pages/_document.js
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const cache = createCache()
    const { extractCritical } = createEmotionServer(cache)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/svg"
            href="/images/logo/icon-borderless.svg"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Roboto:wght@300;500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/brands.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/regular.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/solid.min.css"
          ></link>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
