import { ChevronRight } from "lucide-react";
import "./section1.css";
import Link from "next/link";

function OldSection1() {
    const videoPath = "/assets/home/nevitonHero.mp4";
    return (
        <section>
            <div className="h-[300px] lg:h-full flex flex-col items-center justify-center gap-10 bg-hero" id="Home_Hero">
                <div>
                    <h1 className="header2"> <span className="text-[#1C92DC]">Aligning</span> with our </h1>
                    <h1 className="header2">Customer <span className="text-[#1C92DC]">priorities</span></h1>
                </div>
                <div className="bottom_box">
                    <h4 className="subheader">{"Vision to outcome "}</h4>
                    <span className="btn">
                        <ChevronRight />
                    </span>
                </div>
            </div>
        </section>
    );
}

export default OldSection1;
