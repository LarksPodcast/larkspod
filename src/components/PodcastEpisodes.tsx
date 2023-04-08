import React from "react";
import Image from "next/image";
import MaterialIcon from "./materialIcon";
import EpisodeDescriptionModal from "@/components/EpisodeDescriptionModal";

export default function PodcastEpisodes({ episodes }: { episodes: any[] }) {
  const [episodeState, setEpisodeState] = React.useState({
    description: "",
    showMdal: false,
  });

  const handleModalVisibility = (modalIsClosed: boolean) => {
    if (!modalIsClosed) {
      setEpisodeState((state) => ({
        ...state,
        description: "",
        showMdal: false,
      }));
    }
  };

  const formateDate = (epochTimeStamp: number) => {
    const date  = new Date(epochTimeStamp * 1000);
    
    return date.toLocaleString(undefined, {month: "long", day: "numeric"});
  }

  const playPodcast = (podcastURL: string) => {
    console.log(podcastURL);
  }

  return (
    <div className="all-episodes grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center lg:w-[830px]">
      {episodes.map((episode: any, idx: number) => {

        return (
          <>
            <div
              className="episode flex flex-row w-full h-auto lg:px-0"
              key={idx}
            >
              <div className="podcast-image h-[80%] w-[30%] py-2 px-2 lg:mr-5 self-center">
                <Image
                  src={episode.imageUrl}
                  alt={episode.name}
                  width={200}
                  height={200}
                  className="w-full h-full rounded"
                  priority
                />
              </div>

              <div className="h-full podcast-description w-[70%] px-2">
                <small>{formateDate(episode.datePublished)}</small>
                <h3
                  className="my-2"
                  onClick={() => {
                    setEpisodeState((state) => ({
                      ...state,
                      description: episode.description,
                      showMdal: true,
                    }));
                  }}
                >
                  {episode.name}
                </h3>
                <p className="text-xs font-regular">{episode.description}</p>
                <div className="w-full flex justify-between mt-2 episode-listenTime-and-playBtn-container">
                  <small>12 Mins</small>
                  <div onClick={() => playPodcast(episode.audioUrl)}>
                    <MaterialIcon
                      iconName="play_arrow"
                      className="self-center custom-bg-color-primary text-white mr-5 rounded-full episode-play-btn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* Podcast detail modal */}
      <EpisodeDescriptionModal
        description={
          episodeState.description !== "" ? episodeState.description : ""
        }
        showModal={episodeState.showMdal}
        handleVisibilty={handleModalVisibility}
      />
    </div>
  );
}
