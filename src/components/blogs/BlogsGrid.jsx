import React from "react";
import blogsImage from "@/assets/blogs/blog-image.png";
import AboutCard from "../about/AboutCard";
import Link from "next/link";

const BlogsGrid = () => {
  const blogsData = [
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
    {
      img: blogsImage,
      heading:
        "Unlocking Efficiency: How Procure to Pay Transforms Procurement",
      subheading: "Apr 8, 2024",
    },
  ];
  return (
    <div className="py-32 px-24">
      <div className="flex flex-col gap-8 justify-center">
        <div>
          <div className="all-blogs">
            All <span className="all-blogs-bold">Blogs.</span>
          </div>
          <p className="blogs-results">Showing 6 results.</p>
        </div>
        <div>
          <div className="flex gap-8 w-full flex-wrap justify-center">
            {blogsData.map((imgData, index) => (
              <Link
                key={index}
                href={{ pathname: "/blogs/article", query: index }}
              >
                <AboutCard imgData={imgData} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsGrid;
