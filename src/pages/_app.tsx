import type { AppProps } from "next/app";
import localFont from "next/font/local"
import "@/styles/main.scss";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
