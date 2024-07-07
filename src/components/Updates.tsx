import React from "react";
import community_update_1 from '@/assets/community_update_1.svg';
import community_update_2 from '@/assets/community_update_2.svg';
import community_update_3 from '@/assets/community_update_3.svg';
import Image from "next/image";
import { Button } from "./ui/button";

const data = [
    {
        image: community_update_1,
        label: "Creating Streamlined Safeguarding Processes with OneRen",
        href: "#"
    },
    {
        image: community_update_2,
        label: "What are your safeguarding responsibilities and how can you manage them?",
        href: "#"
    },
    {
        image: community_update_3,
        label: "Revamping the Membership Model with Triathlon Australia",
        href: "#"
    },
]

const Updates = () => {
  return (
    <div className="flex mb-8 bg-primary flex-col justify-center text-center items-center gap-3 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-semibold text-primary">Caring is the new marketing</h1>
      <p className="w-full max-w-lg md:w-[630px] text-base md:text-[16px] text-secondary">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.
      </p>
      <div className="flex flex-col lg:flex-row justify-around gap-7">
        {data?.map((update, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <Image src={update.image} alt="community_updates" height={286} width={368} />
            <div className="bg-primary w-[260px] md:w-[310px] mt-[-25%] h-[175px] flex flex-col gap-4 rounded-lg justify-center items-center p-4">
              <h4 className="text-secondary text-center">{update.label}</h4>
              <Button variant="ghost">Read more <span className='text-lg'> &nbsp; →</span> </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
