import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,300;0,900;1,300;1,900&family=IBM+Plex+Serif:ital,wght@0,200;0,700;1,200;1,700&display=swap" rel="stylesheet"></link>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}