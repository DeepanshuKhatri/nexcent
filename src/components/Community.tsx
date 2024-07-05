import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import clubs_and_groups from "@/assets/clubs_and_groups.svg";
import national_association from "@/assets/national_association.svg";
import members_association from "@/assets/members_association.svg";
import Image from "next/image";

const Community = () => {
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
  return (
    <div className="flex flex-col w-full py-[40px] px-[10%] items-center">
      <h1 className="font-semibold text-[36px] leading-9">
        Manage your entire community
      </h1>
      <h1 className="font-semibold text-[36px] ">in a single system</h1>
      <p>Who is Nextcent suitable for?</p>

      <div className="flex w-full justify-between">
        {data.map((card_data) => {
          return (
            <Card className="w-[300px] h-[280px] border-0">
              <CardContent>
                <div className="flex flex-col items-center gap-5 py-5 h-full w-full text-center">
                  <Image
                    height={56}
                    width={65}
                    src={card_data.image}
                    alt="card_image"
                  />
                  <CardTitle className="text-[36px] leading-9">
                    {card_data.heading}
                  </CardTitle>
                  <CardDescription>{card_data.description}</CardDescription>
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
