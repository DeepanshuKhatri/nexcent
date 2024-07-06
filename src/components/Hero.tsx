import Image from "next/image";
import React from "react";
import computer_image from "@/assets/computer_image.svg";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="px-[10%]  bg-secondary py-[92px]">
            <div className="flex justify-between bg">
              <div className="flex flex-col justify-center">
                <span className="text-[64px] font-semibold text-primary leading-[76px]">
                  Lessons and insights
                </span>
                {/* <br /> */}
                <span className="text-[64px] text-green font-semibold  leading-[76px]">
                  from 8 years
                </span>
                <p className="py-6 text-secondary">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div>
                  <Button>Register</Button>
                </div>
              </div>
              {/* <div className=" w-[40%] h-full"> */}
              <Image
                alt="computer-image"
                height={407}
                width={391}
                src={computer_image}
              />
              {/* </div> */}
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
