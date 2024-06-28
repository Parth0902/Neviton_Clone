import ContentWrapper from "@/components/contentWrappper/contentWrapper";
import { MovingLogos } from "@/components/aceternity/MovingLogos";
import "./section2.css";

// tools & technnologies
import linux from "@/assets/logos/linux.png";
import java from "@/assets/logos/java.png";
import catia from "@/assets/logos/Catia.png";
import restapi from "@/assets/logos/rest_api1.png";
import talend from "@/assets/logos/Talend.png";
import threeDvia from "@/assets/logos/3dvia.png";
import powerBi from "@/assets/logos/power-bi.png";
import aws from "@/assets/logos/aws1.png";
import awsIot from "@/assets/logos/aws-iot.png";
import awsDevops from "@/assets/logos/aws-devops.png";
import elkstack from "@/assets/logos/elkstack1.png";
import epicor from "@/assets/logos/epicor.png";
import mastercam from "@/assets/logos/mastercam.png";
import opc from "@/assets/logos/opc-ua.png";
import pythonLogo from "@/assets/logos/python.png";
import reactLogo from "@/assets/logos/react.png";
import solidworks from "@/assets/logos/solidworks.png";
import tibco from "@/assets/logos/tibco1.png";
import uiPath from "@/assets/logos/ui-path1.png";
import vericut from "@/assets/logos/vericut.png";
import microsoftAzure from "@/assets/logos/Microsoft_Azure.png";
import microsoftSqlServer from "@/assets/logos/microsoft-sql-server1.png";
import nodejsLogo from "@/assets/logos/nodejs1.png";
import office365Logo from "@/assets/logos/office-365.png";

// servies
import cadHero from "@/assets/services/Design.jpg";
import camHero from "@/assets/services/CAM.jpg";
import cloudHero from "@/assets/services/DigitalCloud.jpg";
import dataHero from "@/assets/services/DataAnalytics.jpg";
import erpHero from "@/assets/services/ERPandIt.jpg";
import methodsHero from "@/assets/services/MethodEngineering.jpg";
import toolingHero from "@/assets/services/Tooling.jpg";
import automationHero from "@/assets/services/AutomationAndIntegration.jpg";

const section2 = () => {
  const logos = [catia, threeDvia, mastercam, vericut, solidworks, epicor];

  const ITLogos = [
    aws,
    microsoftAzure,
    awsIot,
    awsDevops,
    uiPath,
    elkstack,
    opc,
    tibco,
    linux,
    java,
    talend,
    restapi,
    powerBi,
    reactLogo,
    pythonLogo,
    microsoftSqlServer,
    nodejsLogo,
    office365Logo,
  ];

  const Pagedata = [
    {
      heading: "Engineering ",
      subheading:
        "Explore our comprehensive suite of engineering services, meticulously crafted to propel your projects forward with precision and efficiency.",
      services: [
        {
          heading: "CAD",
          img: cadHero,
          link: "/services",
          query: "5",
          text: [
            " 3D Model Building/2D Drawings for Manufacturing",
            "Engineering Documentation such as Balloon Drawings",
            "Aero Interiors – Cabinet Design and Completion control drawing (CCD) & Interface control drawing (ICD)",
            " 2D Wiring drawings, 3D Wire Harness Installation drawings",
            "EWIS Standard Part Modelling",
          ],
        },
        {
          heading: "CAM",
          img: camHero,
          link: "/services",
          query: "6",
          text: [
            "Support  for 3 & 5 Axis NC programming for Sheet metal, Plate Parts and  Extrusion parts",
            "Cycle Time Optimization – key deliverable",
            "Shop Floor Support for FAI and Production.",
          ],
        },
        {
          heading: "Methods",
          img: methodsHero,
          link: "/services",
          query: "7",
          text: [
            "Preparing BOM, PFC, Master Process Sheet, and Assembly Operational Technical Data Sheet for Boeing and Airbus projects",
            "Feasibility study of aircraft components to optimize cost of manufacturing",
            "Management of various disciplines within SCM such as transition to production products, low-rate production",
          ],
        },
        {
          heading: "Tooling",
          img: toolingHero,
          link: "/services",
          query: "8",
          text: [
            "NC Fixture Design and Development",
            "Joggle/ Forming tools design as per OEM standards (BOEING / AIRBUS)",
            "Composite Tooling",
            "Assembly & Drilling Jigs",
            "Ground Handling Equipment's",
            "Cost Benefits: Proposing materials saving techniques",
          ],
        },
      ],
    },
    {
      heading: "Information Technology ",
      subheading:
        "Empower your business with Neviton's comprehensive IT services, spanning from digital transformation and cloud solutions to automation, data analytics, ERP implementation, and IT infrastructure support.",

      services: [
        {
          heading: "Digital & Cloud",
          img: cloudHero,

          link: "/services",
          query: "3",
          text: [
            "Digital Transformation",
            "Cloud Application Development",
            "Application Modernization",
            "Cloud Setup and Migration Services (AWS & Azure)",
          ],
        },
        {
          heading: "Data & Analytics",
          img: dataHero,
          link: "/services",
          query: "2",
          text: [
            "ETL and Data warehousing",
            "Analytics Dashboard and Reporting",
            "AI and ML - Image Processing, Predictive analytics, Deep Learning and Machine Learning models",
          ],
        },
        {
          heading: "Automation & Integration",
          img: automationHero,
          link: "/services",
          query: "1",
          text: [
            "API development with REST/JSON, Web API in C#, and SOAP/XML.",
            "IoT and integration through API Gateway, OPC UA protocol, AWS IoT Core, and REST.",
            "RPA for automating manual, repetitive, rule-based business processes.",
            "OCR/ICR technology for reading and processing handwritten and low-dpi files.",
          ],
        },
        {
          heading: "ERP & IT Infrastructure",
          img: erpHero,
          link: "/services",
          query: "4",
          text: [
            "EPICOR implementation, customization, integration and support",
            "Remote Infrastructure support, Networking",
            "Security Services",
            "Enterprise applications – O365",
            "DevOps & Cloud Security",
          ],
        },
      ],
    },
  ];
  return (
    <section id="section2">
      <div className="upperHalf flex flex-col lg:flex-row justify-between w-full">
        <div className="flex-1 bg-[#C0D8E8]">
          <div className="box1 ">
            <ContentWrapper data={Pagedata[0]} textAlign={"alignLeft"} />
          </div>
        </div>
        <div className="flex-1 bg-[#1C92DC]">
          <div className="box2">
            <ContentWrapper
              data={Pagedata[1]}
              textAlign={"alignRight"}
              isRight={true}
            />
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col lg:flex-row items-center justify-center gap-20 overflow-hidden">
        <div className="lg:w-[50%]">
          <h4 className="lowerhalf--text text-2xl lg:text-3xl">
            Engineering Tools
          </h4>
          <MovingLogos
            className=""
            speed="normal"
            color="#225D53"
            logos={logos}
          />
        </div>

        <div className="lg:w-[50%]">
          <h4 className="lowerhalf--text text-2xl lg:text-3xl">IT Tools</h4>
          <MovingLogos
            className=""
            color="#225D53"
            speed="slow"
            direction="right"
            logos={ITLogos}
          />
        </div>
      </div>
    </section>
  );
};

export default section2;
