import React from "react";
import Image from "next/image";
import Ceo from "@/assets/home/ceo_sign.png";
import quotes1 from "@/assets/home/Quotes1.svg";
import quotes2 from "@/assets/home/Quotes2.svg";
import "./Section7.css";

const Section7 = () => {
  return (
    <section
      id="section7"
      className="relative bg-[#F7FAFF] py-[94px] px-[10px] lg:px-[80px] flex flex-col lg:flex-row gap-[130px] items-center lg:justify-center"
    >
      <div className="relative flex flex-col lg:w-[75%] items-center z-10">
        <h4 className="text-center text-3xl lg:text-4xl 2xl:text-[50px] font-semibold text-black pb-[24px]">
          A message from our CEO
        </h4>
        {/*

    <h6 className="text-lg xl:text-[24px] font-medium text-[#1645EC] pb-[34px]">
      Innovation, Passion & Excellence
    </h6>
                */}
        <p className="text-[18px] px-2 2xl:text-[20px] font-medium  text-black text-justify">
          <Image
            src={quotes1}
            alt=""
            className=" mx-5 relative bottom-3 hidden lg:inline"
          />
          With the advent of the GenAI phenomenon, the world is not the same
          place anymore – it seems to be spinning faster than ever before. At
          the heart of our mission lies a commitment to
          <strong> innovation</strong>,<strong> perfection</strong>, and
          <strong> knowledge</strong>. We believe in aligning
          <strong> with</strong> you, our valued customers and your business
          outcomes. Our team provides cutting-edge solutions using the latest
          tools powered by AI, that drive your success. Whether it’s
          streamlining and automating processes, modernising your technology
          landscape using the cloud capabilities, enhancing security, or
          revolutionizing user experiences, across several sectors like
          Aerospace and Automotive Component Manufacturing, Life Sciences,
          Renewable Energy  to name a few, we are here to make a positive
          impact. Explore our site, discover our expertise, and let’s embark on
          a transformative journey together. <br />
        </p>
        <p className="lg:text-center px-2 text-[18px] 2xl:text-[20px] font-medium  text-black flex">
          Thank you for choosing us as your technology partner. I am thrilled to
          welcome you to our digital home.
          <Image src={quotes2} alt="" className="hidden lg:inline lg:mx-5 " />
        </p>

        <div className="py-10 flex flex-col gap-0">
          {/* <Image src={Ceo} alt="CEO Signature" /> */}
          <span className="font-italic text-[18px] 2xl:text-[24px] pt-[24px] font-medium text-black">
            - Sanjay Venkatesh
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-cover bg-center bg_img"></div>
    </section>
  );
};

export default Section7;
