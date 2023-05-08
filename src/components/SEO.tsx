import React from "react";
import Head from "next/head";

type SEOType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function SEO({ title, description, children }: SEOType) {
  return (
    <Head>
      <title>{title || ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || `The ridiculous, silly and apologetically superficial podcast that is more about the laughs than the feels.`} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}
