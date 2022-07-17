// pages/_app.js
import '../styles/global.css';
import "reflect-metadata";
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1.0, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp