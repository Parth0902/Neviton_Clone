"use client";
import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import blogsImage from "@/assets/blogs/blog-image.png";
import "./article.css";

const blogsData = [
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
  {
    heading:
      "Unlocking Efficiency: How Procure to Pay Transforms Procurement Processes",
  },
];

const Article = () => {
  const searchParams = useSearchParams();
  let [params, setParams] = useState("");
  const [pageData, setPageData] = useState([0]);

  useEffect(() => {
    const url = searchParams.toString();
    setParams(url.replace("=", ""));
  }, [searchParams]);

  useEffect(() => {
    if (params) {
      setPageData(blogsData[params]);
    } else {
      // Handle case where service is not found
      setPageData(blogsData[0]); // You can set it to an empty object or handle it differently
    }
  }, [params]);

  return (
    <div>
      <ArticleHero pageData={pageData} />
    </div>
  );
};

const ArticleHero = ({ pageData }) => {
  return (
    <div className="py-12 px-24 flex flex-col gap-4 w-full">
      <div className="article-heading">
        {"Blogs >> "}
        <span className="article-heading-title">
          Unlocking Efficiency: How Procure to Pay Transforms Procurement
          Processes
        </span>
      </div>
      <Image src={blogsImage} alt="Blog Image" />
      <div className="article-title">{pageData.heading}</div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Article />
    </Suspense>
  );
};

export default Page;
