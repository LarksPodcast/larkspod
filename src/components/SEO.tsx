import React from "react";
import Head from "next/head";

type SEOType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function SEO({ title, description, children }: SEOType) {
  const websiteDescription = `The ridiculous, silly and apologetically superficial podcast that is more about the laughs than the feels.`;

  return (
    <Head>
      <title>{title || ""}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || websiteDescription} />
      <meta name="author" content="Duowork Software Company | Romeo Agbor Peter" />
      <meta name="keywords" content="Culture-podcast, Abuja-podcaster, Emmy, larks, larkspdocast" />

      {/* OG for facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://larkspdocast.com" />
      <meta property="og:title" content="larkspdocast" />
      <meta property="og:description" content={websiteDescription} />
      <meta property="og:image" content="/banner.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://larkspdocast.com" />
      <meta property="twitter:title" content="larkspdocast" />
      <meta property="twitter:description" content={websiteDescription} />
      <meta property="twitter:image" content="/banner.png" />

      {children}
    </Head>
  );
}
