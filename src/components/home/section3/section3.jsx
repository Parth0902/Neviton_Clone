import React from "react";
import { CardCarousel } from "@/components/cardCarousel/cardCarousel";
import "./section3.css";

import slide1 from "@/assets/home/slide1.jpg";
import slide2 from "@/assets/home/slide2.jpg";
import slide3 from "@/assets/home/slide3.jpg";
import slide4 from "@/assets/home/slide4.jpg";

const slideData = [
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
const section3 = () => {
  return (
    <section id="section3">
      <h4 className="section__header">
        <span className="light_header">Our</span> Products.
      </h4>
      {/* <Slider /> */}
      <div className="w-full p-6">
        <CardCarousel slideData={slideData}  isProductSlider = {true}/>
      </div>
    </section>
  );
};

export default section3;
