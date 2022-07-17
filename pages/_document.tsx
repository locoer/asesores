import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Un sistema tipo CRM para unir a Asesores con Asistentes Físicas y Virtuales"/>
          <meta name="keywords" content="CRM, Seguros, Asesores, Asistentes"></meta>
          <meta name="author" content="Erick López Cohen" key="author"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}