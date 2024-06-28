"use client";
import React, { useEffect, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import "./slider.css";

const Slider = ({ Componenet, data }) => {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrSlide((currSlide) =>
        currSlide === data.length - 1 ? 0 : currSlide + 1,
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // This will clear the timer when the component unmounts
  }, []);

  const prevSlide = () => {
    console.log("Prev slide");
    setCurrSlide(currSlide === 0 ? data.length - 1 : currSlide - 1);
  };

  const nextSlide = () => {
    console.log("Next slide");
    setCurrSlide(currSlide === data.length - 1 ? 0 : currSlide + 1);
  };

  return (
    <div id="slider__container">
      <div className="slider__body z-0">
        <div
          className="slider__slide"
          style={{ transform: `translateX(-${currSlide * 100}vw)` }}
        >
          <Componenet data={data} />
        </div>
      </div>
      
      <div className="slider__btn px-20">
        <MoveLeft
          size={32}
          color="rgba(33, 38, 44, 0.30)"
          onClick={(e) => {
            prevSlide();
          }}
        />
        <MoveRight
          size={32}
          color="rgba(33, 38, 44, 0.30)"
          onClick={(e) => {
            nextSlide();
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
