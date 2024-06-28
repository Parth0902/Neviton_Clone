"use client";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, MoveLeft } from "lucide-react";
import "./industries.css";
import "@/components/home/section1/section1.css";
import cardImg1 from "@/assets/home/CardImg1.jpeg";
import cardImg2 from "@/assets/home/CardImg2.jpeg";
import cardImg3 from "@/assets/home/CardImg3.jpeg";
import cardImg4 from "@/assets/home/CardImg4.jpeg";
import cardImg5 from "@/assets/home/CardImg5.jpeg";
import cardImg6 from "@/assets/home/CardImg6.jpeg";
import cardHero1 from "@/assets/industries/aeroSpace.jpg";
import cardHero2 from "@/assets/industries/education.jpg";
import cardHero3 from "@/assets/industries/LifeSciences.jpg";
import cardHero4 from "@/assets/industries/Manufacturing.jpg";
import cardHero5 from "@/assets/industries/Media&Entertainment.jpg";
import cardHero6 from "@/assets/industries/RenewableEnergy.jpg";

const csData = [
  {
    id: 0,
    img: cardImg5,
    heading: "Aerospace",
    heroImg: cardHero1,
    introduction:
      "With a wealth of experience working alongside aerospace component manufacturing companies, including industry leaders across Europe, the USA, the Middle East, and Asia, we deliver unparalleled Engineering and IT services that set new industry standards and drive innovation.",
    text: [
      {
        heading: "Engineering Services",
        content: [
          "Provided comprehensive support for over 5000 plate parts, 5000 extrusion parts, and 2500 sheet metal parts.",
          "Offered on-site FAI & Prove out support at customer locations in Europe, ensuring adherence to stringent quality standards.",
          "Built and validated over 1000 3D models for legacy programs.",
          "Delivered 300+ Clamping Device designs and collected process applicability data for 9000+ parts.",
          "Participated in critical industrialization projects for Boeing, Airbus, Bombardier, and Embraer through their Tiered partners.",
        ],
      },
      {
        heading: "IT Services",
        content: [
          "Developed a cloud-native IoT-based Real-time Statistical Process Control (SPC) system for proactive quality control.",
          "Implemented a cloud-based suite aligned with AS9100 & 9145 standards, covering corrective actions, Lessons Learned, FMEA, and integrated task management.",
          "Optimized manufacturing processes using Robotic Process Automation (RPA) with 60%-90% efficiency gains.",
          "Created a Part Lifecycle Management tool for engineering and a Procure to Pay Portal for logistics, ensuring streamlined operations.",
          "Developed AI/ML-powered automated visual inspection systems and predictive analytics for early detection of process failures and accurate machining time estimation.",
          "Provided ongoing support for ERP systems to ensure seamless operations and continuous improvement.",
        ],
      },
    ],
    end: "Together, our Engineering and IT services empower aerospace companies to achieve new heights of efficiency, quality, and innovation, navigating the ever-evolving industry landscape with confidence and excellence.",
  },
  {
    id: 1,
    img: cardImg4,
    heading: "Education",
    heroImg: cardHero2,
    introduction:
      "In collaboration with a prominent Early Childhood Education and family engagement services organization in North America, we spearhead transformative initiatives that set new industry standards and enhance educational experiences.",
    text: [
      {
        heading: "Key Achievements",
        content: [
          "Built a crucial Participant Information Report (PIR) feature ensuring compliance with US government standards for early childhood education [HeadStart].",
          "Created an efficient online portal for HeadStart family enrollment, minimizing manual intervention and enhancing user experience (UX).",
          "Deployed a resilient SQL Server Data Warehouse and adopted TIBCO Jaspersoft, achieving an 85-95% reduction in report processing time.",
          "Generated over 500 dashboards and reports in near real-time, providing stakeholders with invaluable insights.",
          "Implemented a comprehensive data integration and analytics platform, seamlessly interfacing with diverse third-party systems to capture key metrics for child, teacher, and family engagement assessments.",
        ],
      },
    ],
    end: "Our innovative solutions drive positive change and empower stakeholders within the early childhood education landscape, ensuring excellence and continuous improvement in educational services.",
  },
  {
    id: 2,
    img: cardImg3,
    heading: "Life Science",
    heroImg: cardHero3,
    introduction:
      "Partnering with a renowned Global Capability Centre in India, we deliver groundbreaking solutions that elevate efficiency and compliance within the Life Science industry. Our innovative initiatives address critical challenges and drive organizational excellence",
    text: [
      {
        heading: "Key Achievements",
        content: [
          "Developed Triage Automation, a cloud-based Machine Learning system for pharmacovigilance adverse event evaluation, leading to a remarkable 30%-40% increase in overall workforce efficiency.",
          "Designed and implemented a cutting-edge CFR-21 Part 11 compliant Document Lifecycle Management System, featuring seamless document creation, adaptable workflows, digital signatures, advanced search functionalities, and efficient archiving with paramount data security.",
          "Spearheaded the implementation of a comprehensive life science product platform for efficient management and tracking of market value, product parameters, timelines, and stakeholders.",
          "Introduced Procure to Pay (P2P), a unified procurement platform with robust reporting and analytics capabilities, enhancing communication, collaboration, and automation between companies and suppliers.",
        ],
      },
    ],
    end: "Our solutions deliver tangible impact, enabling our clients to navigate the complexities of the Life Science industry with confidence and efficiency, driving progress and innovation across the sector.",
  },
  {
    id: 3,
    img: cardImg1,
    heading: "Manufacturing",
    heroImg: cardHero4,
    introduction:
      "In partnership with a leading Aerospace component manufacturing company with a global presence spanning Europe, the USA, and Asia, we lead innovative initiatives that elevate efficiency and foster cutting-edge advancements in the Manufacturing industry. Our solutions are tailored to meet the exacting standards of the aerospace sector, ensuring exceptional quality and compliance.",
    text: [
      {
        heading: "Key Achievements",
        content: [
          "Built a cloud-native IoT-based Real-time Statistical Process Control (SPC) system with proactive alerting mechanisms for maintaining optimal quality standards.",
          "Developed a cloud-based suite aligned with AS9100 & 9145 standards, covering corrective actions, 8-Disciplines, Lessons Learned, FMEA, LPA, and integrated task management following the Global Quality Process (GQP).",
          "Leveraged Robotic Process Automation (RPA) to achieve efficiency gains of 60% to 90% in processes like quote processing, ERP data entry, FAI submissions, and shipping.",
          "Optimized workflows and enhanced efficiency with digital solutions such as a Part Lifecycle Management tool for engineering and a P2P Portal for logistics.",
          "Introduced AI/ML-powered automated visual inspection systems and predictive analytics for minimizing downtime and maximizing productivity.",
          "Successfully installed, implemented, customized, integrated, and provided ongoing support for the ERP system (EPICOR).",
        ],
      },
    ],
    end: "Our commitment to pioneering innovative solutions in the Manufacturing industry ensures our clients achieve unmatched operational excellence and maintain a competitive edge in a rapidly evolving market.",
  },
  {
    id: 4,
    img: cardImg6,
    heading: "Media & Entertainment",
    heroImg: cardHero5,
    introduction:
      "In collaboration with a renowned Fortune 50 children's entertainment company from California, we are revolutionizing the Media and Entertainment industry with game-changing solutions that enhance efficiency, streamline processes, and drive growth",
    text: [
      {
        heading: "Key Achievements",
        content: [
          "Developed comprehensive data pipelines for cleansing, conversion, and unification.",
          "Utilized cutting-edge technologies for seamless reporting through Tableau and SSRS.",
          "Implemented an archiving automation process managing over 2.5 million frozen records quarterly.",
          "Improved system performance and resolved storage challenges.",
          "Integrated a major music merger, transitioning legacy systems within six months.",
          "Generated error-free import-ready CSV files for smooth transition and operational continuity.",
          "Enhanced legacy systems for improved process tracking, stability, scalability, and data accuracy.",
          "Addressed disk space constraints and complex data integrations, optimizing operational efficiency.",
        ],
      },
    ],
    end: "Through these transformative initiatives, we lead innovation in the Media and Entertainment industry, delivering tangible value and empowering our clients to thrive in a dynamic and ever-evolving industry.",
  },
  {
    id: 5,
    img: cardImg2,
    heading: "Renewable Energy",
    heroImg: cardHero6,
    introduction:
      "At the forefront of innovation, we collaborate with a pioneering Renewable Energy Management company in North America to drive significant advancements in efficiency and functionality within the renewable energy industry.",
    text: [
      {
        heading: "Key Achievements",
        content: [
          "Leveraged cutting-edge technology to enhance efficiency and productivity.",
          "Streamlined operations by enabling seamless data uploads from over 100 edge systems to AWS cloud.",
          "Improved disaster recovery capabilities and reduced coding efforts by over 30% using AWS APIs.",
          "Developed a cross-platform mobile app for real-time tracking and task coordination for site engineers.",
          "Optimized workflow management and on-site efficiency.",
          "Enhanced system functionality for solar farms, including device specs, configuration, energy meter readings, inverter details, and sun positioning.",
          "Provided intuitive visual dashboards for easy data analysis.",
          "Implemented an enhanced feature release procedure with comprehensive technical documentation.",
          "Supported smooth operational transitions and bolstered sales and marketing efforts.",
        ],
      },
    ],
  },
];

export const Showcase = () => {
  const searchParams = useSearchParams();
  let [params, setParams] = useState("");
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const url = searchParams.toString();
    setParams(url.replace("=", ""));
  }, [searchParams]);

  useEffect(() => {
    if (params) {
      setPageData(csData[params]);
    } else {
      setPageData(null);
    }
  }, [params]);

  return (
    <div>
      <section className="xl:h-[100vh]" id="industryHero">
        <Image
          src={pageData?.heroImg}
          alt="Image"
          className=" h-full w-full object-cover relative"
        />
        <div className="absolute top-10 px-[30px] md:px-[60px] pt-[64px]">
          <h4 className="text-[#F3F4F8A6] font-semibold text-[28px] lg:text-[42px] pt-[112px] xl:pt-[184px] 2xl:text-[64px]">
            INDUSTRIES
          </h4>
          <h1 className="text-[#F3F4F8] font-bold text-[32px] lg:text-[108px] 2xl:text-[138px]">
            {pageData?.heading}
          </h1>
          <Link
            className="w-[140px] h-[44px] md:w-[240px] md:h-[60px] flex justify-center items-center bg-[#FFDD74] rounded text-black md:text-[30px] font-semibold mt-7 md:mt-10 lg:mt-14 xl:mt-20 2xl:mt-24 hover:bg-[#FFDD74] hover:text-black transition duration-300 ease-in-out"
            href={"/contact"}
          >
            Get In Touch!
          </Link>
        </div>
      </section>

      <section>
        <h4 className="p-[62px] text-[36px] font-semibold">
          About {pageData?.heading}
        </h4>
        <div className="flex gap-[72px] flex-wrap xl:flex-nowrap">
          <div className="flex flex-col items-center bg-[#1645EC] gap-[32px] px-14 xl:px-0 xl:pl-[80px] pb-[32px] w-full">
            <Image
              src={pageData?.img}
              alt=""
              className="w-[466px] h-[267px] relative bottom-5 lg:left-5 rounded-3xl"
            />
            <p className="xl:w-[450px] text-[20px] text-center font-medium text-white">
              {pageData?.introduction}
            </p>
          </div>

          <div className="flex flex-col gap-[32px] px-14 xl:px-0 xl:pr-[40px] pb-[80px] text-justify">
            <p className="text-[18px] font-normal">{pageData?.introduction}</p>
            <ServiceTextList id={pageData?.id} />
            <p className="text-[18px] font-normal">{pageData?.end}</p>
          </div>
        </div>
      </section>
      <section className="flex">
        <Link
          href={{
            pathname: "/industries",
            query: pageData?.id === 0 ? "5" : (pageData?.id - 1).toString(),
          }}
          className="flex-1 relative"
        >
          <Image
            src={
              pageData?.id === 0
                ? csData[5]?.heroImg
                : csData[pageData?.id - 1]?.heroImg
            }
            alt=""
            className="h-[200px] md:h-[363px] w-full object-cover"
          />
          <h4 className="absolute inset-0 flex justify-center items-center text-white lg:text-[38px] xl:text-[46px] font-medium gap-4 md:gap-10">
            <MoveLeft size={48} />
            {pageData?.id === 0
              ? csData[5]?.heading
              : csData[pageData?.id - 1]?.heading}
          </h4>
        </Link>

        <Link
          href={{
            pathname: "/industries",
            query: pageData?.id === 5 ? "0" : (pageData?.id + 1).toString(),
          }}
          className="flex-1 relative"
        >
          <Image
            src={
              pageData?.id === 5
                ? csData[0]?.heroImg
                : csData[pageData?.id + 1]?.heroImg
            }
            alt=""
            className="h-[200px] md:h-[363px] w-full object-cover"
          />
          <h4 className="absolute inset-0 flex justify-center items-center text-white lg:text-[38px] xl:text-[46px] font-medium gap-4 md:gap-10">
            {pageData?.id === 5
              ? csData[0]?.heading
              : csData[pageData?.id + 1]?.heading}
            <MoveRight size={48} />
          </h4>
        </Link>
      </section>
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

const ServiceTextList = ({ id }) => {
  switch (id) {
    case 0:
      return <AeroSpaceText />;
    case 1:
      return <EducationText />;
    case 2:
      return <LifeScienceText />;
    case 3:
      return <ManufacturingText />;
    case 4:
      return <MediaAndEntertainmentText />;
    case 5:
      return <RenewableEnergyText />;
    default:
      return <AeroSpaceText />;
  }
};

const AeroSpaceText = () => {
  return (
    <div>
      <p className="industry-text-heading">Engineering Services</p>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Provided comprehensive support for
          <strong>
            over 5000 plate parts, 5000 extrusion parts, and 2500 sheet metal
            parts.
          </strong>
        </li>
        <li>
          Offered <strong>on-site</strong> FAI & Prove out support at customer
          locations in Europe, ensuring adherence to stringent quality
          standards.
        </li>
        <li>
          Built and validated over <strong>1000 3D models</strong> for legacy
          programs.
        </li>
        <li>
          Delivered <strong>300+ Clamping Device designs</strong> and collected
          process applicability data for 9000+ parts.
        </li>
        <li>
          Participated in critical industrialization projects for{" "}
          <strong>Boeing, Airbus, Bombardier,</strong> and Embraer through their
          Tiered partners.
        </li>
      </ul>
      <p className="industry-text-heading">Engineering Services</p>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Developed a cloud-native IoT-based Real-time{" "}
          <strong>Statistical Process Control (SPC)</strong> system for
          proactive quality control.
        </li>
        <li>
          Implemented a cloud-based suite aligned with{" "}
          <strong>AS9100 & 9145 standards,</strong> covering corrective actions,
          Lessons Learned, FMEA, and integrated task management.
        </li>
        <li>
          Optimized manufacturing processes using{" "}
          <strong>Robotic Process Automation (RPA)</strong> with 60%-90%
          efficiency gains.
        </li>
        <li>
          Created a Part Lifecycle Management tool for engineering and a{" "}
          <strong>Procure to Pay</strong> Portal for logistics, ensuring
          streamlined operations.
        </li>
        <li>
          Developed <strong>AI/ML-powered</strong> automated visual inspection
          systems and predictive analytics for early detection of process
          failures and accurate machining time estimation.
        </li>
      </ul>
    </div>
  );
};

const EducationText = () => {
  return (
    <div>
      <h2>Key Achievements</h2>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Built a crucial <strong>Participant Information Report (PIR)</strong>{" "}
          feature ensuring compliance with US government standards for{" "}
          <strong>early childhood education</strong> [HeadStart].
        </li>
        <li>
          Created an efficient online portal for HeadStart family enrollment,
          minimizing manual intervention and enhancing{" "}
          <strong>user experience (UX).</strong>
        </li>
        <li>
          Deployed a resilient <strong>SQL Server Data Warehouse</strong> and
          adopted <strong>TIBCO Jaspersoft,</strong> achieving an 85-95%
          reduction in report processing time.
        </li>
        <li>
          Generated over <strong>500 dashboards</strong> and reports in near
          real-time, providing stakeholders with invaluable insights.
        </li>
        <li>
          Implemented a comprehensive data integration and analytics platform,
          seamlessly interfacing with diverse third-party systems to capture key
          metrics for child, teacher, and family engagement assessments.
        </li>
      </ul>
    </div>
  );
};

const LifeScienceText = () => {
  return (
    <div>
      <h2>Key Achievements</h2>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Developed <strong>Triage Automation,</strong> a{" "}
          <strong>cloud-based Machine Learning system</strong> for
          pharmacovigilance adverse event evaluation, leading to a remarkable
          30%-40% increase in overall workforce efficiency.
        </li>
        <li>
          Designed and implemented a cutting-edge{" "}
          <strong>
            CFR-21 Part 11 compliant Document Lifecycle Management System,
          </strong>{" "}
          featuring seamless document creation, adaptable workflows, digital
          signatures, advanced search functionalities, and efficient archiving
          with paramount data security.
        </li>
        <li>
          Spearheaded the implementation of a comprehensive life science product
          platform for efficient management and tracking of market value,
          product parameters, timelines, and stakeholders.
        </li>
        <li>
          Introduced Procure to Pay (P2P), a unified procurement platform with
          robust reporting and analytics capabilities, enhancing communication,
          collaboration, and automation between companies and suppliers.
        </li>
      </ul>
    </div>
  );
};

const ManufacturingText = () => {
  return (
    <div>
      <h2>Key Achievements</h2>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Built{" "}
          <strong>
            a cloud-native IoT-based Real-time Statistical Process Control (SPC)
          </strong>{" "}
          system with proactive alerting mechanisms for maintaining optimal
          quality standards.
        </li>
        <li>
          Developed a cloud-based suite aligned with{" "}
          <strong>AS9100 & 9145 standards,</strong> covering corrective actions,
          8-Disciplines, Lessons Learned, FMEA, LPA, and integrated task
          management following the{" "}
          <strong>Global Quality Process (GQP).</strong>{" "}
        </li>
        <li>
          Leveraged <strong>Robotic Process Automation (RPA)</strong> to achieve
          <strong> efficiency gains of 60% to 90%</strong> in processes like
          quote processing, ERP data entry, FAI submissions, and shipping.
        </li>
        <li>
          Optimized workflows and enhanced efficiency with digital solutions
          such as a Part Lifecycle Management tool for engineering and a P2P
          Portal for logistics.
        </li>
        <li>
          Introduced <strong>AI/ML-powered</strong> automated visual inspection
          systems and predictive analytics for minimizing downtime and
          maximizing productivity.
        </li>
        <li>
          Successfully installed, implemented, customized, integrated, and
          provided ongoing support for the <strong>ERP system (EPICOR).</strong>
        </li>
      </ul>
    </div>
  );
};

const MediaAndEntertainmentText = () => {
  return (
    <div>
      <h2>Key Achievements</h2>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Developed comprehensive data pipelines for cleansing, conversion, and
          unification.
        </li>
        <li>
          Utilized cutting-edge technologies for seamless reporting through
          <strong>Tableau</strong> and <strong>SSRS.</strong>
        </li>
        <li>
          Implemented an archiving automation process{" "}
          <strong>managing over 2.5 million frozen records </strong> quarterly.
        </li>
        <li>Improved system performance and resolved storage challenges.</li>
        <li>
          Integrated a major music merger, transitioning legacy systems{" "}
          <strong>within six months.</strong>
        </li>
        <li>
          Generated error-free import-ready CSV files for smooth transition and
          operational continuity.
        </li>
        <li>
          Enhanced legacy systems for improved process tracking, stability,
          scalability, and data accuracy.
        </li>
        <li>
          Addressed disk space constraints and complex data integrations,
          optimizing operational efficiency.
        </li>
      </ul>
    </div>
  );
};

const RenewableEnergyText = () => {
  return (
    <div>
      <h2>Key Achievements</h2>
      <ul className="industry-text-ul list-disc pl-5">
        <li>
          Leveraged cutting-edge technology to enhance efficiency and
          productivity.
        </li>
        <li>
          Streamlined operations by enabling seamless data uploads from over{" "}
          <strong>100 edge systems to AWS cloud.</strong>
        </li>
        <li>
          Improved disaster recovery capabilities and{" "}
          <strong>reduced coding efforts by over 30% using AWS APIs.</strong>{" "}
        </li>
        <li>
          Developed a <strong>cross-platform mobile app</strong> for real-time
          tracking and task coordination for site engineers.
        </li>
        <li>Optimized workflow management and on-site efficiency.</li>
        <li>
          Enhanced system functionality for solar farms, including device specs,
          configuration, energy meter readings, inverter details, and sun
          positioning.
        </li>
        <li>
          Provided <strong>intuitive visual dashboards</strong> for easy data
          analysis.
        </li>
        <li>
          Implemented an enhanced feature release procedure with comprehensive
          technical documentation.
        </li>
        <li>
          Supported smooth operational transitions and bolstered sales and
          marketing efforts.
        </li>
      </ul>
    </div>
  );
};
