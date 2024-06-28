"use client";
import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import slide1 from "@/assets/home/slide1.jpg";
import slide2 from "@/assets/home/slide2.jpg";
import slide3 from "@/assets/home/slide3.jpg";
import slide4 from "@/assets/home/slide4.jpg";
import "./slider.css";
import Image from "next/image";
import Link from "next/link";

const SlideData = [
  {
    heading: "1. GQP 4.0",
    img: slide1,
    text: " GQP 4.0 is a software product that has been developed to track and address process risk. This allows the process to act on the risk instead of having to wait for failure. It utilizes risk-based tools that focus on all aspects of planning, product & process design, validation, process quality control & continuous improvement",
    query: "0",
  },
  {
    heading: "2. Procure to Pay",
    img: slide3,
    text: "Procure to Pay is a cutting-edge SaaS solution seamlessly integrating procurement and financial operations. With a user-friendly interface, it streamlines purchasing, invoice processing, and offers real-time financial insights, fostering collaboration for cost savings, stronger supplier relationships, and enhanced business performance.",
    query: "1",
  },
  {
    heading: "3. Document Management System",
    img: slide4,
    text: "DMS is your comprehensive solution for electronic document management. From SOPs and STPs to Specifications, Protocols, and Validation documents, our product oversees the entire life cycle—covering creation, approval, distribution, revision, retrieval, and periodic destruction.",
    query: "2",
  },
  {
    heading: "4. Cargo Loading",
    img: slide2,
    text: "Cargo Loading is a cutting-edge 3D-based loading optimization software. Seamlessly loading boxes into trucks, it factors in various parameters such as last-in-first-out based on destination order, stackability, rotatability, and truck axle weight, ensuring efficient cargo management.",
    query: "3",
  },
];

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Update the window width in state upon window resize
  useEffect(() => {
    // Set the windowWidth state to the current innerWidth of the window when the component mounts
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateWindowWidth);

    // Call it once to set initial width
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const calculateTransform = () => {
    return windowWidth > 1024
      ? `translateX(-${currSlide * 550}px)`
      : `translateX(-${currSlide * 100}vw)`;
  };

  const prevSlide = () => {
    console.log("Prev slide");
    setCurrSlide(currSlide === 0 ? SlideData.length - 1 : currSlide - 1);
  };

  const nextSlide = () => {
    console.log("Next slide");
    setCurrSlide(currSlide === SlideData.length - 1 ? 0 : currSlide + 1);
  };

  return (
    <div id="slider__container">
      <div className="slider__body">
        <div
          className="slider__slide "
          style={{ transform: calculateTransform() }}
        >
          {SlideData.map((slide, index) => (
            <div key={index} className="slide_card">
              <h4 className="card_header">{slide.heading}</h4>
              <Image
                src={slide.img}
                className="Slide_img h-[367px]"
                alt="Img"
                key={index}
              />
              <div className="card_bottom">
                <p className="pb-10 px-5 xl:px-0">{slide.text}</p>
                <button>
                  <Link href={{ pathname: "/products", query: slide.query }}>
                    LEARN MORE
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider__btn">
        <MoveLeft
          size={32}
          color="#ffffff"
          onClick={(e) => {
            prevSlide();
          }}
        />
        <MoveRight
          size={32}
          color="#ffffff"
          onClick={(e) => {
            nextSlide();
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
