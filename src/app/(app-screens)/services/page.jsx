"use client";
import "./page.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";

import cad1 from "@/assets/services/cad1.jpg";
import cad2 from "@/assets/services/cad2.jpg";
import cad3 from "@/assets/services/cad3.jpg";
import cad4 from "@/assets/services/cad4.jpg";

import cam1 from "@/assets/services/cam1.jpg";
import cam2 from "@/assets/services/cam2.jpg";
import cam3 from "@/assets/services/cam3.jpg";
import cam4 from "@/assets/services/cam4.jpg";

import methods1 from "@/assets/services/methods1.jpg";
import methods2 from "@/assets/services/methods2.jpg";
import methods3 from "@/assets/services/methods3.jpg";
import methods4 from "@/assets/services/methods4.jpg";

import tooling1 from "@/assets/services/tooling1.jpg";
import tooling2 from "@/assets/services/tooling2.jpg";
import tooling3 from "@/assets/services/tooling3.jpg";
import tooling4 from "@/assets/services/Tooling4.jpg";
import tooling5 from "@/assets/services/tooling5.png";
import tooling6 from "@/assets/services/tooling6.webp";

import automation1 from "@/assets/services/automation1.jpg";
import automation2 from "@/assets/services/automation2.jpg";
import automation3 from "@/assets/services/automation3.jpg";
import automation4 from "@/assets/services/automation4.jpg";

import data1 from "@/assets/services/data1.jpg";
import data2 from "@/assets/services/data2.jpg";
import data3 from "@/assets/services/data3.jpg";
import data4 from "@/assets/services/data4.jpg";

import cloud1 from "@/assets/services/cloud1.jpg";
import cloud2 from "@/assets/services/cloud2.jpg";
import cloud3 from "@/assets/services/cloud3.jpg";
import cloud4 from "@/assets/services/cloud4.jpg";

import erp1 from "@/assets/services/erp1.jpg";
import erp2 from "@/assets/services/erp2.jpg";
import erp3 from "@/assets/services/erp3.jpg";

import cadHero from "@/assets/services/Design.jpg";
import camHero from "@/assets/services/CAM.jpg";
import cloudHero from "@/assets/services/DigitalCloud.jpg";
import dataHero from "@/assets/services/DataAnalytics.jpg";
import erpHero from "@/assets/services/ERPandIt.jpg";
import methodsHero from "@/assets/services/MethodEngineering.jpg";
import toolingHero from "@/assets/services/Tooling.jpg";
import automationHero from "@/assets/services/AutomationAndIntegration.jpg";
import { CardCarousel } from "@/components/cardCarousel/cardCarousel";

const servicesData = [
  {
    Name: "Automation & Integration",
    heroImg: automationHero,
    section1: {
      header1:
        "Discover our seamless expert Automation and Integration services.",
      header2: "Designed to connect and streamline your business operations.",
      text: "Our talent in API creation with REST/JSON, Web API in C#, along with IoT integration through API Gateway, OPC UA, and AWS IoT Core, guarantees seamless data flow. We boost your productivity by automating routine tasks using Robotic Process Automation (RPA). Our use of OCR/ICR technology accurately extracts and analyzes data from handwritten and low-resolution documents.",
    },
    section2: [
      {
        img: automation1,
        heading: "PLC Data Extraction using OPC UA and AWS IoT",
        text: "Our team possesses extensive expertise in extracting PLC data through OPC UA and seamlessly transmitting it to the AWS cloud using IoT. We specialize in projecting this data into meaningful dashboards and reports, providing valuable insights into your operations.",
      },
      {
        img: automation2,
        heading: "RPA Solutions with UiPath ",
        text: "Leveraging UiPath, we've developed numerous bots tailored for the manufacturing industry. These bots play a critical role in enhancing efficiency by up to 70%, automating the feeding of data into ERP systems and streamlining workflows.",
      },
      {
        img: automation3,
        heading: "Hyper Automation with UiPath & Machine Learning",
        text: "Experience the future of automation with our innovative RPA solutions. We've combined UiPath with Machine Learning models to create hyper-automation solutions capable of reading images from lower DPI PDF files. This data is then processed further using AWS TextractML service to extract valuable information, facilitating seamless integration into your workflows.",
      },
      {
        img: automation4,
        heading: "Data Integration with REST/SOAP/Web API:",
        text: "Our team excels in building robust REST, SOAP, and Web APIs to facilitate seamless data exchange with third-party applications. Whether it's reading or writing data, our expertise ensures smooth communication across various platforms. Additionally, all our web applications developed within the Serverless Architecture on the AWS cloud leverage REST API communications between services, ensuring optimal performance and scalability.",
      },
    ],
  },
  {
    Name: "Data Analytics",
    heroImg: dataHero,
    section1: {
      header1: "Discover the transformative impact of our",
      header2: "Data and Analytics services.",
      text: "We specialize in harnessing the full potential of your data to propel informed decision-making and spur innovation. Our offerings encompass comprehensive ETL workflows, streamlined Data Warehousing, and the implementation of state-of-the-art Deep Learning techniques for Visual Inspection. With our deep expertise, we craft compelling Data Visualizations that translate complex information into actionable insights.",
    },
    section2: [
      {
        heading: "ETL & Data Warehouse",
        text: "With expertise in setting up Data Warehouses using Change Data Capture methods, we seamlessly extract and transform data using tools like SQL Server SSIS and Talend, ensuring efficient database management.",
        img: data1,
      },
      {
        heading: "Data Visualization",
        text: ": Drive informed decisions with our successful implementation of data visualization in Reports and Dashboards using tools such as JasperSoft, Grafana/Kibana, and Zoho Analytics. Our proficiency extends to implementing ELK Stack for real-time data visualization from diverse sources.",
        img: data2,
      },
      {
        heading: "Visual Inspection using Deep Learning",
        text: "Experience precision in Visual Inspection through our implementation of the Cognex Deep Learning system. Leveraging Image Processing techniques, we ensure accurate part inspection by comparing master part data.",
        img: data3,
      },
      {
        heading: "Data Analytics with Machine Learning:",
        text: "Harness predictive analytics through our implementation of Machine Learning algorithms like Random Forest to forecast future data points. Currently, we're advancing towards Machine Learning + Deep Learning integration using KNN algorithms to optimize part machining time efficiently.",
        img: data4,
      },
    ],
  },
  {
    Name: "Digital & Cloud",
    heroImg: cloudHero,
    section1: {
      header1: "Transform your business with ease using our comprehensive ",
      header2: "Digital and Cloud services",
      text: "From igniting your digital transformation journey to developing cutting-edge cloud applications, modernizing existing systems, and seamlessly transitioning to the cloud with our expert AWS & Azure migration services, we are your trusted partner in navigating the complexities of the digital landscape. Empower your business for success in today's dynamic environment with our tailored solutions designed to elevate your operations to new heights.",
    },
    section2: [
      {
        heading: "Function as a Service (FaaS) Expertise",
        text: "Harnessing the power of microservices, we specialize in crafting efficient business logic using NodeJS, Python, or .NET Core languages, seamlessly deployed as FaaS solutions.",
        img: cloud1,
      },
      {
        heading: "Responsive UI/UX Design Excellence",
        text: ": Elevate user experiences across all devices with our expertise in developing responsive UI screens. Utilizing ReactJS and Material UI components, we ensure swift loading times, aiming to deliver within 3 seconds for optimal engagement.",
        img: cloud2,
      },
      {
        heading: "Serverless Architecture",
        text: "Embrace the future of computing with our proficiency in serverless architecture. Since 2018, we've successfully deployed a multitude of applications using the FaaS model. Currently, we're innovating towards supporting Software as a Service (SaaS) products within this framework.",
        img: cloud3,
      },
      {
        heading: "AWS Cloud",
        text: "Maximize the potential of AWS Cloud with our extensive knowledge. From setup to optimization, we cover a wide range of services including Cognito, S3, Lambda, EC2, RDS, and SES, ensuring seamless integration to support FaaS deployments within the serverless architecture paradigm.",
        img: cloud4,
      },
    ],
  },
  {
    Name: "ERP & IT Infrastructure",
    heroImg: erpHero,
    section1: {
      header1: "Visual Inspection using Deep Learning",
      header2: "ERP and IT Infrastructure solutions",
      text: "We excel in EPICOR services—from implementation to support—customized for your business. Our offerings include remote support, networking, and security to protect your IT setup. Plus, with our DevOps and Cloud Security expertise, we ensure smooth, secure cloud operations.",
    },
    section2: [
      {
        heading: "EPICOR Services",
        text: "Our seasoned team of professionals specializes in EPICOR, offering a full spectrum of services including implementation, customization, integration, and version upgrades of EPICOR ERP. With years of experience, we ensure seamless deployment and optimization of your EPICOR system to meet your unique business requirements.",
        img: erp1,
      },
      {
        heading: "IT Infrastructure Support",
        text: "Rely on our expertise for round-the-clock IT infrastructure support, covering AWS/Azure Cloud environments as well as in-house infrastructure with Windows and Linux servers, VM systems, and Office 365 services implementation. Our team excels in tenant migration, ensuring smooth transitions and uninterrupted operations.",
        img: erp2,
      },
      {
        heading: "DevOps & Cloud Migration",
        text: "Since 2018, we've been at the forefront of DevOps implementation with Continuous Integration & Deployment models in the cloud, alongside Cloud Security service implementation aligned with CIS standards. Trust us for smooth migration of in-house infrastructure to the cloud, catering to large-scale applications across Development, Test, and Production environments.",
        img: erp3,
      },
    ],
  },
  {
    Name: "CAD",
    heroImg: cadHero,
    section1: {
      header1: "3D Model Building/2D Drawings for Manufacturing:",
      header2: "Our Top-Tier CAD Services.",
      text: "Our team of skilled professionals excels in crafting intricate 3D models and precise 2D drawings tailored to meet your manufacturing needs. We understand the critical role these elements play in the production process, ensuring accuracy and efficiency in every step.",
    },
    section2: [
      {
        heading: "Engineering Documentation - Balloon Drawings:",
        text: "From Balloon Drawings to comprehensive documentation packages, we provide thorough engineering documentation to streamline your project processes. Our documentation services ensure clarity and precision, facilitating seamless communication across teams and stakeholders. Benefit from our legacy program support as we integrate our expertise into your documentation needs, ensuring continuity and reliability in your engineering projects.",
        img: cad1,
      },
      {
        heading: "Aero Interiors – Cabinet Design and CCD/ICD:",
        text: "Elevate your aerospace interiors with our expertise in Cabinet Design and Completion Control Drawing (CCD) & Interface Control Drawing (ICD). With a track record of supporting legacy programs, we understand the unique challenges of aerospace engineering. Our solutions prioritize functionality, aesthetics, and compliance, ensuring seamless integration with existing systems.",
        img: cad2,
      },
      {
        heading: "2D Wiring Drawings, 3D Wire Harness Installation Drawings:",
        text: "Explore the range of our CAD services for precise wiring solutions. We create detailed 2D wiring drawings and immersive 3D wire harness installation drawings to optimize your electrical systems for efficiency and reliability. Leveraging our experience in legacy program support, we ensure that your wiring solutions align with existing infrastructure seamlessly.",
        img: cad3,
      },
      {
        heading: "EWIS Standard Part Modelling:",
        text: "Our proficiency extends to EWIS (Electrical Wiring Interconnection Systems) Standard Part Modelling, ensuring compliance with industry standards and regulations. With over 1000+ validated 3D models for legacy programs, we bring a deep understanding of system integration and compatibility. Trust us to model electrical components that seamlessly integrate into your systems, maintaining continuity and reliability.",
        img: cad4,
      },
    ],
  },
  {
    Name: "CAM",
    heroImg: camHero,
    section1: {
      header1: "Unlocking Excellence: ",
      header2: "Your Top Choice for Precision CAM Programming Services",
      text: "When it comes to precision engineering and CNC programming, your search for excellence ends here. At Neviton, we take pride in being the best in the business, offering unparalleled support for 3 & 5 Axis NC programming for Sheet Metal, Plate Parts, and Extrusion Parts.",
    },
    section2: [
      {
        heading: "3 to 5 Axis NC Programming:",
        text: "Leverage our expertise in 3 and 5 Axis Numerical Control (NC) programming to optimize machining processes for sheet metal, plate parts, and extrusion parts. Our advanced CAM software ensures precise toolpath generation and efficient material removal strategies, enhancing productivity and quality.",
        img: cam1,
      },
      {
        heading: "Cycle Time Optimization – Our Key Deliverable",
        text: "Maximize efficiency and reduce costs with our cycle time optimization solutions. We analyse machining processes to identify opportunities for improvement, fine-tuning toolpath strategies and machining parameters to minimize cycle times while maintaining quality standards.",
        img: cam2,
      },
      {
        heading: "Shop floor support for FAI and production",
        text: "Rely on our dedicated shop floor support at your location for first article inspection (fai) and production processes. our team works closely with your manufacturing team to ensure seamless integration of cam programs into your production environment, providing on-site assistance and troubleshooting as needed.",
        img: cam3,
      },
      {
        heading: "Machining Material Expertise & Machines Supported:",
        text: "Benefit from our extensive machining expertise across diverse materials such as aluminium, 	steel, titanium, nickel-based alloys, composites, hardwood, foam, phenolic materials, and more. 	Our proficiency ensures precision and efficiency, meeting your manufacturing needs regardless 	of material complexities. Our CAM services are compatible with industry-leading machine 	platforms including Makino, DMG, HAAS, Handtman, Chiron, Mazak, Nakamura, Gantry 	Machines, and more. Whether you need high-speed milling, multi-axis machining, or specialized 	CNC capabilities, we have the expertise and resources to support your machine requirements 	effectively. ",
        img: cam4,
      },
    ],
  },
  {
    Name: "Methods Engineering",
    heroImg: methodsHero,
    section1: {
      header1: "Elevate Your Aerospace Endeavors with :",
      header2: " Our Exceptional Methods Engineering Services",
      text: "In the dynamic realm of aerospace engineering, precision, efficiency, and reliability are paramount. At Neviton, we take pride in being the epitome of excellence in the business English and Methods Engineering domain. Our comprehensive suite of services is designed to propel your projects to new heights, particularly in the context of Boeing and Airbus ventures.",
    },
    section2: [
      {
        heading: "Preparation of Technical Documentation:",
        text: "We specialize in preparing essential technical documentation such as Bill of Materials (BOM), Production Flow Charts (PFC), Master Process Sheets, and Assembly Operational Technical Data Sheets. Our expertise extends to projects involving Boeing and Airbus aircraft, ensuring compliance with industry standards and specifications.",
        img: methods1,
      },
      {
        heading: "Feasibility Studies for Aircraft Components:",
        text: "Our team conducts thorough feasibility studies of aircraft components to optimize manufacturing costs without compromising quality or performance. By analysing design specifications, material requirements, and production processes, we identify opportunities for cost reduction and process optimization, contributing to overall project success.",
        img: methods2,
      },
      {
        heading: "Supply Chain Management (SCM):",
        text: "We offer comprehensive SCM services, managing various disciplines including transition to production products and low-rate production. From procurement and inventory management to logistics and supplier relations, we ensure seamless coordination across the supply chain to meet project timelines and objectives efficiently.",
        img: methods3,
      },
      {
        heading: "Key Benefits of Our Methods Engineering Services:",
        text: "Benefit from our comprehensive approach aimed at cost optimization, enhancing efficiency, and ensuring compliance for aerospace projects. Our methods engineering strategy prioritizes cost reduction without compromising quality, while streamlining operations to boost productivity and minimize waste. We uphold stringent quality standards and regulatory requirements, ensuring compliance and certification across all processes and documentation, guaranteeing project success and customer satisfaction.",
        img: methods4,
      },
    ],
  },
  {
    Name: "Tooling",
    heroImg: toolingHero,
    section1: {
      header1: "Elevate Your Manufacturing with : ",
      header2: "Top-Tier NC Fixture Design and Development",
      text: "Welcome to Neviton, where precision meets innovation in the world of tooling solutions. As a leader in the industry, we take pride in offering unparalleled services, particularly excelling in NC Fixture Design and Development. Our commitment to excellence and adherence to OEM standards, including those set by industry giants like BOEING and AIRBUS, sets us apart as the best in the business.",
    },
    section2: [
      {
        heading: "NC Fixture Design and Development:",
        text: "Our expert team specializes in NC fixture design and development, leveraging advanced CAD/CAM technologies to create fixtures that ensure precise alignment and stability during machining processes. Whether for milling, turning, or other machining operations, our fixtures are engineered to enhance productivity and accuracy.",
        img: tooling1,
      },
      {
        heading: "Joggle/Forming Tools Design:",
        text: "We design joggle and forming tools to OEM standards, adhering to the specifications of industry leaders such as Boeing and Airbus. Our tools are meticulously crafted to meet the demanding requirements of aircraft manufacturing, ensuring reliable performance and consistent results.",
        img: tooling2,
      },
      {
        heading: "Composite Tooling:",
        text: "With expertise in composite materials and manufacturing processes, we offer composite tooling solutions tailored to your project needs. From Molds and mandrels to layup tools and trim fixtures, our composite tooling services support the production of lightweight and durable composite components for aerospace applications.",
        img: tooling3,
      },
      {
        heading: "Assembly & Drilling Jigs:",
        text: "Our assembly and drilling jigs are engineered to facilitate the precise alignment and assembly of aircraft components. Whether for fuselage sections, wings, or other structures, our jigs ensure accurate positioning and drilling, streamlining assembly processes and improving overall quality.",
        img: tooling4,
      },
      {
        heading: "Ground Handling Equipment:",
        text: "We design and develop ground handling equipment to support aircraft maintenance, repair, and servicing operations. From lifting fixtures to access platforms and tool carts, our ground handling equipment solutions enhance safety, efficiency, and ergonomics in aircraft maintenance environments.",
        img: tooling5,
      },
      {
        heading: "Proposing Material Saving Techniques:",
        text: "Our tooling experts are committed to optimizing designs and processes to achieve cost savings for our clients. We propose material-saving techniques and innovative solutions to minimize waste and reduce production costs without compromising quality or performance.",
        img: tooling6,
      },
    ],
  },
];

export const Services = () => {
  const searchParams = useSearchParams();
  let [params, setParams] = useState("");
  const [pageData, setPageData] = useState(servicesData[0]);

  useEffect(() => {
    const url = searchParams.toString();
    setParams(url.replace("=", ""));
  }, [searchParams]);

  useEffect(() => {
    // Find the service in servicesData based on params
    if (params) {
      setPageData(servicesData[params]);
    } else {
      // Handle case where service is not found
      setPageData(servicesData[0]); // You can set it to an empty object or handle it differently
    }
  }, [params]);

  return (
    <div className="services">
      <section>
        <div className="bg-hero text-white">
          <div className="flex flex-col gap-20 justify-between lg:flex-row h-full py-24 px-8 lg:px-16 2xl:px-32">
            <div className="lg:w-[45%] flex flex-col items-start gap-10">
              <p>
                {"Our Capabilities   >>"}
                {pageData?.Name}
              </p>
              <div>
                <h1 className="section-heading1_part1">
                  {pageData?.section1?.header1}
                </h1>
                <h1 className="section-heading1">
                  {pageData?.section1?.header2}
                </h1>
              </div>
              <p>{pageData?.section1.text}</p>
              <Link href={"/contact"}>
                <button className="p-4 rounded-xl bg-[#DEFF80] hover:bg-[#ffffff] btn-text">
                  Get in Touch!
                </button>
              </Link>
            </div>
            <div className="flex">
              <div className="container">
                <Image
                  src={pageData.heroImg}
                  alt="Image Hero"
                  className="img4 image"
                />
                <div className="hero-rectangle img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="services_heading py-10 xl:py-24">
          Exploring Our <span> {pageData.Name} Expertise.</span>
        </h1>
      </section>

      <section className="w-full lg:px-20 lg:py-12 flex flex-col gap-20">
        {/* 1 */}
        {pageData.section2.map((item, i) => {
          return (
            <div
              key={i}
              className={`${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col flex w-[100%]  justify-between`}
            >
              <div className="container pb-16">
                <Image src={item.img} alt="Image img1" className="img4 image" />
                <div className="rectangle img"></div>
              </div>

              <div className="services_text flex flex-col gap-10">
                <h2>{item.heading}</h2>
                <p>{item.text} </p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="flex flex-wrap py-32">
        <div className="w-full p-6 bg-[#FFDD74]">
          <div className="success_subheading pb-10">
            Other <span className="success_subheading_bold">Services</span>
          </div>
          <CardCarousel
            slideData={servicesData}
            isProductSlider={false}
            isServicesSlider={true}
          />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Services />
    </Suspense>
  );
};

export default Page;
