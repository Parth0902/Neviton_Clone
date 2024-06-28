"use client";
import React, { useState } from "react";
import ROCKET from "@/assets/about/timeline-rocket.png";
import Image from "next/image";
import "./MileStone.css";

const Milestones = () => {
  const [mileStones, setMileStones] = useState([
    { event: "Incorporated", date: "Feb,2010" },
    { event: "IT & Engineering Center Banglore", date: "2014-2015" },
    { event: "Ignis Software was renamed as Neviton", date: "July,2016" },
    { event: "MTC Acquisition", date: "February,2018" },
    { event: "Arcolab Acquisition", date: "August,2022" },
  ]);

  return (
    <div className="py-16">
      <div className="bg-[#E8F3FF] h-3 w-full relative top-8 z-0 cursor-pointer hidden xl:block"></div>
      <div className="flex flex-col gap-14 xl:gap-0 xl:flex-row xl:justify-evenly">
        {mileStones.map((mileStone, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <div className="w-14 h-14 flex justify-center items-center rounded bg-[#E8F3FF] rocket z-20 cursor-pointer transition-transform duration-300 hover:scale-200">
              <Image
                src={ROCKET}
                alt="Rocket image representing a milestone"
                className="transition-transform duration-300"
              />
            </div>

            <div className="text-center flex flex-col w-[10rem]">
              <p className="text-[14px] font-bold">{mileStone.event}</p>
              <p className="text-sm pt-2">{mileStone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
