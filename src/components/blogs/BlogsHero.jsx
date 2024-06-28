import React from "react";
import Image from "next/image";
import blogsImage from "@/assets/blogs/blog-image.png";

const BlogsHero = () => {
  return (
    <div className="flex-col-reverse xl:flex-row px-4 lg:px-12 xl:px-24 py-40 gap-10 xl:gap-0 bg-[#FABD91] flex items-center justify-between">
      <div className="xl:w-1/2">
        <p className="blogs-hero-title">BLOGS</p>
        <div className="blogs-hero-subheading">Unlocking Efficiency: </div>
        <div className="blogs-hero-text">
          How Procure to Pay Transforms Procurement Processes
        </div>
        <p className="blogs-hero-description">
          Explore how Procure to Pay solutions streamline purchasing, automate
          invoice processing, provide real-time insights, and enhance
          collaboration, leading to improved efficiency and strategic
          decision-making.
        </p>
        <button className="px-8 py-4 rounded-lg bg-[#2A2C31] my-12 blogs-read-more-button">
          READ MORE
        </button>
      </div>
      <Image src={blogsImage} width={800} height={400} alt="Blogs Image" />
    </div>
  );
};

export default BlogsHero;
