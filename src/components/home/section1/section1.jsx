import { ChevronRight } from "lucide-react";
import "./section1.css";
import Link from "next/link";

function section1() {
  const videoPath = "/assets/home/nevitonHero.mp4";
  return (
    <section id="hero" className="flex flex-col justify-end gap-4">
      <div className="h-full flex justify-center items-center content flex-col gap-7">
        <h1 className="header1">Aligning with our Customer priorities </h1>

        <Link href={"/about"}>
          <div className="bottom_box">
            <h4 className="subheader">{"Vision to outcome "}</h4>
            <span className="btn">
              <ChevronRight />
            </span>
          </div>
        </Link>
      </div>
      <div className="background-video">
        <video autoPlay muted loop id="bg-video">
          <source src="/nevitonHero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default section1;
