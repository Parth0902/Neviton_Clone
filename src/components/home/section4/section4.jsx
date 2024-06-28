import React from "react";
import Image from "next/image";

import { MovingLogos } from "@/components/aceternity/MovingLogos";
import cardImg1 from "@/assets/home/CardImg1.jpeg";
import cardImg2 from "@/assets/home/CardImg2.jpeg";
import cardImg3 from "@/assets/home/CardImg3.jpeg";
import cardImg4 from "@/assets/home/CardImg4.jpeg";
import cardImg5 from "@/assets/home/CardImg5.jpeg";
import cardImg6 from "@/assets/home/CardImg6.jpeg";
import client1 from "@/assets/home/OurClients/Engineering/client1.png";
import client2 from "@/assets/home/OurClients/Engineering/client2.png";
import client3 from "@/assets/home/OurClients/Engineering/client3.png";
import client4 from "@/assets/home/OurClients/Engineering/client4.png";
import client5 from "@/assets/home/OurClients/Engineering/client5.png";
import client6 from "@/assets/home/OurClients/Engineering/client6.png";
import client7 from "@/assets/home/OurClients/Engineering/client7.png";
import client8 from "@/assets/home/OurClients/Engineering/client8.png";
import client9 from "@/assets/home/OurClients/Engineering/client9.png";
import client10 from "@/assets/home/OurClients/Engineering/client10.png";
import client11 from "@/assets/home/OurClients/Engineering/client11.png";
import client12 from "@/assets/home/OurClients/IT/client12.jpeg";
import client13 from "@/assets/home/OurClients/IT/client13.png";
import client14 from "@/assets/home/OurClients/IT/client14.png";
import client15 from "@/assets/home/OurClients/IT/client15.png";
import client16 from "@/assets/home/OurClients/IT/client16.png";
import client17 from "@/assets/home/OurClients/IT/client17.svg";
import client18 from "@/assets/home/OurClients/Engineering/client18.webp";
import client19 from "@/assets/home/OurClients/Engineering/client19.webp";
import client20 from "@/assets/home/OurClients/Engineering/client20.png";
import client21 from "@/assets/home/OurClients/Engineering/client21.png";
import "./section4.css";
import Link from "next/link";

const data = [
  {
    img: cardImg5,
    heading: "Aerospace Engineering",
    text: "Design, Methods Engineering, Tooling, CNC Programming & Production Support",
    href: { pathname: "/industries", query: "0" },
  },
  {
    img: cardImg4,
    heading: "Education",
    text: "Early childhood Education, Health, Nutritional, Social, and other Family Engagement services & Cloud support for Educational Institutions",
    href: { pathname: "/industries", query: "1" },
  },
  {
    img: cardImg3,
    heading: "Life Science",
    text: "Product Launch, Medical Affairs & Pharmacovigilance, Supply Chain Management & Document Management",
    href: { pathname: "/industries", query: "2" },
  },
  {
    img: cardImg1,
    heading: "Manufacturing",
    text: "Tool Manufacturing, Automatic Inspection Solution & Industry 4.0 Solutions",
    href: { pathname: "/industries", query: "3" },
  },
  {
    img: cardImg6,
    heading: "Media & Entertainment",
    text: "Music Publishing & Recording, Royalty & Journal Processing, Data Cleansing & Alignment, COTS Products Support",
    href: { pathname: "/industries", query: "4" },
  },
  {
    img: cardImg2,
    heading: "Renewable Energy",
    text: "Solar farm setups, Inverter specifics, Energy meter readings, Sun positioning",
    href: { pathname: "/industries", query: "5" },
  },
];

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
  client21,
];


const IndustryCard = ({ data }) => {
  return (
      <Link href={data.href}>
        <div className="section4_card">
          <Image src={data.img} alt="card Img" className="card_img" />
          <h4>{data.heading}</h4>
          <p>{data.text}</p>
        </div>
      </Link>
  );
};

const section4 = () => {
  return (
    <section id="section4">
      <h4 className="section4__header">
        <span>The</span> <strong>Industries</strong>.
      </h4>
      <p className="section4__text">
        Revolutionizing multiple sectors with innovative solutions tailored to
        their unique demands, Neviton drives forward progress and excellence
        across industries.
      </p>

      <div className="section4__cardSection">
        <div className="cardSection_col" id="cardSection_col1">
          {data.slice(0, 2).map((item, i) => {
            return <IndustryCard data={item} key={i} />;
          })}
        </div>

        <div className="cardSection_col" id="cardSection_col2">
          {data.slice(2, 4).map((item, i) => {
            return <IndustryCard data={item} key={i} />;
          })}
        </div>

        <div className="cardSection_col" id="cardSection_col3">
          {data.slice(4, 6).map((item, i) => {
            return <IndustryCard data={item} key={i} />;
          })}
        </div>
      </div>

      <h4 id="clients" className="section4_bottom_header text-2xl lg:text-3xl">
        Clients
      </h4>
      <MovingLogos className="" color="#2A2C31" logos={logos} />
    </section>
  );
};

export default section4;


