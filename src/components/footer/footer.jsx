import React from "react";
import {
  MapPin,
  MoveUpRight,
  Mail,
  Phone,
  Twitter,
  Linkedin,
} from "lucide-react";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import ScrollLink from "@/utlis/scrollLink";

const Footer = () => {
  return (
    <footer>
      <div id="footer--top">
        <div className="footer--row">
          {/* Links Grid */}
          <div className="footer--grid xl:w-[70%]">
            <div className="footer--col">
              <h4>Industries</h4>
              <Link href={{ pathname: "/industries", query: "0" }}>
                Aerospace Engineering
              </Link>
              <Link href={{ pathname: "/industries", query: "1" }}>
                Education
              </Link>
              <Link href={{ pathname: "/industries", query: "2" }}>
                Life Science
              </Link>
              <Link href={{ pathname: "/industries", query: "3" }}>
                Manufacturing
              </Link>
              <Link href={{ pathname: "/industries", query: "4" }}>
                {"Media & Entertainment"}
              </Link>
              <Link href={{ pathname: "/industries", query: "5" }}>
                Renewable Energy
              </Link>
            </div>

            <div className="footer--col">
              <h4>About Us</h4>
              <Link href="/about">About</Link>
              <Link href="/about">Our Team</Link>
              <Link href="/careers">Careers</Link>
              <ScrollLink href="#clients">Clients</ScrollLink>
            </div>

            <div className="footer--col">
              <h4>Showcase</h4>
              <Link href="/case-study">Success Stories</Link>
              <Link href="/blogs">Blog & News</Link>
            </div>

            <div className="footer--col">
              <h4>Services</h4>
              <ScrollLink href="#section2">Engineering</ScrollLink>
              <ScrollLink href="#section2">Information Technology</ScrollLink>
            </div>

            <div className="footer--col">
              <h4>Engineering</h4>
              <Link href={{ pathname: "/services", query: "4" }}>CAD</Link>
              <Link href={{ pathname: "/services", query: "5" }}>CAM</Link>
              <Link href={{ pathname: "/services", query: "6" }}>
                Methods Engineering
              </Link>
              <Link href={{ pathname: "/services", query: "7" }}>Tooling</Link>
            </div>

            <div className="footer--col">
              <h4>Information Technology</h4>
              <Link href={{ pathname: "/services", query: "2" }}>
                Digital & Cloud
              </Link>

              <Link href={{ pathname: "/services", query: "0" }}>
                Data & Analytics
              </Link>

              <Link href={{ pathname: "/services", query: "1" }}>
                Automation & Integration
              </Link>
              <Link href={{ pathname: "/services", query: "3" }}>
                ERP & IT infrastructure
              </Link>
            </div>
          </div>
          {/* Addresses */}
          <div className="footer--col xl:w-[30%]">
            <div className="footer--col">
              <h4>
                <MapPin color="#232dee" /> India
              </h4>
              <p>
                Neviton Softech Private Limited,Brigade Software Park, Unit #
                101,1st Floor, Block A, # 42, 27th Cross, Industrial Layout,
                Banashankari Stage II,Bengaluru, Karnataka 560070 INDIA
              </p>
              <Link
                href={"https://maps.app.goo.gl/dhFGBBkvjyD4gHcy5"}
                className="flex gap-1 items-center"
              >
                SEE ON MAP{" "}
                <MoveUpRight size={16} color="#858a8e" strokeWidth={3} />
              </Link>
            </div>

            <div className="footer--col">
              <h4>
                <MapPin color="#232dee" /> USA
              </h4>
              <p>
                Neviton Technologies Inc 3524 SILVERSIDE ROAD SUITE 35B
                WILMINGTON, DE 19810-4929 United States of America
              </p>
              {/*

                            <Link
                                href={"https://maps.app.goo.gl/dhFGBBkvjyD4gHcy5"}
                                className="flex gap-1 items-center"
                            >
                                SEE ON MAP{" "}
                                <MoveUpRight size={16} color="#858a8e" strokeWidth={3} />
                            </Link>
                                */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright text */}
      <div className="xl:hidden py-4 px-[20px] flex items-center justify-between">
        <p className="follow--us">FOLLOW US:</p>

        <div className="social-media">
          <Mail color="#456AF0" />
          <a href="tel: +91-8026713224">
            <Phone color="#456AF0" />
          </a>
          <Link href="https://www.twitter.com">
            <Image src="/twitter.svg" width={24} height={24} />
          </Link>
          <a href="https://www.linkedin.com/company/neviton-softech-pvt-ltd./">
            <Linkedin color="#456AF0" />
          </a>
        </div>
      </div>
      <div id="footer--bottom">
        <div className="social-media">
          <Link href="mailto:sales@neviton.com">
            <Mail color="#456AF0" />
          </Link>
          <Link href="tel: +91-8026713224">
            <Phone color="#456AF0" />
          </Link>
          <Link href="https://www.twitter.com">
            <Image src="/twitter.svg" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/company/neviton-softech-pvt-ltd./">
            <Linkedin color="#456AF0" />
          </Link>
        </div>
        <p>
          Copyright © 2024 | Neviton Softech Private Limited. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
