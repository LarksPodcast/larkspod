import React from 'react'
import SEO from './SEO'

export default function Loader() {

  return (
    <main className="h-screen">
        <SEO title="Larks Podcast | Loading..."/>
        <div
          id="loader-container"
          className="h-full flex justify-center items-center"
        >
          <span className="loader"></span>
        </div>
      </main>
  )

}