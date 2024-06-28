import React from "react";
import "./section5.css";
import { MovingCards } from "@/components/aceternity/MovingCards";

import c1 from "@/assets/caseStudies/c1.png";
import c2 from "@/assets/caseStudies/c2.png";
import c3 from "@/assets/caseStudies/c3.png";
import c4 from "@/assets/caseStudies/c4.png";
import c6 from "@/assets/caseStudies/c6.png";
import c7 from "@/assets/caseStudies/c7.png";
import c8 from "@/assets/caseStudies/c8.png";
import c9 from "@/assets/caseStudies/c9.png";
import c11 from "@/assets/caseStudies/c11.png";
import c12 from "@/assets/caseStudies/Renewable_Energy.jpg";
import c13 from "@/assets/caseStudies/Music_Publication.jpg";
import c14 from "@/assets/caseStudies/c14.jpg";

const csData = [

  {
    img: c1,
    heading: "Cycle Time Optimization",
    query: 0,
  },
  {
    img: c2,
    heading: "Fixture Cost Reduction & Cycle Time Saving",
    query: 1,
  },
  {
    img: c3,
    heading: "Casting Part Machining",
    query: 2,
  },
  {
    img: c4,
    heading: "Turn Mill",
    query: 3,
  },
  {
    img: c6,
    heading: "COS Implementation",
    query: 4,
  },
  {
    img: c1,
    heading: "Cycle Time Optimization",
    query: 0,
  },
  {
    img: c2,
    heading: "Fixture Cost Reduction & Cycle Time Saving",
    query: 1,
  },
  {
    img: c3,
    heading: "Casting Part Machining",
    query: 2,
  },
  {
    img: c4,
    heading: "Turn Mill",
    query: 3,
  },
  {
    img: c6,
    heading: "COS Implementation",
    query: 4,
  },
];

const csData2 = [,
  {
    img: c14,
    heading: "AWS LANDING ZONE TO CONTROL TOWER MIGRATION",
  },
  {
    img: c12,
    heading: "Optimizing Renewable Energy with AWS Solutions",
  },
  {
    img: c13,
    heading: "Scalable and Secure Music Publishing with AWS",
  },
  {
    img: c7,
    heading: "Technical Data Collection for RFQ",
    query: 5,
  },
  {
    img: c8,
    heading: "Masking Process WI",
    query: 6,
  },
  {
    img: c9,
    heading: "Reduction in Raw Material Cost",

    query: 7,
  },
  {
    img: c11,
    heading: "Automated visual inspection using COGNEX",
    query: 8,
  },
  {
    img: c7,
    heading: "Technical Data Collection for RFQ",
    query: 5,
  },
  {
    img: c8,
    heading: "Masking Process WI",
    query: 6,
  },
  {
    img: c9,
    heading: "Reduction in Raw Material Cost",

    query: 7,
  },
  {
    img: c11,
    heading: "Automated visual inspection using COGNEX",
    query: 8,
  },
];

const section5 = () => {
  return (
    <section id="SuccessStories" className="">
      <h4>
        <span>Our</span> Success Stories.
      </h4>
      {/*

      <Image src={Img} alt="" className="sldiers" />
            */}
      <div className="py-20">
        <MovingCards items={csData} direction="left" speed={"normal"} />
        <MovingCards items={csData2} direction="right" speed={"fast"} />
      </div>
    </section>
  );
};

export default section5;
