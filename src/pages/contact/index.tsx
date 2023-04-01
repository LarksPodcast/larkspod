/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-[30rem] sm:h-[40rem]">
      <section className="flex flex-col items-center md:items-start mt-40 md:pl-[5rem] lg:pl-0 lg:items-center lg:ml-0 h-full w-full">
        <h1 className="text text-3xl sm:text-5xl font-regular custom-text-color-primary">
          Contact <span className="font-semibold">LARKS.</span>
        </h1>
        <p className="text-xl my-5 text-center md:text-left lg:text-center">
          We're open to partnership and sponsorship.
        </p>
        <div className="flex justify-center md:justify-start lg:justify-evenly flex-wrap w-[350px] sm:w-[500px]">
          <Link
            href="#"
            className="border border-orange-400 rounded-lg custom-text-color-primary mt-5 font-semibold px-5 py-2"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="border border-orange-400 rounded-lg custom-text-color-primary mt-5 font-semibold px-5 py-2 mx-2 lg:mx-0"
          >
            YouTube
          </Link>
          <Link
            href="#"
            className="border border-orange-400 rounded-lg custom-text-color-primary mt-5 font-semibold px-5 py-2"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="border border-orange-400 rounded-lg custom-text-color-primary mt-5 font-semibold px-5 py-2"
          >
            contact@larkspodcast.com
          </Link>
        </div>
      </section>
    </main>
  );
}
