"use client";
import React from "react";
import Link from "next/link";
import "./getInTouch.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const GetInTouch = () => {
  const pathname = usePathname();
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") setIsContact(true);
  }, [pathname]);
  return (
    <div className="overflow-x-hidden flex flex-col py-12 lg:py-40 px-4 lg:px-32 gap-20 items-center justify-center getInTouch">
      <p className="getInTouch_text">
        {
          "Ready to Experience Exceptional Solutions? Let's embark on a journey of innovation together."
        }
      </p>

      {isContact ? (
        <Link
          href="mailto:sales@neviton.com"
          className="getInTouch_btn btn_text p-4 md:p-6 w-[90%] hover:bg-[#DEFF80]"
        >
          <button>Email Us </button>
        </Link>
      ) : (
        <Link
          href="/contact"
          className="getInTouch_btn btn_text p-4 md:p-6 w-[90%] hover:bg-[#DEFF80]"
        >
          <button>Get in touch</button>
        </Link>
      )}
    </div>
  );
};
