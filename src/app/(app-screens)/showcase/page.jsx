"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import "./page.css";
import "@/components/home/section1/section1.css";

import c1 from "@/assets/caseStudies/c1.png";
import c2 from "@/assets/caseStudies/c2.png";
import c3 from "@/assets/caseStudies/c3.png";
import c4 from "@/assets/caseStudies/c4.png";
import c6 from "@/assets/caseStudies/c6.png";
import c7 from "@/assets/caseStudies/c7.png";
import c8 from "@/assets/caseStudies/c8.png";
import c9 from "@/assets/caseStudies/c9.png";
import c11 from "@/assets/caseStudies/c11.png";
import cs1 from "@/assets/caseStudies/cs1.png";
import cs2 from "@/assets/caseStudies/cs2.png";
import cs3 from "@/assets/caseStudies/cs3.png";
import cs4 from "@/assets/caseStudies/cs4.png";
import cs5 from "@/assets/caseStudies/cs5.png";
import cs6 from "@/assets/caseStudies/cs6.jpeg";
import c12 from "@/assets/caseStudies/Renewable_Energy.jpg";
import c13 from "@/assets/caseStudies/Music_Publication.jpg";
import c14 from "@/assets/caseStudies/c14.jpg";
import { CardCarousel } from "@/components/cardCarousel/cardCarousel";

const csData = [
  {
    img: c14,
    img2: cs6,
    heading: "AWS LANDING ZONE TO CONTROL TOWER MIGRATION",
    ProblemStatement: [
      "Migrate the existing 40 accounts from LandingZone to ControlTower.",
      "The existing Landing Zone implementation had a series of custom complex scripts tailored to the customer's specific use case.",
      "Re-use of any existing AVM templates was not possible, adding complexity to the migration process.",
    ],
    Solutions: [
      "Utilized AWS CfCT service (Customization for Control Tower) to replicate the resource provisioning methods similar to AVM templates with minimal changes.",
      "Implemented automated security, operations, and compliance policies management:",
      "Leveraged a ready AWS environment to facilitate faster cloud adoption",
      "Established preventive, detective, and compliance controls to reduce business risks.",
      "Provided an integrated dashboard for more efficient management of security, operations, and compliance policies.",
    ],
    BusinessBenefits: [
      "Accelerated AWS Cloud adoption by providing a ready AWS environment, speeding up the migration process and cloud adoption.",
      "Enhanced risk management by reducing business risks through established preventive, detective, and compliance controls.",
      "Improved efficiency in policy management through an integrated dashboard, facilitating more efficient security, operations, and compliance policies management.",
      "Detailed documentation for each process involved during migration.",
      "Automated security governance using GuardDuty, SecurityHub, and SCPs.",
      "Development and documentation of CloudFormation templates for resource provisioning through ServiceCatalog for new accounts.",
    ],
  },
  {
    img: c12,
    heading: "AWS Solutions for Automated Visual Optimization of Renewable Energy",
    ProblemStatement: [
      "Our client, a leading renewable energy management company based in North Carolina, faces challenges in efficiently managing data from widespread solar farm setups. With over 100 edge systems generating vast amounts of data, they struggle with data inefficiency and lack a robust disaster recovery plan. Additionally, they seek to integrate third-party weather forecast data and billing rates into their in-house client-facing application.",
    ],
    Solutions: [
      "Streamlined Data Uploads: Migration to AWS, utilizing S3 bucket for efficient storage and AWS Lambda for seamless data uploads from over 100 edge systems.",
      "Leveraging AWS APIs: Automation of processes using AWS APIs, reducing development work effort by over 30%.",
    ],
    BusinessBenefits: [
      "Improved Data Efficiency: Streamlined data uploads and automation result in enhanced data efficiency and accuracy.​",
      "Robust Disaster Recovery: Migration to AWS ensures robust disaster recovery capabilities, minimizing downtime and data loss risks.",
      "Enhanced Application Functionality: Integration of third-party weather forecast data and billing rates enriches the in-house client-facing application, providing real-time insights for better decision-making.",
    ],
  },
  {
    img: c13,
    heading: "AWS for Scalable and Secure Music Publishing",
    ProblemStatement: [
      "Our client, a leading music publishing company in the United States, faced challenges in scaling their application infrastructure and building resilience for their on-premise setup. Hosting multiple highly popular websites and applications, they struggled with handling cybersecurity events and aligning their infrastructure to security standards.",
    ],
    Solutions: [
      "Infrastructure Segregation: Migrated to AWS, segregating servers into different environments and public/private subnets.",
      "Resilience and Scalability: Leveraged Load Balancing and Web Application Firewalls (WAF) to enhance infrastructure resilience and scalability.",
      "Simplified Administration: Abstracted system administration complexity by providing routing and firewall controls for port ingress and egress.",
      "Secure Database Migration: Migrated the database to Oracle RDS on AWS via high-security AWS Direct Connect from on-premise to RDS servers.",
      "Application Refactoring: Refactored application code to use AWS API Gateways, leveraging AWS’s resilient and scalable REST-APIs.",
      "Cost-Effective Storage: Used AWS S3 for storing file objects, reducing on-server storage costs, and employed archival services like Glacier for long-term storage",
    ],
    BusinessBenefits: [
      "Enhanced Application Performance: Improved application response through resilient API gateways and load balancers.",
      "Cost Reduction: Reduced costs by implementing scalable infrastructure proportionate to application load and cutting down on expensive on-server storage with AWS S3.",
      "Security Compliance: Aligned client infrastructure with AWS-implemented CIS, HIPAA, and FIPS controls.",
      "Improved Uptime: AWS WAF mitigated Denial-of-Service attacks, enhancing application uptime and availability.",
      "Automated Code Deployment: Leveraged AWS CodeCommit and CodeBuild to implement version control and CI/CD for automated code builds and delivery.",
      "Cost-Efficient Archival: Enabled the use of long-term archival storage at very low cost with AWS.",
    ],
  },
  {
    img: c1,
    img2: cs5,
    heading: "Cycle Time Optimization",
    ProblemStatement: [
      "Cycle Time Reduction.",
      " Designing of Fixture for easy changing and clamping of part.",
    ],
    Solutions: [
      "Changed the machining strategy from single setup to two setups.",
      "Setup 2 fixture and machine only top face with 2 tabs on both the sides.",
      "Sequence of operation modified along with tool change.",
      "Setup 1 on the vice and machined all the sides except the bottom machining.",
    ],
    BusinessBenefits: [
      "Cycle time improvement from 25 minutes to 8 minutes.",
      "Saved 3780 hours of machine capacity in a year.",
      "Machines available capacity will be increased for more work planning.",
    ],
  },
  {
    img: c2,
    img2: cs1,
    heading: "Fixture Cost Reduction & Cycle Time Saving",
    ProblemStatement: [
      "Create the NC program as per the 3D Model.",
      "Follow tolerance as per the customer drawing.",
    ],
    Solutions: [
      "Used smaller L/D ratio tools to get good surface finish.",
      "Corner feed rate applied at start and end point of corner radius edge.",
      "Defined optimized cutting parameter by using Vericut Force.",
      "For steep surface machining areas went with max limit angle condition of machine.",
      "Maximum material removal rate condition has been applied for all cutting tools.",
      "In Setup 1, maximum material has been removed at reachable condition.",
      "In Setup-2, kept part rigidity for machining.",
    ],
    BusinessBenefits: [
      "Reduced setup time and Fixture cost.",
      "Reduced the machining time by 50% and improved production quantity.",
      "Reduced cutting tools cost.",
    ],
  },
  {
    img: c3,
    img2: cs2,
    heading: "Casting Part Machining",
    ProblemStatement: [
      "NC program for 3D model.",
      "Fixture designing for Holding casting part.",
    ],
    Solutions: [
      "Holding the casting material in fixture and creating machined butting surface for next setup.",
      "Use the tools and holders based on the complex surface.",
      "Defined optimized cutting parameter as per cutting material.",
      "Created instruction sheet for clamping part at different machining condition’s.",
      "Selected high feed cutter to machine out extra material at faster rate.",
    ],
    BusinessBenefits: [
      "Customized Fixture for both setup’s where LR and RH will be clamped.",
      "Reduced cutting tools cost.",
    ],
  },
  {
    img: c4,
    img2: cs3,
    heading: "Turn Mill",
    ProblemStatement: [
      "3D model creation as per 2D drawing",
      "NC program to 3D model",
      "Creating setups sheets and list of Tools used for each setup’s.",
    ],
    Solutions: [
      "Suggested two different approach for machining",
      "Complete Part machined in single setup.",
      "Standard Jaws for holding material in main spindle.",
      "Modified fixture for holding part in Sub spindle.",
      "Shorter cutting tools used.",
      "Defined optimized cutting parameters and Machining strategy.",
    ],
    BusinessBenefits: [
      "Suggested Tsugami Turn Mill machine for single setup.",
      "Providing complete manufacturing solutions.",
      "Increase in production quantity by reducing the machining time.",
      "Reducing the raw material cost by using Turn Mill.",
      "Reducing the cutting tool cost.",
    ],
  },
  {
    img: c6,
    heading: "COS Implementation",
    ProblemStatement: [
      "COS Implementation and 3D Verification for use in Downstream Manufacturing Applications.",
    ],
    Solutions: [
      "All Dimensions duplication as per supplied master 2D Drawings.",
      "All Part Profile Overlay of views from built 3D or updated model with supplied master 2D Drawings(digital 2D, CATIA V4 ).",
      "Build 3D Model where required.",
    ],
    BusinessBenefits: [
      "All downstream applications of Manufacturing use now 3D Model Itself as Master Data.",
      "The Input documentation errors needing revision at End Customer are identified before actual Production.",
    ],
  },
  {
    img: c7,
    heading: "Technical Data Collection for RFQ",
    ProblemStatement: [
      "To accelerate Request for Quotations activities, BOT has been introduced to provide technical data related to raw material and special process well in an advance to RFQ-Team to speed up Quotation activities",
    ],
    Solutions: [
      "RPA Team automated search and extract information from BOM and Material BOM with the creation of Material Database for the requested detail parts",
    ],
    BusinessBenefits: [
      "Increase productivity across the board",
      "Improve efficiency to generate savings",
      "Greater accuracy goals with reliable consistency",
      "Improve business data security",
      "Create a better customer service experience",
    ],
  },
  {
    img: c8,
    heading: "Masking Process WI",
    ProblemStatement: [
      "Masking & Marking process work instructions (ST BDWGs) in Excel & PDF format.",
    ],
    Solutions: [
      "Identify the region of masking and Part Marking from engineering Data",
      "Using CATIA V5, In 3D model Create Masking areas and respectively giving color code to easily identify for the operators.",
      "Using CATIA V5, Create CAT Drawing Showing views like ISO, Bottom, Back Side if required detailed views along with Masking dimensions.",
      "Each masking process is represented graphically using a set of symbols.",
    ],
    BusinessBenefits: [
      "Reduce errors and help to standardize processes across a manufacturing company.",
      "Improved productivity, efficiency and quality.",
      "Pictorial representation helps the operator to finish the Masking operations quickly there by reducing the actual time required to refer multiple documents.",
    ],
  },
  {
    img: c9,
    img2: cs4,
    heading: "Reduction in Raw Material Cost",
    ProblemStatement: [
      "Designing a fixture For 2 Steel part in a single billet accommodating LH and RH parts with Water jet.",
    ],
    Solutions: [
      "Locating Two Parts in the Billet to make the Equal Waterjet for Each Part.",
      "Designing Single Fixture which can be used for Both parts in each operation..",
      "Fixture was designed which can also used for Stress relieving Operation.",
    ],
    BusinessBenefits: [
      "Reduction in raw material cost using Waterjet billet.",
      "Minimum fixture Components to reduce fixture weight and cost.",
    ],
  },
  {
    img: c11,
    heading: "Automated visual inspection using COGNEX",
    ProblemStatement: [
      "Automatic Inspection of assembly parts using computer vision (CV) and artificial intelligence (AI) techniques. Introduce intelligence to quality inspection systems.",
    ],
    Solutions: [
      "Cognex Software:- Provides state-of-the-art CV & AI techniques under one roof. Good User Interface to view and inspect parts. Can be tightly integrated with industrial PLCs and camera. A master reference part is programmed into the software to which every other part should be compared.",
      "Linear Axis System:- Enables parts to be inspected with little human intervention. 10m long Delrin bed - Driven by servomotor, chain drive and control units. Moves linearly in one axis while triggering camera and taking images - Capable of housing up to 8 cameras and light accessories. Can talk to Cognex cameras using PLCs and PoE.",
    ],
    BusinessBenefits: [
      "Reduction of Human intervention, inspection time which increases the productivity.​",
      "Identification of missing sub-assembly parts & helps in finding out parts which aren’t in specifications​.",
    ],
  },
  {
    img: c1,
    heading: "RPA Solution for Aerospace Manufacturing",
    ProblemStatement: [],
    Solutions: [],
    BusinessBenefits: [],
  },
];

export const Showcase = () => {
  const searchParams = useSearchParams();
  let [params, setParams] = useState("");
  const [pageData, setPageData] = useState(csData[0]);

  useEffect(() => {
    const url = searchParams.toString();
    setParams(url.replace("=", ""));
  }, [searchParams]);

  useEffect(() => {
    // Find the service in csData based on params
    if (params) {
      setPageData(csData[params]);
    } else {
      // Handle case where service is not found
      setPageData(csData[0]); // You can set it to an empty object or handle it differently
    }
  }, [params]);

  const otherCsData = params
    ? csData.filter((_, i) => params !== i.toString())
    : csData.filter((_, i) => 0 !== i);
  return (
    <div>
      <section>
        <div className="bg-hero section1--part1">
          <div className="flex items-center justify-between h-full py-12 px-4 md:px-8 lg:px-24">
            <div className="space-y-24">
              <h1 className="section-heading1">Success Stories</h1>
              <h1 className="section-heading2">{pageData.heading}</h1>
            </div>
            <div className="hidden lg:block self-end scroll-text">
              Scroll to Explore
            </div>
          </div>
          <div className="bg"></div>
        </div>
      </section>
      <div className="p-12 flex justify-center">
        <Image
          className="h-full rounded-lg"
          src={pageData?.img}
          alt=""
          width={750}
        ></Image>
      </div>
      {pageData.heading !== "RPA Solution for Aerospace Manufacturing" ? (
        <div className="bg-[#C2D9E8] point_heading divide-y-2 divide-[#225D53]">
          <div className="px-4 md:px-8 py-12  flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
            <span className="xl:flex-1">Problem Statement</span>
            <div className="points px-8 lg:p-0 xl:flex-1">
              <ul className="list-disc">
                {pageData.ProblemStatement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 md:px-8 py-12  flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
            <span className="xl:flex-1">Solutions</span>
            <div className="points px-8 lg:p-0 xl:flex-1">
              <ul className="list-disc">
                {pageData.Solutions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 md:px-8 py-12  flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
            <span className="xl:flex-1">Business Benefits</span>
            <div className="points px-8 lg:p-0 xl:flex-1">
              <ul className="list-disc">
                {pageData.BusinessBenefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <CaseStudyTable />
      )}

      <div className="py-5 flex justify-center">
        {pageData.img2 && (
          <Image
            className="h-full rounded-xl"
            src={pageData?.img2}
            alt="img"
            width={750}
          ></Image>
        )}
      </div>

      <div className="flex flex-wrap">
        <div className="w-full p-6 bg-[#FFDD74]">
          <div className="success_subheading">
            Other{" "}
            <span className="success_subheading_bold">Success Stories</span>
          </div>
          <CardCarousel slideData={otherCsData} isProductSlider={false} />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Showcase />
    </Suspense>
  );
};

export default Page;

const tableData = [
  {
    businessProcess: "RFQ",
    solution:
      "Rapid and accurate break down of assemblies and collection of raw material, manufacturing process and specifications from BOM documents for bid response",
    keyBenefit:
      "Increased Productivity (speed) by 83% – Approx.1 minute per part through BOT Vs 6 minutes per part through Manual",
  },
  {
    businessProcess: "Intra Company PO",
    solution:
      "Automate Intra-Company PO creation from UACE to UACV in EpicorRO & create Sales Order in EpicorVN (Spirit)",
    keyBenefit:
      "Increased Productivity (speed) by 67% – Approx. 10 minutes per SO through BOT Vs 30 minutes per SO through Manual",
  },
  {
    businessProcess: "Shipping (Logistics)",
    solution:
      "Automate end to end shipping process – Manifest (as input)-> Packing Slip -> BOL -> Invoice",
    keyBenefit:
      "Increased Productivity (speed) by 73% – Approx. 8 mins per shipment through BOT Vs 30 minutes per shipment Manually",
  },
  {
    businessProcess: "First Article Inspection (FAI)",
    solution:
      "Automatic updating of critical FAI data into customer systems (Net-Inspect Form 1 & 2)",
    keyBenefit:
      "Increased Productivity (speed) by 92% – Approx. 50 seconds per part through BOT Vs 10 minutes per part through Manual",
  },
  {
    businessProcess: "Data import for Advanced Supplier List (ASL) app",
    solution:
      "Automated process to extract data from various Issue forms (scanned PDFs from suppliers) and load to an excel template, which will be imported into ASL app. Implemented using AWS Textract (Machine Learning service) to automate and extracts handwritten & scan pdfs",
    keyBenefit:
      "Increased Productivity (speed) by 70% – Approximately 5 minutes per form through BOT Vs 15 minutes per form through Manual",
  },
  {
    businessProcess: "Purchase Order (PO)",
    solution:
      "Automated processing of PO documents to generate SO in Epicor for Spirit, Airbus, PAG, Aircraft & RUAG customers",
    keyBenefit:
      "Increased Productivity (speed) by 72 % – Approx.7 minutes per PO through BOT Vs 25 minutes per PO through Manual process",
  },
  {
    businessProcess: "EPICOR Part Data Entry",
    solution: "Rapid and accurate population of customer inputs into ERP",
    keyBenefit:
      "Increased Productivity (speed) by 75% – Approx. 10 minutes per part through BOT Vs 40 minutes per part through Manual",
  },
  {
    businessProcess: "Substitute Material",
    solution:
      "Rapid and accurate collection of substitute material from customer BOM’s to take more informed decision regarding procurement of raw materials. This is used for RFQ parts to make informed bidding.",
    keyBenefit:
      "Increased Productivity (speed) by 80% – Approx. 1 minute per part through BOT Vs 5 minutes per part through Manual",
  },
  {
    businessProcess: "Process Checklist",
    solution:
      "Creation of a Process checklist excel for a given part with all the customer requirement for that part as per BOM, so that WSD team can make sure that the part produced checks all the requirements",
    keyBenefit:
      "Increased Productivity (speed) by 67% – Approx. 15 minutes per part through BOT Vs Approx. 45 minutes per part through Manual",
  },
  {
    businessProcess: "Watermark obsolete files",
    solution:
      "Watermark the obsolete files. Input data is pdf, tiff etc files and output is the watermarked files which are no longer required in work package. Also, move the unnecessary files to archive folder location",
    keyBenefit:
      "Increased Productivity (speed) by 80% - Approx 2 minutes for each file VS 10 minutes to search and move the file manually",
  },
  {
    businessProcess: "Doc-Copy/Transfer",
    solution:
      "Automatic downloading ERP files from Pro.File app, transferring to WP based on certain condition, generating unmoved and consolidated files log report",
    keyBenefit:
      "Increased Productivity (speed) by 73% - 4 times faster compared to manual work. Bot takes 4 minutes whereas manual work takes 15 minutes",
  },
  {
    businessProcess: "Process Applicability",
    solution:
      "Automatically extract the required information from BOM pdf files and save them in dedicated excel sheet",
    keyBenefit:
      "Increased Productivity (speed) by ~80% - 50 files will be extracted in 20 minutes but manually to extract data from 50 files it will take hours",
  },
  {
    businessProcess: "Process Checklist",
    solution:
      "Search text on the engineering drawings and images. Input is image files, and the output is highlighted search results across the image",
    keyBenefit:
      "Increased Productivity (speed) by 90% - Approx. 1 minute per text search through BOT Vs 10 minutes per text search through Manual",
  },
  {
    businessProcess: "Work Package clean-up",
    solution:
      "Moving the unused docs from the work packages with reference to the docs linked in Epicor. Input in excel sheet with path and output is cleaned work package folder",
    keyBenefit:
      "Increased Productivity (speed) by 95% - Approx 1 minute to move 50 files Vs 20 minutes if moved manually",
  },
];

const CaseStudyTable = () => {
  return (
    <div className="bg-[#C2D9E8] point_heading">
      <div className="px-4 md:px-8 py-12 flex flex-col gap-4 xl:flex-row xl:items-center justify-between">
        <table className="text-black w-full bg-[#c2d9e8]">
          <thead className="bg-[#2B5F85] text-white">
            <th className="border-r py-2">Business Process</th>
            <th className="border-l border-r py-2">Solution</th>
            <th className="border-l py-2">Key Benefit</th>
          </thead>
          {tableData.map((item, i) => {
            return (
              <tr className="text-[#2b5f85]" key={i}>
                <td className="p-2 border border-[#2B5F85]">
                  {item.businessProcess}
                </td>
                <td className="p-2 border border-[#2B5F85]">{item.solution}</td>
                <td className="p-2 border border-[#2B5F85]">
                  {item.keyBenefit}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
