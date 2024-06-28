import React from "react";
import "./aws.css";
import Image from "next/image";
import cer1 from "@/assets/aws/certificate1.png";
import cer2 from "@/assets/aws/certificate2.png";
import cer3 from "@/assets/aws/certificate3.png";
import heroImg from "@/assets/aws/heroImg.png";
import Slider from "@/components/Aws/awsSlider/Slider";
import Slides from "@/components/Aws/devopsSlides/Slides";
import img1 from "@/assets/aws/devopsSlide1.png";
import img2 from "@/assets/aws/expertiesSlider.png";
import awsHero from "@/assets/aws/awsHero.jpg";
import Link from "next/link";

const page = () => {
  const DevopsSlideData = [
    {
      heading: "Resource Provisioning",
      img: img1,
      text: [
        "We follow infrastructure as a code practice using AWS CloudFormation for provisioning commonly used AWS Services such as RDS, CloudFront, S3, Lambda etc​",
        "We are also proficient in setting up network infrastructure such as VPC, Subnets, Route tables, Site-to-Site VPN connections etc.​",
        "Setting up AWS Landing Zone for Client with AWS Co.",
      ],
    },
    {
      heading: "Alert Mechanisms​",
      img: img1,
      text: [
        "CloudWatch alarm to notify DevOps team for any security threats.​​",
        "Alert mechanism that notifies the project team for code deployments and set up CI/CD CloudWatch dashboard.​​",
        "Setup an alert mechanism for any security breaches in network infrastructure such as VPN tunnels, Security groups etc.​​​,",
      ],
    },
    {
      heading: "Security",
      img: img1,
      text: [
        "Run automated security checks across your AWS environment using AWS security hub which helps us to manage security posture.",
        "Security Governance using AWS control tower, Organization service control policies, Tagging policies etc",
        "RPA- Automate Highly Manual, repetitive, Rule Based Business",
      ],
    },
    {
      heading: "(CI/CD) Automation​",
      img: img1,
      text: [
        "Creating code pipeline and Code build for continuous integration and continuous development",
        "We can also customize CI/CD build lines for applications with complex scenarios​​.",
      ],
    },
    {
      heading: "Migration​",
      img: img1,
      text: [
        "Migration of In-house data centers to AWS Cloud​.",
        "Migration of any other cloud infrastructure to AWS Cloud​.​",
        "Migration of AWS Landing Zone to AWS Control Tower​.",
      ],
    },
    {
      heading: "Cost Optimization",
      img: img1,
      text: [
        "Visibility on unused AWS services using AWS trusted advisor​.​​",
        "AWS budgets project wise, which notifies DevOps team whenever the actual cost crosses the budgeted amount.​",
        "Project wise cost analysis using AWS Tagging​​.",
      ],
    },
  ];

  const expertiesSlideData = [
    {
      heading: "Cloud Application / Product Development Services:",
      img: img2,
      text: [
        "Expertise in writing business logics in micro services using NodeJS / Python/ Java / .NET Core language to deploy it as FaaS and SaaS (using Lambda function)",
        "Successfully deployed Products and Applications in Serverless Architecture (microservices based) by using FaaS and SaaS model since 2018",
      ],
    },
    {
      heading: "Internet Of Things (IOT) Services",
      img: img2,
      text: [
        "It enabled solution to read censor data using OPC UA and send through MQTT protocol to AWS IOT service, for Automatic data collection for PLCs by publishing the data with specified IOT core topic format.",
      ],
    },
    {
      heading: "AWS Streaming Services:",
      img: img2,
      text: [
        "Collecting the data from PLCs using IOT or CDC and passing to Kinesis stream to Firehose with AWS Glue schema to be stored in Parquet format file inside S3 bucket to be able to read using Athena query.",
      ],
    },
    {
      heading: "AWS DevOps Services:",
      img: img2,
      text: [
        "Implemented CI/CD using CodeCommit as code repository for Applications and initiated auto build with deployment using Code Pipeline and Code Build services to deploy the code in Lambda or EC2 or S3 bucket",
      ],
    },
    {
      heading: "AWS Management and Governance Services:",
      img: img2,
      text: [
        "It enabled solution to read censor data using OPC UA and send through MQTT protocol to AWS IOT service, for Automatic data collection for PLCs by publishing the data with specified IOT core topic format.",
      ],
    },
    {
      heading: "Application Logging & Security:",
      img: img2,
      text: [
        "AWS CloudWatch is used to store the logs from all AWS resources used in Projects including from Lambda & EC2 too. The logs data used to get represented in Insight Dashboard getting used by DevOps for Services health monitoring and alert mechanism for any threshold.",
        "Implementation done for AWS Security Hub for security best practice checks, aggregates alerts, and enables automated remediation to align with SOC standards as per client requirement.",
      ],
    },
    {
      heading: "AWS Textract in RPA Solution:",
      img: img2,
      text: [
        "AWS Textract is used to extract the data from PDF image files and incorporated within UiPath as RPA solution to read data from various PDF image files from shared drives and write the required fields into output Excel file",
      ],
    },
  ];
  return (
    <div>
      <section className="flex flex-col gap-10 py-12 items-center">
        <h4 className="text-[32px] text-[#1e1e1e] font-medium">
          {"Neviton's"} <span className="font-bold">Sherlock</span>{" "}
          {"Approach on AWS"}
        </h4>
        <p className="text-[#1e1e1e] text-[20px]">
          {
            '"When all else fails, people turn to me as the final authority" -By Sherlock Holmes'
          }
        </p>
        <Image src={awsHero} alt="" />
      </section>

      <section id="aws-hero">
        <div id="aws_hero_p1">
          <h4>
            Embark on a Tech-fueled journey into the Cloud with our cutting-edge{" "}
            <span style={{ color: "#1645EC" }}>AWS solutions!</span>
          </h4>
          <p>
            Elevate your business with unparalleled scalability, reliability,
            and innovation. From seamless data storage to advanced machine
            learning, our AWS-powered offerings unlock a realm of possibilities
            for your future-forward business.
          </p>
          <h5>Certifications</h5>
          <div className="hero_row">
            <Image src={cer1} alt="" />
            <Image src={cer2} alt="" />
            <Image src={cer3} alt="" />
          </div>
        </div>

        <div id="aws_hero_p2">
          <div className="hero_section_img_bg">
            <Image src={heroImg} alt="" className="aws_hero_img" />
          </div>
        </div>
      </section>

      <section id="devops_slider" className="slider">
        <h4>
          <span className="light_heading">Our</span> DevOps – Capabilities.
        </h4>
        <p>Streamlining Success: Unleashing Dynamic DevOps Capabilities</p>
        <Slider Componenet={Slides} data={DevopsSlideData} />
      </section>

      <section id="Experties_slider" className="slider">
        <h4>
          <span className="light_heading">Our</span> Expertise in AWS..
        </h4>
        <p>Driving Efficiency with Advanced AWS Capabilities</p>
        <Slider Componenet={Slides} data={expertiesSlideData} />
      </section>

      <section id="customer">
        <h4>
          <span>Customer</span> Speaks.
        </h4>

        <div className="customer_text_box">
          <h6>US Tier 1 University</h6>
          <p>
            “Neviton helped us to migrate from Landing Zone to Control tower by
            seamless project execution and demonstrated good problem-solving
            skills on the challenges faced, by working collaboratively with AWS
            support team. We have been working with Neviton for more than a year
            now on AWS services and able to utilize their expertise efficiently”
          </p>
          <button>
            <Link href="case-study">View Success Story</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
