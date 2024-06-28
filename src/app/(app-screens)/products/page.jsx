"use client";
import "./products.css";
import { ProductsHero } from "@/components/products/ProductsHero";
import { MovingLogos } from "@/components/aceternity/MovingLogos";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";

// tools & technnologies
import linux from "@/assets/logos/linux.png";
import java from "@/assets/logos/java.png";
import restapi from "@/assets/logos/rest_api.png";
import talend from "@/assets/logos/Talend.png";
import powerBi from "@/assets/logos/power-bi.png";
import aws from "@/assets/logos/aws.png";
import awsIot from "@/assets/logos/aws-iot.png";
import awsDevops from "@/assets/logos/aws-devops.png";
import pythonLogo from "@/assets/logos/python.png";
import reactLogo from "@/assets/logos/react.png";
import microsoftAzure from "@/assets/logos/Microsoft_Azure.png";
import microsoftSqlServer from "@/assets/logos/microsoft-sql-server.png";
import nodejsLogo from "@/assets/logos/nodejs.png";
import office365Logo from "@/assets/logos/office-365.png";
import AWS_S3 from '@/assets/logos/AWS_S3.png';
import AWS_EC2 from '@/assets/logos/AWS_EC2.png';
import Mysql from '@/assets/logos/Mysql.png';
import HTML from '@/assets/logos/HTML5.png';
import CSS from '@/assets/logos/CSS.png';
import Sqlite from '@/assets/logos/sqlite.jpeg';
import Python from '@/assets/logos/Python_.jpeg';
import js from "@/assets/logos/js_3.jpeg";


import p1Img1 from "@/assets/Products/NevitonIcons/GQP/8D.png";
import p1Img2 from "@/assets/Products/NevitonIcons/GQP/aggregator.png";
import p1Img3 from "@/assets/Products/NevitonIcons/GQP/competancyManagement.png";
import p1Img4 from "@/assets/Products/NevitonIcons/GQP/correctiveActions.png";
import p1Img5 from "@/assets/Products/NevitonIcons/GQP/FMEA.png";
import p1Img6 from "@/assets/Products/NevitonIcons/GQP/LessonLearned.png";
import p1Img7 from "@/assets/Products/NevitonIcons/GQP/LPA.png";
import p1Img8 from "@/assets/Products/NevitonIcons/GQP/StatisticalProcessControl.png";
import p2Img1 from "@/assets/Products/NevitonIcons/DMS/BulkUploadsProvisionwithTags&Keywords.png";
import p2Img2 from "@/assets/Products/NevitonIcons/DMS/DocumentAccessControl.png";
import p2Img3 from "@/assets/Products/NevitonIcons/DMS/DocumentCreationAndMigration.png";
import p2Img4 from "@/assets/Products/NevitonIcons/DMS/DocumentPrintControl.png";
import p2Img5 from "@/assets/Products/NevitonIcons/DMS/DocumentReviewAndApproval.png";
import p2Img6 from "@/assets/Products/NevitonIcons/DMS/DocumentStorage&AccessUsingAPIs.png";
import p2Img7 from "@/assets/Products/NevitonIcons/DMS/DynamicWorkflow.png";
import p2Img8 from "@/assets/Products/NevitonIcons/DMS/EmailNotification&TaskManagement.png";
import p2Img9 from "@/assets/Products/NevitonIcons/DMS/PluggableWorkflow.png";
import p2Img10 from "@/assets/Products/NevitonIcons/DMS/SmartSearchBasedOnTags&Keywords.png";
import p2Img11 from "@/assets/Products/NevitonIcons/DMS/timeframe.png";
import p2Img12 from "@/assets/Products/NevitonIcons/DMS/WorkflowMappingwithUploadedExternalDocument.png";
import p3Img1 from "@/assets/Products/NevitonIcons/CargoLoading/3DVisualization.png";
import p3Img2 from "@/assets/Products/NevitonIcons/CargoLoading/AdditionalBoxProvision.png";
import p3Img3 from "@/assets/Products/NevitonIcons/CargoLoading/AxleLoadCalculation.png";
import p3Img4 from "@/assets/Products/NevitonIcons/CargoLoading/DataUpload.png";
import p3Img5 from "@/assets/Products/NevitonIcons/CargoLoading/DestinationSequences.png";
import p3Img6 from "@/assets/Products/NevitonIcons/CargoLoading/DetailedReports.png";
import p3Img7 from "@/assets/Products/NevitonIcons/CargoLoading/FlexibleLoadingOptions.png";
import p3Img8 from "@/assets/Products/NevitonIcons/CargoLoading/IntuitiveInterface.png";
import p3Img9 from "@/assets/Products/NevitonIcons/CargoLoading/RealTimeMonitoring.png";
import p3Img10 from "@/assets/Products/NevitonIcons/CargoLoading/TruckSelection.png";
import GPQ from "@/assets/Products/GQP.webp";
import DMS from "@/assets/Products/DMS.webp";
import Cargo from "@/assets/Products/machine.png";
import ProcureToPay from "@/assets/Products/ProcureToPay.png";
import FullSlider from '@/components/FullSlider/page.jsx';
import a1 from '@/assets/Products/APQP/1.JPG';
import a2 from '@/assets/Products/APQP/2.JPG';
import a3 from '@/assets/Products/APQP/3.JPG';
import a4 from '@/assets/Products/APQP/4.JPG';
import a5 from '@/assets/Products/APQP/5.JPG';
import a6 from '@/assets/Products/APQP/6.JPG';
import a7 from '@/assets/Products/APQP/7.JPG';
import c1 from '@/assets/Products/cargosnaps/1.jpg';
import c2 from '@/assets/Products/cargosnaps/2.jpg';
import c3 from '@/assets/Products/cargosnaps/3.jpg';
import c4 from '@/assets/Products/cargosnaps/4.jpg';
import c5 from '@/assets/Products/cargosnaps/5.jpg';
import c6 from '@/assets/Products/cargosnaps/6.jpg';
import d1 from '@/assets/Products/DMS/1.jpg';
import d2 from '@/assets/Products/DMS/2.jpg';
import d3 from '@/assets/Products/DMS/3.jpg';
import d4 from '@/assets/Products/DMS/4.jpg';
import d5 from '@/assets/Products/DMS/5.jpg';
import v1 from '@/assets/Products/VendorPortal/v1.jpg'
import v2 from '@/assets/Products/VendorPortal/v2.jpg'
import v3 from '@/assets/Products/VendorPortal/v3.jpg'
import v4 from '@/assets/Products/VendorPortal/v4.jpg'
import v5 from '@/assets/Products/VendorPortal/v5.jpg'
const techstack1=[nodejsLogo,reactLogo,AWS_S3,AWS_EC2,Mysql,HTML,CSS];
const techstack2=[pythonLogo,js,AWS_S3,AWS_EC2,Sqlite,HTML,CSS];
const productsData = [
    {
        heading: "GQP 4.0",
        Image: GPQ,
        slider:[a1,a2,a3,a4,a5,a6,a7],
        subtitle:
            "Unlock the power of proactive risk management with GQP 4.0! Our software is meticulously crafted to track and address process risks, empowering you to act swiftly and decisively before issues escalate. From planning and design to validation and continuous improvement, GQP offers a comprehensive suite of risk-based tools that revolutionize your approach to quality control. Experience a new level of efficiency and control in your operations with GQP 4.0 – the ultimate solution for process risk management.",
        highlights: [
            {
                title: "Digital Transformation of Global Manufacturing Supply Chain",
                subtitle:
                    "ransform the manufacturing supply chain globally with stability, control, and repeatability through the five phases of GQP.",
            },
            {
                title: "Real-Time Collaboration and Proactive Intervention",
                subtitle:
                    "Facilitate real-time collaboration and proactive intervention through seamless systems integration and advanced data analytics.",
            },
            {
                title: "Aligning with Industry 4.0",
                subtitle:
                    "Integrate with Industry 4.0 principles and technologies, leveraging advancements like automation and real-time analytics.",
            },
            {
                title: "Secure, Encrypted, IoT-Enabled Software Solutions",
                subtitle:
                    "Provide secure, encrypted, and IoT-enabled software solutions to embed process stability, control, and repeatability throughout the product lifecycle.",
            },
            {
                title: "Comprehensive GQP 4.0 Product Suite",
                subtitle:
                    "Offer a comprehensive suite of modules covering all aspects of process risk management, ensuring holistic risk mitigation and operational excellence.",
            },
            {
                title: "Cloud-Based Infrastructure",
                subtitle:
                    "Utilize cloud computing technology for scalability, accessibility, and flexibility.",
            },
            {
                title: "Multi-Tenancy Architecture",
                subtitle:
                    "Offer multi-tenancy architecture for optimized resource utilization and reduced operational costs.",
            },
            {
                title: "Predictive Risk Management",
                subtitle:
                    "Employ predictive logic and risk-based thinking for proactive risk mitigation.",
            },
            {
                title: "Configurable Alerts",
                subtitle:
                    "Provide configurable alarms and alerts for timely corrective actions.",
            },
            {
                title: "Modular Flexibility",
                subtitle:
                    "Feature loosely coupled modules for configuration flexibility and scalability.",
            },
        ],
        features: [
            {
                title: "Statistical Process Control (SPC)",
                subtitle:
                    "Utilize statistical methods to monitor and control process variability.",
                icon: p1Img8,
            },
            {
                title: "8 Disciplines (8D)",
                subtitle:
                    "Employ structured problem-solving methodology for resolving complex issues.",
                icon: p1Img1,
            },
            {
                title: "Failure Mode Effect Analysis (FMEA)",
                subtitle:
                    "Conduct comprehensive analysis to identify potential failure modes and prioritize corrective actions.",
                icon: p1Img5,
            },
            {
                title: "Layered Process Audit (LPA)",
                subtitle:
                    "Conduct proactive auditing to verify process compliance and identify areas for improvement.",
                icon: p1Img7,
            },
            {
                title: "Lesson Learned",
                subtitle:
                    "Capture and disseminate valuable insights and experiences to foster continuous learning.",
                icon: p1Img6,
            },
            {
                title: "Corrective Actions",
                subtitle:
                    "Streamline the process for identifying and implementing corrective actions.",
                icon: p1Img4,
            },
            {
                title: "Aggregator",
                subtitle:
                    "Provide a centralized platform for aggregating and consolidating data from various sources.",
                icon: p1Img2,
            },
            {
                title: "Competency Management",
                subtitle:
                    "Systematically assess, develop, and manage employee competencies and skills.",
                icon: p1Img3,
            },
        ],
    },
    {
        heading: "Procure to Pay",
        Image: ProcureToPay,
        slider:[v1,v2,v3,v4,v5],
        techStack:[],
        subtitle:
            "Experience seamless procurement like never before with our cutting-edge solution, Procure to Pay. Fully integrated with your existing SAP system, P2P simplifies listing products, viewing purchase orders, uploading invoices, and updating shipment notifications. Track the entire flow from start to finish, receive timely email notifications, and stay on top of your tasks with periodic reminders. Elevate your procurement experience with Procure to Pay today!",
        highlights: [
            {
                title: "Complete Visibility from Purchase Requisition to Payment",
                subtitle:
                    "Gain end-to-end visibility into the procurement process, ensuring transparency and accountability at every stage.",
            },
            {
                title: "Automated Approval Workflows and Actionable Insights",
                subtitle:
                    "Streamline approval workflows, deliver actionable insights, and enable quicker decision-making with reduced manual intervention.",
            },
            {
                title: "Centralized and Unified Platform for Multiple Business Units",
                subtitle:
                    "Serve as a centralized platform across multiple business units, facilitating seamless collaboration and communication.",
            },
            {
                title: "Real-Time Access to Order Statuses and Payment Schedules",
                subtitle:
                    "Offers real-time access to order statuses and payment schedules, ensuring operational efficiency and timely transaction processing.",
            },
            {
                title: "Accuracy and Consistency of GRIR Reports",
                subtitle:
                    "Ensure the accuracy and consistency of Goods Receipt Invoice Receipt (GRIR) reports, minimizing errors and enhancing financial control.",
            },
            {
                title:
                    "Seamless Integration with SAP for Efficient Payment Processing",
                subtitle:
                    "Integrate seamlessly with SAP for efficient payment processing, ensuring compliance with accounting standards and enhancing transaction accuracy.",
            },
            {
                title: "Cost Savings Compared to SAP",
                subtitle:
                    'Provide significant savings in "per user" license costs compared to SAP, offering a cost-effective front end to ERP systems with robust procurement functionalities.',
            },
            {
                title: "Highly Intuitive GUI for Easy Purchasing",
                subtitle:
                    "Offer a highly intuitive graphical user interface (GUI) designed for buyers, simplifying the purchasing process and enhancing user experience.",
            },
        ],
        features: [
            {
                title: "Buying Channel Management",
                subtitle:
                    "Centralizes management of multiple buying channels in one platform, with E-catalogue, product-to-multiple vendors mapping, service catalogue, and materials.",
                icon: p2Img1,
            },
            {
                title: "Requisition Management",
                subtitle:
                    "Simplifies requisition creation and approval, including vendor PR confirmation and budget tracking, ensuring smooth workflow and compliance.",
                icon: p2Img2,
            },
            {
                title: "Order Management",
                subtitle:
                    "Streamlines order creation, tracking, and supplier management for timely procurement fulfilment.",
                icon: p2Img3,
            },
            {
                title: "Order Receipt",
                subtitle:
                    "Manages receipt processes including shipping notices, invoices, quality inspection, and discrepancies handling, ensuring accuracy and accountability.",
                icon: p2Img4,
            },
            {
                title: "Invoice Receipt Processing",
                subtitle:
                    "Automates invoice receipt, approval, and exception handling, enhancing efficiency and reducing errors.",
                icon: p2Img5,
            },
            {
                title: "Payment Processing",
                subtitle:
                    "Provides transactional history, and statement of accounts, ensuring transparency and control over financial transactions.",
                icon: p2Img6,
            },
            {
                title: "Analytics and Reporting",
                subtitle:
                    "Provides actionable insights into procurement performance, spending trends, and compliance metrics.",
                icon: p2Img7,
            },
        ],
    },
    {
        heading: "Document Management System (DMS)",
        Image: DMS,
        slider:[d1,d2,d3,d4,d5],
        techStack:[js,Python,AWS_S3,AWS_EC2,Sqlite,HTML,CSS],
        subtitle:
            "Are you tired of sifting through endless piles of paperwork? Say goodbye to document chaos with our Document Management System (DMS). Our cutting-edge solution offers a seamless way to organize, secure, and access your critical documents with ease. From creation to approval, distribution, and revision, our platform automates every step of the document lifecycle. Collaborate effortlessly with team members, track changes in real-time, and ensure version control with our intuitive interface. Worried about compliance and security? Don't be. Our DMS comes equipped with robust security features and compliance protocols, keeping your sensitive information safe and sound.",
        highlights: [
            {
                title: "Maximum Security and Compliance",
                subtitle:
                    "Ensure adherence to industry standards with a strong regulatory framework and controlled templates utilizing 256 bit encryption",
            },
            {
                title: "Collaborative Authoring and Reviewing",
                subtitle:
                    "Enable multiple stakeholders to contribute to document creation and review while maintaining control and versioning integrity.",
            },
            {
                title: "Digital Signature and Print Control",
                subtitle:
                    "Ensure document authenticity and prevent unauthorized printing with digital signatures and controlled print mechanisms.",
            },
            {
                title: "Electronic Management of Document Review and Approval",
                subtitle:
                    "Streamline document review and approval processes electronically for improved efficiency and traceability.",
            },
            {
                title: "Electronic Retrieval, Issuance, and Validation",
                subtitle:
                    "Effortlessly issue and validate documents electronically, ensuring security and compliance.",
            },
        ],
        features: [
            {
                title: "Dynamic Workflow Creation",
                subtitle:
                    "Empower users to create customized workflows tailored to specific business processes and requirements.",
                icon: p2Img7,
            },
            {
                title: "Timeframe & Alert Association",
                subtitle:
                    "Associate timeframes with workflow stages and trigger alerts to relevant stakeholders based on predefined conditions.",
                icon: p2Img11,
            },
            {
                title: "Document Creation & Modification",
                subtitle:
                    "Facilitate the creation and modification of documents within the system to maintain accuracy and relevance.",
                icon: p2Img3,
            },
            {
                title: "Pluggable Workflow Association",
                subtitle:
                    "Integrate workflows seamlessly with existing systems or processes for maximum efficiency.",
                icon: p2Img9,
            },
            {
                title: "Document Review & Approval Function with Remarks",
                subtitle:
                    "Provide a structured process for document review and approval, allowing users to provide feedback and remarks.",
                icon: p2Img5,
            },
            {
                title: "Bulk Uploads Provision with Tags & Keywords",
                subtitle:
                    "Upload multiple documents simultaneously and assign relevant tags and keywords for efficient organization.",
                icon: p2Img1,
            },
            {
                title: "Workflow Mapping with Uploaded External Document",
                subtitle:
                    "Integrate workflows with externally uploaded documents for comprehensive process management.",
                icon: p2Img12,
            },
            {
                title: "Document Storage & Access Using APIs",
                subtitle:
                    "Offer programmable interfaces for seamless document storage and retrieval, enabling integration with external applications.",
                icon: p2Img6,
            },
            {
                title: "Document Access Control",
                subtitle:
                    "Implement granular access controls based on user roles and permissions to safeguard sensitive information.",
                icon: p2Img2,
            },
            {
                title: "Document Print Control",
                subtitle:
                    "Manage document printing activities and monitor print permissions to prevent unauthorized printing.",
                icon: p2Img4,
            },
            {
                title: "Email Notification & Task Management",
                subtitle:
                    "Send email notifications for important events or tasks to facilitate timely communication and task assignment.",
                icon: p2Img8,
            },
            {
                title: "Smart Search Based on Tags & Keywords",
                subtitle:
                    "Retrieve documents quickly based on assigned tags and keywords using intelligent search algorithms.",
                icon: p2Img10,
            },
        ],
    },
    {
        heading: "Cargo Loading",
        Image: Cargo,
        slider:[c1,c2,c3,c4,c5,c6],
          techStack:[js,Python,AWS_S3,AWS_EC2,Sqlite,HTML,CSS],
        subtitle:
            "Transform your cargo logistics with Cargo Loading – the innovative solution for truck and container loading optimization. By intelligently considering  factors like destination order, stackability, and axle weight, it ensures every inch of space is utilized effectively. With visual insights, comprehensive reporting, and flexible loading options, Cargo Loading achieves precision and efficiency in truck loading unlike any other. Embrace smoother operations and increased savings with Cargo Loading!",
        highlights: [
            {
                title: "Immersive 3D Visualization",
                subtitle:
                    "Offers a realistic 3D render of trucks/containers packed with boxes, allowing operators to visually assess and interact with the loading process.",
            },
            {
                title: "Efficient Cargo Management",
                subtitle:
                    "Seamlessly loads boxes into trucks considering parameters like last-in-first-out, stackability, and axle weight, ensuring streamlined operations.",
            },
            {
                title: "Critical Insights Dashboard",
                subtitle:
                    "Provides key insights such as centre of gravity, weight balance, and axle loads of the truck/container, empowering users with essential information for optimized loading.",
            },
            {
                title: "Comprehensive Reporting Suite",
                subtitle:
                    "Generates multiple reports tailored to the needs of loading operators and drivers, facilitating informed decision-making and operational efficiency.",
            },
            {
                title: "Cost & Time Savings",
                subtitle:
                    "Reduce shipping costs and delivery time with a completely optimized solution for loading boxes/pallets into trucks/containers.",
            },
        ],
        features: [
            {
                title: "3D Visualization",
                subtitle:
                    "Provide a 3D render of trucks/containers packed with boxes, allowing operators to visually see and operate the loading process.",
                icon: p3Img1,
            },
            {
                title: "Data Upload",
                subtitle:
                    "Effortlessly upload cargo data from Excel files, minimizing manual data entry errors and streamlining the input process.",
                icon: p3Img4,
            },
            {
                title: "Destination Sequences",
                subtitle:
                    "Specify destination sequences to optimize loading order for efficient unloading at each stop along the route.",
                icon: p3Img5,
            },
            {
                title: "Truck Selection",
                subtitle:
                    "Choose from multiple trucks based on capacity and axle weight restrictions, ensuring optimal truck utilization.",
                icon: p3Img10,
            },
            {
                title: "Flexible Loading Options",
                subtitle:
                    "Load boxes sequentially or all at once, catering to different loading preferences and operational requirements.",
                icon: p3Img7,
            },
            {
                title: "Detailed Reports",
                subtitle:
                    "Generate detailed reports showcasing key loading metrics, empowering users with valuable insights into the loading process.",
                icon: p3Img6,
            },
            {
                title: "Real-Time Monitoring",
                subtitle:
                    "Monitor truck weight in real-time during the loading process, ensuring compliance with legal weight limits and load distribution.",
                icon: p3Img9,
            },
            {
                title: "Axle Load Calculation",
                subtitle:
                    "Automatically calculate axle loads resulting from box placement, assisting users in complying with axle weight regulations.",
                icon: p3Img3,
            },
            {
                title: "Additional Box Provision",
                subtitle:
                    "Add extra boxes based on available volume, maximizing space utilization and enhancing loading efficiency.",
                icon: p3Img2,
            },
            {
                title: "Intuitive Interface",
                subtitle:
                    "Offer intuitive drag-and-drop functionality for adding additional boxes, making it easy to adjust the loading configuration in real-time.",
                icon: p3Img8,
            },
        ],
    },
];

const Products = () => {

  const searchParams = useSearchParams();
  let [params, setParams] = useState("");
  const [pageData, setPageData] = useState(productsData[0]);

  useEffect(() => {
    const url = searchParams.toString();
    setParams(url.replace("=", ""));
  }, [searchParams]);

  useEffect(() => {
    // Find the service in servicesData based on params
    if (params) {
      setPageData(productsData[params]);
    } else {
      // Handle case where service is not found
      setPageData(productsData[0]); // You can set it to an empty object or handle it differently
    }
  }, [params]);

  return (
    <div>
      <ProductsHero
        title={pageData.heading}
        subtitle={pageData.subtitle}
        img={pageData.Image}
      />
      <div className="p-12 lg:p-24 product-highlights bg-[#E8F3FF]">
        <h2 className="highlights">Highlights</h2>
        <ul className="list-disc p-2">
          {pageData.highlights.map((item, i) => {
            return (
              <li className="highlights-text" key={i}>
                <div className="font-bold">{item.title}:</div>
                <div>{item.subtitle}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 py-12 lg:p-24">
        <div className="p-8 flex flex-col gap-10 items-center justify-center rounded-lg border border-black">
          <h1 className="features-heading pb-[36px]">Features</h1>
          <div className="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32">
            {pageData.features.map((item, i) => {
              return (
                <div key={i}>
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="w-[50px] h-[50px] mb-[20px]"
                  />
                  <h2 className="features-title">{item.title}</h2>
                  <p className="features-subtitle">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-[80px] bg-[#FFDD74]">
        <FullSlider data={pageData?.slider}/>
      </section>


      <h4 className="tech-stack text-center text-2xl lg:text-3xl py-[80px]">
        Tech Stack
      </h4>
      { pageData.heading==="Cargo Loading" &&

        <MovingLogos color="#225D53" logos={techstack2} />
       
      }
      { pageData.heading!=="Cargo Loading" &&
        <MovingLogos color="#225D53" logos={techstack1} />
      }
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Products />
    </Suspense>
  );
};

export default Page;
