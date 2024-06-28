"use client";
import React from "react";
import Image from "next/image";
import "./about.css";
import leader1 from "@/assets/about/leader_1.jpg";
import leader2 from "@/assets/about/leader_2.jpg";
import leader4 from "@/assets/about/leader_4.jpg";
import leader5 from "@/assets/about/leader_5.jpg";
import leader6 from "@/assets/about/leader_6.jpg";
import leader8 from "@/assets/about/leader_3.jpg";
import TeamPhoto from "@/assets/about/GroupImg.jpg";
import ImageGrid from "@/components/about/ImageGrid/ImageGrid";
import Milestones from "@/components/milestone/Milestone";

const page = () => {
  const handleShowPdf = () => {
    console.log("hello");
    window.open("/CSRPolicyNeviton.pdf", "_blank");
  };
  const ImageData = [
    {
      img: leader4,
      heading: "Sanjay Venkatesh",
      subheading: "CEO",
    },
    {
      img: leader1,
      heading: "Bharatha Bhushana",
      subheading: "VP & Head, Technology",
    },
    {
      img: leader6,
      heading: "Ratika Mirji",
      subheading: "Head, HR",
    },
    {
      img: leader2,
      heading: "Rishi Raj",
      subheading: "Director Of Business Development",
    },
    {
      img: leader8,
      heading: "Prasanna Kumar",
      subheading: "Director Of Engineering",
    },
    {
      img: leader5,
      heading: "Raghunatha Raju",
      subheading: "Director Of Finance",
    },
  ];
  return (
    <div>
      <div className="px-4 lg:px-[6rem] 2xl:px-[16.5rem] py-12 xl:py-24 flex flex-col items-center justify-center text-left gap-12">
        <h1 className="about-heading md:max-w-[40ch] py-2">
          Bridging Industries with Cutting-Edge Engineering and Technology
          Solutions, Yielding Tangible Outcomes
        </h1>
        <div className="container pb-12">
          <Image
            src={TeamPhoto}
            alt="Image Description"
            className="img2 image"
          />
          <div className="rectangle img1"></div>
        </div>

        <p className="max-w-[125ch]">
          Neviton is a boutique service provider of Engineering and Technology
          Solutions to the Aerospace, Manufacturing, Pharmaceutical, Media &
          Entertainment, Fintech and Education segments using the latest digital
          technologies, process improvement and optimization methodologies, that
          help drive tangible outcomes for its customers.
        </p>
        <p className="max-w-[125ch]">
          Neviton has a team of highly skilled and experienced professionals who
          are experts in various technologies, including but not limited to,
          Aerostructure Design, CNC Programming, Tool Design, Methods and
          Manufacturing Engineering, digital transformation services, web
          development, mobile app development, cloud computing, business
          intelligence, AI/ML, cybersecurity, and IT infrastructure services.
        </p>
        <p className="max-w-[125ch]">
          {
            "The company's approach is to understand the unique needs and challenges of each client and provide tailored solutions that meet their specific requirements. Neviton has built a reputation for delivering innovative and effective solutions to its clients. Its commitment to quality, customer satisfaction, and timely delivery has earned the company a loyal client base and industry recognition."
          }
        </p>
      </div>
      <div className="flex flex-col items-center pb-5">
        <div className="flex items-center justify-center gap-2 text-4xl text-center ">
          <h2>Our</h2>
          <h2 className="font-bold">Milestones.</h2>
        </div>
      </div>

      <div className="w-full pb-10">
        <Milestones />
      </div>

      {/* <MilestonesWithoutHover /> */}

      <div id="Grid_Box">
        <h2>
          <span>Our</span> Leadership
        </h2>
        <ImageGrid
          data={ImageData}
          isCaseStudy={false}
          // width={404.954}
          // height={414.982}
        />
      </div>

      <div className="p-[60px]">
        <div className="flex items-center justify-center gap-2 text-4xl text-center">
            <h2>CSR</h2>
            <h2 className="font-bold"> POLICY</h2>
        </div>

        <div className="flex items-center justify-center gap-2 text-4xl text-center mt-10">
            <a href="/CSRPolicyNeviton.pdf
            " target="_blank" style={{ textDecoration: 'none' }}>
                <button className="pdfBtn hover:bg-[#8560f3]" >View PDF</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default page;
