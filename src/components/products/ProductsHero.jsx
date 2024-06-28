import ellipse from "@/assets/ellipse.png";
import Image from "next/image";

export const ProductsHero = ({ title, subtitle,img }) => {
  return (
    <div className="products-hero lg:h-[690px] flex flex-col justify-between">
      <div className="py-10 px-4 md:px-8 lg:px-40 gap-4 flex flex-col items-center justify-center ">
        <div className="products-heading">
          Our <span>Products.</span>
        </div>
        <h1 className="products-title">{title}</h1>
        <p className="products-subtitle">{subtitle}</p>
      </div>
      <div className="xl:block hidden parent overflow-y-hidden">
        <Image
          className="image2 h-[400px] overflow-hidden w-full"
          src={ellipse}
          alt="ellipse"
        />
        <Image className="image1" src={img} alt="machine" />
      </div>
    </div>
  );
};
