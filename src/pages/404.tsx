/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import MaterialIcon from "@/components/materialIcon";

export default function NotFound() {
  return (
    <section id="larkspodcast-404" className="h-screen font-poppins flex justify-center mt-40">
      <div className="w-[30rem]">
        <h1 className="text-[6rem] md:text-[10rem] font-medium text-center text-gray-800">
          4
          <MaterialIcon
            iconName="mic"
            className="text-[6rem] md:text-[10rem] font-bold align-sub custom-text-color-primary"
          />
          4
        </h1>
        <p className="font-light text-center text-xl sm:text-2xl px-5 sm:px-0">
          Oops... Looks like you took the wrong road. Follow the map below 👇🏿
        </p>
        <div className="custom-text-color-primary flex justify-evenly mt-5 sm:mt-10">
          <Link href="/">Home</Link>
          <Link href="/episodes">Episodes</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
}
