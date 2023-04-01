/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import SEO from "@/components/SEO";
import NewsletterInput from "@/components/NewsletterInput";
import InlineFrame from "@/components/inlineFrame";
import PodcastEpisodes from "@/components/PodcastEpisodes";

import ellipse from "../assets/images/larks-ellipse.svg";
import LarksOnApplePodcast from "../assets/images/larks-on-apple-podcast.png";
import googlePodcast from "../assets/images/podcast-platforms/google-podcast.png";
import amazon from "../assets/images/podcast-platforms/amazon.png";
import applePodcast from "../assets/images/podcast-platforms/apple-podcast.png";
import iHeartRadio from "../assets/images/podcast-platforms/iHeartRadio.png";
import spotify from "../assets/images/podcast-platforms/spotify.png";

export default function Home({ podcastSeries }: any) {
  // Extract 4 episodes from all episodes
  const { episodes } = podcastSeries;
  const podcastEpisodes = episodes.slice(0, 4);

  return (
    <>
      <SEO title="Larks Podcast | Home" />

      <main id="larkspodcast-home" className="h-auto sm:h-full">
        <section
          id="larkspodcast-banner"
          className="flex justify-center px-10 mb-40"
        >
          <div>
            <h1
              id="intro-header"
              className="text-5xl md:text-[10rem] lg:text-[13rem] font-shadowIntoLight"
            >
              LARKS
            </h1>
            <h2
              id="sub-header"
              className="font-knewWave custom-text-color-dark text-4xl mt-2"
            >
              THE PODCAST
            </h2>
          </div>
          <div id="larks-ellipse" className="flex flex-col items-center">
            <Image src={ellipse} alt="An ellipse" />
            <h3 className="font-yellowTail text-5xl">With Emmy.</h3>
          </div>
          <h1 className="hidden">Larks the podcast with Emmy</h1>
        </section>

        <section id="larks-latest-episodes" className="px-10 mb-40">
          <h2 className="font-poppins font-medium text-3xl pb-10 lg:ml-[11rem] custom-text-color-dark">
            Latest episodes
          </h2>

          <PodcastEpisodes episodes={podcastEpisodes} />
        </section>

        <section id="larkspodcast-platforms" className="h-auto">
          <div id="podcasts-platforms" className="w-full px-5 sm:px-10">
            <h3 className="font-poppins font-medium text-[1.5rem] md:text-3xl leading-tight sm:leading-relaxed custom-text-color-dark max-w-[35rem] mb-5 sm:mb-10">
              LARKS is available on all platforms.{" "}
              <span className="custom-text-color-primary">
                Don't forget to subscribe!
              </span>
            </h3>

            <div
              id="podcasts-platforms-split"
              className="flex flex-row justify-center lg:ml-[10rem] h-auto"
            >
              <div
                id="podcasts-platform-listing"
                className="flex justify-center flex-wrap h-[400px] md:w-[300px] lg:w-[500px] md:h-[350px] lg:h-[200px] sm:mt-10"
              >
                <Link href="#" className="platform-listing rounded-full">
                  <Image src={applePodcast} alt="Apple podcast" />
                  <span>Apple podcast</span>
                </Link>
                <Link href="#" className="platform-listing">
                  <Image src={spotify} alt="Spotify" />
                  <span>Spotify</span>
                </Link>
                <Link href="#" className="platform-listing">
                  <Image src={googlePodcast} alt="Google podcast" />
                  <span>Google podcast</span>
                </Link>
                <Link href="" className="platform-listing">
                  <Image src={iHeartRadio} alt="iHeartRadio" />
                  <span>iheartRadio</span>
                </Link>
                <Link href="#" className="platform-listing">
                  <Image src={amazon} alt="Amazon music" />
                  <span>Amazon Music</span>
                </Link>
              </div>
              <div id="larks-on-apple-platform" className="hidden sm:block">
                <Image
                  src={LarksOnApplePodcast}
                  alt="Larks on Apple podcast"
                  className="w-[15rem] ml-10"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            id="youtube-platform"
            className="w-full custom-bg-color-secondary h-[45rem] font-poppins"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h3 className="text-xl sm:text-2xl font-medium text-white py-5">
                Catch the visuals on YouTube
              </h3>
              <InlineFrame
                className="rounded-lg"
                url="https://www.youtube.com/embed/80TbyibmshY"
                name="youtube-inline-frame"
                title="Larks podcast YouTube visuals"
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                sandbox="allow-scripts allow-same-origin"
                fullScreen={true}
              />
              <div
                id="subscribe-button"
                className="w-[18rem] h-[55px] text-center py-5 mt-7 rounded-full text-white"
              >
                <Link
                  href="#"
                  className="block h-full flex items-center justify-center"
                >
                  Subscribe to the channel
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="larkspodcast-meet-host">
          <div className="podcast-intro">
            <h3>Meet the syndicate... Emmy.</h3>
            <p>
              Hey Guys, I’m Emmy. LARKS is a podcast that defies the norms of
              being specific, straightforward and concise; It embraces the
              ridiculous, the silly and the superficial and It’s more about the
              LAFFS than the FEELS.
            </p>
          </div>

          <Image
            src={hostImage}
            alt="Emmy; host of the Larks podcast"
            id="podcast-host-image"
          />
        </section> */}

        <section
          id="larkspodcast-newsletter"
          className="px-5 sm:pl-20 sm:pr-10 custom-bg-color-secondary w-auto h-[30rem] font-poppins"
        >
          <h3 className="custom-text-color-text-dark inline-block text-1xl sm:w-[30rem] text-[1.5rem] md:text-3xl font-medium leading-tight sm:leading-loose pt-20 pb-5 sm:pb-10">
            You've listend to the podcast?{" "}
            <span className="text-white">Now read the newsletter!</span>
          </h3>
          <p className="mt-5 mb-10 font-regular">
            Subscribe today and get the latest episode delivered to your inbox
          </p>

          {/* Newsletter input */}
          <div className="md:w-[80%] lg:w-[50%]">
            <NewsletterInput />
          </div>
        </section>
      </main>
    </>
  );
}
