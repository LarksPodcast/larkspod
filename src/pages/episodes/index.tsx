import React, { useState } from "react";
import PodcastEpisodes from "@/components/PodcastEpisodes";

type dataType = {
  data: any;
  podcastSeries: any;
};

export default function Episodes({ podcastSeries }: dataType) {
  const [podcastEpisodes, setPodcastEpisodes] = useState([
    ...podcastSeries.episodes,
  ]);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { episodes } = podcastSeries;

    const filteredEpisodes = episodes.filter((episode: any) => {
      const episodeName = episode.name.toLowerCase().replace(/[^\w\s]/g, "");
      const inputValue = e.target.value.toLowerCase();

      return episodeName.includes(inputValue);
    });

    if (filteredEpisodes.length > 0) {
      setPodcastEpisodes(filteredEpisodes);
    } else {
      setPodcastEpisodes(episodes);
    }
  };

  return (
    <main id="larkspodcast-episodes" className="h-screen">
      <section id="larks-all-episodes" className="px-10 mb-10">
        <div
          id="episode-search"
          className="flex justify-center items-center h-auto"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="Search podcasts"
            title="Search podcast"
            className="outline-0 border border-orange-300 rounded-full w-96 max-w-96 h-10 px-10 py-5 mb-5"
            onChange={handleChange}
          />
        </div>

        <h2 className="font-poppins font-medium text-3xl p-5-10 lg:ml-[11rem] custom-text-color-dark mb-5">
          All episodes
        </h2>

        <div className="overflow-y-scroll h-[35rem] py-5">
          <PodcastEpisodes episodes={podcastEpisodes} />
        </div>
      </section>
    </main>
  );
}