import React from "react";
import SEO from "./SEO";

export default function Loader() {
  return (
    <main className="h-screen">
      <SEO
        title="Larks Podcast"
        description="LARKS podcast that defies the norms of being specific, straightforward and concise; It embraces the ridiculous, the silly and the superficial and It’s more about the laffs than the feels."
      />
      <div
        id="loader-container"
        className="h-full flex justify-center items-center"
      >
        <span className="loader"></span>
      </div>
    </main>
  );
}
