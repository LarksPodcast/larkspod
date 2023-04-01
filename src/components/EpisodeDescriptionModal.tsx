import React, { MutableRefObject } from "react";
import Link from "next/link";

export const descriptionText: string = `
Recorded: December 30, 2022) A somewhat playful/goofy but serious episode filled with an abundance of chemistry aimed at raising awareness for an issue which is arguably under-discussed.\nFollow Nanya:\nwww.instagram.com/nanyahashim/\nCheck out Nanya’s Podcast:\nhttp://li.sten.to/imhwn\nFollow officialemmydrake:\nwww.instagram.com/officialemmydrake/ \nwww.twitter.com/EmaazDr \nMake sure you rate, share and leave a comment wherever you listen to the podcast www.telling.com me how much you enjoyed the episode! Better Ratings mean even more people find out about the podcast!
Don't forget to use the hashtag\n#larkspodcast\nThis episode is sponsored by Monarch @oflmonarch on Instagram
`;

export default function EpisodeDescriptionModal({
  description,
  showModal,
  handleVisibilty,
}: {
  description: string;
  showModal: boolean;
  handleVisibilty: (modalIsClosed: boolean) => void;
}) {
  const modalRef: any = React.useRef();
  const modalCloseRef: any = React.useRef();

  const linkRegex = /(https?:\/\/|www\.)\S+\/\S*/;
  const escapeCharacterRegex = /\n\r|\r\n|\n|[\n\n]/;

  const episodeDetails = description?.split(escapeCharacterRegex);

  if (showModal) {
    modalRef.current.classList.remove("hidden");
    modalRef.current.classList.add("episode-details-modal");
  }

  if (window !== undefined) {
    window.onclick = (e: any) => {
      if (e.target === modalRef.current) {
        modalRef.current.classList.remove("episode-details-modal");
        modalRef.current.classList.add("hidden");
      }
    };
  }

  return (
    <>
      <div
        id="episode-details-modal"
        className={`flex justify-center items-center hidden`}
        ref={modalRef}
      >
        <div
          className="border-4 border-orange-200 rounded-md bg-white px-5"
          id="modal-content"
        >
          <span
            className="custom-text-color-secondary block text-right pr-2 py-2"
            id="close-modal"
            ref={modalCloseRef}
            onClick={() => {
              if (showModal) {
                modalRef.current.classList.remove("episode-details-modal");
                modalRef.current.classList.add("hidden");
                handleVisibilty(false);
              }
            }}
          >
            Close
          </span>
          <div className="h-[30rem] overflow-y-scroll">
            {episodeDetails?.map((DetailLine, lineIdx) => {
              const matchedLink = DetailLine.match(linkRegex);

                return (
                  <>
                    <p key={lineIdx} className="font-poppins font-light">
                      {!matchedLink?DetailLine:""}
                      <Link
                        href={matchedLink?matchedLink[0]:""}
                        className="underline custom-text-color-primary"
                        target="_blank"
                      >
                        {matchedLink?matchedLink[0]:""}
                      </Link>
                    </p>
                    <br />
                  </>
                );

            })}
          </div>
        </div>
      </div>
    </>
  );
}

/*
    ISSUES
    ------
    - RegEx not matching all links (problem)
    - RegEx should match all links and format them (solution)
*/
