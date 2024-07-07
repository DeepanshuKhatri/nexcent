"use client";
import React from "react";
import members from "@/assets/members.svg";
import payments from "@/assets/payments.svg";
import event_booking from "@/assets/event_booking.svg";
import clubs from "@/assets/clubs.svg";
import Image from "next/image";
import AnimatedNumber from "./AnimatedNumber";

const achievements = [
  {
    icon: members,
    label: "Members",
    figure: 2245341,
  },
  {
    icon: clubs,
    label: "Clubs",
    figure: 46328,
  },
  {
    icon: event_booking,
    label: "Event Booking",
    figure: 828867,
  },
  {
    icon: payments,
    label: "Payments",
    figure: 1926436,
  },
];

const Achievements = () => {
  return (
    <div className="bg-secondary mb-8 flex md:flex-row flex-col md:gap-2 gap-5 md:text-start text-center px-3 justify-evenly items-center lg:px-[10%] py-[64px]">
      <div>
        <h1 className="font-semibold text-primary lg:text-[36px] text-[28px]">
          Helping a local <br />
          <span className="text-green">business reinvent itself</span>
        </h1>
        <p className="text-tertiary">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-full md:w-[40%] gap-5">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] flex gap-2 justify-center"
          >
            <Image
              src={achievement.icon}
              height={48}
              width={48}
              alt="Achievements"
            />
            <div>
              <span className="font-bold text-primary leading-6 lg:text-[28px] text-[24px]">
                <AnimatedNumber value={achievement.figure} />
              </span>
              <p className="text-[16px] text-secondary">{achievement.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
