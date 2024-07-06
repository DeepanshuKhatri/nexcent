import React from "react";
import calender_image from "@/assets/calender_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Calender = () => {
  return (
    <div className="bg-primary flex px-[10%] pb-[40px]">
      <Image src={calender_image} alt="mobile_login" height={310} width={410} />
      <div className="w-[660px] flex flex-col justify-around">
        <div className="w-[600px] ">
          <h2 className="font-semibold text-[38px] text-primary leading-[44px]  mb-2">
          How to design your site footer like we did
          </h2>
          <p className="text-[14px] text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>
       <div> <Button>Learn More </Button></div>
      </div>
    </div>
  );
};

export default Calender;
