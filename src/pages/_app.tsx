import type { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/main.scss";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       {/* <Script
        src="https://fonts.googleapis.com/css2?family=Knewave&family=Poppins:wght@100;200;300;400;500;600&family=Shadows+Into+Light&family=Yellowtail&display=swap"
        strategy="afterInteractive"
      />
      <Script
        src="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        strategy="afterInteractive"
      /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
