import { GraphQLClient, gql } from "graphql-request";

// Get podcast series
const getPodcastSeries = gql`
  {
    getPodcastSeries(name: "Larks") {
      uuid
      name
      description
      datePublished
      imageUrl
      itunesInfo {
        uuid
        publisherName
        baseArtworkUrlOf(size: 640)
      }
      episodes (limitPerPage: 20) {
        uuid
        name
        description
        imageUrl
        audioUrl
        datePublished
      }
      genres
      authorName
      contentType
      rssOwnerPublicEmail
      websiteUrl
      copyright
    }
  }
`;

// Get podcast
const getPodcastEpisodes = gql`
  {
    getPodcastEpisode(uuid: "${process.env.NEXT_PUBLIC_PODCAST_EPISODE_ID}") {
        uuid
        hash
        name
        description
        imageUrl
        datePublished
        guid
        subtitle
        audioUrl
        videoUrl
        fileLength
        fileType
        duration
        episodeType
        seasonNumber
        episodeNumber
        websiteUrl
        isExplicitContent
        isRemoved
        podcastSeries{
            uuid
            name
        }
    }
  }
`;

const graphQLRequest = async (query) => {

  const requestHeaders = {
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": `${process.env.NEXT_PUBLIC_TADDY_USER_ID}`,
      "X-API-KEY": `${process.env.NEXT_PUBLIC_TADDY_API_KEY}`,
    },
  };

  const graphQLClient = new GraphQLClient(
    "https://api.taddy.org",
    requestHeaders
  );

  return await graphQLClient.request(query);
};

export { getPodcastSeries, getPodcastEpisodes, graphQLRequest };
