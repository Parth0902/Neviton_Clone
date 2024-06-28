"use client";
import React from "react";
import Link from "next/link";

const ScrollLink = ({ children, onClickFn = () => {}, ...props }) => {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      {...props}
      onClick={(e) => {
        handleScroll(e);
        onClickFn();
      }}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
