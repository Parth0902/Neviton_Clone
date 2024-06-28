"use client";
import React, { useState } from "react";
import ROCKET from "@/assets/about/timeline-rocket.png";
import "./MileStone.css";
import Image from "next/image";

const MilestonesWithoutHover = () => {
  const [mileStones, setMileStones] = useState([
    { event: "Incorporated", date: "Feb,2010" },
    { event: "IT & Engineering Center Banglore", date: "2014-2015" },
    { event: "Ignis Software was renamed as Neviton", date: "July,2016" },
    { event: "MTC Acquisition", date: "February,2018" },
    { event: "Arcolab Acquisition", date: "August,2022" },
  ]);
  const [showRocket, setShowRocket] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  return (
    <div className="md:hidden py-12">
      {/* <div className="bg-[#E8F3FF] h-[20px] w-full relative top-[18px] z-0 "></div> */}
      <div className="vl"></div>
      <div className="flex flex-col justify-evenly items-center gap-20">
        {mileStones.map((mileStone, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="w-[131px] h-[131px] flex justify-center items-center bg-[#E8F3FF] rocket z-20 cursor-pointer">
              <Image src={ROCKET} alt="Rocket image representing a milestone" />
            </div>
            <div
              className={`w-[12px] h-[12px] bg-[#232DEE] rounded-full z-10 cursor-pointer bg-transparent`}
            ></div>
            <div className="text-center">
              <p className="text-[18px] font-bold ">{mileStone.event}</p>
              <p className="text-[14px] pt-2">{mileStone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesWithoutHover;
