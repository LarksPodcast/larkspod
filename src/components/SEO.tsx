import React from "react";
import Head from "next/head";
import Image from "next/image";
// import { toDataURL } from 'next/dist/next-server/lib/image-utils';
import banner from "../assets/images/favicon.png"

type SEOType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function SEO({ title, description, children }: SEOType) {

  const optimisedImag = `https://res.cloudinary.com/dqo24mfqf/image/upload/t_Thumbnail/v1685182938/larks/banner_ldmaf3.png`;

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
      <meta property="og:title" content="Larks podcast" />
      <meta property="og:site_name" content="Larks podcast" />
      <meta property="og:description" content={websiteDescription} />
      <meta property="og:image" content={optimisedImag} />
      <meta property="og:image:alt" content="Larks podcast banner" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Larks podcast" />
      <meta name="twitter:description" content={websiteDescription} />
      <meta name="twitter:site" content="@larkspod" />
      <meta name="twitter:url" content="https://larkspdocast.com" />
      <meta name="twitter:image" content={optimisedImag} />
      <meta name="twitter:image:alt" content="Larks podcast banner" />

      {children}
    </Head>
  );
}
