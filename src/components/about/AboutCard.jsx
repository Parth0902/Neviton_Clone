import React from "react";
import Image from "next/image";
import "./ImageGrid/imageGrid.css";

const AboutCard = ({ imgData }) => {
  return (
    <div className="GridCard">
      <Image
        src={imgData.img}
        alt=""
        className="Grid_card_img"
      />
      <div className="px-4">
        <h4 id="GridCardh4" className="truncate text-ellipsis">
          {imgData.heading}
        </h4>
        <span id="GridCardSpan">{imgData.subheading}</span>
      </div>
    </div>
  );
};

export default AboutCard;
