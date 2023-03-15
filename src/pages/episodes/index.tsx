import { getPodcastEpisodes, graphQLRequest } from "@/graphQL/gql";

type dataType = {
  data: any;
  podcastSeries: any;
};

export default function Episodes({ data, podcastSeries }: dataType) {

  return (
    <main className="h-screen">
      <p>Larks Podcast episodes page</p>
    </main>
  );
}

/*
  - Present podcast episodes page
*/
