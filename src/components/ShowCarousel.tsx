import React from 'react';
import { Button } from './ui/button';
import computer_image from "@/assets/computer_image.svg";
import Image from "next/image";

const ShowCarousel = () => {
  return (
    <div className="px-6 md:px-[10%] bg-secondary py-12 md:py-[92px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
          <span className="text-4xl md:text-[64px] font-semibold text-primary leading-tight md:leading-[76px]">
            Lessons and insights
          </span>
          <span className="text-4xl md:text-[64px] text-green font-semibold leading-tight md:leading-[76px]">
            from 8 years
          </span>
          <p className="py-6 text-secondary">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div>
            <Button>Register</Button>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Image
            alt="computer-image"
            height={407}
            width={391}
            src={computer_image}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCarousel;
