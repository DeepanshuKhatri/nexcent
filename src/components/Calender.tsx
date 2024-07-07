import React from "react";
import calender_image from "@/assets/calender_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";

const Calender = () => {
  return (
    <div className="bg-primary mb-8 flex flex-col md:flex-row items-center px-6 md:px-[10%] pb-10 md:pb-[40px] gap-6">
    <div className="w-full md:w-auto flex justify-center md:justify-start">
      <Image src={calender_image} alt="mobile_login" height={310} width={410} className="w-full md:w-auto max-w-md" />
    </div>
    <div className="w-full md:w-[660px] flex flex-col justify-around gap-3">
      <div className="w-full">
        <h2 className="font-semibold text-primary text-2xl md:text-[38px] leading-tight md:leading-[44px] mb-2">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-[14px] md:text-base text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
          amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
      </div>
      <div>
        <Button>Learn More </Button>
      </div>
    </div>
  </div>
  );
};

export default Calender;
