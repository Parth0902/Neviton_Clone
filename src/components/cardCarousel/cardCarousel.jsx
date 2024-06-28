import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import "../SliderWithBtn/slider.css";
import AboutCard from "@/components/about/AboutCard";
import CaseStudyCard from "@/components/CaseStudyCard";

export function CardCarousel({ slideData, isProductSlider, isServicesSlider }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="p-4"
    >
      <CarouselContent>
        {slideData.map((slide, index) => (
          <CarouselItem key={index} className={isProductSlider ? `md:basis-1/2 2xl:basis-1/3` : `md:basis-1/2 lg:basis-1/3  `}>
            {
              isProductSlider ? <CarouselCard slide={slide} key={index} /> :
                isServicesSlider ?
                  <CaseStudyCard key={index} imageUrl={slide.heroImg} heading={slide.Name} subheading={""} link={"/services"} index={index} /> :
                  <CaseStudyCard key={index} imageUrl={slide.img} heading={slide.heading} subheading={slide.subheading} link={"/showcase"} index={index} />
            }
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const CarouselCard = ({ slide }) => {
  return (
    <div className="p-1 w-full flex flex-col gap-4">
      <h4 className="card_header">{slide.heading}</h4>
      <Link href={{ pathname: "/products", query: slide.query }}>
        <Image src={slide.img} className="h-[367px]" alt="Img" />
      </Link>
      <div className="card_bottom gap-4">
        <p>{slide.text}</p>
        <Link href={{ pathname: "/products", query: slide.query }}>
          <button className="p-2">
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
};
