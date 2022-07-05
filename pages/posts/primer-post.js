import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Primer Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1 className="text-5xl font-bold underline">First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}