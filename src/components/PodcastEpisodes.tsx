import React from "react";
import Image from "next/image";
import MaterialIcon from "./materialIcon";
import EpisodeDescriptionModal from "@/components/EpisodeDescriptionModal";

export default function PodcastEpisodes({ episodes }: { episodes: any[] }) {
  const [episodeState, setEpisodeState] = React.useState({
    description: "",
    showMdal: false,
  });

  // Check if class to show modal exists.
  // Create func and pass as props to child component. Child component will pass DOM as argument.

  const handleModalVisibility = (modalIsClosed: boolean) => {
    if (!modalIsClosed) {
      setEpisodeState((state) => ({
        ...state,
        description: "",
        showMdal: false,
      }));
    }
  };

  return (
    <div className="all-episodes grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:w-[620px] lg:w-[830px]">
      {episodes.map((episode: any, idx: number) => {
        return (
          <>
            <div
              className="episode flex flex-col lg:flex-row w-[300px] lg:w-[400px] lg:px-0"
              key={idx}
            >
              <div className="h-full podcast-image lg:w-[30%] py-[15px] px-[5px] lg:mr-5">
                <Image
                  src={episode.imageUrl}
                  alt={episode.name}
                  width={300}
                  height={300}
                  className="!w-full h-[90%] lg:h-full p-[0.375rem]"
                  priority
                />
              </div>

              <div className="h-full podcast-description lg:w-[70%] px-2">
                <small>17 February</small>
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
                  <div>
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
