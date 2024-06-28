import React from "react";
import client1 from "@/assets/home/client1.svg";
import client2 from "@/assets/home/client2.svg";
import client3 from "@/assets/home/client3.svg";
import client4 from "@/assets/home/client4.svg";
import Image from "next/image";
import "./Section6.css";

const Testimonials = [
  {
    img: client1,
    heading: "IMP Group",
    subHeading: "Engineering",
    text: "Exceptional Service! Neviton truly went above and beyond in delivering our project. Their expertise in engineering and technology solutions surpassed our expectations. We're thrilled with the results! ",
  },
  {
    img: client2,
    heading: "IMP Group",
    subHeading: "Engineering",
    text: "Exceptional Service! Neviton truly went above and beyond in delivering our project. Their expertise in engineering and technology solutions surpassed our expectations. We're thrilled with the results! ",
  },
  {
    img: client3,
    heading: "IMP Group",
    subHeading: "Engineering",
    text: "Exceptional Service! Neviton truly went above and beyond in delivering our project. Their expertise in engineering and technology solutions surpassed our expectations. We're thrilled with the results! ",
  },
  {
    img: client4,
    heading: "IMP Group",
    subHeading: "Engineering",
    text: "Exceptional Service! Neviton truly went above and beyond in delivering our project. Their expertise in engineering and technology solutions surpassed our expectations. We're thrilled with the results! ",
  },
  {
    img: client4,
    heading: "IMP Group",
    subHeading: "Engineering",
    text: "Exceptional Service! Neviton truly went above and beyond in delivering our project. Their expertise in engineering and technology solutions surpassed our expectations. We're thrilled with the results! ",
  },
];

const Section6 = () => {
  return (
    <section id="Testimonial">
      <h4>
        <span>Our</span>Client Testimonials.
      </h4>
      <p className="subheading_1">Trust their words, not just ours</p>

      <div className="cardsGrid">
        {Testimonials.map((data, index) => (
          <div className="card" key={index}>
            <div className="card_part1">
              <Image src={data.img} alt="" />
              <div className="Card_header">
                <h2 className="Card_Heading">{data.heading}</h2>
                <h5 className="card_subHeading">{data.subHeading}</h5>
              </div>
            </div>
            <p className="card_text">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
