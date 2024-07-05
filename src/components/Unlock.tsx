import React from "react";
import mobile_login from "@/assets/mobile_login.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Unlock = () => {
  return (
    <div className=" flex px-[10%] pb-[40px]">
      <Image src={mobile_login} alt="mobile_login" height={310} width={410} />
      <div className="w-[660px] flex flex-col justify-around gap-3">
        <div className="w-[600px] ">
          <h2 className="font-semibold text-[38px] leading-[44px]  mb-2">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-[14px]">
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

export default Unlock;