"use client";
import React from "react";
import Image from "next/image";
import "./page.css";
import caseStudyBanner from "@/assets/case-study-banner.jpeg";
import ImageGrid from "@/components/about/ImageGrid/ImageGrid";
import acraLogo from "@/assets/caseStudies/AcraLogo.png";
import beyazLogo from "@/assets/caseStudies/BeyazLogo.png";
import sanseraLogo from "@/assets/caseStudies/SanseraLogo.png";
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

const page = () => {
  const clients = [{ img: acraLogo }, { img: beyazLogo }, { img: sanseraLogo }];

  const csData = [
    {
      img: c14,
      heading: "AWS LANDING ZONE TO CONTROL TOWER MIGRATION",
    },
    {
      img: c12,
      heading: "AWS Solutions for Automated Visual Optimization of Renewable Energy",
    },
    {
      img: c13,
      heading: "AWS for Scalable and Secure Music Publishing",
    },
    {
      img: c1,
      heading: "Cycle Time Optimization",
    },
    {
      img: c2,
      heading: "Fixture Cost Reduction & Cycle Time Saving",
    },
    {
      img: c3,
      heading: "Casting Part Machining",
    },
    {
      img: c4,
      heading: "Turn Mill",
    },
    {
      img: c6,
      heading: "COS Implementation",
    },
    {
      img: c7,
      heading: "Technical Data Collection for RFQ",
    },
    {
      img: c8,
      heading: "Masking Process WI",
    },
    {
      img: c9,
      heading: "Reduction in Raw Material Cost",
    },
    {
      img: c11,
      heading: "Automated visual inspection using COGNEX",
    },
    {
      img: c1,
      heading: "RPA Solution for Aerospace Manufacturing",
    },
  ];

  return (
    <div className="case-study">
      {/* <section className="flex justify-between px-32 py-32 case-study-hero">
        <div className="case-study-hero-text flex flex-col items-start gap-10">
          <h1 className="case-study-hero-heading">Success Stories</h1>
          <p className="case-study-hero-subtitle max-w-[48ch]">
            {
              "Dive into our success stories and discover how Neviton's innovative solutions have transformed businesses like yours."
            }
          </p>
          <span className="case-study-hero-clients">Clients</span>
        </div>
        <div className="container pb-12">
          <Image
            src={caseStudyBanner}
            alt="Image Description"
            className="img2 image"
          />
          <div className="rectangle img"></div>
        </div>
      </section> */}
      <section>
        <div className="flex flex-col justify-center p-16 space-y-12 grid_Box">
          <h2 className="text-center">
            All <span>success stories</span>
          </h2>
          <ImageGrid data={csData} isCaseStudy={true} />
        </div>
      </section>
    </div>
  );
};

const CaseStudyHero = () => {
  return (
    <section className="flex justify-between px-32 py-32 case-study-hero">
      <div className="case-study-hero-text flex flex-col items-start gap-10">
        <h1 className="case-study-hero-heading">Success Stories</h1>
        <p className="case-study-hero-subtitle max-w-[48ch]">
          {
            "Dive into our success stories and discover how Neviton's innovative solutions have transformed businesses like yours."
          }
        </p>
        <span className="case-study-hero-clients">Clients</span>
        <div className="flex gap-5">
          {clients.map((client, i) => {
            return <Image key={i} src={client.img} alt="" width={120} />;
          })}
        </div>
      </div>
      <div className="container pb-12">
        <Image
          src={caseStudyBanner}
          alt="Image Description"
          className="img2 image"
        />
        <div className="rectangle img"></div>
      </div>
    </section>
  );
};

export default page;
