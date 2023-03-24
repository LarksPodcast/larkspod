/* eslint-disable react/no-unescaped-entities */
import React from "react";
import MaterialIcon from "@/components/materialIcon";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import InlineFrame from "@/components/inlineFrame";

import ellipse from "../assets/images/larks-ellipse.svg";
// import episodeBanner from "../assets/images/episode-banner.jpeg";
import LarksOnApplePodcast from "../assets/images/larks-on-apple-podcast.png";
import googlePodcast from "../assets/images/podcast-platforms/google-podcast.png";
import amazon from "../assets/images/podcast-platforms/amazon.png";
import applePodcast from "../assets/images/podcast-platforms/apple-podcast.png";
import iHeartRadio from "../assets/images/podcast-platforms/iHeartRadio.png";
import spotify from "../assets/images/podcast-platforms/spotify.png";
import hostImage from "../assets/images/emmy.png";

export default function Home({ podcastSeries }: any) {
  // Get all episodes and extract 4 episodes
  const { episodes } = podcastSeries;
  const podcastEpisodes = episodes.slice(0, 4);

  return (
    <>
      <Head>
        <title>Larks Podcast | Home</title>
        <meta
          name="description"
          content="LARKS is a podcast that defies the norms of being specific, straightforward and concise; It embraces the ridiculous, the silly and the superficial and It’s more about the laffs than the feels."
        />
      </Head>

      <main id="larkspodcast-home" className="h-[45rem] sm:h-full">
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
          <h2 className="font-poppins font-medium text-3xl pb-10 lg:ml-[6rem] custom-text-color-dark">
            Latest episodes
          </h2>

          <div
            id="latest-episodes"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:w-[620px] lg:w-[830px]"
          >
            {podcastEpisodes.map((episode: any) => {
              return (
                <div
                  className="episode flex flex-col lg:flex-row w-[300px] lg:w-[400px] lg:px-0"
                  key={episode.uuid}
                >
                  <div className="h-full podcast-image lg:w-[30%] lg:mr-5">
                    <Image
                      src={episode.imageUrl}
                      alt={episode.name}
                      width={300}
                      height={300}
                      className="!w-full h-[90%] lg:h-full"
                      priority
                    />
                  </div>

                  <div className="h-full podcast-description lg:w-[70%] px-2">
                    <small>17 February</small>
                    <h3 className=" my-2">{episode.name}</h3>
                    <p className="text-xs font-regular">
                      {episode.description}
                    </p>
                    <div className="w-full flex justify-between mt-2 episode-listenTime-and-playBtn-container">
                      <small>12 Mins</small>
                      <div>
                        <MaterialIcon
                          iconName="play_arrow"
                          className="self-center custom-bg-color-primary text-white mr-5 rounded-full episode-play-btn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="larkspodcast-platforms" className="h-auto">
          <div id="podcasts-platforms" className="w-full px-5 sm:px-10">
            <h3 className="font-poppins font-medium text-[1.5rem] md:text-3xl custom-text-color-dark max-w-[35rem] mb-5 sm:mb-10">
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
                className="flex items-around justify-center flex-wrap md:w-[300px] lg:w-[500px] md:h-[350px] lg:h-[200px] sm:mt-10"
              >
                <div className="platform-listing rounded-full">
                  <Image src={applePodcast} alt="Apple podcast" />
                  <span>Apple podcast</span>
                </div>
                <div className="platform-listing">
                  <Image src={spotify} alt="Spotify" />
                  <span>Spotify</span>
                </div>
                <div className="platform-listing">
                  <Image src={googlePodcast} alt="Google podcast" />
                  <span>Google podcast</span>
                </div>
                <div className="platform-listing">
                  <Image src={iHeartRadio} alt="iHeartRadio" />
                  <span>iheartRadio</span>
                </div>
                <div className="platform-listing">
                  <Image src={amazon} alt="Amazon music" />
                  <span>Amazon Music</span>
                </div>
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
              <h3 className="text-xl sm:text-2xl font-medium text-white py-5">Catch the visuals on YouTube</h3>
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
              <div id="subscribe-button" className="w-[18rem] h-[55px] text-center py-5 mt-7 rounded-full text-white">
                <Link href="">Subscribe to the channel</Link>
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

        <section id="larkspodcast-newsletter" className="mt-5 pl-20 custom-bg-color-secondary w-auto h-[30rem] font-poppins">
          <h3 className="custom-text-color-text-dark inline-block text-1xl sm:w-[30rem] text-[1.5rem] md:text-3xl font-medium pt-20 pb-5 sm:pb-10">
            You've listend to the podcast? <span className="text-white">Now read the newsletter!</span>
          </h3>
          <p className="mt-5 mb-10 font-regular">
            Subscribe today and get the latest episode delivered to your inbox
          </p>

          <div id="newsletter-input-container" className="border-2 border-white">
            <label htmlFor="#newsletter-input" className="hidden"></label>
            <input
              type="text"
              name=""
              id="newsletter-input"
              placeholder="Enter your email"
              title="Larks podcast newsletter"
            />
            <input
              type="button"
              value="Sign up"
              title="Larks podcast newsletter sign up button"
            />
          </div>
        </section>
      </main>
    </>
  );
}
