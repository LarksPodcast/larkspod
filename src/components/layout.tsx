/* eslint-disable react/no-unescaped-entities */
/*
  Fetching data is done on the Layout componet and pass via 
  React.cloneElement module 'children' prop. The 'children' prop
  render the pages to the Layout components. 
*/

import { Fragment, useEffect, useState, cloneElement } from "react";
import { useRouter } from "next/router";
import { getPodcastSeries, graphQLRequest } from "@/graphQL/gql";
import SEO from "./SEO";
import Loader from "./loader";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }: any) {
  const [podcastSeries, setPodcastSeries] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const componentIsMounted = true;

    async function fetchPodcastSeries() {
      try {
        const { getPodcastSeries: data } = await graphQLRequest(
          getPodcastSeries
        );
        if (componentIsMounted) setPodcastSeries(data);
      } catch (error) {
        if (componentIsMounted) setError(true);
      }
    }
    fetchPodcastSeries();
  }, []);

  if (error) {
    return (
      <main className="h-screen">
         <SEO title="Larks Podcast | Error" />
       <div id="network-error-prompt" className="h-full flex justify-center mt-[25rem] p">
       <p className="custom-text-color-primary text-2xl sm:text-3xl mx-10 md:mx-20 lg:mx-[15rem] text-center leading-tight">
          There seem to be a network error! Check that you're connected
          to the internet or try again later
        </p>
       </div>
      </main>
    );
  }

  if (podcastSeries === undefined) {
    return (<Loader />);
  }

  return (
    <Fragment>
      <SEO title="Larks Podcast" description="LARKS is a podcast that defies the norms of being specific, straightforward and concise; It embraces the ridiculous, the silly and the superficial and It’s more about the laffs than the feels." />
     {router.pathname === "/"?null: <Nav />}
      {podcastSeries !== undefined
        ? cloneElement(children, {
            podcastSeries: podcastSeries,
          })
        : children}
      {router.pathname === "/404" ? null : <Footer />}
    </Fragment>
  );
}
