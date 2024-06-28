import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudyCard = ({
  imageUrl,
  heading,
  subheading,
  index,
  link = "/showcase",
  isCarousel = true,
}) => {
  return (
    <Link href={{ pathname: link, query: index }}>
      <div className={isCarousel ? "GridCardCarousel " : "GridCard "}>
        <Image
          src={imageUrl}
          alt=""
          className="w-full object-cover h-[280px] 2xl:h-[320px] rounded-t-2xl  "
        />
        <div className="rounded-b-2xl bg-white p-2">
          <h4 id="GridCardh4" className="truncate">
            {heading}
          </h4>
          <span id="GridCardSpan">{subheading}</span>
        </div>
      </div>
    </Link>
  );
};


export default CaseStudyCard;