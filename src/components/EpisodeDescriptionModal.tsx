import React, { memo } from "react";
import Link from "next/link";

export default memo(function EpisodeDescriptionModal({
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

              if (matchedLink !== null) {

                return (
                  <div key={lineIdx}>
                    <p key={lineIdx} className="font-poppins font-light">
                      <a
                        href={`https://${matchedLink[0]}`}
                        className="underline custom-text-color-primary"
                        target="_blank"
                        rel="noopener"
                      >
                        {matchedLink[0]}
                      </a>
                    </p>
                    <br />
                  </div>
                );
              }

              return (
                <div key={lineIdx}>
                  <p key={lineIdx} className="font-poppins font-light">
                    {DetailLine}
                  </p>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
