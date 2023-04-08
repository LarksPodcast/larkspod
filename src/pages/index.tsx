/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/image";

import SEO from "@/components/SEO";
import NewsletterInput from "@/components/NewsletterInput";
import InlineFrame from "@/components/inlineFrame";
import PodcastEpisodes from "@/components/PodcastEpisodes";
import Nav from "@/components/nav";

import ellipse from "../assets/images/larks-ellipse.svg";
import LarksOnApplePodcast from "../assets/images/larks-on-apple-podcast.png";
import googlePodcast from "../assets/images/podcast-platforms/google-podcast.png";
import amazon from "../assets/images/podcast-platforms/amazon.png";
import applePodcast from "../assets/images/podcast-platforms/apple-podcast.png";
import iHeartRadio from "../assets/images/podcast-platforms/iHeartRadio.png";
import spotify from "../assets/images/podcast-platforms/spotify.png";
import rss from "../assets/images/podcast-platforms/rss.png";

export default function Home({ podcastSeries }: any) {
  // Extract 4 episodes from all episodes
  const { episodes } = podcastSeries;
  const podcastEpisodes = episodes.slice(0, 4);

  return (
    <>
      <SEO title="Larks Podcast | Home" />

      <main id="larkspodcast-home" className="h-auto sm:h-full">
        <section id="larkspodcast-banner" className="h-screen">
          <div id="larks-banner-top-stack">
          <Nav />
          <div className="flex flex-col sm:flex-row justify-center h-full px-5">
            <div>
              <h1
                id="intro-header"
                className="text-9xl md:text-[10rem] lg:text-[13rem] font-shadowIntoLight"
              >
                LARKS
              </h1>
              <h2
                id="sub-header"
                className="text-3xl sm:text-4xl font-knewWave custom-text-color-dark my-2"
              >
                THE PODCAST
              </h2>
            </div>
            <div id="larks-ellipse" className="flex flex-col items-center">
              <Image src={ellipse} alt="An ellipse" />
              <h3 className="font-yellowTail text-3xl sm:text-5xl">
                With Emmy.
              </h3>
            </div>
            <h1 className="hidden">Larks the podcast with Emmy</h1>
          </div>
          </div>
          <div id="overlay"></div>
        </section>

        <section
          id="larks-latest-episodes"
          className="px-5 sm:px-10 mb-40 mt-10 sm:mt-20"
        >
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
              className="flex flex-row justify-center h-auto"
            >
              <div
                id="podcasts-platform-listing"
                className="flex justify-center items-center sm:w-1/2"
              >
                <div className="flex justify-start lg:justify-end flex-wrap lg:mt-[-7rem]">
                  <a
                    href="https://podcasts.apple.com/ng/podcast/larks/id1575332695"
                    className="platform-listing rounded-full"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={applePodcast} alt="Apple podcast" />
                    <span>Apple podcast</span>
                  </a>
                  <a
                    href="https://open.spotify.com/show/7yw8qWWpcVkRhSuFhOHP72"
                    className="platform-listing"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={spotify} alt="Spotify" />
                    <span>Spotify</span>
                  </a>
                  <a
                    href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zN2QzMzllOC9wb2RjYXN0L3Jzcw=="
                    className="platform-listing"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={googlePodcast} alt="Google podcast" />
                    <span>Google podcast</span>
                  </a>
                  <a
                    href="https://www.iheart.com/podcast/269-larks-106422385/"
                    className="platform-listing"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={iHeartRadio} alt="iHeartRadio" />
                    <span>iheartRadio</span>
                  </a>
                  <a
                    href="https://music.amazon.co.uk/podcasts/1f6a6356-d29b-4dbb-918b-58743e00ccfb/larks"
                    className="platform-listing"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={amazon} alt="Amazon music" />
                    <span>Amazon Music</span>
                  </a>
                  <a
                    href="https://music.amazon.co.uk/podcasts/1f6a6356-d29b-4dbb-918b-58743e00ccfb/larks"
                    className="platform-listing"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image src={rss} alt="Amazon music" />
                    <span>RSS</span>
                  </a>
                </div>
              </div>
              <div
                id="larks-on-apple-platform"
                className="hidden sm:block w-1/2"
              >
                <Image
                  src={LarksOnApplePodcast}
                  alt="Larks on Apple podcast"
                  className="w-[20rem] md:ml-[3rem] lg:ml-[10rem]"
                  priority
                />
              </div>
            </div>
          </div>

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
              <a
                href="https://www.youtube.com/@larkspodcast"
                className="block h-full flex items-center justify-center"
                target="_blank"
                rel="noopener"
              >
                Subscribe to the channel
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
