// pages/_app.js
import { SessionProvider } from "next-auth/react"
import '../styles/global.css';
import "reflect-metadata";
import Head from 'next/head';
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps } : AppProps) {
  return (
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
  )
}

export default MyApp