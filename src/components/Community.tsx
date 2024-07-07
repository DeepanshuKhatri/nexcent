import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import clubs_and_groups from "@/assets/clubs_and_groups.svg";
import national_association from "@/assets/national_association.svg";
import members_association from "@/assets/members_association.svg";
import Image from "next/image";

const data = [
  {
    image: members_association,
    heading: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: national_association,
    heading: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: clubs_and_groups,
    heading: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const Community = () => {
  return (
    <div className="flex mb-8 flex-col w-full py-10 md:py-[40px] text-center px-6 md:px-[10%] items-center bg-primary">
      <h1 className="font-semibold text-primary text-2xl md:text-[36px] leading-tight md:leading-9 mb-3 md:w-[540px]">
        Manage your entire community in a single system
      </h1>
      <p className="text-secondary-gray mb-6">Who is Nextcent suitable for?</p>

      <div className="flex flex-wrap justify-center lg:justify-between gap-6 w-full">
        {data.map((card_data, index) => {
          return (
            <Card key={index} className="w-full md:w-[300px] h-[300px] border-none ">
              <CardContent>
                <div className="flex flex-col items-center gap-5 py-5 h-full w-full text-center">
                  <Image
                    height={56}
                    width={65}
                    src={card_data.image}
                    alt="card_image"
                  />
                  <CardTitle className="text-xl md:text-[36px] text-primary font-bold leading-tight md:leading-9">
                    {card_data.heading}
                  </CardTitle>
                  <CardDescription className="text-secondary text-sm md:text-base">
                    {card_data.description}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
