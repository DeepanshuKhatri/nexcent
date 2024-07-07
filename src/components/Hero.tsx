'use client';
import React from 'react';
import { Button } from './ui/button';
import computer_image from "@/assets/computer_image.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ShowCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  const slides = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: computer_image,
      buttonText: "Register"
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: computer_image,
      buttonText: "Register"
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      image: computer_image,
      buttonText: "Register"
    },
  ];

  return (
    <div className="px-6 md:px-[10%] bg-secondary mb-8 py-12 md:py-[92px]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-1 bg-secondary py-12 md:py-[92px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
              <span className="text-4xl md:text-[64px] font-semibold text-primary leading-tight md:leading-[76px]">
                {slide.title}
              </span>
              <span className="text-4xl md:text-[64px] text-green font-semibold leading-tight md:leading-[76px]">
                {slide.subtitle}
              </span>
              <p className="py-6 text-secondary">
                {slide.description}
              </p>
              <div>
                <Button>{slide.buttonText}</Button>
              </div>
            </div>
            <div className="w-full md:w-auto flex justify-center">
              <Image
                alt="computer-image"
                height={407}
                width={391}
                src={slide.image}
                className="max-w-full h-auto"
              />
            </div>
          </div>
         </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowCarousel;
