import OldSection1 from "@/components/home/section1/oldSection1";
import Section2 from "@/components/home/section2/section2";
import Section3 from "@/components/home/section3/section3";
import Section4 from "@/components/home/section4/section4";
import Section5 from "@/components/home/section5/section5";
import Section7 from "@/components/home/section7/Section7";

export default function Home() {
  return (
    <main>
      <OldSection1 />
      {/*
            <Section1 />
            */}
      <div className="part2">
        <h4 className="word1">
          Our <span className="word2">Capabilities.</span>
        </h4>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
    </main>
  );
}
