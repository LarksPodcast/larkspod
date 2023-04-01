import Link from "next/link";
import Image from "next/image";
import NewsletterInput from "./NewsletterInput";

import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";
import Email from "../assets/images/minutemailer.svg";

export default function Footer() {
  const date = new Date();
  const Year = date.getFullYear();

  return (
    <footer className="custom-bg-color-accent pt-10 sm:pt-20 pb-5 px-4 sm:px-10 font-poppins h-[370px]">
        <div className="footer-details-container flex flex-col sm:flex-row justify-around items-start mb-10 sm:mb-20">
          <div className="footer-dates&socials text-white w-full sm:w-[300px] max-w-[300px]">
            <h3 className="text-2xl font-medium py-5">LARKS - &copy;{Year}</h3>
            <div className="socials-contact w-[75%]">
              <div className="w-full flex justify-between">
                <Link href="dfdggfg" className="social-contact-link">
                  <Image src={Instagram} alt="Instagram contact" title="Check our feed and send us a DM" />
                </Link>
                <Link href="dgfgdfgd" className="social-contact-link">
                  <Image src={Twitter} alt="Twitter contact" className="w-full" title="Tweet at us" />
                  </Link>
                <Link href="fdfdf" className="social-contact-link" title="Watch, like and subscribe">
                  <Image src={Youtube} alt="YouTube contact" className="w-full" />
                </Link>
                <Link href="fdfdf" className="social-contact-link" title="Send us an email">
                  <Image src={Email} alt="Email contact" className="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-newsletter w-full sm:w-96">
            <h4 className="text-[1.2rem] md:text-2xl lg:text-3xl font-bold py-5 text-white">Sign up to the newsletter</h4>
            <NewsletterInput />
          </div>
        </div>
        <hr className="border-orange-300 mb-2" />
        <p className="font-light text-center text-white">Engineered by the <Link href="https://duowork.github.io" className="!font-semibold" target="_blank">Duowork</Link> team.</p>
    </footer>
  )
}
