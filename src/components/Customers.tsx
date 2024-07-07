import React from "react";
import customer_image from "@/assets/customer_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import client1 from "@/assets/client1.svg";
import client2 from "@/assets/client2.svg";
import client3 from "@/assets/client3.svg";
import client4 from "@/assets/client4.svg";
import client5 from "@/assets/client5.svg";
import client6 from "@/assets/client6.svg";
const Customers = () => {
  return (
    <div className=" flex mb-8 md:flex-row flex-col bg-secondary py-[32px] pb-[48px] gap-10 px-[10%] ">
      <Image src={customer_image} alt="mobile_login" height={310} width={410} />
      <div className=" flex flex-col mt-2  gap-3">
        <p className="text-[16px] text-secondary">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <h4 className=" text-green font-semibold text-[20px]">Tim Smith</h4>
        <p className="text-[#89939E]">British Dragon Boat Racing Association</p>

        <div className="flex gap-5">
          <Image className="hidden sm:block" src={client1} alt="client" height={48} width={48} />
          <Image className="hidden sm:block" src={client2} alt="client" height={48} width={48} />
          <Image className="md:hidden hidden sm:block lg:block" src={client3} alt="client" height={48} width={48} />
          <Image className="md:hidden hidden sm:block lg:block" src={client4} alt="client" height={48} width={48} />
          <Image className="md:hidden hidden sm:block lg:block" src={client5} alt="client" height={48} width={48} />
          <Image className="hidden xl:block" src={client6} alt="client" height={48} width={48} />
          <Button variant="ghost" className="text-lg">
            Meet all customers <span className='text-lg'> &nbsp; →</span>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Customers;
