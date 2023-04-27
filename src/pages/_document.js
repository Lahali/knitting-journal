import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Crochet and Knit</title>
        <meta
          name="description"
          content="Crochet & knitting app to keep track of your projects"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Josefin+Sans:ital,wght@0,200;0,300;1,200;1,300&family=Montserrat:wght@300;400;600&family=Open+Sans:wght@300;400;500;600;700&family=Raleway:wght@100;200;400;600&family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
