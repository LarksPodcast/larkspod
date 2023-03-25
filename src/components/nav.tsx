import React from "react";
import MaterialIcon from "./materialIcon";

import Link from "next/link";
import Image from "next/image";

import larkspodcastLogo from "../assets/images/larks-logo.svg";

export default function Nav() {
  return (
    <div id="larkspodcast-nav-container">
      <div id="logo-container" className="w-full py-5 px-5">
        <Image src={larkspodcastLogo} alt="Larks podcast logo" />
      </div>

      <nav className="mb-10 p-5">
        <ul className="flex justify-evenly text-white custom-bg-color-secondary w-[22rem] sm:w-[30rem] py-2 rounded-full border-2 border-white">
          <li>
            <Link href="/" className="h-full block">
              <MaterialIcon iconName="home" className="text-5xl" />
            </Link>
          </li>
          <li>
            <Link href="/episodes" className="block h-full">
              <MaterialIcon iconName="keyboard_voice" className="text-5xl" />
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block h-full">
              <MaterialIcon iconName="alternate_email" className="text-5xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
