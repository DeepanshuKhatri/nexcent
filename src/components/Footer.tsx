import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import instagram_icon from "@/assets/instagram_icon.svg";
import twitter_icon from "@/assets/twitter_icon.svg";
import dribble_icon from "@/assets/dribble_icon.svg";
import youtube_icon from "@/assets/youtube_icon.svg";
import Link from "next/link";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-[#263238]  text-white flex flex-col md:flex-row justify-between py-5 px-9  lg:px-[10%] gap-5 md:gap-0">
      <div className="w-full md:w-[300px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Image src={logo} width={48} height={48} alt="Logo" />
            <h1 className="font-semibold text-2xl md:text-[48px]">Nexcent</h1>
          </div>
          <div>
            <h1>Copyright © 2020 Nexcent Ltd.</h1>
            <h1>All rights reserved</h1>
          </div>
          <div className="flex gap-3">
            <Image alt="youtube_icon" src={youtube_icon} height={24} width={24} className="md:h-12 md:w-12" />
            <Image alt="twitter_icon" src={twitter_icon} height={24} width={24} className="md:h-12 md:w-12" />
            <Image alt="dribble_icon" src={dribble_icon} height={24} width={24} className="md:h-12 md:w-12" />
            <Image alt="instagram_icon" src={instagram_icon} height={24} width={24} className="md:h-12 md:w-12" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto px-0 md:px-10 gap-10 md:gap-10">
        <div className="w-full md:w-auto">
          <h1 className="font-semibold text-lg">Company</h1>
          <br />
          <ol className="space-y-2">
            <li><Link href="">About us</Link></li>
            <li><Link href="">Blog</Link></li>
            <li><Link href="">Contact us</Link></li>
            <li><Link href="">Pricing</Link></li>
            <li><Link href="">Testimonials</Link></li>
          </ol>
        </div>
        <div className="w-full md:w-auto">
          <h1 className="font-semibold text-lg">Support</h1>
          <br />
          <ol className="space-y-2">
            <li><Link href="">Help center</Link></li>
            <li><Link href="">Terms of service</Link></li>
            <li><Link href="">Legal</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
            <li><Link href="">Status</Link></li>
          </ol>
        </div>
        <div className="w-full md:w-auto">
          <h1 className="font-semibold  text-lg mb-2">Stay up to date</h1>
          <Input placeholder="Your email address" className=" lg:w-[300px] w-[200px] bg-transparent mt-2 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
