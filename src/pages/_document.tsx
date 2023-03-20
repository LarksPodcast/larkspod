import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Knewave&family=Poppins:wght@100;200;300;400;500;600&family=Shadows+Into+Light&family=Yellowtail&display=swap"
        />
      </Head>
      <Script />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
