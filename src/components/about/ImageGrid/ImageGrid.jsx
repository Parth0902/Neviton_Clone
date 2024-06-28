import React from "react";
import "./imageGrid.css";
import AboutCard from "../AboutCard";
import CaseStudyCard from "@/components/CaseStudyCard";

const ImageGrid = ({data, isCaseStudy}) => {
    return (
        <div id="grid">
            {data.map((imgData, index) =>
                isCaseStudy ? (
                    <CaseStudyCard key={index} imageUrl={imgData.img} heading={imgData.heading}
                                   subheading={imgData.subheading} link={"/showcase"} index={index} isCarousel={false}/>
                ) : (
                    <AboutCard key={index} imgData={imgData}/>
                ),
            )}
        </div>
    );
};

export default ImageGrid;